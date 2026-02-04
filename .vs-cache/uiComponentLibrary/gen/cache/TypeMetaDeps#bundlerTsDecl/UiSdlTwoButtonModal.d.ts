export interface UiSdlTwoButtonModal {

  readonly primaryButtonLabel?: string | null;
  withPrimaryButtonLabel(primaryButtonLabel: string | null): UiSdlTwoButtonModal;

  readonly closeModalOnPrimaryButtonClick?: boolean;
  withCloseModalOnPrimaryButtonClick(closeModalOnPrimaryButtonClick: boolean): UiSdlTwoButtonModal;

  readonly primaryButtonStyle?: string | null;
  withPrimaryButtonStyle(primaryButtonStyle: string | null): UiSdlTwoButtonModal;

  readonly closeModalOnSecondaryButtonClick?: boolean;
  withCloseModalOnSecondaryButtonClick(closeModalOnSecondaryButtonClick: boolean): UiSdlTwoButtonModal;

  readonly secondaryButtonLabel?: string | null;
  withSecondaryButtonLabel(secondaryButtonLabel: string | null): UiSdlTwoButtonModal;

  readonly secondaryButtonStyle?: string | null;
  withSecondaryButtonStyle(secondaryButtonStyle: string | null): UiSdlTwoButtonModal;
}

