export interface UiSdlFormFieldSet {

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlFormFieldSet;

  readonly secondaryText?: string | null | UiSdlDynamicValueSpec | null | null;
  withSecondaryText(secondaryText: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlFormFieldSet;

  readonly collapseOnLoad?: boolean;
  withCollapseOnLoad(collapseOnLoad: boolean): UiSdlFormFieldSet;

  readonly collapsed?: boolean;
  withCollapsed(collapsed: boolean): UiSdlFormFieldSet;

  readonly collapsible?: boolean;
  withCollapsible(collapsible: boolean): UiSdlFormFieldSet;

  readonly fields?: C3.Array<UiSdlFieldSetFormFieldSetting | null>;
  withFields(fields: C3.Array<UiSdlFieldSetFormFieldSetting | null> | Array<IUiSdlFieldSetFormFieldSetting | null>): UiSdlFormFieldSet;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): UiSdlFormFieldSet;

  readonly infoTooltipText?: string | null | UiSdlDynamicValueSpec | null | null;
  withInfoTooltipText(infoTooltipText: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlFormFieldSet;

  readonly link?: UiSdlFormFieldSetLink | null;
  withLink(link: IUiSdlFormFieldSetLink | null): UiSdlFormFieldSet;

  readonly actionButton?: UiSdlActionGroup | null;
  withActionButton(actionButton: IUiSdlActionGroup | null): UiSdlFormFieldSet;
}

