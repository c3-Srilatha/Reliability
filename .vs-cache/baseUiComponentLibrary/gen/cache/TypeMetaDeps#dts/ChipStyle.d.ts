// TypeScript definitions for the C3 type ChipStyle

/**
 * Color and icon configurations for individual chips in a {@link ChipsCell}.
 *
 * @remarks this represents a value passed to a method that expects an instance of ChipStyle
 */
declare interface IChipStyle {

  /**
   * The predefined color preset to use for the chip. This shouldn't be specified if
   * #customColorSettings is provided.
   */
  colorPreset?: string;

  /**
   * In case the [color presets](#colorPreset) are insufficient for a desired color scheme,
   * this can be used to define a custom color of the chip. If {@link ChipsCell#outlined} is
   * true, this affects the font and border color. Otherwise, this affects the background color.
   */
  customColorSettings?: IUiSdlThemedValue<CustomChipColor>;

  /**
   * If specified, an icon based on the provided Font Awesome suffix will be displayed
   * before the text in each chip.
   */
  icon?: string;
}

/**
 * Color and icon configurations for individual chips in a {@link ChipsCell}.
 *
 * @remarks this represents a made instance of ChipStyle
 */
declare class ChipStyle {

  /**
   * The predefined color preset to use for the chip. This shouldn't be specified if
   * #customColorSettings is provided.
   */
  readonly colorPreset?: string;
  withColorPreset(colorPreset: string | null): ChipStyle;

  /**
   * In case the [color presets](#colorPreset) are insufficient for a desired color scheme,
   * this can be used to define a custom color of the chip. If {@link ChipsCell#outlined} is
   * true, this affects the font and border color. Otherwise, this affects the background color.
   */
  readonly customColorSettings?: UiSdlThemedValue<CustomChipColor>;
  withCustomColorSettings(customColorSettings: IUiSdlThemedValue<CustomChipColor> | null): ChipStyle;

  /**
   * If specified, an icon based on the provided Font Awesome suffix will be displayed
   * before the text in each chip.
   */
  readonly icon?: string;
  withIcon(icon: string | null): ChipStyle;
}

