import { DefaultCommentService } from './default-comment.service';
import { SpamFilteringCommentDecorator } from './spam-filtering-comment-decorator.service';
import { TrimmingCommentDecorator } from './trimming-comment-decorator.service';

describe('CommentService', () => {
  test('댓글을 작성할  수 있습니다.', () => {
    // given
    const commentService = new DefaultCommentService();

    const comment = commentService.addComment('댓글 내용');

    expect(comment).toBe('댓글 내용');
  });

  test('Spam 댓글은 작성할 수 없습니다', () => {
    const commentService = new SpamFilteringCommentDecorator(
      new DefaultCommentService(),
    );

    expect(() => commentService.addComment('http://www.naver.com')).toThrow(
      new Error('Comment is Spam'),
    );
  });

  test('앞뒤 공백을 삭제해서 댓글을 작성할 수 있습니다.', () => {
    const commentService = new TrimmingCommentDecorator(
      new DefaultCommentService(),
    );

    const comment = commentService.addComment('  댓글 내용  ');

    expect(comment).toBe('댓글 내용');
  });

  test('앞뒤 공백을 삭제하고, Spam 댓글은 작성할 수 없습니다.', () => {
    const commentService = new TrimmingCommentDecorator(
      new SpamFilteringCommentDecorator(new DefaultCommentService()),
    );

    expect(commentService.addComment('  댓글 내용  ')).toBe('댓글 내용');
    expect(() => commentService.addComment('  http://www.naver.com  ')).toThrow(
      new Error('Comment is Spam'),
    );
  });
});
