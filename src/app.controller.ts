import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // O decorador @Controller() é um decorador de classe que define o controlador raiz da aplicação.
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
