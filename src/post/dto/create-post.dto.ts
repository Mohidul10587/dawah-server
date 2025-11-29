export class CreatePostDto {
  title: string;
  description: string;
  postType: string;
  imgs?: string[];
  video?: string;
}
