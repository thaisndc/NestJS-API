import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { CreateUserDTO } from './dto/create-user.dto';
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdatePutUserDTO } from './dto/update-put-user.dto';


@Injectable()
export class UserService {
    updatePartial(id: number, data: UpdatePatchUserDTO) {
        throw new Error('Method not implemented.');
    }

    constructor(private readonly prisma: PrismaService) {}

    async create(data: CreateUserDTO) {

        return this.prisma.user.create ({
            data,
        });
    }

    async list() {
        return this.prisma.user.findMany();
    }

    async show(id: number) {

                
        return this.prisma.user.findUnique({
            where: {
                id,
            }
        });
    }

    async update(id: number, {email, name, password, birthAt}: UpdatePutUserDTO) {

        await this.exists(id);

            return this.prisma.user.update({
                data: {email, name, password, birthAt: birthAt ? new Date(birthAt) : null},
                where: {
                    id,
                }
            });
    }

    async UpdatePartial(id: number, {email, name, password, birthAt}: UpdatePatchUserDTO) {

        await this.exists(id);

        const data: any = {};

        if(birthAt) {
            data.birthAt = new Date(birthAt);
        }

        if (email) {
            data.email = email;
        }

        if (name) {
            data.name = name;

        }

        if (password) {
            data.password = password;
        }

        return this.prisma.user.update({
            data,
            where: {
                id,
            }     
        });

    }

    async delete(id: number) {

       await this.exists(id);

        return this.prisma.user.delete({
            where: {
                id,
            }
        });
    }

    async exists (id: number) {
        if (!(await this.prisma.user.count({
            where: {
                id,
            }
        }))) {
            throw new NotFoundException(`O usuário com o id ${id} não foi encontrado`);
        }
    }
}