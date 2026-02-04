export interface UiSdlAtomicImageReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlAtomicImageReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlAtomicImageReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlAtomicImageReact;

  readonly dataSpec?: UiSdlImageDataSpec | null;
  withDataSpec(dataSpec: IUiSdlImageDataSpec | null): UiSdlAtomicImageReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlAtomicImageReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlAtomicImageReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlAtomicImageReact;

  readonly altText?: string | null | UiSdlDynamicValueSpec | null | null;
  withAltText(altText: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlAtomicImageReact;

  readonly backgroundColor?: string | null;
  withBackgroundColor(backgroundColor: string | null): UiSdlAtomicImageReact;

  readonly blurBackground?: boolean;
  withBlurBackground(blurBackground: boolean): UiSdlAtomicImageReact;

  readonly borderRadius?: string | null;
  withBorderRadius(borderRadius: string | null): UiSdlAtomicImageReact;

  readonly descriptionText?: string | null;
  withDescriptionText(descriptionText: string | null): UiSdlAtomicImageReact;

  readonly headerText?: string | null;
  withHeaderText(headerText: string | null): UiSdlAtomicImageReact;

  readonly horizontalAlign?: string | null;
  withHorizontalAlign(horizontalAlign: string | null): UiSdlAtomicImageReact;

  readonly ratio?: string | null;
  withRatio(ratio: string | null): UiSdlAtomicImageReact;

  readonly ratioBehavior?: string | null;
  withRatioBehavior(ratioBehavior: string | null): UiSdlAtomicImageReact;

  readonly shape?: string | null;
  withShape(shape: string | null): UiSdlAtomicImageReact;

  readonly showBorder?: boolean;
  withShowBorder(showBorder: boolean): UiSdlAtomicImageReact;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlAtomicImageReact;

  readonly url?: string | null | UiSdlImageSrcSpec | null | UiSdlDynamicValueSpec | null | null;
  withUrl(url: string | null | IUiSdlImageSrcSpec | null | IUiSdlDynamicValueSpec | null | null): UiSdlAtomicImageReact;

  readonly verticalAlign?: string | null;
  withVerticalAlign(verticalAlign: string | null): UiSdlAtomicImageReact;

  readonly dataRecord?: Obj | null;
  withDataRecord(dataRecord: IObj | null): UiSdlAtomicImageReact;
}

