declare namespace Ann {
  export interface UiSdlDesignerCustomRenderer {

    readonly VALUE_ONLY_FIELD?: string | null;
    withVALUE_ONLY_FIELD(VALUE_ONLY_FIELD: string | null): Ann.UiSdlDesignerCustomRenderer;

    readonly noInherit?: boolean;
    withNoInherit(noInherit: boolean): Ann.UiSdlDesignerCustomRenderer;

    readonly rendererType: string;
    withRendererType(rendererType: string): Ann.UiSdlDesignerCustomRenderer;
  }
}

