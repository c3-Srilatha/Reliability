export interface BundlerTestApplicationState {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestApplicationState;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestApplicationState;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestApplicationState;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): BundlerTestApplicationState;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestApplicationState;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestApplicationState;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestApplicationState;

  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): BundlerTestApplicationState;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): BundlerTestApplicationState;

  readonly totalCount?: number | null;
  withTotalCount(totalCount: number | null): BundlerTestApplicationState;

  readonly buttonClickCountById?: C3.Map<string | null, number | null>;
  withButtonClickCountById(buttonClickCountById: C3.Map<string | null, number | null> | {[key: string | null]: number | null}): BundlerTestApplicationState;

  readonly heading?: BundlerTestAppHeading | null;
  withHeading(heading: IBundlerTestAppHeading | null): BundlerTestApplicationState;

  readonly machineStatus?: string | null;
  withMachineStatus(machineStatus: string | null): BundlerTestApplicationState;
}

