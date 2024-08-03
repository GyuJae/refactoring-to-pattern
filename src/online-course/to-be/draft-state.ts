import {
  UnsupportedReviewStateError,
  UnsupportedStudentStateError,
} from '../online-course';
import { OnlineCourseState } from './online-course-state.interface';

export class DraftOnlineCourseState implements OnlineCourseState {
  addReview(): void {
    throw UnsupportedReviewStateError.of();
  }
  addStudent(): void {
    throw UnsupportedStudentStateError.of();
  }
}
