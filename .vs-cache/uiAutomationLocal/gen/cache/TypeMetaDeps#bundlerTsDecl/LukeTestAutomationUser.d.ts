export interface LukeTestAutomationUser {

  readonly configOverride?: string | null;
  withConfigOverride(configOverride: string | null): LukeTestAutomationUser;

  readonly secretOverride?: string | null;
  withSecretOverride(secretOverride: string | null): LukeTestAutomationUser;

  readonly issues?: C3.Array<string | null>;
  withIssues(issues: C3.Array<string | null> | Array<string | null>): LukeTestAutomationUser;

  readonly name: string;
  withName(name: string): LukeTestAutomationUser;

  readonly username?: string | null;
  withUsername(username: string | null): LukeTestAutomationUser;

  readonly password?: string | null;
  withPassword(password: string | null): LukeTestAutomationUser;
}

