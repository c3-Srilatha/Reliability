export interface InjectableSelfServiceDICssComponentReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): InjectableSelfServiceDICssComponentReact;

  readonly id?: string | null;
  withId(id: string | null): InjectableSelfServiceDICssComponentReact;

  readonly name?: string | null;
  withName(name: string | null): InjectableSelfServiceDICssComponentReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): InjectableSelfServiceDICssComponentReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): InjectableSelfServiceDICssComponentReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): InjectableSelfServiceDICssComponentReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): InjectableSelfServiceDICssComponentReact;
}

