export interface UiSdlDiagramSimpleNodeChild {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDiagramSimpleNodeChild;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramSimpleNodeChild;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDiagramSimpleNodeChild;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDiagramSimpleNodeChild;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramSimpleNodeChild;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDiagramSimpleNodeChild;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDiagramSimpleNodeChild;

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlDiagramSimpleNodeChild;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlDiagramSimpleNodeChild;

  readonly icon?: string | null;
  withIcon(icon: string | null): UiSdlDiagramSimpleNodeChild;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlDiagramSimpleNodeChild;
}

