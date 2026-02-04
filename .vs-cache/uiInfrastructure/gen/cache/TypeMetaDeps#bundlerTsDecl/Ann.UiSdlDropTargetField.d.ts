declare namespace Ann {
  export interface UiSdlDropTargetField {

    readonly VALUE_ONLY_FIELD?: string | null;
    withVALUE_ONLY_FIELD(VALUE_ONLY_FIELD: string | null): Ann.UiSdlDropTargetField;

    readonly noInherit?: boolean;
    withNoInherit(noInherit: boolean): Ann.UiSdlDropTargetField;

    readonly emptyDropMessage?: string | null;
    withEmptyDropMessage(emptyDropMessage: string | null): Ann.UiSdlDropTargetField;
  }
}

