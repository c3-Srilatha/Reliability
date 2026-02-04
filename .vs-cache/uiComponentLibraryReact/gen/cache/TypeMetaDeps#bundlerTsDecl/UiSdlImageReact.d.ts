export interface UiSdlImageReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlImageReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlImageReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlImageReact;

  readonly dataSpec?: UiSdlImageDataSpec | null;
  withDataSpec(dataSpec: IUiSdlImageDataSpec | null): UiSdlImageReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlImageReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlImageReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlImageReact;

  readonly className?: string | null;
  withClassName(className: string | null): UiSdlImageReact;

  readonly altText?: string | null;
  withAltText(altText: string | null): UiSdlImageReact;

  readonly descriptionText?: string | null;
  withDescriptionText(descriptionText: string | null): UiSdlImageReact;

  readonly headerText?: string | null;
  withHeaderText(headerText: string | null): UiSdlImageReact;

  readonly horizontalAlign?: string | null;
  withHorizontalAlign(horizontalAlign: string | null): UiSdlImageReact;

  readonly shape?: string | null;
  withShape(shape: string | null): UiSdlImageReact;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlImageReact;

  readonly url?: string | null | UiSdlImageSrcSpec | null | null;
  withUrl(url: string | null | IUiSdlImageSrcSpec | null | null): UiSdlImageReact;

  readonly verticalAlign?: string | null;
  withVerticalAlign(verticalAlign: string | null): UiSdlImageReact;

  readonly dataRecord?: Obj | null;
  withDataRecord(dataRecord: IObj | null): UiSdlImageReact;
}

