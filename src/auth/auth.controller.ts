import { AuthMeDTO } from './dto/auth-me.dto';
import { UserService } from './../user/user.service';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthForgetDTO } from './dto/auth-forget.dto';
import { AuthLoginDTO } from './dto/auth-login.dto';
import { AuthRegisterDTO } from './dto/auth-register.dto';
import { AuthResetDTO } from './dto/auth-reset.dto';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController{

    constructor(
        private readonly userService: UserService,
        private readonly AuthService: AuthService
        ) {}


    @Post('login')
    async login(@Body() {email, password}: AuthLoginDTO){
        return this.AuthService.login(email, password);
    }

    @Post('register')
    async register(@Body() body: AuthRegisterDTO){
        return this.AuthService.register(body);
    }

    @Post('forget')
    async forget(@Body() {email}: AuthForgetDTO){
        return this.AuthService.forget(email);
    }

    @Post('reset')
    async reset(@Body() {password, token}: AuthResetDTO){
        return this.AuthService.reset(password, token);
    }

    @Post('me') // esperar o token
    async me(@Body() Body: AuthMeDTO) {
        return this.AuthService.checkToken(Body.token);
    }

}