export interface FunctionLibraryComponentReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): FunctionLibraryComponentReact;

  readonly id?: string | null;
  withId(id: string | null): FunctionLibraryComponentReact;

  readonly name?: string | null;
  withName(name: string | null): FunctionLibraryComponentReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): FunctionLibraryComponentReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): FunctionLibraryComponentReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): FunctionLibraryComponentReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): FunctionLibraryComponentReact;

  readonly expressionLibraryFunctions?: C3.Array<any | null>;
  withExpressionLibraryFunctions(expressionLibraryFunctions: C3.Array<any | null> | Array<any | null>): FunctionLibraryComponentReact;
}

