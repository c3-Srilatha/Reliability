export interface UiSdlToggle {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlToggle;

  readonly id?: string | null;
  withId(id: string | null): UiSdlToggle;

  readonly name?: string | null;
  withName(name: string | null): UiSdlToggle;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlToggle;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlToggle;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlToggle;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlToggle;

  readonly inputType?: string | null;
  withInputType(inputType: string | null): UiSdlToggle;

  readonly checked?: boolean;
  withChecked(checked: boolean): UiSdlToggle;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiSdlToggle;

  readonly readonly?: boolean;
  withReadonly(readonly: boolean): UiSdlToggle;

  readonly indeterminate?: boolean;
  withIndeterminate(indeterminate: boolean): UiSdlToggle;

  readonly emphasized?: boolean;
  withEmphasized(emphasized: boolean): UiSdlToggle;

  readonly showLabel?: boolean;
  withShowLabel(showLabel: boolean): UiSdlToggle;
}

