import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({ // O decorador @Module() é um decorador de classe que define um módulo.
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
