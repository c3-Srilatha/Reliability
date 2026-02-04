export interface BundlerTestAppChartMixingReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppChartMixingReact;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppChartMixingReact;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppChartMixingReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BundlerTestAppChartMixingReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppChartMixingReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppChartMixingReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppChartMixingReact;

  readonly title?: string | null;
  withTitle(title: string | null): BundlerTestAppChartMixingReact;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): BundlerTestAppChartMixingReact;

  readonly boolean?: boolean;
  withBoolean(boolean: boolean): BundlerTestAppChartMixingReact;

  readonly number?: number | null;
  withNumber(number: number | null): BundlerTestAppChartMixingReact;

  readonly text?: string | null;
  withText(text: string | null): BundlerTestAppChartMixingReact;

  readonly backgroundColor?: string | null;
  withBackgroundColor(backgroundColor: string | null): BundlerTestAppChartMixingReact;

  readonly chartColor?: Color | null;
  withChartColor(chartColor: IColor | null): BundlerTestAppChartMixingReact;
}

