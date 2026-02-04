// TypeScript definitions for the C3 type ChipsCellGroupingOptions

/**
 * Options for how chips should be grouped / styled based on their values, and how
 * these groups should be displayed within a single {@link ChipsCell}.
 *
 * @see ChipsCell#groupingOptions
 *
 * @remarks this represents a value passed to a method that expects an instance of ChipsCellGroupingOptions
 */
declare interface IChipsCellGroupingOptions {

  /**
   * How the chips should be arranged based on #valuesToStyles.
   */
  arrangement?: string;

  /**
   * _This field is different from_ {@link ChipsCell#fieldPath} but still based on
   * the shape of {@link UiSdlDataGridDataItem#obj}.
   *
   *   - If it's an array of {@link Obj}s and grouping options are provided, this
   *     field must be provided to extract the value to bin each {@link Obj} by (based
   *     on #valuesToStyles).
   *   - If it's an array of strings, this field should be empty.
   */
  fieldPath?: string;

  /**
   * A list of {@link Pair}s defining which chips should use which [styles](ChipStyle).
   * The first element of each pair is a collection of values to match against, and the
   * second element is the style to apply to chips with those values. If #arrangement is
   * [SORT](ChipsCellArrangement#SORT) or [GROUP](ChipsCellArrangement#GROUP), the order
   * of the {@link Pair}s represents the sort order for the chips.
   *
   * @see fieldPath
   */
  valuesToStyles: Array_Type<Pair<Array_Type<string>, ChipStyle>> | Array<IPair<Array_Type<string>, ChipStyle>>;
}

/**
 * Options for how chips should be grouped / styled based on their values, and how
 * these groups should be displayed within a single {@link ChipsCell}.
 *
 * @see ChipsCell#groupingOptions
 *
 * @remarks this represents a made instance of ChipsCellGroupingOptions
 */
declare class ChipsCellGroupingOptions {

  /**
   * How the chips should be arranged based on #valuesToStyles.
   */
  readonly arrangement?: string;
  withArrangement(arrangement: string | null): ChipsCellGroupingOptions;

  /**
   * _This field is different from_ {@link ChipsCell#fieldPath} but still based on
   * the shape of {@link UiSdlDataGridDataItem#obj}.
   *
   *   - If it's an array of {@link Obj}s and grouping options are provided, this
   *     field must be provided to extract the value to bin each {@link Obj} by (based
   *     on #valuesToStyles).
   *   - If it's an array of strings, this field should be empty.
   */
  readonly fieldPath?: string;
  withFieldPath(fieldPath: string | null): ChipsCellGroupingOptions;

  /**
   * A list of {@link Pair}s defining which chips should use which [styles](ChipStyle).
   * The first element of each pair is a collection of values to match against, and the
   * second element is the style to apply to chips with those values. If #arrangement is
   * [SORT](ChipsCellArrangement#SORT) or [GROUP](ChipsCellArrangement#GROUP), the order
   * of the {@link Pair}s represents the sort order for the chips.
   *
   * @see fieldPath
   */
  readonly valuesToStyles: Array_Type<Pair<Array_Type<string>, ChipStyle>>;
  withValuesToStyles(valuesToStyles: Array_Type<Pair<Array_Type<string>, ChipStyle>> | Array<IPair<Array_Type<string>, ChipStyle>>): ChipsCellGroupingOptions;
}

