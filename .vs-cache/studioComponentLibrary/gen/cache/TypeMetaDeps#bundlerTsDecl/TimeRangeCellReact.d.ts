export interface TimeRangeCellReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TimeRangeCellReact;

  readonly id?: string | null;
  withId(id: string | null): TimeRangeCellReact;

  readonly name?: string | null;
  withName(name: string | null): TimeRangeCellReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): TimeRangeCellReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): TimeRangeCellReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): TimeRangeCellReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): TimeRangeCellReact;

  readonly option?: C3.Array<Obj | null>;
  withOption(option: C3.Array<Obj | null> | Array<IObj | null>): TimeRangeCellReact;

  readonly timeSelected?: string | null;
  withTimeSelected(timeSelected: string | null): TimeRangeCellReact;

  readonly startDate?: string | null;
  withStartDate(startDate: string | null): TimeRangeCellReact;

  readonly endDate?: string | null;
  withEndDate(endDate: string | null): TimeRangeCellReact;
}

