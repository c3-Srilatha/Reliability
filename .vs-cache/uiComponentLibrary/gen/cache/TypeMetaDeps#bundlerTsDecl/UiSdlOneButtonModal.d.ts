export interface UiSdlOneButtonModal {

  readonly primaryButtonLabel?: string | null;
  withPrimaryButtonLabel(primaryButtonLabel: string | null): UiSdlOneButtonModal;

  readonly closeModalOnPrimaryButtonClick?: boolean;
  withCloseModalOnPrimaryButtonClick(closeModalOnPrimaryButtonClick: boolean): UiSdlOneButtonModal;

  readonly primaryButtonStyle?: string | null;
  withPrimaryButtonStyle(primaryButtonStyle: string | null): UiSdlOneButtonModal;
}

