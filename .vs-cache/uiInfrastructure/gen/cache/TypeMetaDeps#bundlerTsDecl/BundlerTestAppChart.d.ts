export interface BundlerTestAppChart {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppChart;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppChart;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppChart;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BundlerTestAppChart;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppChart;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppChart;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppChart;

  readonly title?: string | null;
  withTitle(title: string | null): BundlerTestAppChart;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): BundlerTestAppChart;

  readonly boolean?: boolean;
  withBoolean(boolean: boolean): BundlerTestAppChart;

  readonly number?: number | null;
  withNumber(number: number | null): BundlerTestAppChart;

  readonly text?: string | null;
  withText(text: string | null): BundlerTestAppChart;

  readonly backgroundColor?: string | null;
  withBackgroundColor(backgroundColor: string | null): BundlerTestAppChart;

  readonly chartColor?: Color | null;
  withChartColor(chartColor: IColor | null): BundlerTestAppChart;
}

