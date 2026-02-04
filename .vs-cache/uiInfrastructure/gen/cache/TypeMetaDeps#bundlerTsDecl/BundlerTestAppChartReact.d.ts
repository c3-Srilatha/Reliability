export interface BundlerTestAppChartReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppChartReact;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppChartReact;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppChartReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BundlerTestAppChartReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppChartReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppChartReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppChartReact;

  readonly title?: string | null;
  withTitle(title: string | null): BundlerTestAppChartReact;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): BundlerTestAppChartReact;

  readonly boolean?: boolean;
  withBoolean(boolean: boolean): BundlerTestAppChartReact;

  readonly number?: number | null;
  withNumber(number: number | null): BundlerTestAppChartReact;

  readonly text?: string | null;
  withText(text: string | null): BundlerTestAppChartReact;

  readonly backgroundColor?: string | null;
  withBackgroundColor(backgroundColor: string | null): BundlerTestAppChartReact;

  readonly chartColor?: Color | null;
  withChartColor(chartColor: IColor | null): BundlerTestAppChartReact;
}

