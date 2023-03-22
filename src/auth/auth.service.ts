import { BadRequestException, Injectable } from "@nestjs/common";
import { UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { UserService } from "src/user/user.service";
import { AuthRegisterDTO } from "./dto/auth-register.dto";

//Fluxo de autenticação. 
@Injectable()
export class AuthService {

    private issuer = 'login';
    private audience = 'users';

    constructor(private readonly jwtService: JwtService,
        private readonly prisma: PrismaService,
        private readonly userService: UserService
    ) { }

    async createToken(user: User) {
        return {
            accessToken: this.jwtService.sign({
                id: user.id,
                name: user.name,
                email: user.email
            }, {
                expiresIn: "7 days",
                subject: String(user.id),
                issuer: this.issuer,
                audience: this.audience,
            })
        }
    }

    async checkToken(token: string) {
        try {
            const data = this.jwtService.verify(token, {
                issuer: this.issuer,
                audience: this.audience,
            });
            return data;

        } catch (e) {
            throw new BadRequestException(e);
        }
    }

    async isValidToken(token: string) {
        try {
            this.checkToken(token);
            return true;
        } catch (e) {
            return false;
        }
    }

    async login(email: string, password: string) {

        const user = await this.prisma.user.findFirst({
            where: {
                email,
                password
            }
        });

        if (!user) {
            throw new UnauthorizedException('E-mail e/ou senha incorretos.');
        }
        return this.createToken(user);
    }

    async forget(email: string) {

        const user = await this.prisma.user.findFirst({
            where: {
                email
            }
        });

        if (!user) {
            throw new UnauthorizedException('E-mail está incorreto.');
        }
        //TO DO: enviar e-mail com token para resetar a senha.
        return true
    }

    async reset(password: string, token: string) {
        //TO DO: validar token

        const id = 0; // TO DO: pegar id do usuário pelo token

        const user = await this.prisma.user.update({
            where: {
                id,
            },
            data: {
                password
            },
        });

        return this.createToken(user);
    }

    async register(data: AuthRegisterDTO) {

        const user = await this.userService.create(data);

        return this.createToken(user);
    }
}