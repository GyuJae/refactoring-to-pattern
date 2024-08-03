import {
  UnsupportedReviewStateError,
  UnsupportedStudentStateError,
} from '../online-course';
import { OnlineCourse } from './online-course';
import { OnlineCourseState } from './online-course-state.interface';
import { Student } from './student';

export class PrivateOnlineCourseState implements OnlineCourseState {
  constructor(private _onlineCourse: OnlineCourse) {}

  static of(onlineCourse: OnlineCourse): PrivateOnlineCourseState {
    return new PrivateOnlineCourseState(onlineCourse);
  }

  addReview(review: string, student: Student) {
    if (this._onlineCourse.includes(student)) {
      this._onlineCourse.getReviews().push(review);
      return;
    }

    throw UnsupportedReviewStateError.of();
  }
  addStudent(student: Student) {
    if (this._onlineCourse.includes(student)) {
      student.addPrivateCourse(this._onlineCourse);
      this._onlineCourse.getStudents().push(student);
      return;
    }

    throw UnsupportedStudentStateError.of();
  }
}
