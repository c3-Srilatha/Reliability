export interface UiSdlComponentTest {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlComponentTest;

  readonly id?: string | null;
  withId(id: string | null): UiSdlComponentTest;

  readonly name?: string | null;
  withName(name: string | null): UiSdlComponentTest;

  readonly dataSpec?: UiSdlComponentDataSpecTest | null;
  withDataSpec(dataSpec: IUiSdlComponentDataSpecTest | null): UiSdlComponentTest;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlComponentTest;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlComponentTest;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlComponentTest;

  readonly data?: any;
  withData(data: any): UiSdlComponentTest;
}

