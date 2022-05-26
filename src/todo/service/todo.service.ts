import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Todo } from '@prisma/client';

@Injectable()
export class TodoService {
    constructor(private prismaService : PrismaService){}

    // 전체 조회
    async fetchAllTodos(): Promise<Todo[]> {
        return this.prismaService.todo.findMany();
    }

    // 단일 조회
    async fetchTodoItem(id: number): Promise<Todo | null> {
        return this.prismaService
                .todo.findUnique({ where: { id: Number(id) } });
    }


    // 삭제
    async deleteTodoItem(id: number): Promise<Todo | null> {
        return this.prismaService
                .todo.delete({ where: { id: Number(id) } });
    }

    // 아이템 수정
    async updateTodoItem(
        id: number,
        title: string,
        content: string,
        is_done: boolean
        ): Promise<Todo | null> {
        return this.prismaService
                .todo.update({
                    where: { id: Number(id) },
                    data: {
                        title: title,
                        content: content,
                        is_done: is_done
                    }
            });
    }

    // 추가
    async addTodoItem(data: Todo): Promise<Todo> {
        return this.prismaService
                .todo.create({ data: data});
    }
}
