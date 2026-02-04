export interface ErrorListLog {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): ErrorListLog;

  readonly id?: string | null;
  withId(id: string | null): ErrorListLog;

  readonly name?: string | null;
  withName(name: string | null): ErrorListLog;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): ErrorListLog;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): ErrorListLog;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): ErrorListLog;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): ErrorListLog;

  readonly errors: C3.Array<any | null>;
  withErrors(errors: C3.Array<any | null> | Array<any | null>): ErrorListLog;

  readonly fieldName: string;
  withFieldName(fieldName: string): ErrorListLog;

  readonly errorDetailsTitle?: string | null;
  withErrorDetailsTitle(errorDetailsTitle: string | null): ErrorListLog;
}

