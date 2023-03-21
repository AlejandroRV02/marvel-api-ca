import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const options = new DocumentBuilder()
    .setTitle('MTC')
    .setDescription('MTC')
    .setVersion('1.0')
    .setContact(
      'Alejandro Rodriguez',
      'https://www.linkedin.com/in/alejandro/',
      'alejandrorv944@gmail.com',
    )
    //.addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);
  await app.listen(3000);
}
bootstrap();
