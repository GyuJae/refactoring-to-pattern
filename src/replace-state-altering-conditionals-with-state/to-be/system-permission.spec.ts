import { ClaimedPermissionState } from './claimed-permission-state';
import { DeniedPermissionState } from './denied-permission-state';
import { GrantedPermissionState } from './granted-permission-state';
import { RequestPermissionState } from './request-permission-state';
import { SystemAdmin } from './system-admin';
import { SystemPermission, PermissionStateError } from './system-permission';
import { SystemProfile } from './system-profile';
import { SystemUser } from './system-user';

describe('SystemPermission', () => {
  test.each([
    {
      permission: SystemPermission.of(
        new SystemUser(),
        new SystemProfile(),
        new ClaimedPermissionState(),
      ),
    },
    {
      permission: SystemPermission.of(
        new SystemUser(),
        new SystemProfile(),
        new GrantedPermissionState(),
      ),
    },
    {
      permission: SystemPermission.of(
        new SystemUser(),
        new SystemProfile(),
        new DeniedPermissionState(),
      ),
    },
  ])('요청되지 않은 권한 상테에서 부여할 수 없습니다', ({ permission }) => {
    expect(() => permission.claimedBy(new SystemAdmin())).toThrow(
      PermissionStateError.of(),
    );
  });

  test('요청된 권한 상태에서 권한을 부여할 수 있습니다.', () => {
    const permission = SystemPermission.of(
      new SystemUser(),
      new SystemProfile(),
      new RequestPermissionState(),
    );

    permission.claimedBy(new SystemAdmin());

    expect(permission.getState()).toBeInstanceOf(ClaimedPermissionState);
  });

  test.each([
    {
      permission: SystemPermission.of(
        new SystemUser(),
        new SystemProfile(),
        new RequestPermissionState(),
      ),
    },
    {
      permission: SystemPermission.of(
        new SystemUser(),
        new SystemProfile(),
        new GrantedPermissionState(),
      ),
    },
    {
      permission: SystemPermission.of(
        new SystemUser(),
        new SystemProfile(),
        new DeniedPermissionState(),
      ),
    },
  ])('부여되지 않은 권한 상태에서 거부할 수 없습니다.', ({ permission }) => {
    expect(() => permission.deniedBy(new SystemAdmin())).toThrow(
      PermissionStateError.of(),
    );
  });

  test('부여된 권한상태에서 권한을 거부할 수 있습니다.', () => {
    const permission = SystemPermission.of(
      new SystemUser(),
      new SystemProfile(),
      new ClaimedPermissionState(),
    );

    permission.deniedBy(new SystemAdmin());

    expect(permission.getState()).toBeInstanceOf(DeniedPermissionState);
  });

  test.each([
    {
      permission: SystemPermission.of(
        new SystemUser(),
        new SystemProfile(),
        new RequestPermissionState(),
      ),
    },
    {
      permission: SystemPermission.of(
        new SystemUser(),
        new SystemProfile(),
        new GrantedPermissionState(),
      ),
    },
    {
      permission: SystemPermission.of(
        new SystemUser(),
        new SystemProfile(),
        new DeniedPermissionState(),
      ),
    },
  ])('부여되지 않은 권한상태에서 승인할 수 없습니다.', ({ permission }) => {
    expect(() => permission.grantedBy(new SystemAdmin())).toThrow(
      PermissionStateError.of(),
    );
  });

  test('부여된 권한상태에서 권한을 승인할 수 있습니다.', () => {
    const permission = SystemPermission.of(
      new SystemUser(),
      new SystemProfile(),
      new ClaimedPermissionState(),
    );

    permission.grantedBy(new SystemAdmin());

    expect(permission.getState().getName()).toBe(
      new GrantedPermissionState().getName(),
    );
  });
});
