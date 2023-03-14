import { ParamId } from './../decorators/param-id.decorator';
import { LogInterceptor } from './../interceptors/log.interceptor';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { CreateUserDTO } from './dto/create-user.dto';
import { Controller, Post, Body, Get, Put, Patch, Delete, UseInterceptors  } from "@nestjs/common";
import { UserService } from './user.service';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';

@UseInterceptors(LogInterceptor)
@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) {}
    
    @Post()
    async create(@Body() data: CreateUserDTO) {
        return this.userService.create(data);
    }

    @Get()
    async list() {
        return this.userService.list();
    }

    @Get(':id')
    async show(@ParamId() id: number) {
        return this.userService.show(id);
    }

    @Put(':id')
    async update(@Body() data: UpdatePutUserDTO, @ParamId()  id: number) {
        return this.userService.update(id, data);
    }

    @Patch(':id')
    async updatePartial(@Body() data: UpdatePatchUserDTO, @ParamId()  id: number) {
        return this.userService.updatePartial(id, data);
    }

    @Delete(':id')
    async delete(@ParamId() id: number) {
        return this.userService.delete(id);
    }
}