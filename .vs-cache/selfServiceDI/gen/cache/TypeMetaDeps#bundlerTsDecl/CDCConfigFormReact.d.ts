export interface CDCConfigFormReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): CDCConfigFormReact;

  readonly id?: string | null;
  withId(id: string | null): CDCConfigFormReact;

  readonly name?: string | null;
  withName(name: string | null): CDCConfigFormReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): CDCConfigFormReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): CDCConfigFormReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): CDCConfigFormReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): CDCConfigFormReact;

  readonly sourceCollectionName?: string | null;
  withSourceCollectionName(sourceCollectionName: string | null): CDCConfigFormReact;

  readonly cdcConfig?: SelfServiceDICdcConfig | null;
  withCdcConfig(cdcConfig: ISelfServiceDICdcConfig | null): CDCConfigFormReact;

  readonly availableTimestampColumns?: C3.Array<string | null>;
  withAvailableTimestampColumns(availableTimestampColumns: C3.Array<string | null> | Array<string | null>): CDCConfigFormReact;

  readonly isIntegrateTab?: boolean;
  withIsIntegrateTab(isIntegrateTab: boolean): CDCConfigFormReact;

  readonly cdcSupported?: boolean;
  withCdcSupported(cdcSupported: boolean): CDCConfigFormReact;
}

