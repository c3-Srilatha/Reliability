export interface UiSdlThreeButtonModal {

  readonly primaryButtonLabel?: string | null;
  withPrimaryButtonLabel(primaryButtonLabel: string | null): UiSdlThreeButtonModal;

  readonly closeModalOnPrimaryButtonClick?: boolean;
  withCloseModalOnPrimaryButtonClick(closeModalOnPrimaryButtonClick: boolean): UiSdlThreeButtonModal;

  readonly primaryButtonStyle?: string | null;
  withPrimaryButtonStyle(primaryButtonStyle: string | null): UiSdlThreeButtonModal;

  readonly closeModalOnSecondaryButtonClick?: boolean;
  withCloseModalOnSecondaryButtonClick(closeModalOnSecondaryButtonClick: boolean): UiSdlThreeButtonModal;

  readonly secondaryButtonLabel?: string | null;
  withSecondaryButtonLabel(secondaryButtonLabel: string | null): UiSdlThreeButtonModal;

  readonly secondaryButtonStyle?: string | null;
  withSecondaryButtonStyle(secondaryButtonStyle: string | null): UiSdlThreeButtonModal;

  readonly closeModalOnTertiaryButtonClick?: boolean;
  withCloseModalOnTertiaryButtonClick(closeModalOnTertiaryButtonClick: boolean): UiSdlThreeButtonModal;

  readonly tertiaryButtonLabel?: string | null;
  withTertiaryButtonLabel(tertiaryButtonLabel: string | null): UiSdlThreeButtonModal;

  readonly tertiaryButtonStyle?: string | null;
  withTertiaryButtonStyle(tertiaryButtonStyle: string | null): UiSdlThreeButtonModal;
}

