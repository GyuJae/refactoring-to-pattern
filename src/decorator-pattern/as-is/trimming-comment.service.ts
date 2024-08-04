import { Injectable } from '@nestjs/common';
import { CommentService } from './comment.service';

@Injectable()
export class TrimmingCommentService implements CommentService {
  addComment(comment: string): string {
    return this._trim(comment);
  }

  private _trim(comment: string): string {
    return comment.trim();
  }
}
