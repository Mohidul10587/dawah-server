import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CorrectionService } from './correction.service';
import { CreateCorrectionDto } from './dto/create-correction.dto';
import { UpdateCorrectionDto } from './dto/update-correction.dto';

@Controller('correction')
export class CorrectionController {
  constructor(private readonly correctionService: CorrectionService) {}

  @Post('create')
  create(@Body() createCorrectionDto: CreateCorrectionDto) {
    return this.correctionService.create(createCorrectionDto);
  }

  @Get('findAll')
  findAll() {
    return this.correctionService.findAll();
  }

  @Get('findAllByPostType/:postType')
  findAllByPostType(@Param('postType') postType: string) {
    return this.correctionService.findAllByPostType(postType);
  }

  @Get('singleForEditPage/:id')
  findOne(@Param('id') id: string) {
    return this.correctionService.findOne(id);
  }

  @Put('update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateCorrectionDto: UpdateCorrectionDto,
  ) {
    return this.correctionService.update(id, updateCorrectionDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.correctionService.delete(id);
  }
}
