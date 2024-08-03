import { SystemAdmin } from './system-admin';
import { SystemProfile } from './system-profile';
import { SystemUser } from './system-user';

export class SystemStateError implements Error {
  private static DEFAULT_MESSAGE = '상태가 유효하지 않습니다.';

  private constructor(
    public readonly name: string,
    public readonly message: string,
  ) {}

  static of(newMessage = SystemStateError.DEFAULT_MESSAGE): SystemStateError {
    return new SystemStateError(SystemStateError.name, newMessage);
  }
}

export class SystemPermission {
  private constructor(
    private _profile: SystemProfile,
    private _requestor: SystemUser,
    private _admin: SystemAdmin,
    private _isGranted: boolean,
    private _state: string,
  ) {}

  public static REQUESTED = '요청';
  public static CLAIMED = '부여';
  public static GRANTED = '승인';
  public static DENIED = '거부';

  static of(
    requestor: SystemUser,
    profile: SystemProfile,
    state: string = SystemPermission.REQUESTED,
  ): SystemPermission {
    return new SystemPermission(
      profile,
      requestor,
      new SystemAdmin(), // TODO
      false,
      state,
    );
  }

  claimedBy(admin: SystemAdmin) {
    if (this._state !== SystemPermission.REQUESTED) {
      throw SystemStateError.of();
    }

    this._willHandledBy(admin);
    this._state = SystemPermission.CLAIMED;
  }

  deniedBy(admin: SystemAdmin) {
    if (this._state !== SystemPermission.CLAIMED) {
      throw SystemStateError.of();
    }

    this._willHandledBy(admin);
    this._isGranted = false;
    this._state = SystemPermission.DENIED;
  }

  grantedBy(admin: SystemAdmin) {
    if (this._state !== SystemPermission.CLAIMED) {
      throw SystemStateError.of();
    }

    this._willHandledBy(admin);
    this._isGranted = true;
    this._state = SystemPermission.GRANTED;
  }

  getState(): string {
    return this._state;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private _willHandledBy(admin: SystemAdmin) {
    // TODO
  }
}
