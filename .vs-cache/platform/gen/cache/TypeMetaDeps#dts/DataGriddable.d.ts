// TypeScript definitions for the C3 type DataGriddable

/**
 * Any type that has a natural representation of its contents as a 2D grid of values can mix this type and implement
 * #toDataGrid. This allow visualization of various sources of tabular data based on a standard structure.
 *
 * Note that this also provides default support for the Python `__repr__` protocols through **DataGrid**.
 *
 * @see DataGrid
 *
 * @remarks this represents a value passed to a method that expects an instance of DataGriddable
 */
declare interface IDataGriddable {
}

/**
 * Any type that has a natural representation of its contents as a 2D grid of values can mix this type and implement
 * #toDataGrid. This allow visualization of various sources of tabular data based on a standard structure.
 *
 * Note that this also provides default support for the Python `__repr__` protocols through **DataGrid**.
 *
 * @see DataGrid
 *
 * @remarks this represents a made instance of DataGriddable
 */
declare class DataGriddable {

  /**
   * Base implementation of Python __repr__ protocol to use {@link DataGrid#toString}.
   */
  _repr_(): string | null;

  /**
   * Base implementation of Python __reprHtml__ protocol to use {@link DataGrid#toHtml}.
   */
  _reprHtml_(): string | null;

  /**
   * Build a data grid from the underlying data. If the current value is not appropriate for a grid, null should be
   * returned.
   */
  toDataGrid(spec?: DataGrid.LoadSpec | null): DataGrid | null;

  /**
   * Since there is no good way to pass in the spec when using the automatic visualization, it's possible to statically
   * set the default values in the local (client) environment. This spec will be used for the #_reprHtml method where
   * no spec may be passed.
   */
  static setDefaultSpec(spec?: DataGrid.HtmlSpec | null): void;

  /**
   * Get the default spec for the local (client) environment. Note that there may be a default value with values
   * extracted from the current environment. For example in Jupyter, display settings are taken from the current
   * [pandas](https://pandas.pydata.org/) settings.
   *
   * @see #setDefaultSpec
   */
  static defaultSpec(): DataGrid.HtmlSpec | null;
}

