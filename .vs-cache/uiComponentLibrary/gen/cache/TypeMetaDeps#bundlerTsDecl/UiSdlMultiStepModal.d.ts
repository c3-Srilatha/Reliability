export interface UiSdlMultiStepModal {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlMultiStepModal;

  readonly id?: string | null;
  withId(id: string | null): UiSdlMultiStepModal;

  readonly name?: string | null;
  withName(name: string | null): UiSdlMultiStepModal;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlMultiStepModal;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlMultiStepModal;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlMultiStepModal;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlMultiStepModal;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlMultiStepModal;

  readonly closeWithStackedModal?: boolean;
  withCloseWithStackedModal(closeWithStackedModal: boolean): UiSdlMultiStepModal;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlMultiStepModal;

  readonly open?: boolean;
  withOpen(open: boolean): UiSdlMultiStepModal;

  readonly currentIndex?: number | null;
  withCurrentIndex(currentIndex: number | null): UiSdlMultiStepModal;
}

