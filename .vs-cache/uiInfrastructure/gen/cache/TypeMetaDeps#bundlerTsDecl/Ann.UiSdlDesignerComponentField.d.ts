declare namespace Ann {
  export interface UiSdlDesignerComponentField {

    readonly VALUE_ONLY_FIELD?: string | null;
    withVALUE_ONLY_FIELD(VALUE_ONLY_FIELD: string | null): Ann.UiSdlDesignerComponentField;

    readonly noInherit?: boolean;
    withNoInherit(noInherit: boolean): Ann.UiSdlDesignerComponentField;

    readonly nonDesignable?: boolean;
    withNonDesignable(nonDesignable: boolean): Ann.UiSdlDesignerComponentField;
  }
}

