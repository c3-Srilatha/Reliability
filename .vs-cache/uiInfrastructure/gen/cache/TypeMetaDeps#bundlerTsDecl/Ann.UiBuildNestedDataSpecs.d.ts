declare namespace Ann {
  export interface UiBuildNestedDataSpecs {

    readonly VALUE_ONLY_FIELD?: string | null;
    withVALUE_ONLY_FIELD(VALUE_ONLY_FIELD: string | null): Ann.UiBuildNestedDataSpecs;

    readonly noInherit?: boolean;
    withNoInherit(noInherit: boolean): Ann.UiBuildNestedDataSpecs;
  }
}

