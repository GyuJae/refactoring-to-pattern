import { Student } from './student';

export enum OnlineCourseState {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  PRIVATE = 'private',
}

export class UnsupportedReviewStateError implements Error {
  private static MESSAGE = '리뷰를 작성할 수 없습니다.';

  private constructor(
    public readonly name: string,
    public readonly message: string,
  ) {}

  static of(newMessage: string = this.MESSAGE): UnsupportedReviewStateError {
    return new UnsupportedReviewStateError(
      UnsupportedReviewStateError.name,
      newMessage,
    );
  }
}
export class UnsupportedStudentStateError implements Error {
  private static MESSAGE = '학생을 등록할 수 없습니다.';

  private constructor(
    public readonly name: string,
    public readonly message: string,
  ) {}

  static of(newMessage: string = this.MESSAGE): UnsupportedStudentStateError {
    return new UnsupportedStudentStateError(
      UnsupportedStudentStateError.name,
      newMessage,
    );
  }
}

export class OnlineCourse {
  constructor(private _state: OnlineCourseState = OnlineCourseState.DRAFT) {}

  private _reviews: string[] = [];
  private _students: Student[] = [];

  addReview(review: string, student: Student): void {
    if (this._state === OnlineCourseState.PUBLISHED) {
      this._reviews.push(review);
    } else if (
      this._state === OnlineCourseState.PRIVATE &&
      this.availableTo(student)
    ) {
      this._reviews.push(review);
    } else {
      throw UnsupportedReviewStateError.of();
    }
  }

  addStudent(student: Student): void {
    if (this._state === OnlineCourseState.PUBLISHED) {
      this._students.push(student);
    } else if (
      this._state === OnlineCourseState.PRIVATE &&
      this.availableTo(student)
    ) {
      this._students.push(student);
    } else {
      throw UnsupportedStudentStateError.of();
    }

    if (this._students.length > 1) {
      this.changeState(OnlineCourseState.PRIVATE);
    }
  }

  changeState(newState: OnlineCourseState): void {
    this._state = newState;
  }

  getState(): OnlineCourseState {
    return this._state;
  }

  getReviews(): string[] {
    return this._reviews;
  }

  getStudents(): Student[] {
    return this._students;
  }

  private availableTo(student: Student): boolean {
    return student.isEnabledForPrivateCourse(this);
  }
}
