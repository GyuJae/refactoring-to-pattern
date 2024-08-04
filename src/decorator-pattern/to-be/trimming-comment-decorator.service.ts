import { Injectable } from '@nestjs/common';
import { CommentService } from './comment.interface.service';
import { CommentDecorator } from './comment-decorator.service';

@Injectable()
export class TrimmingCommentDecorator extends CommentDecorator {
  constructor(commentService: CommentService) {
    super(commentService);
  }

  addComment(comment: string): string {
    return super.addComment(comment.trim());
  }
}
