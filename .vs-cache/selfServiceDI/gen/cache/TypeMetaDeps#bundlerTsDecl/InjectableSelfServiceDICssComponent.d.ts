export interface InjectableSelfServiceDICssComponent {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): InjectableSelfServiceDICssComponent;

  readonly id?: string | null;
  withId(id: string | null): InjectableSelfServiceDICssComponent;

  readonly name?: string | null;
  withName(name: string | null): InjectableSelfServiceDICssComponent;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): InjectableSelfServiceDICssComponent;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): InjectableSelfServiceDICssComponent;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): InjectableSelfServiceDICssComponent;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): InjectableSelfServiceDICssComponent;
}

