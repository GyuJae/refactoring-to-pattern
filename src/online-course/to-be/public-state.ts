import { OnlineCourse } from './online-course';
import { OnlineCourseState } from './online-course-state.interface';
import { Student } from './student';

export class PublicOnlineCourseState implements OnlineCourseState {
  constructor(private _onlineCourse: OnlineCourse) {}

  addReview(review: string): void {
    this._onlineCourse.getReviews().push(review);
  }
  addStudent(student: Student): void {
    this._onlineCourse.getStudents().push(student);
  }
}
