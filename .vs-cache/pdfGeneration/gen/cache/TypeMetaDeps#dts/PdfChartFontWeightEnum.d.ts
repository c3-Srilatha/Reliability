// TypeScript definitions for the C3 type PdfChartFontWeightEnum

/**
 * Specifies the weight (bold) of the text on a chart.
 *
 * @remarks this represents a value passed to a method that expects an instance of PdfChartFontWeightEnum
 */
declare interface IPdfChartFontWeightEnum {

  /**
   * Very thin font weight.
   */
  ULTRALIGHT?: string;

  /**
   * A slightly heavier font weight than 'ultralight'.
   */
  LIGHT?: string;

  /**
   * Standard font weight.
   */
  NORMAL?: string;

  /**
   * Almost equivalent to normal.
   */
  REGULAR?: string;

  /**
   * A weight slightly lighter than 'normal'.
   */
  BOOK?: string;

  /**
   * A mid-weight font between 'regular' and 'bold'.
   */
  MEDIUM?: string;

  /**
   * Standard serif font weight, typically similar to 'regular'.
   */
  ROMAN?: string;

  /**
   * A font weight between 'medium' and 'bold'.
   */
  SEMIBOLD?: string;

  /**
   * Synonym for 'semibold'; used in some typefaces.
   */
  DEMI_BOLD?: string;

  /**
   * Another term for 'semibold'; context-dependent.
   */
  DEMI?: string;

  /**
   * Standard bold font weight.
   */
  BOLD?: string;

  /**
   * A heavier font weight than 'bold'.
   */
  HEAVY?: string;

  /**
   * Bolder than 'bold', but not as heavy as 'black'.
   */
  EXTRA_BOLD?: string;

  /**
   * The heaviest font weight; used for maximum emphasis.
   */
  BLACK?: string;
}

/**
 * Specifies the weight (bold) of the text on a chart.
 *
 * @remarks this represents a made instance of PdfChartFontWeightEnum
 */
declare class PdfChartFontWeightEnum {

  /**
   * Very thin font weight.
   */
  readonly ULTRALIGHT?: string;
  withULTRALIGHT(ULTRALIGHT: string | null): PdfChartFontWeightEnum;

  /**
   * A slightly heavier font weight than 'ultralight'.
   */
  readonly LIGHT?: string;
  withLIGHT(LIGHT: string | null): PdfChartFontWeightEnum;

  /**
   * Standard font weight.
   */
  readonly NORMAL?: string;
  withNORMAL(NORMAL: string | null): PdfChartFontWeightEnum;

  /**
   * Almost equivalent to normal.
   */
  readonly REGULAR?: string;
  withREGULAR(REGULAR: string | null): PdfChartFontWeightEnum;

  /**
   * A weight slightly lighter than 'normal'.
   */
  readonly BOOK?: string;
  withBOOK(BOOK: string | null): PdfChartFontWeightEnum;

  /**
   * A mid-weight font between 'regular' and 'bold'.
   */
  readonly MEDIUM?: string;
  withMEDIUM(MEDIUM: string | null): PdfChartFontWeightEnum;

  /**
   * Standard serif font weight, typically similar to 'regular'.
   */
  readonly ROMAN?: string;
  withROMAN(ROMAN: string | null): PdfChartFontWeightEnum;

  /**
   * A font weight between 'medium' and 'bold'.
   */
  readonly SEMIBOLD?: string;
  withSEMIBOLD(SEMIBOLD: string | null): PdfChartFontWeightEnum;

  /**
   * Synonym for 'semibold'; used in some typefaces.
   */
  readonly DEMI_BOLD?: string;
  withDEMI_BOLD(DEMI_BOLD: string | null): PdfChartFontWeightEnum;

  /**
   * Another term for 'semibold'; context-dependent.
   */
  readonly DEMI?: string;
  withDEMI(DEMI: string | null): PdfChartFontWeightEnum;

  /**
   * Standard bold font weight.
   */
  readonly BOLD?: string;
  withBOLD(BOLD: string | null): PdfChartFontWeightEnum;

  /**
   * A heavier font weight than 'bold'.
   */
  readonly HEAVY?: string;
  withHEAVY(HEAVY: string | null): PdfChartFontWeightEnum;

  /**
   * Bolder than 'bold', but not as heavy as 'black'.
   */
  readonly EXTRA_BOLD?: string;
  withEXTRA_BOLD(EXTRA_BOLD: string | null): PdfChartFontWeightEnum;

  /**
   * The heaviest font weight; used for maximum emphasis.
   */
  readonly BLACK?: string;
  withBLACK(BLACK: string | null): PdfChartFontWeightEnum;

  /**
   * Translate the enum label (field name) to the value.
   * For simple enums (that don't define explicit values), the value is a string
   * that matches the label.
   * @param label the enum label
   * @return the associated value
   */
  static toValue(label: string, failIfInvalid?: boolean): string | null;

  /**
   * Translate the enum value to the label (field name).
   * @param value the enum value
   * @return the enum label
   */
  static toLabel(value: string, failIfInvalid?: boolean): string | null;

  /**
   * Get the index of the label in the enum.
   * @param label the enum label (field name)
   * @return index or -1 if not found
   */
  static labelIndex(label: string, failIfInvalid?: boolean): number;

  /**
   * Get the index of the value in the enum.
   * @param value the enum value
   * @return index or -1 if not found
   */
  static valueIndex(value: string, failIfInvalid?: boolean): number;

  /**
   * @return value type of values in this enum
   */
  static valueType(): ValueType;

  /**
   * Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
   * the field name (same as the labels).
   */
  static values(): Array_Type<string> | null;

  /**
   * Return an array of all enumeration labels. These are the same as the field names of the enum type.
   */
  static labels(): Array_Type<string> | null;

  /**
   * Return a map of all enumeration values to their labels.
   */
  static valueToLabels(): Map_Type<string, string> | null;

  /**
   * Return a map of all enumeration labels to their values.
   */
  static labelToValues(): Map_Type<string, string> | null;

  /**
   * Is value a valid value for this enum type?
   * @param value the enum value
   */
  static containsValue(value: string): boolean;

  /**
   * Calls provided action for each enum label.
   */
  static eachLabel(action?: λConsumer<string>): void;

  /**
   * Calls provided action for each enum value.
   */
  static eachValue(action?: λConsumer<string>): void;
}


interface λConsumer<T> {
  (t: T): void
}
