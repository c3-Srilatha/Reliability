export interface StudioToolbar {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioToolbar;

  readonly id?: string | null;
  withId(id: string | null): StudioToolbar;

  readonly name?: string | null;
  withName(name: string | null): StudioToolbar;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): StudioToolbar;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioToolbar;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioToolbar;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioToolbar;

  readonly toolbarActions?: C3.Array<StudioToolbarAction | null>;
  withToolbarActions(toolbarActions: C3.Array<StudioToolbarAction | null> | Array<IStudioToolbarAction | null>): StudioToolbar;

  readonly collapseThreshold?: number | null;
  withCollapseThreshold(collapseThreshold: number | null): StudioToolbar;

  readonly dropdownDirection?: string | null;
  withDropdownDirection(dropdownDirection: string | null): StudioToolbar;
}

