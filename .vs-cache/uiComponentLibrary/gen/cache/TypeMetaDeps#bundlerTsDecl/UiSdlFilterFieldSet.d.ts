export interface UiSdlFilterFieldSet {

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlFilterFieldSet;

  readonly secondaryText?: string | null | UiSdlDynamicValueSpec | null | null;
  withSecondaryText(secondaryText: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlFilterFieldSet;

  readonly fields?: C3.Array<UiSdlFieldSetInputFieldSetting | null | UiSdlFieldSetFilterFieldSetting | null | null>;
  withFields(fields: C3.Array<UiSdlFieldSetInputFieldSetting | null | UiSdlFieldSetFilterFieldSetting | null | null> | Array<IUiSdlFieldSetInputFieldSetting | null | IUiSdlFieldSetFilterFieldSetting | null | null>): UiSdlFilterFieldSet;

  readonly collapsed?: boolean;
  withCollapsed(collapsed: boolean): UiSdlFilterFieldSet;
}

