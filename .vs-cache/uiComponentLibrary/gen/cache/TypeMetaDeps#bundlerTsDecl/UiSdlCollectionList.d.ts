export interface UiSdlCollectionList {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlCollectionList;

  readonly id?: string | null;
  withId(id: string | null): UiSdlCollectionList;

  readonly name?: string | null;
  withName(name: string | null): UiSdlCollectionList;

  readonly dataSpec?: UiSdlCollectionListDataSpec | null;
  withDataSpec(dataSpec: IUiSdlCollectionListDataSpec | null): UiSdlCollectionList;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlCollectionList;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlCollectionList;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlCollectionList;

  readonly dataCollection?: UiSdlCollectionListDataCollection | null;
  withDataCollection(dataCollection: IUiSdlCollectionListDataCollection | null): UiSdlCollectionList;

  readonly emptyState?: UiSdlComponentRef<UiSdlEmptyState | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlEmptyState | null> | null): UiSdlCollectionList;

  readonly acceptedDragAndDropKinds?: C3.Array<string | null>;
  withAcceptedDragAndDropKinds(acceptedDragAndDropKinds: C3.Array<string | null> | Array<string | null>): UiSdlCollectionList;

  readonly className?: string | null;
  withClassName(className: string | null): UiSdlCollectionList;

  readonly defaultSelectedIndex?: number | null;
  withDefaultSelectedIndex(defaultSelectedIndex: number | null): UiSdlCollectionList;

  readonly draggable?: boolean;
  withDraggable(draggable: boolean): UiSdlCollectionList;

  readonly droppable?: boolean;
  withDroppable(droppable: boolean): UiSdlCollectionList;

  readonly highlightSelected?: boolean;
  withHighlightSelected(highlightSelected: boolean): UiSdlCollectionList;

  readonly currentlyClickedData?: any | null;
  withCurrentlyClickedData(currentlyClickedData: any | null): UiSdlCollectionList;

  readonly iconsMap?: C3.Map<string | null, string | null>;
  withIconsMap(iconsMap: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlCollectionList;

  readonly inline?: boolean;
  withInline(inline: boolean): UiSdlCollectionList;

  readonly itemDragAndDropKind?: string | null;
  withItemDragAndDropKind(itemDragAndDropKind: string | null): UiSdlCollectionList;

  readonly limit?: number | null;
  withLimit(limit: number | null): UiSdlCollectionList;

  readonly orientation?: string | null;
  withOrientation(orientation: string | null): UiSdlCollectionList;

  readonly removableItems?: boolean;
  withRemovableItems(removableItems: boolean): UiSdlCollectionList;

  readonly removeItemWhenDroppedElsewhere?: boolean;
  withRemoveItemWhenDroppedElsewhere(removeItemWhenDroppedElsewhere: boolean): UiSdlCollectionList;

  readonly reorderable?: boolean;
  withReorderable(reorderable: boolean): UiSdlCollectionList;

  readonly rowSpacing?: string | null;
  withRowSpacing(rowSpacing: string | null): UiSdlCollectionList;

  readonly showDivider?: boolean;
  withShowDivider(showDivider: boolean): UiSdlCollectionList;

  readonly showSecondaryDescriptionTooltip?: boolean;
  withShowSecondaryDescriptionTooltip(showSecondaryDescriptionTooltip: boolean): UiSdlCollectionList;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlCollectionList;
}

