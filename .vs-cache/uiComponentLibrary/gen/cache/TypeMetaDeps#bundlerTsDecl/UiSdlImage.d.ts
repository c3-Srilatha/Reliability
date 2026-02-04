export interface UiSdlImage {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlImage;

  readonly id?: string | null;
  withId(id: string | null): UiSdlImage;

  readonly name?: string | null;
  withName(name: string | null): UiSdlImage;

  readonly dataSpec?: UiSdlImageDataSpec | null;
  withDataSpec(dataSpec: IUiSdlImageDataSpec | null): UiSdlImage;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlImage;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlImage;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlImage;

  readonly className?: string | null;
  withClassName(className: string | null): UiSdlImage;

  readonly altText?: string | null;
  withAltText(altText: string | null): UiSdlImage;

  readonly descriptionText?: string | null;
  withDescriptionText(descriptionText: string | null): UiSdlImage;

  readonly headerText?: string | null;
  withHeaderText(headerText: string | null): UiSdlImage;

  readonly horizontalAlign?: string | null;
  withHorizontalAlign(horizontalAlign: string | null): UiSdlImage;

  readonly shape?: string | null;
  withShape(shape: string | null): UiSdlImage;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlImage;

  readonly url?: string | null | UiSdlImageSrcSpec | null | null;
  withUrl(url: string | null | IUiSdlImageSrcSpec | null | null): UiSdlImage;

  readonly verticalAlign?: string | null;
  withVerticalAlign(verticalAlign: string | null): UiSdlImage;

  readonly dataRecord?: Obj | null;
  withDataRecord(dataRecord: IObj | null): UiSdlImage;
}

