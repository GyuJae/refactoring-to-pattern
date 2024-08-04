import { Injectable } from '@nestjs/common';
import { CommentService } from './comment.interface.service';

@Injectable()
export class DefaultCommentService implements CommentService {
  addComment(comment: string): string {
    return comment;
  }
}
