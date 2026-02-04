export interface UiSdlRadioButtonGroup {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlRadioButtonGroup;

  readonly id?: string | null;
  withId(id: string | null): UiSdlRadioButtonGroup;

  readonly name?: string | null;
  withName(name: string | null): UiSdlRadioButtonGroup;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlRadioButtonGroup;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlRadioButtonGroup;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlRadioButtonGroup;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlRadioButtonGroup;

  readonly radioButtons?: C3.Array<C3.Map<string | null, string | null | UiSdlDynamicValueSpec | null | null>>;
  withRadioButtons(radioButtons: C3.Array<C3.Map<string | null, string | null | UiSdlDynamicValueSpec | null | null>> | Array<C3.Map<string | null, string | null | UiSdlDynamicValueSpec | null | null> | {[key: string | null]: string | null | IUiSdlDynamicValueSpec | null | null}>): UiSdlRadioButtonGroup;
}

