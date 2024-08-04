import { Inject, Injectable } from '@nestjs/common';
import { CommentService } from './comment.interface.service';
import { CommentDecorator } from './comment-decorator.service';

@Injectable()
export class SpamFilteringCommentDecorator extends CommentDecorator {
  constructor(@Inject() commentService: CommentService) {
    super(commentService);
  }

  addComment(comment: string): string {
    if (this.isSpam(comment)) {
      throw new Error('Comment is Spam');
    }

    return super.addComment(comment);
  }

  private isSpam(comment: string): boolean {
    return comment.includes('http');
  }
}
