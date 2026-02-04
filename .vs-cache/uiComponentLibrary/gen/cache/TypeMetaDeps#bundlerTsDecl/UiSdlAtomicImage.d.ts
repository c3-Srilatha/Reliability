export interface UiSdlAtomicImage {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlAtomicImage;

  readonly id?: string | null;
  withId(id: string | null): UiSdlAtomicImage;

  readonly name?: string | null;
  withName(name: string | null): UiSdlAtomicImage;

  readonly dataSpec?: UiSdlImageDataSpec | null;
  withDataSpec(dataSpec: IUiSdlImageDataSpec | null): UiSdlAtomicImage;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlAtomicImage;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlAtomicImage;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlAtomicImage;

  readonly altText?: string | null | UiSdlDynamicValueSpec | null | null;
  withAltText(altText: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlAtomicImage;

  readonly backgroundColor?: string | null;
  withBackgroundColor(backgroundColor: string | null): UiSdlAtomicImage;

  readonly blurBackground?: boolean;
  withBlurBackground(blurBackground: boolean): UiSdlAtomicImage;

  readonly borderRadius?: string | null;
  withBorderRadius(borderRadius: string | null): UiSdlAtomicImage;

  readonly descriptionText?: string | null;
  withDescriptionText(descriptionText: string | null): UiSdlAtomicImage;

  readonly headerText?: string | null;
  withHeaderText(headerText: string | null): UiSdlAtomicImage;

  readonly horizontalAlign?: string | null;
  withHorizontalAlign(horizontalAlign: string | null): UiSdlAtomicImage;

  readonly ratio?: string | null;
  withRatio(ratio: string | null): UiSdlAtomicImage;

  readonly ratioBehavior?: string | null;
  withRatioBehavior(ratioBehavior: string | null): UiSdlAtomicImage;

  readonly shape?: string | null;
  withShape(shape: string | null): UiSdlAtomicImage;

  readonly showBorder?: boolean;
  withShowBorder(showBorder: boolean): UiSdlAtomicImage;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlAtomicImage;

  readonly url?: string | null | UiSdlImageSrcSpec | null | UiSdlDynamicValueSpec | null | null;
  withUrl(url: string | null | IUiSdlImageSrcSpec | null | IUiSdlDynamicValueSpec | null | null): UiSdlAtomicImage;

  readonly verticalAlign?: string | null;
  withVerticalAlign(verticalAlign: string | null): UiSdlAtomicImage;

  readonly dataRecord?: Obj | null;
  withDataRecord(dataRecord: IObj | null): UiSdlAtomicImage;
}

