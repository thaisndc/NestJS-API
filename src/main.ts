//Tudo começa aqui. 
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Cria uma instância do NestApplication

  app.useGlobalPipes(new ValidationPipe()); // Adiciona um pipe global para validação de dados

  await app.listen(3000); // Inicia o servidor na porta 3000
}
// bootstrap() é uma função assíncrona, que retorna uma Promise.
bootstrap();
