export interface UiSdlTypeWorkerTestType {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlTypeWorkerTestType;

  readonly id?: string | null;
  withId(id: string | null): UiSdlTypeWorkerTestType;

  readonly name?: string | null;
  withName(name: string | null): UiSdlTypeWorkerTestType;

  readonly dataSpec?: UiSdlTypeWorkerTestTypeDataSpec | null;
  withDataSpec(dataSpec: IUiSdlTypeWorkerTestTypeDataSpec | null): UiSdlTypeWorkerTestType;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlTypeWorkerTestType;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlTypeWorkerTestType;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlTypeWorkerTestType;

  readonly dummyField?: string | null;
  withDummyField(dummyField: string | null): UiSdlTypeWorkerTestType;

  readonly dummyPrivateField?: string | null;
  withDummyPrivateField(dummyPrivateField: string | null): UiSdlTypeWorkerTestType;

  readonly dummyRequiredField: string;
  withDummyRequiredField(dummyRequiredField: string): UiSdlTypeWorkerTestType;

  readonly dummyArrayField?: C3.Array<string | null>;
  withDummyArrayField(dummyArrayField: C3.Array<string | null> | Array<string | null>): UiSdlTypeWorkerTestType;

  readonly dummyReferenceField?: UiSdlTypeWorkerTestReferenceType | null;
  withDummyReferenceField(dummyReferenceField: IUiSdlTypeWorkerTestReferenceType | null): UiSdlTypeWorkerTestType;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlTypeWorkerTestType;

  readonly dummyArrayReferenceField?: C3.Array<UiSdlTypeWorkerTestReferenceType | null>;
  withDummyArrayReferenceField(dummyArrayReferenceField: C3.Array<UiSdlTypeWorkerTestReferenceType | null> | Array<IUiSdlTypeWorkerTestReferenceType | null>): UiSdlTypeWorkerTestType;

  readonly dummyEnumField?: string | null;
  withDummyEnumField(dummyEnumField: string | null): UiSdlTypeWorkerTestType;

  readonly dummyEnumTypeField?: string | null;
  withDummyEnumTypeField(dummyEnumTypeField: string | null): UiSdlTypeWorkerTestType;

  readonly dummyFieldWithBinding?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withDummyFieldWithBinding(dummyFieldWithBinding: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): UiSdlTypeWorkerTestType;

  readonly dummyFieldWithCustomRenderer?: string | null;
  withDummyFieldWithCustomRenderer(dummyFieldWithCustomRenderer: string | null): UiSdlTypeWorkerTestType;
}

