// TypeScript definitions for the C3 type MediaType

/**
 * A list of commonly used Media Types (formerly known as MIME types). Full list can be found at
 * http://www.iana.org/assignments/media-types/media-types.xhtml.
 *
 * @see ContentType
 *
 * @remarks this represents a value passed to a method that expects an instance of MediaType
 */
declare interface IMediaType {

  /**
   * JPEG image.
   */
  readonly JPEG: 'image/jpeg';

  /**
   * PNG image.
   */
  readonly PNG: 'image/png';

  /**
   * BMP image.
   */
  readonly BMP: 'image/bmp';

  /**
   * GIF image.
   */
  readonly GIF: 'image/gif';

  /**
   * SVG image.
   */
  readonly SVG: 'image/svg+xml';

  /**
   * ICO icon.
   */
  readonly ICO: 'image/vnd.microsoft.icon';

  /**
   * ARF file.
   */
  readonly ARF: 'application/arf';

  readonly PLAIN_TEXT: 'text/plain';

  readonly OCTET_STREAM: 'application/octet-stream';

  readonly MD: 'text/markdown';

  readonly CSV: 'text/csv';

  readonly CSV_APP: 'application/csv';

  readonly TSV: 'text/tab-separated-values';

  readonly XML: 'text/xml';

  readonly XML_APP: 'application/xml';

  readonly ATOM_XML: 'application/atom+xml';

  readonly JSON: 'application/json';

  readonly JSON_ALT: 'text/json';

  readonly JSON_LINES: 'application/x-ndjson';

  readonly JSON_MERGE_PATCH: 'application/merge-patch+json';

  readonly JSON_PATCH: "application/json-patch+json";

  readonly YAML: 'text/vnd.yaml';

  readonly XLSX: 'application/vnd.c3.data+excel';

  readonly ZIP: 'application/zip';

  readonly GZIP: 'application/gzip';

  readonly AVRO: 'application/vnd.apache.avro+binary';

  readonly PARQUET: 'application/vnd.apache.parquet+binary';

  readonly HDF5: 'application/vnd.hdf.hdf5+binary';

  readonly ARROW_FILE: 'application/vnd.apache.arrow.file';

  readonly ARROW_STREAM: 'application/vnd.apache.arrow.stream';

  readonly CSV_GREEN_BUTTON: 'text/greenButtonCsv';

  readonly XML_GREEN_BUTTON: 'text/greenButtonXml';

  readonly FORM_URLENCODED: 'application/x-www-form-urlencoded';

  readonly FORM_DATA: 'multipart/form-data';

  readonly HTML: 'text/html';

  readonly CSS: 'text/css';

  readonly SCSS: 'text/scss';

  readonly XHTML_XML: 'application/xhtml+xml';

  readonly EDI: 'application/edi-x12';

  readonly DSL_TYPE: 'text/vnd.c3.type+plain';

  readonly DSL_UI: 'text/vnd.c3.ui+plain';

  readonly DOC: 'text/vnd.c3.doc+plain';

  readonly JS_TYPE: 'application/vnd.c3.type+javascript';

  readonly JS_UI: 'application/vnd.c3.ui+javascript';

  readonly JS_TEST: 'application/vnd.c3.test+javascript';

  readonly JS: 'text/javascript';

  readonly JS_APP: 'application/javascript';

  readonly JS5: 'application/javascriptversion=ES5';

  readonly PY_TYPE: 'application/vnd.c3.type+x-python';

  readonly PY_TEST: 'application/vnd.c3.test+x-python';

  readonly PY: 'application/x-python';

  readonly PY_ALT: 'text/python';

  readonly R_TYPE: 'application/vnd.c3.type+x-r';

  readonly R_TEST: 'application/vnd.c3.test+x-r';

  readonly R: 'application/x-r';

  readonly RUBY_TYPE: 'application/vnd.c3.type+x-ruby';

  readonly RUBY: 'application/x-ruby';

  readonly TS_TYPE: 'application/vnd.c3.type+typescript';

  readonly TS: 'text/typescript';

  readonly TS_APP: 'application/typescript';

  readonly TSX_TYPE: 'application/vnd.c3.type+tsx';

  readonly TSX: 'text/tsx';

  readonly TSX_APP: 'application/tsx';

  readonly JSON_DATA: 'application/vnd.c3.data+json';

  readonly CSV_DATA: 'application/vnd.c3.data+csv';

  readonly XML_DATA: 'application/vnd.c3.data+xml';

  readonly C3BIN_DATA: 'application/vnd.c3.data+octet-stream';

  readonly JAVA_SRC: 'text/x-java-source';

  readonly R_SRC: 'text/x-R';

  readonly WOFF: 'font/woff';

  readonly WOFF2: 'font/woff2';

  readonly OPEN_API_YAML: 'application/openapi+yaml';

  readonly OPEN_API_JSON: 'application/openapi+json';

  readonly PDF: 'application/pdf';

  readonly JUPYTER_NOTEBOOK: 'application/x-ipynb+json';

  readonly C3_NOTEBOOK: 'application/vnd.c3.notebook+json';

  readonly WILDCARD: '*/*';

  readonly GDRIVE_FOLDER: 'application/vnd.google-apps.folder';

  readonly GOOGLE_DOCS: 'application/vnd.google-apps.document';

  readonly GOOGLE_SHEETS: 'application/vnd.google-apps.spreadsheet';

  readonly GOOGLE_SLIDES: 'application/vnd.google-apps.presentation';

  readonly EVENT_STREAM: 'text/event-stream';

  readonly SHELL: 'x-sh';
}

/**
 * A list of commonly used Media Types (formerly known as MIME types). Full list can be found at
 * http://www.iana.org/assignments/media-types/media-types.xhtml.
 *
 * @see ContentType
 *
 * @remarks this represents a made instance of MediaType
 */
declare class MediaType {

  /**
   * JPEG image.
   */
  static readonly JPEG: 'image/jpeg';

  /**
   * PNG image.
   */
  static readonly PNG: 'image/png';

  /**
   * BMP image.
   */
  static readonly BMP: 'image/bmp';

  /**
   * GIF image.
   */
  static readonly GIF: 'image/gif';

  /**
   * SVG image.
   */
  static readonly SVG: 'image/svg+xml';

  /**
   * ICO icon.
   */
  static readonly ICO: 'image/vnd.microsoft.icon';

  /**
   * ARF file.
   */
  static readonly ARF: 'application/arf';

  static readonly PLAIN_TEXT: 'text/plain';

  static readonly OCTET_STREAM: 'application/octet-stream';

  static readonly MD: 'text/markdown';

  static readonly CSV: 'text/csv';

  static readonly CSV_APP: 'application/csv';

  static readonly TSV: 'text/tab-separated-values';

  static readonly XML: 'text/xml';

  static readonly XML_APP: 'application/xml';

  static readonly ATOM_XML: 'application/atom+xml';

  static readonly JSON: 'application/json';

  static readonly JSON_ALT: 'text/json';

  static readonly JSON_LINES: 'application/x-ndjson';

  static readonly JSON_MERGE_PATCH: 'application/merge-patch+json';

  static readonly JSON_PATCH: "application/json-patch+json";

  static readonly YAML: 'text/vnd.yaml';

  static readonly XLSX: 'application/vnd.c3.data+excel';

  static readonly ZIP: 'application/zip';

  static readonly GZIP: 'application/gzip';

  static readonly AVRO: 'application/vnd.apache.avro+binary';

  static readonly PARQUET: 'application/vnd.apache.parquet+binary';

  static readonly HDF5: 'application/vnd.hdf.hdf5+binary';

  static readonly ARROW_FILE: 'application/vnd.apache.arrow.file';

  static readonly ARROW_STREAM: 'application/vnd.apache.arrow.stream';

  static readonly CSV_GREEN_BUTTON: 'text/greenButtonCsv';

  static readonly XML_GREEN_BUTTON: 'text/greenButtonXml';

  static readonly FORM_URLENCODED: 'application/x-www-form-urlencoded';

  static readonly FORM_DATA: 'multipart/form-data';

  static readonly HTML: 'text/html';

  static readonly CSS: 'text/css';

  static readonly SCSS: 'text/scss';

  static readonly XHTML_XML: 'application/xhtml+xml';

  static readonly EDI: 'application/edi-x12';

  static readonly DSL_TYPE: 'text/vnd.c3.type+plain';

  static readonly DSL_UI: 'text/vnd.c3.ui+plain';

  static readonly DOC: 'text/vnd.c3.doc+plain';

  static readonly JS_TYPE: 'application/vnd.c3.type+javascript';

  static readonly JS_UI: 'application/vnd.c3.ui+javascript';

  static readonly JS_TEST: 'application/vnd.c3.test+javascript';

  static readonly JS: 'text/javascript';

  static readonly JS_APP: 'application/javascript';

  static readonly JS5: 'application/javascriptversion=ES5';

  static readonly PY_TYPE: 'application/vnd.c3.type+x-python';

  static readonly PY_TEST: 'application/vnd.c3.test+x-python';

  static readonly PY: 'application/x-python';

  static readonly PY_ALT: 'text/python';

  static readonly R_TYPE: 'application/vnd.c3.type+x-r';

  static readonly R_TEST: 'application/vnd.c3.test+x-r';

  static readonly R: 'application/x-r';

  static readonly RUBY_TYPE: 'application/vnd.c3.type+x-ruby';

  static readonly RUBY: 'application/x-ruby';

  static readonly TS_TYPE: 'application/vnd.c3.type+typescript';

  static readonly TS: 'text/typescript';

  static readonly TS_APP: 'application/typescript';

  static readonly TSX_TYPE: 'application/vnd.c3.type+tsx';

  static readonly TSX: 'text/tsx';

  static readonly TSX_APP: 'application/tsx';

  static readonly JSON_DATA: 'application/vnd.c3.data+json';

  static readonly CSV_DATA: 'application/vnd.c3.data+csv';

  static readonly XML_DATA: 'application/vnd.c3.data+xml';

  static readonly C3BIN_DATA: 'application/vnd.c3.data+octet-stream';

  static readonly JAVA_SRC: 'text/x-java-source';

  static readonly R_SRC: 'text/x-R';

  static readonly WOFF: 'font/woff';

  static readonly WOFF2: 'font/woff2';

  static readonly OPEN_API_YAML: 'application/openapi+yaml';

  static readonly OPEN_API_JSON: 'application/openapi+json';

  static readonly PDF: 'application/pdf';

  static readonly JUPYTER_NOTEBOOK: 'application/x-ipynb+json';

  static readonly C3_NOTEBOOK: 'application/vnd.c3.notebook+json';

  static readonly WILDCARD: '*/*';

  static readonly GDRIVE_FOLDER: 'application/vnd.google-apps.folder';

  static readonly GOOGLE_DOCS: 'application/vnd.google-apps.document';

  static readonly GOOGLE_SHEETS: 'application/vnd.google-apps.spreadsheet';

  static readonly GOOGLE_SLIDES: 'application/vnd.google-apps.presentation';

  static readonly EVENT_STREAM: 'text/event-stream';

  static readonly SHELL: 'x-sh';

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
   * @return character set typically used with provided media type or null if unknown. @see Charset
   */
  static defaultCharset(mediaType: string | null): string | null;

  /**
   * @return true if provided media type is used for textual content. Note that this method may return false negatives
   *         I.e. some new / yet unknown media type may be for text but this method will still return false.
   */
  static isAnyText(mediaType: string | null): boolean;

  /**
   * @return true if provided media type is used for images.
   */
  static isAnyImage(mediaType: string | null): boolean;

  /**
   * Extract the baseline MediaType from a potentially vendor-specific content type.
   * For example, <code>text/vnd.c3.typ+plain</code> is a variant of <code>text/plain</code>
   * {link ContentType#baseMediaType}
   */
  static baseMediaType(contentType: string | null): string | null;

  /**
   * Check if provided media type is registered with IANA https://www.iana.org/ - will pull latest csv file if possible.
   *
   * https://www.iana.org/assignments/media-types/media-types.xhtml
   * https://www.iana.org/assignments/media-types/application.csv
   */
  static isRegisteredMediaType(mediaType: string | null): boolean;

  /**
   * @param filter
   *        c3 expression to filter media type fields
   * @param sort
   *        c3 sort order expression to sort media type by field(s)
   * @param noCache
   *        if true, will not use cached data and make a fresh request to IANA
   *
   * @return list of all known media types registered with IANA https://www.iana.org/
   */
  static registeredMediaTypes(filter?: string | null, sort?: string | null, noCache?: boolean): C3.Array<MediaTypeFields | null>;
}


interface λConsumer<T> {
  (t: T): void
}
