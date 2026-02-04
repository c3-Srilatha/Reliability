export interface C3ActionSpec {

  readonly typeName?: string | null;
  withTypeName(typeName: string | null): C3ActionSpec;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): C3ActionSpec;

  readonly argsArray?: C3.Array<any>;
  withArgsArray(argsArray: C3.Array<any> | Array<any>): C3ActionSpec;

  readonly argsArry?: C3.Array<any>;
  withArgsArry(argsArry: C3.Array<any> | Array<any>): C3ActionSpec;

  readonly invalidators?: C3.Array<any>;
  withInvalidators(invalidators: C3.Array<any> | Array<any>): C3ActionSpec;

  readonly method?: string | null;
  withMethod(method: string | null): C3ActionSpec;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): C3ActionSpec;
}

