export interface UiSdlContentFrameTopBarBase {

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlContentFrameTopBarBase;

  readonly iconSuffix?: string | null;
  withIconSuffix(iconSuffix: string | null): UiSdlContentFrameTopBarBase;

  readonly editableTitle?: boolean;
  withEditableTitle(editableTitle: boolean): UiSdlContentFrameTopBarBase;

  readonly color?: string | null | string | null | null;
  withColor(color: string | null | string | null | null): UiSdlContentFrameTopBarBase;
}

