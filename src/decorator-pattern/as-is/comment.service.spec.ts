import { CommentService } from './comment.service';
import { SpamFilteringCommentService } from './spam-filtering-comment.service';
import { TrimmingCommentService } from './trimming-comment.service';

describe('CommentService', () => {
  test('댓글을 작성할  수 있습니다.', () => {
    const commentService = new CommentService();

    const comment = commentService.addComment('댓글 내용');

    expect(comment).toBe('댓글 내용');
  });

  test('Spam 댓글은 작성할 수 없습니다', () => {
    const commentService = new SpamFilteringCommentService();

    expect(() => commentService.addComment('http://www.naver.com')).toThrow(
      new Error('Comment is Spam'),
    );
  });

  test('앞뒤 공백을 삭제해서 댓글을 작성할 수 있습니다.', () => {
    const commentService = new TrimmingCommentService();

    const comment = commentService.addComment('  댓글 내용  ');

    expect(comment).toBe('댓글 내용');
  });
});
