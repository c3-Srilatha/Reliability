export interface UiSdlDiagramSimpleNodeChildReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDiagramSimpleNodeChildReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramSimpleNodeChildReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDiagramSimpleNodeChildReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDiagramSimpleNodeChildReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDiagramSimpleNodeChildReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDiagramSimpleNodeChildReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDiagramSimpleNodeChildReact;

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlDiagramSimpleNodeChildReact;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlDiagramSimpleNodeChildReact;

  readonly icon?: string | null;
  withIcon(icon: string | null): UiSdlDiagramSimpleNodeChildReact;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlDiagramSimpleNodeChildReact;
}

