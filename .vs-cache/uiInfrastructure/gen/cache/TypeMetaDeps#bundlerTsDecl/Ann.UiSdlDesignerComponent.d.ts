declare namespace Ann {
  export interface UiSdlDesignerComponent {

    readonly VALUE_ONLY_FIELD?: string | null;
    withVALUE_ONLY_FIELD(VALUE_ONLY_FIELD: string | null): Ann.UiSdlDesignerComponent;

    readonly noInherit?: boolean;
    withNoInherit(noInherit: boolean): Ann.UiSdlDesignerComponent;

    readonly designable?: boolean;
    withDesignable(designable: boolean): Ann.UiSdlDesignerComponent;

    readonly attributes?: C3.Array<string | null>;
    withAttributes(attributes: C3.Array<string | null> | Array<string | null>): Ann.UiSdlDesignerComponent;

    readonly category?: string | null;
    withCategory(category: string | null): Ann.UiSdlDesignerComponent;

    readonly name?: string | null;
    withName(name: string | null): Ann.UiSdlDesignerComponent;

    readonly icon?: string | null;
    withIcon(icon: string | null): Ann.UiSdlDesignerComponent;
  }
}

