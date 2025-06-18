import { NestFactory } from '@nestjs/core';

import { initalizeTracing } from './tracing';
import { AppModule } from './app.module';

async function bootstrap() {
  // Start SDK before nestjs factory create
  initalizeTracing();

  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
}
void bootstrap().then(() => console.log('Server running on port 8080'));
