//Tudo começa aqui. 
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Cria uma instância do NestApplication
  await app.listen(3000); // Inicia o servidor na porta 3000
}
// bootstrap() é uma função assíncrona, que retorna uma Promise.
bootstrap();
