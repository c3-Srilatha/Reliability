declare namespace Ann {
  export interface Webpack {

    readonly VALUE_ONLY_FIELD?: string | null;
    withVALUE_ONLY_FIELD(VALUE_ONLY_FIELD: string | null): Ann.Webpack;

    readonly noInherit?: boolean;
    withNoInherit(noInherit: boolean): Ann.Webpack;

    readonly ui?: string | null;
    withUi(ui: string | null): Ann.Webpack;
  }
}

