export interface UiSdlRadioButtonWithInputValueGroupReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlRadioButtonWithInputValueGroupReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlRadioButtonWithInputValueGroupReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlRadioButtonWithInputValueGroupReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlRadioButtonWithInputValueGroupReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlRadioButtonWithInputValueGroupReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlRadioButtonWithInputValueGroupReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlRadioButtonWithInputValueGroupReact;

  readonly radioButtons?: C3.Array<UiSdlRadioButtonWithInputValue | null>;
  withRadioButtons(radioButtons: C3.Array<UiSdlRadioButtonWithInputValue | null> | Array<IUiSdlRadioButtonWithInputValue | null>): UiSdlRadioButtonWithInputValueGroupReact;

  readonly valueAsArray?: boolean;
  withValueAsArray(valueAsArray: boolean): UiSdlRadioButtonWithInputValueGroupReact;
}

