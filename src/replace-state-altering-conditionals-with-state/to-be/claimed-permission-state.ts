import { DeniedPermissionState } from './denied-permission-state';
import { GrantedPermissionState } from './granted-permission-state';
import { PermissionState } from './permission-state';
import { SystemAdmin } from './system-admin';
import { PermissionStateError, SystemPermission } from './system-permission';

export class ClaimedPermissionState extends PermissionState {
  getName(): string {
    return '요청';
  }

  grantedBy(admin: SystemAdmin, permission: SystemPermission) {
    permission.willHandledBy(admin);
    permission.setPermissionState(new GrantedPermissionState());
  }

  deniedBy(admin: SystemAdmin, permission: SystemPermission) {
    permission.willHandledBy(admin);
    permission.setPermissionState(new DeniedPermissionState());
  }
  claimedBy() {
    throw PermissionStateError.of();
  }
}
