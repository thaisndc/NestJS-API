import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [JwtModule.register({
        secret: `ipROUt{PzOdf=bjYq;tA)brz=lqNLNqK` 
    })]
})
export class AuthModule {
    
}