declare namespace Ann {
  export interface UiSdlComponentAcceptedKinds {

    readonly VALUE_ONLY_FIELD?: string | null;
    withVALUE_ONLY_FIELD(VALUE_ONLY_FIELD: string | null): Ann.UiSdlComponentAcceptedKinds;

    readonly noInherit?: boolean;
    withNoInherit(noInherit: boolean): Ann.UiSdlComponentAcceptedKinds;

    readonly includeCategories?: C3.Array<string | null>;
    withIncludeCategories(includeCategories: C3.Array<string | null> | Array<string | null>): Ann.UiSdlComponentAcceptedKinds;

    readonly includeAttributes?: C3.Array<string | null>;
    withIncludeAttributes(includeAttributes: C3.Array<string | null> | Array<string | null>): Ann.UiSdlComponentAcceptedKinds;
  }
}

