import { PermissionState } from './permission-state';
import { PermissionStateError } from './system-permission';

export class GrantedPermissionState implements PermissionState {
  getName(): string {
    return '승인';
  }

  deniedBy() {
    throw PermissionStateError.of();
  }
  claimedBy() {
    throw PermissionStateError.of();
  }
  grantedBy() {
    throw PermissionStateError.of();
  }
}
