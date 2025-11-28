import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CorrectionDocument = Correction & Document;

@Schema({ timestamps: true })
export class Correction {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  postType: string;

  @Prop({ type: [String] })
  imgs: string[];

  @Prop()
  video: string;
}

export const CorrectionSchema = SchemaFactory.createForClass(Correction);
