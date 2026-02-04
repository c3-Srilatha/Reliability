export interface UiSdlNumberParamKindFormatSpec {

  readonly style?: string | null;
  withStyle(style: string | null): UiSdlNumberParamKindFormatSpec;

  readonly unit?: string | null;
  withUnit(unit: string | null): UiSdlNumberParamKindFormatSpec;

  readonly unitDisplay?: string | null;
  withUnitDisplay(unitDisplay: string | null): UiSdlNumberParamKindFormatSpec;

  readonly currency?: string | null;
  withCurrency(currency: string | null): UiSdlNumberParamKindFormatSpec;

  readonly currencyDisplay?: string | null;
  withCurrencyDisplay(currencyDisplay: string | null): UiSdlNumberParamKindFormatSpec;

  readonly minimumIntegerDigits?: number | null;
  withMinimumIntegerDigits(minimumIntegerDigits: number | null): UiSdlNumberParamKindFormatSpec;

  readonly minimumFractionDigits?: number | null;
  withMinimumFractionDigits(minimumFractionDigits: number | null): UiSdlNumberParamKindFormatSpec;

  readonly maximumFractionDigits?: number | null;
  withMaximumFractionDigits(maximumFractionDigits: number | null): UiSdlNumberParamKindFormatSpec;

  readonly minimumSignificantDigits?: number | null;
  withMinimumSignificantDigits(minimumSignificantDigits: number | null): UiSdlNumberParamKindFormatSpec;

  readonly maximumSignificantDigits?: number | null;
  withMaximumSignificantDigits(maximumSignificantDigits: number | null): UiSdlNumberParamKindFormatSpec;

  readonly notation?: string | null;
  withNotation(notation: string | null): UiSdlNumberParamKindFormatSpec;

  readonly compactDisplay?: string | null;
  withCompactDisplay(compactDisplay: string | null): UiSdlNumberParamKindFormatSpec;
}

