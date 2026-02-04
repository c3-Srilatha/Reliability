export interface TimeRangeCell {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TimeRangeCell;

  readonly id?: string | null;
  withId(id: string | null): TimeRangeCell;

  readonly name?: string | null;
  withName(name: string | null): TimeRangeCell;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): TimeRangeCell;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): TimeRangeCell;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): TimeRangeCell;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): TimeRangeCell;

  readonly option?: C3.Array<Obj | null>;
  withOption(option: C3.Array<Obj | null> | Array<IObj | null>): TimeRangeCell;

  readonly timeSelected?: string | null;
  withTimeSelected(timeSelected: string | null): TimeRangeCell;

  readonly startDate?: string | null;
  withStartDate(startDate: string | null): TimeRangeCell;

  readonly endDate?: string | null;
  withEndDate(endDate: string | null): TimeRangeCell;
}

