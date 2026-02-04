export interface StudioToolbarReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioToolbarReact;

  readonly id?: string | null;
  withId(id: string | null): StudioToolbarReact;

  readonly name?: string | null;
  withName(name: string | null): StudioToolbarReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): StudioToolbarReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioToolbarReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioToolbarReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioToolbarReact;

  readonly toolbarActions?: C3.Array<StudioToolbarAction | null>;
  withToolbarActions(toolbarActions: C3.Array<StudioToolbarAction | null> | Array<IStudioToolbarAction | null>): StudioToolbarReact;

  readonly collapseThreshold?: number | null;
  withCollapseThreshold(collapseThreshold: number | null): StudioToolbarReact;

  readonly dropdownDirection?: string | null;
  withDropdownDirection(dropdownDirection: string | null): StudioToolbarReact;
}

