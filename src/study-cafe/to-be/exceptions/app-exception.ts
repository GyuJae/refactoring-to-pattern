export class AppException extends Error {
  constructor(message: string) {
    super(message);
    this.name = AppException.name;
  }

  static of(message: string): AppException {
    return new AppException(message);
  }
}
