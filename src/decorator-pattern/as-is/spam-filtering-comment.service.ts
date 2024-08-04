import { Injectable } from '@nestjs/common';
import { CommentService } from './comment.service';

@Injectable()
export class SpamFilteringCommentService implements CommentService {
  addComment(comment: string): string {
    if (!this._isSpam(comment)) {
      return comment;
    }

    throw new Error('Comment is Spam');
  }

  private _isSpam(comment: string): boolean {
    return comment.includes('http');
  }
}
