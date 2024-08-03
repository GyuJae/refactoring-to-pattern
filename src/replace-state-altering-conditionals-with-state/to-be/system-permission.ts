import { PermissionState } from './permission-state';
import { RequestPermissionState } from './request-permission-state';
import { SystemAdmin } from './system-admin';
import { SystemProfile } from './system-profile';
import { SystemUser } from './system-user';

export class PermissionStateError implements Error {
  private static DEFAULT_MESSAGE = '상태가 유효하지 않습니다.';

  private constructor(
    public readonly name: string,
    public readonly message: string,
  ) {}

  static of(
    newMessage = PermissionStateError.DEFAULT_MESSAGE,
  ): PermissionStateError {
    return new PermissionStateError(PermissionStateError.name, newMessage);
  }
}

export class SystemPermission {
  private constructor(
    private _profile: SystemProfile,
    private _requestor: SystemUser,
    private _admin: SystemAdmin,
    private _isGranted: boolean,
    private _permissionState: PermissionState,
  ) {}

  static of(
    requestor: SystemUser,
    profile: SystemProfile,
    state: PermissionState = new RequestPermissionState(),
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
    this._permissionState.claimedBy(admin, this);
  }

  deniedBy(admin: SystemAdmin) {
    this._permissionState.deniedBy(admin, this);
  }

  grantedBy(admin: SystemAdmin) {
    this._permissionState.grantedBy(admin, this);
  }

  getState(): PermissionState {
    return this._permissionState;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  willHandledBy(admin: SystemAdmin) {
    // TODO
  }

  setPermissionState(state: PermissionState) {
    this._permissionState = state;
  }
}
