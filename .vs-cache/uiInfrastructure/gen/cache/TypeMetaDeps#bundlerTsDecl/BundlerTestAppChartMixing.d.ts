export interface BundlerTestAppChartMixing {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppChartMixing;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppChartMixing;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppChartMixing;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BundlerTestAppChartMixing;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppChartMixing;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppChartMixing;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppChartMixing;

  readonly title?: string | null;
  withTitle(title: string | null): BundlerTestAppChartMixing;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): BundlerTestAppChartMixing;

  readonly boolean?: boolean;
  withBoolean(boolean: boolean): BundlerTestAppChartMixing;

  readonly number?: number | null;
  withNumber(number: number | null): BundlerTestAppChartMixing;

  readonly text?: string | null;
  withText(text: string | null): BundlerTestAppChartMixing;

  readonly backgroundColor?: string | null;
  withBackgroundColor(backgroundColor: string | null): BundlerTestAppChartMixing;

  readonly chartColor?: Color | null;
  withChartColor(chartColor: IColor | null): BundlerTestAppChartMixing;
}

