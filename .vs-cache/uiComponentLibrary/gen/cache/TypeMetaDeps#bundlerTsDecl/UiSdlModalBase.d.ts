export interface UiSdlModalBase {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlModalBase;

  readonly id?: string | null;
  withId(id: string | null): UiSdlModalBase;

  readonly name?: string | null;
  withName(name: string | null): UiSdlModalBase;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlModalBase;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlModalBase;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlModalBase;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlModalBase;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlModalBase;

  readonly closeWithStackedModal?: boolean;
  withCloseWithStackedModal(closeWithStackedModal: boolean): UiSdlModalBase;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlModalBase;

  readonly open?: boolean;
  withOpen(open: boolean): UiSdlModalBase;
}

