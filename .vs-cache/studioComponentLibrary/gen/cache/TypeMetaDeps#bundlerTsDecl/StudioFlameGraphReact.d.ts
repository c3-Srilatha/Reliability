export interface StudioFlameGraphReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioFlameGraphReact;

  readonly id?: string | null;
  withId(id: string | null): StudioFlameGraphReact;

  readonly name?: string | null;
  withName(name: string | null): StudioFlameGraphReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): StudioFlameGraphReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioFlameGraphReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioFlameGraphReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioFlameGraphReact;

  readonly root?: StudioFlameGraphNode | null;
  withRoot(root: IStudioFlameGraphNode | null): StudioFlameGraphReact;

  readonly title?: string | null;
  withTitle(title: string | null): StudioFlameGraphReact;

  readonly colorHue?: string | null;
  withColorHue(colorHue: string | null): StudioFlameGraphReact;
}

