import { SystemAdmin } from './as-is/system-admin';
import { SystemPermission, SystemStateError } from './as-is/system-permission';
import { SystemProfile } from './as-is/system-profile';
import { SystemUser } from './as-is/system-user';

describe('SystemPermission', () => {
  test.each([
    {
      permission: SystemPermission.of(
        new SystemUser(),
        new SystemProfile(),
        SystemPermission.CLAIMED,
      ),
    },
    {
      permission: SystemPermission.of(
        new SystemUser(),
        new SystemProfile(),
        SystemPermission.GRANTED,
      ),
    },
    {
      permission: SystemPermission.of(
        new SystemUser(),
        new SystemProfile(),
        SystemPermission.DENIED,
      ),
    },
  ])('요청되지 않은 권한 상테에서 부여할 수 없습니다', ({ permission }) => {
    expect(() => permission.claimedBy(new SystemAdmin())).toThrow(
      SystemStateError.of(),
    );
  });

  test('요청된 권한 상태에서 권한을 부여할 수 있습니다.', () => {
    const permission = SystemPermission.of(
      new SystemUser(),
      new SystemProfile(),
      SystemPermission.REQUESTED,
    );

    permission.claimedBy(new SystemAdmin());

    expect(permission.getState()).toBe(SystemPermission.CLAIMED);
  });

  test.each([
    {
      permission: SystemPermission.of(
        new SystemUser(),
        new SystemProfile(),
        SystemPermission.REQUESTED,
      ),
    },
    {
      permission: SystemPermission.of(
        new SystemUser(),
        new SystemProfile(),
        SystemPermission.GRANTED,
      ),
    },
    {
      permission: SystemPermission.of(
        new SystemUser(),
        new SystemProfile(),
        SystemPermission.DENIED,
      ),
    },
  ])('부여되지 않은 권한 상태에서 거부할 수 없습니다.', ({ permission }) => {
    expect(() => permission.deniedBy(new SystemAdmin())).toThrow(
      SystemStateError.of(),
    );
  });

  test('부여된 권한상태에서 권한을 거부할 수 있습니다.', () => {
    const permission = SystemPermission.of(
      new SystemUser(),
      new SystemProfile(),
      SystemPermission.CLAIMED,
    );

    permission.deniedBy(new SystemAdmin());

    expect(permission.getState()).toBe(SystemPermission.DENIED);
  });

  test.each([
    {
      permission: SystemPermission.of(
        new SystemUser(),
        new SystemProfile(),
        SystemPermission.REQUESTED,
      ),
    },
    {
      permission: SystemPermission.of(
        new SystemUser(),
        new SystemProfile(),
        SystemPermission.GRANTED,
      ),
    },
    {
      permission: SystemPermission.of(
        new SystemUser(),
        new SystemProfile(),
        SystemPermission.DENIED,
      ),
    },
  ])('부여되지 않은 권한상태에서 승인할 수 없습니다.', ({ permission }) => {
    expect(() => permission.grantedBy(new SystemAdmin())).toThrow(
      SystemStateError.of(),
    );
  });

  test('부여된 권한상태에서 권한을 승인할 수 있습니다.', () => {
    const permission = SystemPermission.of(
      new SystemUser(),
      new SystemProfile(),
      SystemPermission.CLAIMED,
    );

    permission.grantedBy(new SystemAdmin());

    expect(permission.getState()).toBe(SystemPermission.GRANTED);
  });
});
