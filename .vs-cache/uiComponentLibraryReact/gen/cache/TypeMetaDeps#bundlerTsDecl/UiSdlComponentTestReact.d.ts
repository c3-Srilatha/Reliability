export interface UiSdlComponentTestReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlComponentTestReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlComponentTestReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlComponentTestReact;

  readonly dataSpec?: UiSdlComponentDataSpecTest | null;
  withDataSpec(dataSpec: IUiSdlComponentDataSpecTest | null): UiSdlComponentTestReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlComponentTestReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlComponentTestReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlComponentTestReact;

  readonly data?: any;
  withData(data: any): UiSdlComponentTestReact;
}

