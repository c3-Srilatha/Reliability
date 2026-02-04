export interface UiSdlThemedValue<T> {

  readonly DARK?: T | null;
  withDARK(DARK: T | null): UiSdlThemedValue;

  readonly LIGHT?: T | null;
  withLIGHT(LIGHT: T | null): UiSdlThemedValue;
}

