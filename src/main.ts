import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import { TodoModule } from './todo/todo.module';

async function bootstrap() {
  const app = await NestFactory.create(TodoModule);
  await app.listen(4000);
}
bootstrap();
