export interface InformationCardFields {

  readonly id?: string | null;
  withId(id: string | null): InformationCardFields;

  readonly image?: string | null;
  withImage(image: string | null): InformationCardFields;

  readonly iconName?: string | null;
  withIconName(iconName: string | null): InformationCardFields;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): InformationCardFields;

  readonly subtitle?: string | null | UiSdlDynamicValueSpec | null | null;
  withSubtitle(subtitle: string | null | IUiSdlDynamicValueSpec | null | null): InformationCardFields;

  readonly description?: string | null | UiSdlDynamicValueSpec | null | null;
  withDescription(description: string | null | IUiSdlDynamicValueSpec | null | null): InformationCardFields;
}

