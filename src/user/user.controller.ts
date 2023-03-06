import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { UpdateUserDTO } from './dto/update-put-user.dto';
import { CreateUserDTO } from './dto/create-user.dto';
import { Controller, Post, Body, Get, Param, Put, Patch, Delete, ParseIntPipe  } from "@nestjs/common";


@Controller('users')
export class UserController {
    
    @Post()
    async create(@Body() body: CreateUserDTO) {
        return {body};
    }

    @Get()
    async read() {
        return {users: []}
    }

    @Get()
    async readOne(@Param('id', ParseIntPipe) id: number) {
        return {user: {}, id}
    }

    @Put(':id')
    async update(@Body() email, name, password: UpdateUserDTO, @Param('id', ParseIntPipe) id: number) {
        return {
            method: 'PUT',
            email, name, password,
            id
        }
    }

    @Patch(':id')
    async updatePartial(@Body() {email, name, password}: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id: number) {
        return {
            method: 'PATCH',
            email, name, password,
            id
        }
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return{
            id
        }
    }
}