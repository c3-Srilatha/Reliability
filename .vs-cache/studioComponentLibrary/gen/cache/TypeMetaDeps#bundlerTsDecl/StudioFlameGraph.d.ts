export interface StudioFlameGraph {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioFlameGraph;

  readonly id?: string | null;
  withId(id: string | null): StudioFlameGraph;

  readonly name?: string | null;
  withName(name: string | null): StudioFlameGraph;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): StudioFlameGraph;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioFlameGraph;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioFlameGraph;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioFlameGraph;

  readonly root?: StudioFlameGraphNode | null;
  withRoot(root: IStudioFlameGraphNode | null): StudioFlameGraph;

  readonly title?: string | null;
  withTitle(title: string | null): StudioFlameGraph;

  readonly colorHue?: string | null;
  withColorHue(colorHue: string | null): StudioFlameGraph;
}

