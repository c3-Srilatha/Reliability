export interface UiSdlRadioButtonGroupReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlRadioButtonGroupReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlRadioButtonGroupReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlRadioButtonGroupReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlRadioButtonGroupReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlRadioButtonGroupReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlRadioButtonGroupReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlRadioButtonGroupReact;

  readonly radioButtons?: C3.Array<C3.Map<string | null, string | null | UiSdlDynamicValueSpec | null | null>>;
  withRadioButtons(radioButtons: C3.Array<C3.Map<string | null, string | null | UiSdlDynamicValueSpec | null | null>> | Array<C3.Map<string | null, string | null | UiSdlDynamicValueSpec | null | null> | {[key: string | null]: string | null | IUiSdlDynamicValueSpec | null | null}>): UiSdlRadioButtonGroupReact;
}

