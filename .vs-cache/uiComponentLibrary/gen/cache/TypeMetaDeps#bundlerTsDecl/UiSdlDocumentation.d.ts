export interface UiSdlDocumentation {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDocumentation;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDocumentation;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDocumentation;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDocumentation;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDocumentation;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDocumentation;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDocumentation;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlDocumentation;

  readonly purpose?: string | null;
  withPurpose(purpose: string | null): UiSdlDocumentation;
}

