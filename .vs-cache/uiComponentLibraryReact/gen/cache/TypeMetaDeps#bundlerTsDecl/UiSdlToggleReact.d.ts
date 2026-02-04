export interface UiSdlToggleReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlToggleReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlToggleReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlToggleReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlToggleReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlToggleReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlToggleReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlToggleReact;

  readonly inputType?: string | null;
  withInputType(inputType: string | null): UiSdlToggleReact;

  readonly checked?: boolean;
  withChecked(checked: boolean): UiSdlToggleReact;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiSdlToggleReact;

  readonly readonly?: boolean;
  withReadonly(readonly: boolean): UiSdlToggleReact;

  readonly indeterminate?: boolean;
  withIndeterminate(indeterminate: boolean): UiSdlToggleReact;

  readonly emphasized?: boolean;
  withEmphasized(emphasized: boolean): UiSdlToggleReact;

  readonly showLabel?: boolean;
  withShowLabel(showLabel: boolean): UiSdlToggleReact;
}

