import { PartialType } from '@nestjs/swagger';
import { CreateCorrectionDto } from './create-correction.dto';

export class UpdateCorrectionDto extends PartialType(CreateCorrectionDto) {}
