// TypeScript definitions for the C3 type FileExt

/**
 * Standard file extensions supported by C3.
 * Also see Media types {@link MediaType}
 *
 * @remarks this represents a value passed to a method that expects an instance of FileExt
 */
declare interface IFileExt {

  readonly TXT: '.txt';

  readonly XML: '.xml';

  readonly CSV: '.csv';

  readonly XLSX: '.xlsx';

  readonly JSON: '.json';

  readonly JSON_LINES: '.ndjson';

  readonly JSON_SCHEMA: '.schema.json';

  readonly YAML: '.yaml';

  readonly HTML: '.html';

  readonly CSS: '.css';

  readonly SCSS: '.scss';

  readonly ZIP: '.zip';

  readonly TAR: '.tar';

  readonly TGZ: '.tgz';

  readonly GZ: '.gz';

  readonly SNAPPY: '.snappy';

  readonly LZ4: '.lz4';

  readonly PKG: '.c3pkg.json';

  readonly PKG_LOCK: '.c3pkg.lock.json';

  readonly TYPE: '.c3typ';

  readonly UI: '.c3ui';

  readonly DOC: '.c3doc.md';

  readonly DOC2: '.c3doc';

  readonly POLY: '.c3poly.md';

  readonly C3BIN: '.c3bin';

  readonly JS: '.js';

  readonly JS5: '.js5';

  readonly JS_MAP: '.js_map';

  readonly JS_MODULE: '.mjs';

  readonly JS_X: '.x.js';

  readonly TS: '.ts';

  readonly TSX: '.tsx';

  readonly D_TS: '.d.ts';

  readonly PY: '.py';

  readonly PYI: '.pyi';

  readonly JAVA: '.java';

  readonly R: '.R';

  readonly RB: '.rb';

  readonly EDI: '.edi';

  readonly AVRO: '.avro';

  readonly ARROW: '.arrow';

  readonly PARQUET: '.parquet';

  readonly HDF5: '.hdf5';

  readonly H5: '.h5';

  readonly GH5: '.gh5';

  readonly PNG: '.png';

  readonly JPG: '.jpg';

  readonly JPEG: '.jpeg';

  readonly SVG: '.svg';

  readonly ICO: '.ico';

  readonly MD: '.md';

  readonly WOFF: '.woff';

  readonly WOFF2: '.woff2';

  readonly BYT: '.byt';

  readonly FEATHER: '.feather';

  /**
   * Jupyter notebook.
   */
  readonly IPYNB: '.ipynb';

  /**
   * C3 notebook (Console and VSCode).
   */
  readonly C3NB: '.c3nb';
}

/**
 * Standard file extensions supported by C3.
 * Also see Media types {@link MediaType}
 *
 * @remarks this represents a made instance of FileExt
 */
declare class FileExt {

  static readonly TXT: '.txt';

  static readonly XML: '.xml';

  static readonly CSV: '.csv';

  static readonly XLSX: '.xlsx';

  static readonly JSON: '.json';

  static readonly JSON_LINES: '.ndjson';

  static readonly JSON_SCHEMA: '.schema.json';

  static readonly YAML: '.yaml';

  static readonly HTML: '.html';

  static readonly CSS: '.css';

  static readonly SCSS: '.scss';

  static readonly ZIP: '.zip';

  static readonly TAR: '.tar';

  static readonly TGZ: '.tgz';

  static readonly GZ: '.gz';

  static readonly SNAPPY: '.snappy';

  static readonly LZ4: '.lz4';

  static readonly PKG: '.c3pkg.json';

  static readonly PKG_LOCK: '.c3pkg.lock.json';

  static readonly TYPE: '.c3typ';

  static readonly UI: '.c3ui';

  static readonly DOC: '.c3doc.md';

  static readonly DOC2: '.c3doc';

  static readonly POLY: '.c3poly.md';

  static readonly C3BIN: '.c3bin';

  static readonly JS: '.js';

  static readonly JS5: '.js5';

  static readonly JS_MAP: '.js_map';

  static readonly JS_MODULE: '.mjs';

  static readonly JS_X: '.x.js';

  static readonly TS: '.ts';

  static readonly TSX: '.tsx';

  static readonly D_TS: '.d.ts';

  static readonly PY: '.py';

  static readonly PYI: '.pyi';

  static readonly JAVA: '.java';

  static readonly R: '.R';

  static readonly RB: '.rb';

  static readonly EDI: '.edi';

  static readonly AVRO: '.avro';

  static readonly ARROW: '.arrow';

  static readonly PARQUET: '.parquet';

  static readonly HDF5: '.hdf5';

  static readonly H5: '.h5';

  static readonly GH5: '.gh5';

  static readonly PNG: '.png';

  static readonly JPG: '.jpg';

  static readonly JPEG: '.jpeg';

  static readonly SVG: '.svg';

  static readonly ICO: '.ico';

  static readonly MD: '.md';

  static readonly WOFF: '.woff';

  static readonly WOFF2: '.woff2';

  static readonly BYT: '.byt';

  static readonly FEATHER: '.feather';

  /**
   * Jupyter notebook.
   */
  static readonly IPYNB: '.ipynb';

  /**
   * C3 notebook (Console and VSCode).
   */
  static readonly C3NB: '.c3nb';

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

  /**
   * Those extensions which have two parts, such as ".d.ts". For these, the methods below will #extract,
   * {@link #fileHasExt find} and {@link #fileWithoutExt remove} _both_ parts.
   */
  static compoundExts(): C3.Array<string>;

  /**
   * @return default file extension for given contentType and contentEncoding.
   */
  static dfltForContentTypeAndEncoding(contentType: string, contentEncoding?: string | null): string;

  /**
   * Check whether a file name has the specified extension (case insensitive).
   *
   * @param path file path to check
   * @param extension file extension to check, including period (`".py"`)
   */
  static fileHasExt(path: string, extension: string): boolean;

  /**
   * Remove the extension from a file name. This will be the final period in the path, as long as not followed by
   * a slash:
   * ```
   * foo.txt    --> foo
   * a/b/c.jpg  --> a/b/c
   * a/b/c      --> a/b/c
   * a.b/c      --> a.b/c
   * ```
   */
  static fileWithoutExt(path: string): string;

  /**
   * Extract the extension from a file name, including the separating period.
   *
   * @param path file path to extract from
   * @return file extension, including period (`".py"`) or null
   */
  static extract(path: string | null): string | null;
}


interface λConsumer<T> {
  (t: T): void
}
