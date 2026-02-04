export interface DataFusionUiDeclaredFieldTypeUiSettings {

  readonly id?: string | null;
  withId(id: string | null): DataFusionUiDeclaredFieldTypeUiSettings;

  readonly invalidAlias?: boolean;
  withInvalidAlias(invalidAlias: boolean): DataFusionUiDeclaredFieldTypeUiSettings;

  readonly aliasHintText?: string | null;
  withAliasHintText(aliasHintText: string | null): DataFusionUiDeclaredFieldTypeUiSettings;

  readonly invalidDescription?: boolean;
  withInvalidDescription(invalidDescription: boolean): DataFusionUiDeclaredFieldTypeUiSettings;

  readonly descriptionHintText?: string | null;
  withDescriptionHintText(descriptionHintText: string | null): DataFusionUiDeclaredFieldTypeUiSettings;

  readonly selected?: boolean;
  withSelected(selected: boolean): DataFusionUiDeclaredFieldTypeUiSettings;

  readonly alwaysDisable?: boolean;
  withAlwaysDisable(alwaysDisable: boolean): DataFusionUiDeclaredFieldTypeUiSettings;

  readonly invalidTimeFormat?: boolean;
  withInvalidTimeFormat(invalidTimeFormat: boolean): DataFusionUiDeclaredFieldTypeUiSettings;

  readonly timeFormat?: string | null;
  withTimeFormat(timeFormat: string | null): DataFusionUiDeclaredFieldTypeUiSettings;

  readonly timeFormatHintText?: string | null;
  withTimeFormatHintText(timeFormatHintText: string | null): DataFusionUiDeclaredFieldTypeUiSettings;

  readonly mismatch?: string | null;
  withMismatch(mismatch: string | null): DataFusionUiDeclaredFieldTypeUiSettings;
}

