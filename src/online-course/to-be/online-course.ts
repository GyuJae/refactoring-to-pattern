import { DraftOnlineCourseState } from './draft-state';
import { OnlineCourseState } from './online-course-state.interface';
import { PrivateOnlineCourseState } from './private-state';
import { Student } from './student';

export class OnlineCourse {
  private _students: Student[] = [];
  private _reviews: string[] = [];

  private _state: OnlineCourseState = new DraftOnlineCourseState();

  includes(student: Student): boolean {
    return student.isEnabledForPrivateCourse(this);
  }

  changeState(newState: OnlineCourseState): void {
    this._state = newState;
  }

  addStudent(student: Student): void {
    this._state.addStudent(student);

    if (this._students.length > 1) {
      this.changeState(new PrivateOnlineCourseState(this));
    }
  }

  addReview(review: string, student: Student): void {
    this._state.addReview(review, student);
  }

  getStudents(): Student[] {
    return this._students;
  }

  getReviews(): string[] {
    return this._reviews;
  }

  getState(): OnlineCourseState {
    return this._state;
  }
}
