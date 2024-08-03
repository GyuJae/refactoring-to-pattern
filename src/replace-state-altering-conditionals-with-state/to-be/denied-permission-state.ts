import { PermissionState } from './permission-state';
import { PermissionStateError } from './system-permission';

export class DeniedPermissionState implements PermissionState {
  getName(): string {
    return '거부';
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
