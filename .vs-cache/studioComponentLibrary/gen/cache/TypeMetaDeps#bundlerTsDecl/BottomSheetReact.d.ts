export interface BottomSheetReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BottomSheetReact;

  readonly id?: string | null;
  withId(id: string | null): BottomSheetReact;

  readonly name?: string | null;
  withName(name: string | null): BottomSheetReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BottomSheetReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BottomSheetReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BottomSheetReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BottomSheetReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): BottomSheetReact;

  readonly dragAndDropEnabled?: boolean;
  withDragAndDropEnabled(dragAndDropEnabled: boolean): BottomSheetReact;

  readonly attachedComponent?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withAttachedComponent(attachedComponent: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): BottomSheetReact;

  readonly attachedComponents?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withAttachedComponents(attachedComponents: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): BottomSheetReact;

  readonly alignment?: string | null;
  withAlignment(alignment: string | null): BottomSheetReact;

  readonly collapsible?: boolean;
  withCollapsible(collapsible: boolean): BottomSheetReact;

  readonly open?: boolean;
  withOpen(open: boolean): BottomSheetReact;

  readonly expanded?: boolean;
  withExpanded(expanded: boolean): BottomSheetReact;

  readonly closeOnEscape?: boolean;
  withCloseOnEscape(closeOnEscape: boolean): BottomSheetReact;

  readonly hideCloseButton?: boolean;
  withHideCloseButton(hideCloseButton: boolean): BottomSheetReact;

  readonly activeComponentId?: string | null;
  withActiveComponentId(activeComponentId: string | null): BottomSheetReact;

  readonly actions?: C3.Array<UiSdlActionGroup | null | UiSdlBaseDataGridToggleableTableActionGroup | null | null>;
  withActions(actions: C3.Array<UiSdlActionGroup | null | UiSdlBaseDataGridToggleableTableActionGroup | null | null> | Array<IUiSdlActionGroup | null | IUiSdlBaseDataGridToggleableTableActionGroup | null | null>): BottomSheetReact;
}

