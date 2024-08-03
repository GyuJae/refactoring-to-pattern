import { ClaimedPermissionState } from './claimed-permission-state';
import { PermissionState } from './permission-state';
import { SystemAdmin } from './system-admin';
import { PermissionStateError, SystemPermission } from './system-permission';

export class RequestPermissionState implements PermissionState {
  getName(): string {
    return '요청';
  }

  claimedBy(admin: SystemAdmin, permission: SystemPermission) {
    permission.willHandledBy(admin);
    permission.setPermissionState(new ClaimedPermissionState());
  }

  grantedBy() {
    throw PermissionStateError.of();
  }

  deniedBy() {
    throw PermissionStateError.of();
  }
}
