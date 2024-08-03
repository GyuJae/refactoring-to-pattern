import {
  OnlineCourse,
  OnlineCourseState,
  UnsupportedReviewStateError,
  UnsupportedStudentStateError,
} from './online-course';
import { Student } from './student';

describe('OnlineCourse', () => {
  test('온라인 코스가 공개상태일 때 리뷰를 추가할 수 있습니다', () => {
    // Given
    const course = new OnlineCourse(OnlineCourseState.PUBLISHED);
    const student = new Student('규재');

    // When
    course.addReview('리뷰1', student);

    // Then
    expect(course.getReviews()).toEqual(['리뷰1']);
  });

  test('비공개된 온라인 코스에 접근 불가능한 학생이 리뷰를 추가할 수 없습니다', () => {
    // Given
    const course = new OnlineCourse(OnlineCourseState.PRIVATE);
    const student = new Student('규재');

    // When
    // Then
    expect(() => course.addReview('리뷰1', student)).toThrow(
      UnsupportedReviewStateError.of(),
    );
  });

  test('공개된 온라인 코스에 학생을 추가할 수 있습니다', () => {
    // Given
    const course = new OnlineCourse(OnlineCourseState.PUBLISHED);
    const student = new Student('규재');

    // When
    course.addStudent(student);

    // Then
    expect(course.getStudents()).toEqual([student]);
  });

  test('비공개된 온라인 코스에 접근 불가능한 학생이 추가될 수 없습니다', () => {
    // Given
    const course = new OnlineCourse(OnlineCourseState.PRIVATE);
    const student = new Student('규재');

    // When
    // Then
    expect(() => course.addStudent(student)).toThrow(
      UnsupportedStudentStateError.of(),
    );
  });

  test('비공개된 온라인 코스에도 접근 가능한 학생은 학생을 추가할 수 있습니다', () => {
    // given
    const course = new OnlineCourse(OnlineCourseState.PRIVATE);
    const student = new Student('규재');
    student.addPrivateCourse(course);

    // when
    course.addStudent(student);

    // then
    expect(course.getStudents()).toEqual([student]);
  });

  test('등록된 학생 수가 2명 이상이면 비공개로 전환됩니다', () => {
    // given
    const course = new OnlineCourse(OnlineCourseState.PUBLISHED);
    const student1 = new Student('규재1');
    const student2 = new Student('규재2');

    // when
    course.addStudent(student1);
    course.addStudent(student2);

    // then
    expect(course.getState()).toBe(OnlineCourseState.PRIVATE);
  });
});
