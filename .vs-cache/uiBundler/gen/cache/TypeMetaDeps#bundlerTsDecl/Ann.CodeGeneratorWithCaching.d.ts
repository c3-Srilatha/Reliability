declare namespace Ann {
  export interface CodeGeneratorWithCaching {

    readonly VALUE_ONLY_FIELD?: string | null;
    withVALUE_ONLY_FIELD(VALUE_ONLY_FIELD: string | null): Ann.CodeGeneratorWithCaching;

    readonly noInherit?: boolean;
    withNoInherit(noInherit: boolean): Ann.CodeGeneratorWithCaching;
  }
}

