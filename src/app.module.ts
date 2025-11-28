import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MongooseConfigService } from './mongoose.config';
import { CorrectionModule } from './correction/correction.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    CorrectionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
