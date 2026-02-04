// TypeScript definitions for the C3 type ChipColorPreset

/**
 * All available color presets for chips in a {@link ChipsCell}. When {@link ChipsCell#outlined}
 * is true, only the primary color will be used.
 *
 * @see ChipStyle#colorPreset
 *
 * @remarks this represents a value passed to a method that expects an instance of ChipColorPreset
 */
declare interface IChipColorPreset {

  /**
   * |                | Light      | Dark       |
   * |----------------|:----------:|:----------:|
   * | **Primary**    | `slate-70` | `slate-40` |
   * | **Background** | `slate-20` | `slate-80` |
   */
  SLATE?: string;

  /**
   * |                | Light       | Dark        |
   * |----------------|:-----------:|:-----------:|
   * | **Primary**    | `orange-70` | `orange-40` |
   * | **Background** | `orange-20` | `orange-80` |
   */
  ORANGE?: string;

  /**
   * |                | Light      | Dark       |
   * |----------------|:----------:|:----------:|
   * | **Primary**    | `olive-70` | `olive-40` |
   * | **Background** | `olive-20` | `olive-80` |
   */
  OLIVE?: string;

  /**
   * |                | Light     | Dark      |
   * |----------------|:---------:|:---------:|
   * | **Primary**    | `lime-70` | `lime-40` |
   * | **Background** | `lime-20` | `lime-80` |
   */
  LIME?: string;

  /**
   * |                | Light       | Dark        |
   * |----------------|:-----------:|:-----------:|
   * | **Primary**    | `forest-70` | `forest-40` |
   * | **Background** | `forest-20` | `forest-80` |
   */
  FOREST?: string;

  /**
   * |                | Light     | Dark      |
   * |----------------|:---------:|:---------:|
   * | **Primary**    | `cyan-70` | `cyan-40` |
   * | **Background** | `cyan-20` | `cyan-80` |
   */
  CYAN?: string;

  /**
   * |                | Light     | Dark      |
   * |----------------|:---------:|:---------:|
   * | **Primary**    | `blue-70` | `blue-40` |
   * | **Background** | `blue-20` | `blue-80` |
   */
  BLUE?: string;

  /**
   * |                | Light       | Dark        |
   * |----------------|:-----------:|:-----------:|
   * | **Primary**    | `purple-70` | `purple-40` |
   * | **Background** | `purple-20` | `purple-80` |
   */
  PURPLE?: string;

  /**
   * |                | Light     | Dark      |
   * |----------------|:---------:|:---------:|
   * | **Primary**    | `plum-70` | `plum-40` |
   * | **Background** | `plum-20` | `plum-80` |
   */
  PLUM?: string;

  /**
   * |                | Light      | Dark       |
   * |----------------|:----------:|:----------:|
   * | **Primary**    | `choco-70` | `choco-40` |
   * | **Background** | `choco-20` | `choco-80` |
   */
  CHOCO?: string;

  /**
   * |                | Light    | Dark     |
   * |----------------|:--------:|:--------:|
   * | **Primary**    | `red-70` | `red-40` |
   * | **Background** | `red-20` | `red-80` |
   */
  RED?: string;

  /**
   * |                | Light       | Dark        |
   * |----------------|:-----------:|:-----------:|
   * | **Primary**    | `yellow-70` | `yellow-40` |
   * | **Background** | `yellow-20` | `yellow-80` |
   */
  YELLOW?: string;

  /**
   * |                | Light      | Dark       |
   * |----------------|:----------:|:----------:|
   * | **Primary**    | `green-70` | `green-40` |
   * | **Background** | `green-20` | `green-80` |
   */
  GREEN?: string;
}

/**
 * All available color presets for chips in a {@link ChipsCell}. When {@link ChipsCell#outlined}
 * is true, only the primary color will be used.
 *
 * @see ChipStyle#colorPreset
 *
 * @remarks this represents a made instance of ChipColorPreset
 */
declare class ChipColorPreset {

  /**
   * |                | Light      | Dark       |
   * |----------------|:----------:|:----------:|
   * | **Primary**    | `slate-70` | `slate-40` |
   * | **Background** | `slate-20` | `slate-80` |
   */
  readonly SLATE?: string;
  withSLATE(SLATE: string | null): ChipColorPreset;

  /**
   * |                | Light       | Dark        |
   * |----------------|:-----------:|:-----------:|
   * | **Primary**    | `orange-70` | `orange-40` |
   * | **Background** | `orange-20` | `orange-80` |
   */
  readonly ORANGE?: string;
  withORANGE(ORANGE: string | null): ChipColorPreset;

  /**
   * |                | Light      | Dark       |
   * |----------------|:----------:|:----------:|
   * | **Primary**    | `olive-70` | `olive-40` |
   * | **Background** | `olive-20` | `olive-80` |
   */
  readonly OLIVE?: string;
  withOLIVE(OLIVE: string | null): ChipColorPreset;

  /**
   * |                | Light     | Dark      |
   * |----------------|:---------:|:---------:|
   * | **Primary**    | `lime-70` | `lime-40` |
   * | **Background** | `lime-20` | `lime-80` |
   */
  readonly LIME?: string;
  withLIME(LIME: string | null): ChipColorPreset;

  /**
   * |                | Light       | Dark        |
   * |----------------|:-----------:|:-----------:|
   * | **Primary**    | `forest-70` | `forest-40` |
   * | **Background** | `forest-20` | `forest-80` |
   */
  readonly FOREST?: string;
  withFOREST(FOREST: string | null): ChipColorPreset;

  /**
   * |                | Light     | Dark      |
   * |----------------|:---------:|:---------:|
   * | **Primary**    | `cyan-70` | `cyan-40` |
   * | **Background** | `cyan-20` | `cyan-80` |
   */
  readonly CYAN?: string;
  withCYAN(CYAN: string | null): ChipColorPreset;

  /**
   * |                | Light     | Dark      |
   * |----------------|:---------:|:---------:|
   * | **Primary**    | `blue-70` | `blue-40` |
   * | **Background** | `blue-20` | `blue-80` |
   */
  readonly BLUE?: string;
  withBLUE(BLUE: string | null): ChipColorPreset;

  /**
   * |                | Light       | Dark        |
   * |----------------|:-----------:|:-----------:|
   * | **Primary**    | `purple-70` | `purple-40` |
   * | **Background** | `purple-20` | `purple-80` |
   */
  readonly PURPLE?: string;
  withPURPLE(PURPLE: string | null): ChipColorPreset;

  /**
   * |                | Light     | Dark      |
   * |----------------|:---------:|:---------:|
   * | **Primary**    | `plum-70` | `plum-40` |
   * | **Background** | `plum-20` | `plum-80` |
   */
  readonly PLUM?: string;
  withPLUM(PLUM: string | null): ChipColorPreset;

  /**
   * |                | Light      | Dark       |
   * |----------------|:----------:|:----------:|
   * | **Primary**    | `choco-70` | `choco-40` |
   * | **Background** | `choco-20` | `choco-80` |
   */
  readonly CHOCO?: string;
  withCHOCO(CHOCO: string | null): ChipColorPreset;

  /**
   * |                | Light    | Dark     |
   * |----------------|:--------:|:--------:|
   * | **Primary**    | `red-70` | `red-40` |
   * | **Background** | `red-20` | `red-80` |
   */
  readonly RED?: string;
  withRED(RED: string | null): ChipColorPreset;

  /**
   * |                | Light       | Dark        |
   * |----------------|:-----------:|:-----------:|
   * | **Primary**    | `yellow-70` | `yellow-40` |
   * | **Background** | `yellow-20` | `yellow-80` |
   */
  readonly YELLOW?: string;
  withYELLOW(YELLOW: string | null): ChipColorPreset;

  /**
   * |                | Light      | Dark       |
   * |----------------|:----------:|:----------:|
   * | **Primary**    | `green-70` | `green-40` |
   * | **Background** | `green-20` | `green-80` |
   */
  readonly GREEN?: string;
  withGREEN(GREEN: string | null): ChipColorPreset;

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
