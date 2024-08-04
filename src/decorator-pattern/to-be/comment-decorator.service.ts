import { Inject, Injectable } from '@nestjs/common';
import { CommentService } from './comment.interface.service';

@Injectable()
export class CommentDecorator {
  constructor(@Inject() private readonly commentService: CommentService) {}

  addComment(comment: string): string {
    return this.commentService.addComment(comment);
  }
}
