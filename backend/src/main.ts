import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [`http://localhost:${process.env.VITE_PORT_HOST}`],
    credentials: true,
  });

  await app.listen(process.env.BACKEND_PORT ?? 3000);
}
bootstrap();
