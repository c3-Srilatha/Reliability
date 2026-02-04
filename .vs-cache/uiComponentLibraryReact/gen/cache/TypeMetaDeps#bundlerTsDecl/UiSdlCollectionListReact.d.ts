export interface UiSdlCollectionListReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlCollectionListReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlCollectionListReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlCollectionListReact;

  readonly dataSpec?: UiSdlCollectionListDataSpec | null;
  withDataSpec(dataSpec: IUiSdlCollectionListDataSpec | null): UiSdlCollectionListReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlCollectionListReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlCollectionListReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlCollectionListReact;

  readonly dataCollection?: UiSdlCollectionListDataCollection | null;
  withDataCollection(dataCollection: IUiSdlCollectionListDataCollection | null): UiSdlCollectionListReact;

  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlCollectionListReact;

  readonly acceptedDragAndDropKinds?: C3.Array<string | null>;
  withAcceptedDragAndDropKinds(acceptedDragAndDropKinds: C3.Array<string | null> | Array<string | null>): UiSdlCollectionListReact;

  readonly className?: string | null;
  withClassName(className: string | null): UiSdlCollectionListReact;

  readonly defaultSelectedIndex?: number | null;
  withDefaultSelectedIndex(defaultSelectedIndex: number | null): UiSdlCollectionListReact;

  readonly draggable?: boolean;
  withDraggable(draggable: boolean): UiSdlCollectionListReact;

  readonly droppable?: boolean;
  withDroppable(droppable: boolean): UiSdlCollectionListReact;

  readonly highlightSelected?: boolean;
  withHighlightSelected(highlightSelected: boolean): UiSdlCollectionListReact;

  readonly currentlyClickedData?: any | null;
  withCurrentlyClickedData(currentlyClickedData: any | null): UiSdlCollectionListReact;

  readonly iconsMap?: C3.Map<string | null, string | null>;
  withIconsMap(iconsMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlCollectionListReact;

  readonly inline?: boolean;
  withInline(inline: boolean): UiSdlCollectionListReact;

  readonly itemDragAndDropKind?: string | null;
  withItemDragAndDropKind(itemDragAndDropKind: string | null): UiSdlCollectionListReact;

  readonly limit?: number | null;
  withLimit(limit: number | null): UiSdlCollectionListReact;

  readonly orientation?: string | null;
  withOrientation(orientation: string | null): UiSdlCollectionListReact;

  readonly removableItems?: boolean;
  withRemovableItems(removableItems: boolean): UiSdlCollectionListReact;

  readonly removeItemWhenDroppedElsewhere?: boolean;
  withRemoveItemWhenDroppedElsewhere(removeItemWhenDroppedElsewhere: boolean): UiSdlCollectionListReact;

  readonly reorderable?: boolean;
  withReorderable(reorderable: boolean): UiSdlCollectionListReact;

  readonly rowSpacing?: string | null;
  withRowSpacing(rowSpacing: string | null): UiSdlCollectionListReact;

  readonly showDivider?: boolean;
  withShowDivider(showDivider: boolean): UiSdlCollectionListReact;

  readonly showSecondaryDescriptionTooltip?: boolean;
  withShowSecondaryDescriptionTooltip(showSecondaryDescriptionTooltip: boolean): UiSdlCollectionListReact;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlCollectionListReact;
}

