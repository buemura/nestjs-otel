import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  getUsers(): string[] {
    return ['Alice', 'Bob', 'Charlie'];
  }
}
