// TypeScript definitions for the C3 type DiagramParsingClassLabel

/**
 * A list of all possible class labels for diagram parsing. Please remix this type if additional new classes
 * are needed in a project.
 *
 * @remarks this represents a value passed to a method that expects an instance of DiagramParsingClassLabel
 */
declare interface IDiagramParsingClassLabel {

  /**
   * A sensor
   */
  TAG?: string;

  /**
   * A locally mounted instrument
   */
  LMI?: string;

  /**
   * A control power transformer
   */
  CPT?: string;

  /**
   * A programmable logic controller
   */
  PLC?: string;

  /**
   * A vessel
   */
  VSL?: string;

  /**
   * information
   */
  INFO?: string;

  /**
   * equipment information
   */
  EQPINFO?: string;

  /**
   * A class for a symbol that the user does not want to detect but looks similar to another important class.
   * Including this class for model training can avoid detecting false positives for the class the user
   * is interested in.
   */
  NEG?: string;
}

/**
 * A list of all possible class labels for diagram parsing. Please remix this type if additional new classes
 * are needed in a project.
 *
 * @remarks this represents a made instance of DiagramParsingClassLabel
 */
declare class DiagramParsingClassLabel {

  /**
   * A sensor
   */
  readonly TAG?: string;
  withTAG(TAG: string | null): DiagramParsingClassLabel;

  /**
   * A locally mounted instrument
   */
  readonly LMI?: string;
  withLMI(LMI: string | null): DiagramParsingClassLabel;

  /**
   * A control power transformer
   */
  readonly CPT?: string;
  withCPT(CPT: string | null): DiagramParsingClassLabel;

  /**
   * A programmable logic controller
   */
  readonly PLC?: string;
  withPLC(PLC: string | null): DiagramParsingClassLabel;

  /**
   * A vessel
   */
  readonly VSL?: string;
  withVSL(VSL: string | null): DiagramParsingClassLabel;

  /**
   * information
   */
  readonly INFO?: string;
  withINFO(INFO: string | null): DiagramParsingClassLabel;

  /**
   * equipment information
   */
  readonly EQPINFO?: string;
  withEQPINFO(EQPINFO: string | null): DiagramParsingClassLabel;

  /**
   * A class for a symbol that the user does not want to detect but looks similar to another important class.
   * Including this class for model training can avoid detecting false positives for the class the user
   * is interested in.
   */
  readonly NEG?: string;
  withNEG(NEG: string | null): DiagramParsingClassLabel;

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
