export interface MultiStepItemList {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): MultiStepItemList;

  readonly id?: string | null;
  withId(id: string | null): MultiStepItemList;

  readonly name?: string | null;
  withName(name: string | null): MultiStepItemList;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): MultiStepItemList;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): MultiStepItemList;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): MultiStepItemList;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): MultiStepItemList;

  readonly multiStepItemList?: C3.Array<MultiStepItem | null>;
  withMultiStepItemList(multiStepItemList: C3.Array<MultiStepItem | null> | Array<IMultiStepItem | null>): MultiStepItemList;

  readonly currentStep?: number | null;
  withCurrentStep(currentStep: number | null): MultiStepItemList;
}

