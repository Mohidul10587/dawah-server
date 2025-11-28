import { Module } from '@nestjs/common';
import { CorrectionService } from './correction.service';
import { CorrectionController } from './correction.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Correction, CorrectionSchema } from './correction.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Correction.name, schema: CorrectionSchema },
    ]),
  ],
  controllers: [CorrectionController],
  providers: [CorrectionService],
})
export class CorrectionModule {}
