declare namespace Ann {
  export interface UiSdlPluggable {

    readonly VALUE_ONLY_FIELD?: string | null;
    withVALUE_ONLY_FIELD(VALUE_ONLY_FIELD: string | null): Ann.UiSdlPluggable;

    readonly noInherit?: boolean;
    withNoInherit(noInherit: boolean): Ann.UiSdlPluggable;

    readonly namespace: string;
    withNamespace(namespace: string): Ann.UiSdlPluggable;
  }
}

