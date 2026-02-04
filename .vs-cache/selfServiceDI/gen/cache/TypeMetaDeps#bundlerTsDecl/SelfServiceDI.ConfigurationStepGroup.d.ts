declare namespace SelfServiceDI {
  export interface ConfigurationStepGroup {

    readonly meta?: Meta | null;
    withMeta(meta: IMeta | null): SelfServiceDI.ConfigurationStepGroup;

    readonly name: string;
    withName(name: string): SelfServiceDI.ConfigurationStepGroup;

    readonly group?: C3.Array<string | null>;
    withGroup(group: C3.Array<string | null> | Array<string | null>): SelfServiceDI.ConfigurationStepGroup;
  }
}

