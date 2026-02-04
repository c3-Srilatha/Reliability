// TypeScript definitions for the C3 type CustomChipColor

/**
 * Color configurations for chips in a {@link ChipsCell} for a particular
 * {@link UiSdlThemeTemplate}. This Type should not be used directly, but
 * instead specified as a single configuration on a {@link UiSdlThemedValue}.
 *
 * @see ChipStyle#customColorSettings
 *
 * @remarks this represents a value passed to a method that expects an instance of CustomChipColor
 */
declare interface ICustomChipColor {

  /**
   * The primary color of the chip. If {@link ChipsCell#outlined} is true, this
   * affects the font and border color. Otherwise, this affects the background color.
   */
  primaryColor: string;

  /**
   * Whether or not to use an inverted font color to improve contrast with #primaryColor.
   * Ignored when {@link ChipsCell#outlined} is true.
   */
  invertFontColor?: boolean;
}

/**
 * Color configurations for chips in a {@link ChipsCell} for a particular
 * {@link UiSdlThemeTemplate}. This Type should not be used directly, but
 * instead specified as a single configuration on a {@link UiSdlThemedValue}.
 *
 * @see ChipStyle#customColorSettings
 *
 * @remarks this represents a made instance of CustomChipColor
 */
declare class CustomChipColor {

  /**
   * The primary color of the chip. If {@link ChipsCell#outlined} is true, this
   * affects the font and border color. Otherwise, this affects the background color.
   */
  readonly primaryColor: string;
  withPrimaryColor(primaryColor: string): CustomChipColor;

  /**
   * Whether or not to use an inverted font color to improve contrast with #primaryColor.
   * Ignored when {@link ChipsCell#outlined} is true.
   */
  readonly invertFontColor?: boolean;
  withInvertFontColor(invertFontColor: boolean): CustomChipColor;
}

