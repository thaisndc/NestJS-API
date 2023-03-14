import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AppService {

    constructor(private readonly  jwtService: JwtService) {}

    async createToken() {
       //return this.jwtService.sign();
    }

    async checkToken(token: string) {
        //return this.jwtService.verify();
    }
}