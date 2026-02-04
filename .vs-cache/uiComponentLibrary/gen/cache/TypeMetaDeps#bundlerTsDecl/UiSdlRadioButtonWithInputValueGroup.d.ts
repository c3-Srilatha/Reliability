export interface UiSdlRadioButtonWithInputValueGroup {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlRadioButtonWithInputValueGroup;

  readonly id?: string | null;
  withId(id: string | null): UiSdlRadioButtonWithInputValueGroup;

  readonly name?: string | null;
  withName(name: string | null): UiSdlRadioButtonWithInputValueGroup;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlRadioButtonWithInputValueGroup;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlRadioButtonWithInputValueGroup;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlRadioButtonWithInputValueGroup;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlRadioButtonWithInputValueGroup;

  readonly radioButtons?: C3.Array<UiSdlRadioButtonWithInputValue | null>;
  withRadioButtons(radioButtons: C3.Array<UiSdlRadioButtonWithInputValue | null> | Array<IUiSdlRadioButtonWithInputValue | null>): UiSdlRadioButtonWithInputValueGroup;

  readonly valueAsArray?: boolean;
  withValueAsArray(valueAsArray: boolean): UiSdlRadioButtonWithInputValueGroup;
}

