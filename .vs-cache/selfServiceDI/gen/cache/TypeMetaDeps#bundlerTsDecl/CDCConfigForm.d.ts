export interface CDCConfigForm {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): CDCConfigForm;

  readonly id?: string | null;
  withId(id: string | null): CDCConfigForm;

  readonly name?: string | null;
  withName(name: string | null): CDCConfigForm;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): CDCConfigForm;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): CDCConfigForm;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): CDCConfigForm;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): CDCConfigForm;

  readonly sourceCollectionName?: string | null;
  withSourceCollectionName(sourceCollectionName: string | null): CDCConfigForm;

  readonly cdcConfig?: SelfServiceDICdcConfig | null;
  withCdcConfig(cdcConfig: ISelfServiceDICdcConfig | null): CDCConfigForm;

  readonly availableTimestampColumns?: C3.Array<string | null>;
  withAvailableTimestampColumns(availableTimestampColumns: C3.Array<string | null> | Array<string | null>): CDCConfigForm;

  readonly isIntegrateTab?: boolean;
  withIsIntegrateTab(isIntegrateTab: boolean): CDCConfigForm;

  readonly cdcSupported?: boolean;
  withCdcSupported(cdcSupported: boolean): CDCConfigForm;
}

