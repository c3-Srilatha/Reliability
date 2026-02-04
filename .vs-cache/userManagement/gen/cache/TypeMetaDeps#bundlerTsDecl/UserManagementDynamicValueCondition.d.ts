export interface UserManagementDynamicValueCondition {

  readonly param?: UiSdlDynamicValueSpecParam | null;
  withParam(param: IUiSdlDynamicValueSpecParam | null): UserManagementDynamicValueCondition;

  readonly expectedValue?: any;
  withExpectedValue(expectedValue: any): UserManagementDynamicValueCondition;
}

