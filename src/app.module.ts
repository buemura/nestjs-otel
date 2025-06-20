import { Module } from '@nestjs/common';

import { ApiController } from './api/api.controller';
import { UserModule } from './core/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [ApiController],
})
export class AppModule {}
