export interface SelfServiceDICanonicalDataViewReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SelfServiceDICanonicalDataViewReact;

  readonly id?: string | null;
  withId(id: string | null): SelfServiceDICanonicalDataViewReact;

  readonly name?: string | null;
  withName(name: string | null): SelfServiceDICanonicalDataViewReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): SelfServiceDICanonicalDataViewReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SelfServiceDICanonicalDataViewReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SelfServiceDICanonicalDataViewReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SelfServiceDICanonicalDataViewReact;

  readonly canonicalDetails?: TypeMeta | null;
  withCanonicalDetails(canonicalDetails: ITypeMeta | null): SelfServiceDICanonicalDataViewReact;

  readonly sourceNodeDetails?: UiSdlDynamicValueSpecParam | null;
  withSourceNodeDetails(sourceNodeDetails: IUiSdlDynamicValueSpecParam | null): SelfServiceDICanonicalDataViewReact;

  readonly buttonText?: string | null | UiSdlDynamicValueSpec | null | null;
  withButtonText(buttonText: string | null | IUiSdlDynamicValueSpec | null | null): SelfServiceDICanonicalDataViewReact;

  readonly transformerContainer?: boolean | UiSdlDynamicValueSpec | null | null;
  withTransformerContainer(transformerContainer: boolean | IUiSdlDynamicValueSpec | null | null): SelfServiceDICanonicalDataViewReact;
}

