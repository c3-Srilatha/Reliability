export interface SubtitledRadioButtonGroup {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SubtitledRadioButtonGroup;

  readonly id?: string | null;
  withId(id: string | null): SubtitledRadioButtonGroup;

  readonly name: string;
  withName(name: string): SubtitledRadioButtonGroup;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): SubtitledRadioButtonGroup;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SubtitledRadioButtonGroup;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SubtitledRadioButtonGroup;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SubtitledRadioButtonGroup;

  readonly label?: string | null;
  withLabel(label: string | null): SubtitledRadioButtonGroup;

  readonly radioButtons: C3.Array<SubtitledRadioButtonOption | null>;
  withRadioButtons(radioButtons: C3.Array<SubtitledRadioButtonOption | null> | Array<ISubtitledRadioButtonOption | null>): SubtitledRadioButtonGroup;

  readonly selectedValue?: string | null;
  withSelectedValue(selectedValue: string | null): SubtitledRadioButtonGroup;

  readonly enabled?: boolean;
  withEnabled(enabled: boolean): SubtitledRadioButtonGroup;
}

