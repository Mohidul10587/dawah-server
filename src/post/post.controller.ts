import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('create')
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get('findAll')
  findAll() {
    return this.postService.findAll();
  }

  @Get('findAllByPostType/:postType')
  findAllByPostType(@Param('postType') postType: string) {
    return this.postService.findAllByPostType(postType);
  }

  @Get('singleForEditPage/:id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(id);
  }

  @Put('update/:id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(id, updatePostDto);
  }
  @Delete('deleteByAdmin/:id')
  remove(@Param('id') id: string) {
    return this.postService.delete(id);
  }
}
