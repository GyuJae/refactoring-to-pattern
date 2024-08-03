import { OnlineCourse } from './online-course';

export class Student {
  constructor(private readonly _name: string) {}

  private _privateCourses: OnlineCourse[] = [];

  isEnabledForPrivateCourse(course: OnlineCourse): boolean {
    return this._privateCourses.includes(course);
  }

  addPrivateCourse(course: OnlineCourse): void {
    this._privateCourses.push(course);
  }

  toString(): string {
    return `Student{name'${this._name}'`;
  }
}
