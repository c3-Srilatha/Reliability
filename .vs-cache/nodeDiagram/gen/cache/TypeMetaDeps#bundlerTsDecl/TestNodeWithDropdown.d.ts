export interface TestNodeWithDropdown {

  readonly name?: string | null;
  withName(name: string | null): TestNodeWithDropdown;

  readonly DROPDOWN_CHANGE_SUFFIX?: string | null;
  withDROPDOWN_CHANGE_SUFFIX(DROPDOWN_CHANGE_SUFFIX: string | null): TestNodeWithDropdown;

  readonly title?: string | null;
  withTitle(title: string | null): TestNodeWithDropdown;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): TestNodeWithDropdown;
}

