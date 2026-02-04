// TypeScript definitions for the C3 type UseChipsCellColorGetter

/**
 * React hook to extract primary and secondary colors from a {@link ChipStyle} for a
 * {@link ChipsCell} based on the current [theme](UiSdlThemeTemplate#themeCategory).
 *
 * @remarks this represents a value passed to a method that expects an instance of UseChipsCellColorGetter
 */
declare interface IUseChipsCellColorGetter {
}

/**
 * React hook to extract primary and secondary colors from a {@link ChipStyle} for a
 * {@link ChipsCell} based on the current [theme](UiSdlThemeTemplate#themeCategory).
 *
 * @remarks this represents a made instance of UseChipsCellColorGetter
 */
declare class UseChipsCellColorGetter {

  /**
   * A function that returns a function which takes in {@link ChipStyle} object
   * and returns the primary and secondary {@link Color}s based on the
   * [current theme](UiSdlThemeTemplate#themeCategory).
   *
   * @returns A function to get primary and secondary colors based on a {@link ChipStyle}.
   */
  static useChipsCellColorGetter(): λBiFunction<ChipStyle | null, boolean,  | null>;
}


interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}
