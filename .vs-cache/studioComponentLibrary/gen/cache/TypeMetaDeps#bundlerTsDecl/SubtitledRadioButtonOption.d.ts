export interface SubtitledRadioButtonOption {

  readonly value: string;
  withValue(value: string): SubtitledRadioButtonOption;

  readonly title: string;
  withTitle(title: string): SubtitledRadioButtonOption;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): SubtitledRadioButtonOption;

  readonly enabled?: boolean;
  withEnabled(enabled: boolean): SubtitledRadioButtonOption;
}

