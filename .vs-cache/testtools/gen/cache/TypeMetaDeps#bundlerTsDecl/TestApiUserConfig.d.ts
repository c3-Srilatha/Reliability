export interface TestApiUserConfig {

  readonly userId?: string | null;
  withUserId(userId: string | null): TestApiUserConfig;

  readonly username?: string | null;
  withUsername(username: string | null): TestApiUserConfig;

  readonly password?: string | null;
  withPassword(password: string | null): TestApiUserConfig;

  readonly email?: string | null;
  withEmail(email: string | null): TestApiUserConfig;

  readonly givenName?: string | null;
  withGivenName(givenName: string | null): TestApiUserConfig;

  readonly familyName?: string | null;
  withFamilyName(familyName: string | null): TestApiUserConfig;

  readonly id?: string | null;
  withId(id: string | null): TestApiUserConfig;
}

