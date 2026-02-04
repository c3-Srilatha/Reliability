export interface UiSdlFormBase<DataType> {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlFormBase;

  readonly id?: string | null;
  withId(id: string | null): UiSdlFormBase;

  readonly name?: string | null;
  withName(name: string | null): UiSdlFormBase;

  readonly dataSpec?: DataType | null;
  withDataSpec(dataSpec: DataType | null): UiSdlFormBase;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlFormBase;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlFormBase;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlFormBase;

  readonly title?: UiSdlComponentTitle | null;
  withTitle(title: IUiSdlComponentTitle | null): UiSdlFormBase;

  readonly formFieldValues?: any | null;
  withFormFieldValues(formFieldValues: any | null): UiSdlFormBase;

  readonly dataRecord?: Obj | null;
  withDataRecord(dataRecord: IObj | null): UiSdlFormBase;
}

