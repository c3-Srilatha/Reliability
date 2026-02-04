// TypeScript definitions for the C3 type CorrelationKind

/**
 * Represents kinds of correlation techniques
 *
 * @remarks this represents a value passed to a method that expects an instance of CorrelationKind
 */
declare interface ICorrelationKind {

  /**
   * A Pearson correlation is a number between -1 and 1 that indicates the extent to which two variables are linearly related.
   * The Pearson correlation is also known as the “product moment correlation coefficient” (PMCC) or simply “correlation”.
   * In order to determine how strong the relationship is between two variables, a formula must be followed to produce what is referred to as the coefficient value.
   * The coefficient value can range between -1.00 and 1.00. If the coefficient value is in the negative range, then that
   * means the relationship between the variables is negatively correlated, or as one value increases, the other decreases.
   * If the value is in the positive range, then that means the relationship between the variables is positively correlated,
   * or both values increase or decrease together. Let's look at the formula for conducting the Pearson correlation coefficient value.
   * [source]: https://study.com/academy/lesson/pearson-correlation-coefficient-formula-example-significance.html
   */
  readonly PEARSON: 'PEARSON';
}

/**
 * Represents kinds of correlation techniques
 *
 * @remarks this represents a made instance of CorrelationKind
 */
declare class CorrelationKind {

  /**
   * A Pearson correlation is a number between -1 and 1 that indicates the extent to which two variables are linearly related.
   * The Pearson correlation is also known as the “product moment correlation coefficient” (PMCC) or simply “correlation”.
   * In order to determine how strong the relationship is between two variables, a formula must be followed to produce what is referred to as the coefficient value.
   * The coefficient value can range between -1.00 and 1.00. If the coefficient value is in the negative range, then that
   * means the relationship between the variables is negatively correlated, or as one value increases, the other decreases.
   * If the value is in the positive range, then that means the relationship between the variables is positively correlated,
   * or both values increase or decrease together. Let's look at the formula for conducting the Pearson correlation coefficient value.
   * [source]: https://study.com/academy/lesson/pearson-correlation-coefficient-formula-example-significance.html
   */
  static readonly PEARSON: 'PEARSON';

  /**
   * Translate the enum label (field name) to the value.
   * For simple enums (that don't define explicit values), the value is a string
   * that matches the label.
   * @param label the enum label
   * @return the associated value
   */
  static toValue(label: string | null, failIfInvalid?: boolean): string | null;

  /**
   * Translate the enum value to the label (field name).
   * @param value the enum value
   * @return the enum label
   */
  static toLabel(value: string | null, failIfInvalid?: boolean): string | null;

  /**
   * Get the index of the label in the enum.
   * @param label the enum label (field name)
   * @return index or -1 if not found
   */
  static labelIndex(label: string | null, failIfInvalid?: boolean): number;

  /**
   * Get the index of the value in the enum.
   * @param value the enum value
   * @return index or -1 if not found
   */
  static valueIndex(value: string | null, failIfInvalid?: boolean): number;

  /**
   * @return value type of values in this enum
   */
  static valueType(): ValueType;

  /**
   * Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
   * the field name (same as the labels).
   */
  static values(): C3.Array<string | null>;

  /**
   * Return an array of all enumeration labels. These are the same as the field names of the enum type.
   */
  static labels(): C3.Array<string | null>;

  /**
   * Return a map of all enumeration values to their labels.
   */
  static valueToLabels(): C3.Map<string | null, string | null>;

  /**
   * Return a map of all enumeration labels to their values.
   */
  static labelToValues(): C3.Map<string | null, string | null>;

  /**
   * Is value a valid value for this enum type?
   * @param value the enum value
   */
  static containsValue(value: string): boolean;

  /**
   * Calls provided action for each enum label.
   */
  static eachLabel(action?: λConsumer<string> | null): void;

  /**
   * Calls provided action for each enum value.
   */
  static eachValue(action?: λConsumer<string> | null): void;
}


interface λConsumer<T> {
  (t: T): void
}
