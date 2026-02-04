export interface BottomSheet {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BottomSheet;

  readonly id?: string | null;
  withId(id: string | null): BottomSheet;

  readonly name?: string | null;
  withName(name: string | null): BottomSheet;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BottomSheet;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BottomSheet;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BottomSheet;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BottomSheet;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): BottomSheet;

  readonly dragAndDropEnabled?: boolean;
  withDragAndDropEnabled(dragAndDropEnabled: boolean): BottomSheet;

  readonly attachedComponent?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withAttachedComponent(attachedComponent: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): BottomSheet;

  readonly attachedComponents?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withAttachedComponents(attachedComponents: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): BottomSheet;

  readonly alignment?: string | null;
  withAlignment(alignment: string | null): BottomSheet;

  readonly collapsible?: boolean;
  withCollapsible(collapsible: boolean): BottomSheet;

  readonly open?: boolean;
  withOpen(open: boolean): BottomSheet;

  readonly expanded?: boolean;
  withExpanded(expanded: boolean): BottomSheet;

  readonly closeOnEscape?: boolean;
  withCloseOnEscape(closeOnEscape: boolean): BottomSheet;

  readonly hideCloseButton?: boolean;
  withHideCloseButton(hideCloseButton: boolean): BottomSheet;

  readonly activeComponentId?: string | null;
  withActiveComponentId(activeComponentId: string | null): BottomSheet;

  readonly actions?: C3.Array<UiSdlActionGroup | null | UiSdlBaseDataGridToggleableTableActionGroup | null | null>;
  withActions(actions: C3.Array<UiSdlActionGroup | null | UiSdlBaseDataGridToggleableTableActionGroup | null | null> | Array<IUiSdlActionGroup | null | IUiSdlBaseDataGridToggleableTableActionGroup | null | null>): BottomSheet;
}

