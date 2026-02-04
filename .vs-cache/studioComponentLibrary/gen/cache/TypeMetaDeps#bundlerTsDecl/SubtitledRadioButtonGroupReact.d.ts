export interface SubtitledRadioButtonGroupReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): SubtitledRadioButtonGroupReact;

  readonly id?: string | null;
  withId(id: string | null): SubtitledRadioButtonGroupReact;

  readonly name: string;
  withName(name: string): SubtitledRadioButtonGroupReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): SubtitledRadioButtonGroupReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): SubtitledRadioButtonGroupReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): SubtitledRadioButtonGroupReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): SubtitledRadioButtonGroupReact;

  readonly label?: string | null;
  withLabel(label: string | null): SubtitledRadioButtonGroupReact;

  readonly radioButtons: C3.Array<SubtitledRadioButtonOption | null>;
  withRadioButtons(radioButtons: C3.Array<SubtitledRadioButtonOption | null> | Array<ISubtitledRadioButtonOption | null>): SubtitledRadioButtonGroupReact;

  readonly selectedValue?: string | null;
  withSelectedValue(selectedValue: string | null): SubtitledRadioButtonGroupReact;

  readonly enabled?: boolean;
  withEnabled(enabled: boolean): SubtitledRadioButtonGroupReact;
}

