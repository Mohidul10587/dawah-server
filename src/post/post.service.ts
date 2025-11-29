import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post, PostDocument } from './post.schema';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name)
    private postModel: Model<PostDocument>,
  ) {}

  // Complete create function
  async create(createPostDto: CreatePostDto) {
    const newPost = new this.postModel({
      title: createPostDto.title,
      description: createPostDto.description,
      postType: createPostDto.postType,
      imgs: createPostDto.imgs || [],
      video: createPostDto.video || null,
    });

    const created = await newPost.save();

    if (!created) {
      return { message: 'Post not created' };
    }

    return {
      message: 'Post created successfully',
    };
  }

  async findAll() {
    return this.postModel.find().exec();
  }
  async findAllByPostType(postType: string) {
    return this.postModel.find({ postType }).exec();
  }

  async findOne(id: string) {
    return this.postModel.findById(id).exec();
  }

  // post.service.ts
  async update(id: string, updatePostDto: UpdatePostDto) {
    const updated = await this.postModel.findByIdAndUpdate(id, updatePostDto, {
      new: true,
    });

    if (!updated) {
      return { message: 'Post not found' };
    }

    return {
      message: 'Post updated successfully',
    };
  }

  async delete(id: string) {
    return this.postModel.findByIdAndDelete(id).exec();
  }
}
