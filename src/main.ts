import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { initalizeTracing } from './otel';

async function bootstrap() {
  // Start SDK before nestjs factory create
  initalizeTracing();

  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
}
void bootstrap().then(() => console.log('Server running on port 8080'));
