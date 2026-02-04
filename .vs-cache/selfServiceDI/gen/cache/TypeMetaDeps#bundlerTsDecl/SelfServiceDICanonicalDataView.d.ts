export interface SelfServiceDICanonicalDataView {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SelfServiceDICanonicalDataView;

  readonly id?: string | null;
  withId(id: string | null): SelfServiceDICanonicalDataView;

  readonly name?: string | null;
  withName(name: string | null): SelfServiceDICanonicalDataView;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): SelfServiceDICanonicalDataView;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SelfServiceDICanonicalDataView;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SelfServiceDICanonicalDataView;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SelfServiceDICanonicalDataView;

  readonly canonicalDetails?: TypeMeta | null;
  withCanonicalDetails(canonicalDetails: ITypeMeta | null): SelfServiceDICanonicalDataView;

  readonly sourceNodeDetails?: UiSdlDynamicValueSpecParam | null;
  withSourceNodeDetails(sourceNodeDetails: IUiSdlDynamicValueSpecParam | null): SelfServiceDICanonicalDataView;

  readonly buttonText?: string | null | UiSdlDynamicValueSpec | null | null;
  withButtonText(buttonText: string | null | IUiSdlDynamicValueSpec | null | null): SelfServiceDICanonicalDataView;

  readonly transformerContainer?: boolean | UiSdlDynamicValueSpec | null | null;
  withTransformerContainer(transformerContainer: boolean | IUiSdlDynamicValueSpec | null | null): SelfServiceDICanonicalDataView;
}

