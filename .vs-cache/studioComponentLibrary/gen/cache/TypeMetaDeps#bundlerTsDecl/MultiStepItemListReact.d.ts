export interface MultiStepItemListReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): MultiStepItemListReact;

  readonly id?: string | null;
  withId(id: string | null): MultiStepItemListReact;

  readonly name?: string | null;
  withName(name: string | null): MultiStepItemListReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): MultiStepItemListReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): MultiStepItemListReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): MultiStepItemListReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): MultiStepItemListReact;

  readonly multiStepItemList?: C3.Array<MultiStepItem | null>;
  withMultiStepItemList(multiStepItemList: C3.Array<MultiStepItem | null> | Array<IMultiStepItem | null>): MultiStepItemListReact;

  readonly currentStep?: number | null;
  withCurrentStep(currentStep: number | null): MultiStepItemListReact;
}

