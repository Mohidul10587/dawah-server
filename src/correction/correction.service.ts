import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCorrectionDto } from './dto/create-correction.dto';
import { UpdateCorrectionDto } from './dto/update-correction.dto';
import { Correction, CorrectionDocument } from './correction.schema';

@Injectable()
export class CorrectionService {
  constructor(
    @InjectModel(Correction.name)
    private correctionModel: Model<CorrectionDocument>,
  ) {}

  // Complete create function
  async create(createCorrectionDto: CreateCorrectionDto) {
    const newCorrection = new this.correctionModel({
      title: createCorrectionDto.title,
      description: createCorrectionDto.description,
      postType: createCorrectionDto.postType,
      imgs: createCorrectionDto.imgs || [],
      video: createCorrectionDto.video || null,
    });

    const created = await newCorrection.save();

    if (!created) {
      return { message: 'Post not created' };
    }

    return {
      message: 'Post created successfully',
    };
  }

  async findAll() {
    return this.correctionModel.find().exec();
  }
  async findAllByPostType(postType: string) {
    return this.correctionModel.find({ postType }).exec();
  }

  async findOne(id: string) {
    return this.correctionModel.findById(id).exec();
  }

  // correction.service.ts
  async update(id: string, updateCorrectionDto: UpdateCorrectionDto) {
    const updated = await this.correctionModel.findByIdAndUpdate(
      id,
      updateCorrectionDto,
      { new: true },
    );

    if (!updated) {
      return { message: 'Post not found' };
    }

    return {
      message: 'Post updated successfully',
    };
  }

  async delete(id: string) {
    return this.correctionModel.findByIdAndDelete(id).exec();
  }
}
