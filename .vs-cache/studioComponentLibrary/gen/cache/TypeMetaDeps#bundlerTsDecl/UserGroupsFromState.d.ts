export interface UserGroupsFromState {

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UserGroupsFromState;

  readonly format?: UiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null;
  withFormat(format: IUiSdlDynamicValueSpecParamFormat<UiSdlDynamicValueSpecParamFormatSpec | null> | null): UserGroupsFromState;

  readonly valueType?: string | null;
  withValueType(valueType: string | null): UserGroupsFromState;

  readonly id?: string | null;
  withId(id: string | null): UserGroupsFromState;

  readonly path?: string | null;
  withPath(path: string | null): UserGroupsFromState;

  readonly action?: string | null;
  withAction(action: string | null): UserGroupsFromState;
}

