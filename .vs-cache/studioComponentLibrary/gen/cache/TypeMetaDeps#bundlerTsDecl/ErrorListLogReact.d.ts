export interface ErrorListLogReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): ErrorListLogReact;

  readonly id?: string | null;
  withId(id: string | null): ErrorListLogReact;

  readonly name?: string | null;
  withName(name: string | null): ErrorListLogReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): ErrorListLogReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): ErrorListLogReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): ErrorListLogReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): ErrorListLogReact;

  readonly errors: C3.Array<any | null>;
  withErrors(errors: C3.Array<any | null> | Array<any | null>): ErrorListLogReact;

  readonly fieldName: string;
  withFieldName(fieldName: string): ErrorListLogReact;

  readonly errorDetailsTitle?: string | null;
  withErrorDetailsTitle(errorDetailsTitle: string | null): ErrorListLogReact;
}

