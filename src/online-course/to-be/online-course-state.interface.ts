import { Student } from './student';

export interface OnlineCourseState {
  addReview(review: string, student: Student): void;

  addStudent(student: Student): void;
}
