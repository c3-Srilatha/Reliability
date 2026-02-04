export interface StudioSearchBarOption {

  readonly value: string;
  withValue(value: string): StudioSearchBarOption;

  readonly title: string;
  withTitle(title: string): StudioSearchBarOption;

  readonly icon?: string | null;
  withIcon(icon: string | null): StudioSearchBarOption;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): StudioSearchBarOption;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): StudioSearchBarOption;
}

