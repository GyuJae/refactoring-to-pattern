import { OnlineCourse } from './online-course';

export class Student {
  constructor(private readonly _name: string) {}

  private _privateCourses: OnlineCourse[] = [];

  addPrivateCourse(course: OnlineCourse): void {
    this._privateCourses.push(course);
  }

  isEnabledForPrivateCourse(course: OnlineCourse): boolean {
    return this._privateCourses.includes(course);
  }

  public getName(): string {
    return this._name;
  }
}
