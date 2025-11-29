import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema({ timestamps: true })
export class Post {
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

export const PostSchema = SchemaFactory.createForClass(Post);
