import { AuthService } from './auth.service';
import { PrismaModule } from './../prisma/prisma.module';
import { UserModule } from './../user/user.module';
import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        JwtModule.register({
        secret: `ipROUt{PzOdf=bjYq;tA)brz=lqN56LNqK` 
    }),
    UserModule,
    PrismaModule,
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}