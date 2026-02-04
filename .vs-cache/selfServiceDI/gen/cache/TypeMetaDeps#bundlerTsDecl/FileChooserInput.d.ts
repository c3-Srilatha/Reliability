export interface FileChooserInput {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): FileChooserInput;

  readonly id?: string | null;
  withId(id: string | null): FileChooserInput;

  readonly name?: string | null;
  withName(name: string | null): FileChooserInput;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): FileChooserInput;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): FileChooserInput;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): FileChooserInput;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): FileChooserInput;

  readonly label?: string | null;
  withLabel(label: string | null): FileChooserInput;

  readonly required?: boolean;
  withRequired(required: boolean): FileChooserInput;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): FileChooserInput;

  readonly allowableFileExtensions?: C3.Array<string | null>;
  withAllowableFileExtensions(allowableFileExtensions: C3.Array<string | null> | Array<string | null>): FileChooserInput;
}

