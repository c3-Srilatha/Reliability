export interface FileChooserInputReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): FileChooserInputReact;

  readonly id?: string | null;
  withId(id: string | null): FileChooserInputReact;

  readonly name?: string | null;
  withName(name: string | null): FileChooserInputReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): FileChooserInputReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): FileChooserInputReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): FileChooserInputReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): FileChooserInputReact;

  readonly label?: string | null;
  withLabel(label: string | null): FileChooserInputReact;

  readonly required?: boolean;
  withRequired(required: boolean): FileChooserInputReact;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): FileChooserInputReact;

  readonly allowableFileExtensions?: C3.Array<string | null>;
  withAllowableFileExtensions(allowableFileExtensions: C3.Array<string | null> | Array<string | null>): FileChooserInputReact;
}

