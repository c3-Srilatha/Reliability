// TypeScript definitions for the C3 type ReliabilityAssetSensorAssociationMethod

/**
 * Enum type that represents the possible methods for sensor correlations.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityAssetSensorAssociationMethod
 */
declare interface IReliabilityAssetSensorAssociationMethod {

  /**
   * A Pearson correlation is a number between -1 and 1 that indicates the extent to which two variables are linearly related.
   * The Pearson correlation is also known as the “product moment correlation coefficient” (PMCC) or simply “correlation”.
   * If the coefficient value is in the negative range, then that means the relationship between the variables is negatively
   * correlated, or as one value increases, the other decreases.
   * If the value is in the positive range, then that means the relationship between the variables is positively correlated,
   * or both values increase or decrease together.
   *
   * USE WHEN: You want to measure the strength and direction of a linear relationship between two continuous variables.
   *
   * NOTE: The data should be normally distributed, and the relationship between the variables should be linear.
   * It is sensitive to outliers.
   */
  PEARSON?: string;

  /**
   * Mutual Information (MI) is a measure of the mutual dependence between two variables. It quantifies the amount of
   * information obtained about one variable through the other variable. Unlike correlation coefficients, Mutual
   * Information can capture non-linear relationships between variables. The value of Mutual Information is always
   * non-negative, with higher values indicating a greater degree of dependency. If the Mutual Information is zero,
   * it means that the variables are independent.
   *
   * USE WHEN: You want to capture non-linear relationships and dependencies between variables. It's useful in feature
   * selection and unsupervised learning applications.
   *
   * NOTE: It does not assume any specific type of relationship (linear or monotonic) and can handle complex dependencies.
   */
  MUTUAL_INFO?: string;

  /**
   * Kendall's Tau is a measure of the ordinal association between two variables. It evaluates the strength and direction
   * of the relationship between the rankings of the variables. Kendall's Tau ranges from -1 to 1, where -1 indicates a
   * perfect negative association, 0 indicates no association, and 1 indicates a perfect positive association. Unlike Pearson
   * correlation, Kendall's Tau does not assume a linear relationship between the variables. Instead, it focuses on the order
   * of the data points. The calculation involves counting the number of concordant and discordant pairs. Concordant pairs
   * are those where the ranks of both variables increase or decrease together, while discordant pairs are those where one
   * rank increases as the other decreases.
   *
   * USE WHEN: You need a non-parametric test to measure the ordinal association between two variables. It's particularly
   * useful for small sample sizes or when there are many tied ranks.
   *
   * NOTE: It does not assume a linear relationship and is based on the ranks of the data. It is robust to outliers and
   * works well with small datasets.
   */
  KENDALL?: string;

  /**
   * Spearman's rank correlation coefficient, often denoted as Spearman's rho, is a measure of the strength and direction
   * of association between two ranked variables. It assesses how well the relationship between two variables can be described
   * using a monotonic function. Spearman's rho ranges from -1 to 1, where -1 indicates a perfect negative correlation, 0
   * indicates no correlation, and 1 indicates a perfect positive correlation. Unlike Pearson correlation, Spearman's rho
   * does not assume a linear relationship and is based on the ranks of the data rather than the raw data values.
   * The calculation involves converting the data to ranks and then applying the Pearson correlation formula to these ranks.
   *
   * USE WHEN: You have ordinal data or your data does not meet the assumptions of normality required by Pearson correlation.
   * It's also useful when dealing with non-linear but monotonic relationships.
   *
   * NOTE: The relationship between the variables should be monotonic (i.e., as one variable increases, the other either
   * consistently increases or decreases). It is less sensitive to outliers.
   */
  SPEARMAN?: string;
}

/**
 * Enum type that represents the possible methods for sensor correlations.
 *
 * @remarks this represents a made instance of ReliabilityAssetSensorAssociationMethod
 */
declare class ReliabilityAssetSensorAssociationMethod {

  /**
   * A Pearson correlation is a number between -1 and 1 that indicates the extent to which two variables are linearly related.
   * The Pearson correlation is also known as the “product moment correlation coefficient” (PMCC) or simply “correlation”.
   * If the coefficient value is in the negative range, then that means the relationship between the variables is negatively
   * correlated, or as one value increases, the other decreases.
   * If the value is in the positive range, then that means the relationship between the variables is positively correlated,
   * or both values increase or decrease together.
   *
   * USE WHEN: You want to measure the strength and direction of a linear relationship between two continuous variables.
   *
   * NOTE: The data should be normally distributed, and the relationship between the variables should be linear.
   * It is sensitive to outliers.
   */
  readonly PEARSON?: string;
  withPEARSON(PEARSON: string | null): ReliabilityAssetSensorAssociationMethod;

  /**
   * Mutual Information (MI) is a measure of the mutual dependence between two variables. It quantifies the amount of
   * information obtained about one variable through the other variable. Unlike correlation coefficients, Mutual
   * Information can capture non-linear relationships between variables. The value of Mutual Information is always
   * non-negative, with higher values indicating a greater degree of dependency. If the Mutual Information is zero,
   * it means that the variables are independent.
   *
   * USE WHEN: You want to capture non-linear relationships and dependencies between variables. It's useful in feature
   * selection and unsupervised learning applications.
   *
   * NOTE: It does not assume any specific type of relationship (linear or monotonic) and can handle complex dependencies.
   */
  readonly MUTUAL_INFO?: string;
  withMUTUAL_INFO(MUTUAL_INFO: string | null): ReliabilityAssetSensorAssociationMethod;

  /**
   * Kendall's Tau is a measure of the ordinal association between two variables. It evaluates the strength and direction
   * of the relationship between the rankings of the variables. Kendall's Tau ranges from -1 to 1, where -1 indicates a
   * perfect negative association, 0 indicates no association, and 1 indicates a perfect positive association. Unlike Pearson
   * correlation, Kendall's Tau does not assume a linear relationship between the variables. Instead, it focuses on the order
   * of the data points. The calculation involves counting the number of concordant and discordant pairs. Concordant pairs
   * are those where the ranks of both variables increase or decrease together, while discordant pairs are those where one
   * rank increases as the other decreases.
   *
   * USE WHEN: You need a non-parametric test to measure the ordinal association between two variables. It's particularly
   * useful for small sample sizes or when there are many tied ranks.
   *
   * NOTE: It does not assume a linear relationship and is based on the ranks of the data. It is robust to outliers and
   * works well with small datasets.
   */
  readonly KENDALL?: string;
  withKENDALL(KENDALL: string | null): ReliabilityAssetSensorAssociationMethod;

  /**
   * Spearman's rank correlation coefficient, often denoted as Spearman's rho, is a measure of the strength and direction
   * of association between two ranked variables. It assesses how well the relationship between two variables can be described
   * using a monotonic function. Spearman's rho ranges from -1 to 1, where -1 indicates a perfect negative correlation, 0
   * indicates no correlation, and 1 indicates a perfect positive correlation. Unlike Pearson correlation, Spearman's rho
   * does not assume a linear relationship and is based on the ranks of the data rather than the raw data values.
   * The calculation involves converting the data to ranks and then applying the Pearson correlation formula to these ranks.
   *
   * USE WHEN: You have ordinal data or your data does not meet the assumptions of normality required by Pearson correlation.
   * It's also useful when dealing with non-linear but monotonic relationships.
   *
   * NOTE: The relationship between the variables should be monotonic (i.e., as one variable increases, the other either
   * consistently increases or decreases). It is less sensitive to outliers.
   */
  readonly SPEARMAN?: string;
  withSPEARMAN(SPEARMAN: string | null): ReliabilityAssetSensorAssociationMethod;

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
