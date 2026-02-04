export interface UiSdlMultiStepModalReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlMultiStepModalReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlMultiStepModalReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlMultiStepModalReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlMultiStepModalReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlMultiStepModalReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlMultiStepModalReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlMultiStepModalReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlMultiStepModalReact;

  readonly closeWithStackedModal?: boolean;
  withCloseWithStackedModal(closeWithStackedModal: boolean): UiSdlMultiStepModalReact;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlMultiStepModalReact;

  readonly open?: boolean;
  withOpen(open: boolean): UiSdlMultiStepModalReact;

  readonly currentIndex?: number | null;
  withCurrentIndex(currentIndex: number | null): UiSdlMultiStepModalReact;
}

