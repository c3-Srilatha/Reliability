// TypeScript definitions for the C3 type DataTypeIconUtil

/**
 * Helper functions for rendering data type icon.
 *
 * @remarks this represents a value passed to a method that expects an instance of DataTypeIconUtil
 */
declare interface IDataTypeIconUtil {
}

/**
 * Helper functions for rendering data type icon.
 *
 * @remarks this represents a made instance of DataTypeIconUtil
 */
declare class DataTypeIconUtil {

  /**
   * Returns the icon name for a given data type.
   *
   * @param dataType
   *            The given data type
   *
   * @return fontAwesome icon name for the data type.
   */
  static iconByDataType(dataType: string): string | null;

  /**
   * Returns the background color for a given data type.
   *
   * @param dataType
   *            The given data type.
   *
   * @return Color for the data type.
   */
  static iconBackgroundColorByDataType(dataType: string): string | null;

  /**
   * Returns the value type name.
   *
   * @param valueType
   *            The value type
   *
   * @return A string version of the value type name.
   */
  static resolveType(valueType?: ValueType | null): string | null;

  /**
   * Returns the value type name for a {@link UiSdlTypeWorkerValueTypeTransformHelper} transformed value type.
   *
   * @param valueType
   *            The value type
   *
   * @return A string version of the value type name.
   */
  static resolveTransformedType(valueType?: ValueType | null): string | null;
}

