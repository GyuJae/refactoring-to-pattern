import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
  addComment(comment: string): string {
    return comment;
  }
}
