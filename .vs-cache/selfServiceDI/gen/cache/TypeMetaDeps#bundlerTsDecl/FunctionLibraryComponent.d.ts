export interface FunctionLibraryComponent {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): FunctionLibraryComponent;

  readonly id?: string | null;
  withId(id: string | null): FunctionLibraryComponent;

  readonly name?: string | null;
  withName(name: string | null): FunctionLibraryComponent;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): FunctionLibraryComponent;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): FunctionLibraryComponent;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): FunctionLibraryComponent;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): FunctionLibraryComponent;

  readonly expressionLibraryFunctions?: C3.Array<any | null>;
  withExpressionLibraryFunctions(expressionLibraryFunctions: C3.Array<any | null> | Array<any | null>): FunctionLibraryComponent;
}

