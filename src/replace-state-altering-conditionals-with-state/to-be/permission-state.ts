import { SystemAdmin } from './system-admin';
import { SystemPermission } from './system-permission';

export abstract class PermissionState {
  abstract deniedBy(admin: SystemAdmin, permission: SystemPermission);
  abstract claimedBy(admin: SystemAdmin, permission: SystemPermission);
  abstract grantedBy(admin: SystemAdmin, permission: SystemPermission);
  abstract getName(): string;
}
