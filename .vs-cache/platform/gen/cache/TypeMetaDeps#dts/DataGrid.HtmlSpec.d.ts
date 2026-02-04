// TypeScript definitions for the C3 type DataGrid.HtmlSpec

/**
 * Options for rendering the grid as an HTML table using spaces to align columns. Note that not all of the options
 * from {@link DataGrid.FormatSpec} are valid for HTML, but the ones that control what columns are shown are shared.
 *
 * A table rendered with {@link DataGrid#toString}:
 *
 * ```
 *   | name | count
 * --|------|------
 * 0 | Fred |    87
 * 1 | Rick |   113
 * ```
 *
 * would produce this HTML (plus whatever CSS styles are specified):
 *
 * ```html
 * <table>
 *  <thead>
 *   <tr>
 *    <th>&nbsp;</th>
 *    <th>name</th>
 *    <th>count</th>
 *   </tr>
 *  </thead>
 *  <tbody>
 *   <tr>
 *    <th>0</th>
 *    <td>Fred</th>
 *    <td>87</th>
 *   </tr>
 *   <tr>
 *    <th>1</th>
 *    <td>Rick</th>
 *    <td>113</th>
 *   </tr>
 *  </tbody>
 * </table>
 * ```
 *
 * @see DataGrid#toHtml
 *
 * @remarks this represents a value passed to a method that expects an instance of DataGrid.HtmlSpec
 */
declare namespace DataGrid {
  export interface IHtmlSpec {

    /**
     * Maximum length of any column's content.
     */
    maxColWidth?: number | null;

    /**
     * Maximum length of each formatted row, including the grid and column separators. If the content would be too long,
     * columns are narrowed. It may not be possible to maintain this maximum for grids with many columns and too-short
     * a maximum length.
     */
    maxRowWidth?: number | null;

    /**
     * If specified, no more than the specified number of data rows will be displayed. By default the first rows are
     * shown, but see #splitRows.
     */
    maxRows?: number | null;

    /**
     * If specified and the grid has more rows than the #maxRows value, instead of printing only the first rows, half
     * of the limit will be printed from the beginning and half from the end. This will add a "..." row to the table,
     * unless #noHeader is specified.
     */
    splitRows?: boolean;

    /**
     * If specified, no more than the specified number of data columns will be displayed. By default the first ones are
     * shown, but see #splitCols.
     */
    maxCols?: number | null;

    /**
     * If specified and the grid has more data columns than the #maxCols value, instead of printing only the first
     * columns, half of the limit will be printed from the beginning and half from the end. This will add a "..." column
     * to the table, unless #noHeader is specified.
     */
    splitCols?: boolean;

    /**
     * If specified, the header row will be suppressed, as well as the "..." row if #splitRows is used.
     *
     * @see DataGrid.Col#label
     */
    noHeader?: boolean;

    /**
     * If specified, the row labels will be omitted. These are usually the index, but may also be a key in some cases,
     * for example a grid of a map will have the map keys as the labels.
     *
     * @see DataGrid.Row#label
     */
    noLabels?: boolean;

    /**
     * By default, a separator will be printed between the header row and the columns. If this field is specified, there
     * will be no separation between the header and the data rows and the columns will be separated by a single space.
     */
    noGrid?: boolean;

    /**
     * If specified, Unicode box-drawing characters will be used for the grid instead of ASCII characters.
     *
     * @see https://en.wikipedia.org/wiki/Box-drawing_character
     */
    unicodeGrid?: boolean;

    /**
     * If specified, an outer boxes will be drawn around the table. With #unicodeGrid:
     * ```
     * ┌───┬────────┐
     * │   │ name   │
     * ┝━━━┿━━━━━━━━┥
     * │ 0 │ Fred   │
     * │ 1 │ Barney │
     * └───┴────────┘
     * ```
     * Note that this will be the same as the regular text view except four columns wider and 2 lines taller.
     */
    outerBox?: boolean;

    /**
     * If specified, a Markdown-style grid will be used. This will generate pipes on the left and right side of the table
     * and right-alignment markers (':') in the separator row.
     *
     * @see DataGrid#toMarkdown
     * @see MarkdownTable
     */
    markdownGrid?: boolean;

    /**
     * If true, generate a caption with the data source name and number of rows and columns.
     */
    caption?: boolean;

    /**
     * The length after shortening strings that exceed #maxStrHard.
     */
    maxStrSoft: number;

    /**
     * Strings that exceed this length will be shortened to #maxStrSoft.
     */
    maxStrHard: number;

    /**
     * The number of significant/fraction digits to format decimal numbers. This must be at least 1 for SIGNIFICANT
     * and EXPONENTIAL, but may be 0 for FIXED style (NATURAL ignores this).
     *
     * @see #numberStyle
     */
    numberDigits: number;

    /**
     * The style of number formatting.
     *
     * @see #numberDigits
     */
    numberStyle: string;

    /**
     * When producing rows, filter rows that don't match all these criteria. This is only applicable when using the
     * {@link DataGrid#rows rows} method.
     *
     * Map keys are the column indecies (0 based). Map values are matches as specified by {@link DataGrid.Col#filter}.
     * The special value `-1` can be used to filter on the row labels (indices or map keys).
     *
     * If any column match returns false, the whole row will be filtered out. (Multiple criteria are "and"ed.)
     *
     * @see DataGrid#rows
     * @see DataGrid.Col#filter
     */
    filterColumns?: C3.Map<number, string | null> | {[key: number]: string | null};

    /**
     * When producing rows, sort by these columns. This is only applicable when using the {@link DataGrid#rows rows}
     * method.
     *
     * The order in the array determines the priority of the column in the result. Later columns are only used if the
     * values compare equal on prior columns.
     *
     * Sorting is stable so if only a partial ordering is defined, it will be completed using the row labels
     * (indices or map keys).
     *
     * @see DataGrid#rows
     * @see DataGrid.Col#compare
     */
    sortColumns?: C3.Array<DataGrid.SortCol> | Array<IDataGrid.SortCol>;

    /**
     * header row separator column separator, ASCII
     */
    CROSS_ASCII?: string | null;

    /**
     * header row separator column separator, UNICODE
     */
    CROSS_UNICODE?: string | null;

    /**
     * column separator, ASCII
     */
    VERT_ASCII?: string | null;

    /**
     * column separator, UNICODE
     */
    VERT_UNICODE?: string | null;

    /**
     * header row separator, ASCII
     */
    HORIZ_ASCII?: string | null;

    /**
     * header row separator, UNICODE
     */
    HORIZ_UNICODE?: string | null;

    /**
     * hidden rows column value, ASCII
     */
    DOTS_ASCII?: string | null;

    /**
     * hidden rows column value, UNICODE
     */
    DOTS_UNICODE?: string | null;

    /**
     * outer box top-left corner, ASCII
     */
    BOX_TL_ASCII?: string | null;

    /**
     * outer box top-left corner, UNICODE
     */
    BOX_TL_UNICODE?: string | null;

    /**
     * outer box top-right corner, ASCII
     */
    BOX_TR_ASCII?: string | null;

    /**
     * outer box top-right corner, UNICODE
     */
    BOX_TR_UNICODE?: string | null;

    /**
     * outer box top side, ASCII
     */
    BOX_T_ASCII?: string | null;

    /**
     * outer box top side, UNICODE
     */
    BOX_T_UNICODE?: string | null;

    /**
     * outer box top column seprator, ASCII
     */
    BOX_TC_ASCII?: string | null;

    /**
     * outer box top column seprator, UNICODE
     */
    BOX_TC_UNICODE?: string | null;

    /**
     * outer box left side, ASCII
     */
    BOX_L_ASCII?: string | null;

    /**
     * outer box left side, UNICODE
     */
    BOX_L_UNICODE?: string | null;

    /**
     * outer box left header separator, ASCII
     */
    BOX_LC_ASCII?: string | null;

    /**
     * outer box left header separator, UNICODE
     */
    BOX_LC_UNICODE?: string | null;

    /**
     * outer box bottom-left corner, ASCII
     */
    BOX_BL_ASCII?: string | null;

    /**
     * outer box bottom-left corner, UNICODE
     */
    BOX_BL_UNICODE?: string | null;

    /**
     * outer box bottom side, ASCII
     */
    BOX_B_ASCII?: string | null;

    /**
     * outer box bottom side, UNICODE
     */
    BOX_B_UNICODE?: string | null;

    /**
     * outer box bottom column separator, ASCII
     */
    BOX_BC_ASCII?: string | null;

    /**
     * outer box bottom column separator, UNICODE
     */
    BOX_BC_UNICODE?: string | null;

    /**
     * outer box bottom-right corner, ASCII
     */
    BOX_BR_ASCII?: string | null;

    /**
     * outer box bottom-right corner, UNICODE
     */
    BOX_BR_UNICODE?: string | null;

    /**
     * outer box right side, ASCII
     */
    BOX_R_ASCII?: string | null;

    /**
     * outer box right side, UNICODE
     */
    BOX_R_UNICODE?: string | null;

    /**
     * outer box right header separator, ASCII
     */
    BOX_RC_ASCII?: string | null;

    /**
     * outer box right header separator, UNICODE
     */
    BOX_RC_UNICODE?: string | null;

    /**
     * Specify a color map to be used for numeric values. This should be a sequential, diverging or cyclic color map.
     *
     * @see ColorMap
     */
    numberColorMap?: IColorMap | null;

    /**
     * Specify a color map to be used for low-cardinality string values. This should be a qualitative color map.
     *
     * @see ColorMap
     */
    stringColorMap?: IColorMap | null;

    /**
     * HTML `id` attribute to use for the table itself.
     */
    tableId?: string | null;

    /**
     * CSS class to use for the table itself.
     */
    tableClass?: string | null;

    /**
     * CSS class to use for all columns (both header and data).
     */
    colClass?: string | null;

    /**
     * CSS class to use for the label column (both header and data). Note that the label column will use `<th>`
     * elements (in the `tbody`).
     */
    labelColClass?: string | null;

    /**
     * CSS class to use for numeric columns (both header and data).
     */
    numberColClass?: string | null;

    /**
     * CSS class to use for the "..." row produced when #splitRows is used.
     */
    splitRowClass?: string | null;

    /**
     * CSS class to use for the "..." column produced when #splitCols is used.
     */
    splitColClass?: string | null;

    /**
     * CSS class to be used for data cells that have a light-colored background from a color map.
     */
    lightColBgClass?: string | null;

    /**
     * CSS class to be used for data cells that have a dark-colored background from a color map. If this is not
     * specified, the cell will have explicitly white-colored text.
     */
    darkColBgClass?: string | null;

    /**
     * CSS class to be used for cells that don't represent actual data slots, ones that are "filled in" for ragged data
     * structures.
     */
    fillInBgClass?: string | null;

    /**
     * If true, add the `data-index` attribute to column headings and rows of the table. This is especially useful for
     * event handlers to identify which column and/or row they are being invoked on.
     */
    dataIndex?: boolean;

    /**
     * If true, add the `data-value` attribute to cells of the table for {@link DataGrid.Col#scalar scalar columns}.
     * This is especially useful for numeric columns to get the string representation of the raw value, without
     * thousands separators. It also always provides the full string representation, without the truncation done by
     * {@link DataGrid.Cell#stringify}.
     */
    dataValue?: boolean;
  }
}

/**
 * Options for rendering the grid as an HTML table using spaces to align columns. Note that not all of the options
 * from {@link DataGrid.FormatSpec} are valid for HTML, but the ones that control what columns are shown are shared.
 *
 * A table rendered with {@link DataGrid#toString}:
 *
 * ```
 *   | name | count
 * --|------|------
 * 0 | Fred |    87
 * 1 | Rick |   113
 * ```
 *
 * would produce this HTML (plus whatever CSS styles are specified):
 *
 * ```html
 * <table>
 *  <thead>
 *   <tr>
 *    <th>&nbsp;</th>
 *    <th>name</th>
 *    <th>count</th>
 *   </tr>
 *  </thead>
 *  <tbody>
 *   <tr>
 *    <th>0</th>
 *    <td>Fred</th>
 *    <td>87</th>
 *   </tr>
 *   <tr>
 *    <th>1</th>
 *    <td>Rick</th>
 *    <td>113</th>
 *   </tr>
 *  </tbody>
 * </table>
 * ```
 *
 * @see DataGrid#toHtml
 *
 * @remarks this represents a made instance of DataGrid.HtmlSpec
 */
declare namespace DataGrid {
  export class HtmlSpec extends Obj {

    /**
     * Maximum length of any column's content.
     */
    readonly maxColWidth?: number | null;
    withMaxColWidth(maxColWidth: number | null): DataGrid.HtmlSpec;

    /**
     * Maximum length of each formatted row, including the grid and column separators. If the content would be too long,
     * columns are narrowed. It may not be possible to maintain this maximum for grids with many columns and too-short
     * a maximum length.
     */
    readonly maxRowWidth?: number | null;
    withMaxRowWidth(maxRowWidth: number | null): DataGrid.HtmlSpec;

    /**
     * If specified, no more than the specified number of data rows will be displayed. By default the first rows are
     * shown, but see #splitRows.
     */
    readonly maxRows?: number | null;
    withMaxRows(maxRows: number | null): DataGrid.HtmlSpec;

    /**
     * If specified and the grid has more rows than the #maxRows value, instead of printing only the first rows, half
     * of the limit will be printed from the beginning and half from the end. This will add a "..." row to the table,
     * unless #noHeader is specified.
     */
    readonly splitRows?: boolean;
    withSplitRows(splitRows: boolean): DataGrid.HtmlSpec;

    /**
     * If specified, no more than the specified number of data columns will be displayed. By default the first ones are
     * shown, but see #splitCols.
     */
    readonly maxCols?: number | null;
    withMaxCols(maxCols: number | null): DataGrid.HtmlSpec;

    /**
     * If specified and the grid has more data columns than the #maxCols value, instead of printing only the first
     * columns, half of the limit will be printed from the beginning and half from the end. This will add a "..." column
     * to the table, unless #noHeader is specified.
     */
    readonly splitCols?: boolean;
    withSplitCols(splitCols: boolean): DataGrid.HtmlSpec;

    /**
     * If specified, the header row will be suppressed, as well as the "..." row if #splitRows is used.
     *
     * @see DataGrid.Col#label
     */
    readonly noHeader?: boolean;
    withNoHeader(noHeader: boolean): DataGrid.HtmlSpec;

    /**
     * If specified, the row labels will be omitted. These are usually the index, but may also be a key in some cases,
     * for example a grid of a map will have the map keys as the labels.
     *
     * @see DataGrid.Row#label
     */
    readonly noLabels?: boolean;
    withNoLabels(noLabels: boolean): DataGrid.HtmlSpec;

    /**
     * By default, a separator will be printed between the header row and the columns. If this field is specified, there
     * will be no separation between the header and the data rows and the columns will be separated by a single space.
     */
    readonly noGrid?: boolean;
    withNoGrid(noGrid: boolean): DataGrid.HtmlSpec;

    /**
     * If specified, Unicode box-drawing characters will be used for the grid instead of ASCII characters.
     *
     * @see https://en.wikipedia.org/wiki/Box-drawing_character
     */
    readonly unicodeGrid?: boolean;
    withUnicodeGrid(unicodeGrid: boolean): DataGrid.HtmlSpec;

    /**
     * If specified, an outer boxes will be drawn around the table. With #unicodeGrid:
     * ```
     * ┌───┬────────┐
     * │   │ name   │
     * ┝━━━┿━━━━━━━━┥
     * │ 0 │ Fred   │
     * │ 1 │ Barney │
     * └───┴────────┘
     * ```
     * Note that this will be the same as the regular text view except four columns wider and 2 lines taller.
     */
    readonly outerBox?: boolean;
    withOuterBox(outerBox: boolean): DataGrid.HtmlSpec;

    /**
     * If specified, a Markdown-style grid will be used. This will generate pipes on the left and right side of the table
     * and right-alignment markers (':') in the separator row.
     *
     * @see DataGrid#toMarkdown
     * @see MarkdownTable
     */
    readonly markdownGrid?: boolean;
    withMarkdownGrid(markdownGrid: boolean): DataGrid.HtmlSpec;

    /**
     * If true, generate a caption with the data source name and number of rows and columns.
     */
    readonly caption?: boolean;
    withCaption(caption: boolean): DataGrid.HtmlSpec;

    /**
     * The length after shortening strings that exceed #maxStrHard.
     */
    readonly maxStrSoft: number;
    withMaxStrSoft(maxStrSoft: number): DataGrid.HtmlSpec;

    /**
     * Strings that exceed this length will be shortened to #maxStrSoft.
     */
    readonly maxStrHard: number;
    withMaxStrHard(maxStrHard: number): DataGrid.HtmlSpec;

    /**
     * The number of significant/fraction digits to format decimal numbers. This must be at least 1 for SIGNIFICANT
     * and EXPONENTIAL, but may be 0 for FIXED style (NATURAL ignores this).
     *
     * @see #numberStyle
     */
    readonly numberDigits: number;
    withNumberDigits(numberDigits: number): DataGrid.HtmlSpec;

    /**
     * The style of number formatting.
     *
     * @see #numberDigits
     */
    readonly numberStyle: string;
    withNumberStyle(numberStyle: string): DataGrid.HtmlSpec;

    /**
     * When producing rows, filter rows that don't match all these criteria. This is only applicable when using the
     * {@link DataGrid#rows rows} method.
     *
     * Map keys are the column indecies (0 based). Map values are matches as specified by {@link DataGrid.Col#filter}.
     * The special value `-1` can be used to filter on the row labels (indices or map keys).
     *
     * If any column match returns false, the whole row will be filtered out. (Multiple criteria are "and"ed.)
     *
     * @see DataGrid#rows
     * @see DataGrid.Col#filter
     */
    readonly filterColumns?: C3.Map<number, string | null>;
    withFilterColumns(filterColumns: C3.Map<number, string | null> | {[key: number]: string | null}): DataGrid.HtmlSpec;

    /**
     * When producing rows, sort by these columns. This is only applicable when using the {@link DataGrid#rows rows}
     * method.
     *
     * The order in the array determines the priority of the column in the result. Later columns are only used if the
     * values compare equal on prior columns.
     *
     * Sorting is stable so if only a partial ordering is defined, it will be completed using the row labels
     * (indices or map keys).
     *
     * @see DataGrid#rows
     * @see DataGrid.Col#compare
     */
    readonly sortColumns?: C3.Array<DataGrid.SortCol>;
    withSortColumns(sortColumns: C3.Array<DataGrid.SortCol> | Array<IDataGrid.SortCol>): DataGrid.HtmlSpec;

    /**
     * header row separator column separator, ASCII
     */
    readonly CROSS_ASCII?: string | null;
    withCROSS_ASCII(CROSS_ASCII: string | null): DataGrid.HtmlSpec;

    /**
     * header row separator column separator, UNICODE
     */
    readonly CROSS_UNICODE?: string | null;
    withCROSS_UNICODE(CROSS_UNICODE: string | null): DataGrid.HtmlSpec;

    /**
     * column separator, ASCII
     */
    readonly VERT_ASCII?: string | null;
    withVERT_ASCII(VERT_ASCII: string | null): DataGrid.HtmlSpec;

    /**
     * column separator, UNICODE
     */
    readonly VERT_UNICODE?: string | null;
    withVERT_UNICODE(VERT_UNICODE: string | null): DataGrid.HtmlSpec;

    /**
     * header row separator, ASCII
     */
    readonly HORIZ_ASCII?: string | null;
    withHORIZ_ASCII(HORIZ_ASCII: string | null): DataGrid.HtmlSpec;

    /**
     * header row separator, UNICODE
     */
    readonly HORIZ_UNICODE?: string | null;
    withHORIZ_UNICODE(HORIZ_UNICODE: string | null): DataGrid.HtmlSpec;

    /**
     * hidden rows column value, ASCII
     */
    readonly DOTS_ASCII?: string | null;
    withDOTS_ASCII(DOTS_ASCII: string | null): DataGrid.HtmlSpec;

    /**
     * hidden rows column value, UNICODE
     */
    readonly DOTS_UNICODE?: string | null;
    withDOTS_UNICODE(DOTS_UNICODE: string | null): DataGrid.HtmlSpec;

    /**
     * outer box top-left corner, ASCII
     */
    readonly BOX_TL_ASCII?: string | null;
    withBOX_TL_ASCII(BOX_TL_ASCII: string | null): DataGrid.HtmlSpec;

    /**
     * outer box top-left corner, UNICODE
     */
    readonly BOX_TL_UNICODE?: string | null;
    withBOX_TL_UNICODE(BOX_TL_UNICODE: string | null): DataGrid.HtmlSpec;

    /**
     * outer box top-right corner, ASCII
     */
    readonly BOX_TR_ASCII?: string | null;
    withBOX_TR_ASCII(BOX_TR_ASCII: string | null): DataGrid.HtmlSpec;

    /**
     * outer box top-right corner, UNICODE
     */
    readonly BOX_TR_UNICODE?: string | null;
    withBOX_TR_UNICODE(BOX_TR_UNICODE: string | null): DataGrid.HtmlSpec;

    /**
     * outer box top side, ASCII
     */
    readonly BOX_T_ASCII?: string | null;
    withBOX_T_ASCII(BOX_T_ASCII: string | null): DataGrid.HtmlSpec;

    /**
     * outer box top side, UNICODE
     */
    readonly BOX_T_UNICODE?: string | null;
    withBOX_T_UNICODE(BOX_T_UNICODE: string | null): DataGrid.HtmlSpec;

    /**
     * outer box top column seprator, ASCII
     */
    readonly BOX_TC_ASCII?: string | null;
    withBOX_TC_ASCII(BOX_TC_ASCII: string | null): DataGrid.HtmlSpec;

    /**
     * outer box top column seprator, UNICODE
     */
    readonly BOX_TC_UNICODE?: string | null;
    withBOX_TC_UNICODE(BOX_TC_UNICODE: string | null): DataGrid.HtmlSpec;

    /**
     * outer box left side, ASCII
     */
    readonly BOX_L_ASCII?: string | null;
    withBOX_L_ASCII(BOX_L_ASCII: string | null): DataGrid.HtmlSpec;

    /**
     * outer box left side, UNICODE
     */
    readonly BOX_L_UNICODE?: string | null;
    withBOX_L_UNICODE(BOX_L_UNICODE: string | null): DataGrid.HtmlSpec;

    /**
     * outer box left header separator, ASCII
     */
    readonly BOX_LC_ASCII?: string | null;
    withBOX_LC_ASCII(BOX_LC_ASCII: string | null): DataGrid.HtmlSpec;

    /**
     * outer box left header separator, UNICODE
     */
    readonly BOX_LC_UNICODE?: string | null;
    withBOX_LC_UNICODE(BOX_LC_UNICODE: string | null): DataGrid.HtmlSpec;

    /**
     * outer box bottom-left corner, ASCII
     */
    readonly BOX_BL_ASCII?: string | null;
    withBOX_BL_ASCII(BOX_BL_ASCII: string | null): DataGrid.HtmlSpec;

    /**
     * outer box bottom-left corner, UNICODE
     */
    readonly BOX_BL_UNICODE?: string | null;
    withBOX_BL_UNICODE(BOX_BL_UNICODE: string | null): DataGrid.HtmlSpec;

    /**
     * outer box bottom side, ASCII
     */
    readonly BOX_B_ASCII?: string | null;
    withBOX_B_ASCII(BOX_B_ASCII: string | null): DataGrid.HtmlSpec;

    /**
     * outer box bottom side, UNICODE
     */
    readonly BOX_B_UNICODE?: string | null;
    withBOX_B_UNICODE(BOX_B_UNICODE: string | null): DataGrid.HtmlSpec;

    /**
     * outer box bottom column separator, ASCII
     */
    readonly BOX_BC_ASCII?: string | null;
    withBOX_BC_ASCII(BOX_BC_ASCII: string | null): DataGrid.HtmlSpec;

    /**
     * outer box bottom column separator, UNICODE
     */
    readonly BOX_BC_UNICODE?: string | null;
    withBOX_BC_UNICODE(BOX_BC_UNICODE: string | null): DataGrid.HtmlSpec;

    /**
     * outer box bottom-right corner, ASCII
     */
    readonly BOX_BR_ASCII?: string | null;
    withBOX_BR_ASCII(BOX_BR_ASCII: string | null): DataGrid.HtmlSpec;

    /**
     * outer box bottom-right corner, UNICODE
     */
    readonly BOX_BR_UNICODE?: string | null;
    withBOX_BR_UNICODE(BOX_BR_UNICODE: string | null): DataGrid.HtmlSpec;

    /**
     * outer box right side, ASCII
     */
    readonly BOX_R_ASCII?: string | null;
    withBOX_R_ASCII(BOX_R_ASCII: string | null): DataGrid.HtmlSpec;

    /**
     * outer box right side, UNICODE
     */
    readonly BOX_R_UNICODE?: string | null;
    withBOX_R_UNICODE(BOX_R_UNICODE: string | null): DataGrid.HtmlSpec;

    /**
     * outer box right header separator, ASCII
     */
    readonly BOX_RC_ASCII?: string | null;
    withBOX_RC_ASCII(BOX_RC_ASCII: string | null): DataGrid.HtmlSpec;

    /**
     * outer box right header separator, UNICODE
     */
    readonly BOX_RC_UNICODE?: string | null;
    withBOX_RC_UNICODE(BOX_RC_UNICODE: string | null): DataGrid.HtmlSpec;

    /**
     * Specify a color map to be used for numeric values. This should be a sequential, diverging or cyclic color map.
     *
     * @see ColorMap
     */
    readonly numberColorMap?: ColorMap | null;
    withNumberColorMap(numberColorMap: IColorMap | null): DataGrid.HtmlSpec;

    /**
     * Specify a color map to be used for low-cardinality string values. This should be a qualitative color map.
     *
     * @see ColorMap
     */
    readonly stringColorMap?: ColorMap | null;
    withStringColorMap(stringColorMap: IColorMap | null): DataGrid.HtmlSpec;

    /**
     * HTML `id` attribute to use for the table itself.
     */
    readonly tableId?: string | null;
    withTableId(tableId: string | null): DataGrid.HtmlSpec;

    /**
     * CSS class to use for the table itself.
     */
    readonly tableClass?: string | null;
    withTableClass(tableClass: string | null): DataGrid.HtmlSpec;

    /**
     * CSS class to use for all columns (both header and data).
     */
    readonly colClass?: string | null;
    withColClass(colClass: string | null): DataGrid.HtmlSpec;

    /**
     * CSS class to use for the label column (both header and data). Note that the label column will use `<th>`
     * elements (in the `tbody`).
     */
    readonly labelColClass?: string | null;
    withLabelColClass(labelColClass: string | null): DataGrid.HtmlSpec;

    /**
     * CSS class to use for numeric columns (both header and data).
     */
    readonly numberColClass?: string | null;
    withNumberColClass(numberColClass: string | null): DataGrid.HtmlSpec;

    /**
     * CSS class to use for the "..." row produced when #splitRows is used.
     */
    readonly splitRowClass?: string | null;
    withSplitRowClass(splitRowClass: string | null): DataGrid.HtmlSpec;

    /**
     * CSS class to use for the "..." column produced when #splitCols is used.
     */
    readonly splitColClass?: string | null;
    withSplitColClass(splitColClass: string | null): DataGrid.HtmlSpec;

    /**
     * CSS class to be used for data cells that have a light-colored background from a color map.
     */
    readonly lightColBgClass?: string | null;
    withLightColBgClass(lightColBgClass: string | null): DataGrid.HtmlSpec;

    /**
     * CSS class to be used for data cells that have a dark-colored background from a color map. If this is not
     * specified, the cell will have explicitly white-colored text.
     */
    readonly darkColBgClass?: string | null;
    withDarkColBgClass(darkColBgClass: string | null): DataGrid.HtmlSpec;

    /**
     * CSS class to be used for cells that don't represent actual data slots, ones that are "filled in" for ragged data
     * structures.
     */
    readonly fillInBgClass?: string | null;
    withFillInBgClass(fillInBgClass: string | null): DataGrid.HtmlSpec;

    /**
     * If true, add the `data-index` attribute to column headings and rows of the table. This is especially useful for
     * event handlers to identify which column and/or row they are being invoked on.
     */
    readonly dataIndex?: boolean;
    withDataIndex(dataIndex: boolean): DataGrid.HtmlSpec;

    /**
     * If true, add the `data-value` attribute to cells of the table for {@link DataGrid.Col#scalar scalar columns}.
     * This is especially useful for numeric columns to get the string representation of the raw value, without
     * thousands separators. It also always provides the full string representation, without the truncation done by
     * {@link DataGrid.Cell#stringify}.
     */
    readonly dataValue?: boolean;
    withDataValue(dataValue: boolean): DataGrid.HtmlSpec;

    /**
     * Load the JSON-based representation and reconstruct the corresponding object.
     *
     * fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
     * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
     * called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
     * an instance of the correct type.
     *
     * @see #toJson
     */
    static fromJson(json: any | null): DataGrid.HtmlSpec | null;

    /**
     * Load the JSON-based representation and reconstruct the corresponding object.
     *
     * fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
     * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
     * called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
     * an instance of the correct type.
     *
     * @see #toJsonString
     */
    static fromJsonString(json: string | null): DataGrid.HtmlSpec | null;

    /**
     * Load the XML-based representation and reconstruct the corresponding object.
     *
     * fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
     * may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
     * isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
     * will return an instance of the correct type.
     *
     * @see #toXmlString
     */
    static fromXmlString(xml: string | null): DataGrid.HtmlSpec | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): DataGrid.HtmlSpec | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): DataGrid.HtmlSpec;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): DataGrid.HtmlSpec;

    /**
     * Result of this function call is a copy of current instance with all fields replaced based on results of the
     * `mapper` invocation.
     *
     * @param spec
     *           which fields to include
     * @param mapper
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): DataGrid.HtmlSpec;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<DataGrid.HtmlSpec | null>;

    /**
     * Result of this function call is a copy of current instance with all fields replaced based on results of the
     * asynchronous `mapper` invocation.
     *
     * @param spec
     *           which fields to include
     * @param mapper
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<DataGrid.HtmlSpec | null>;

    /**
     * Result of this function call is a copy of current instance with specified field value replaced based on result of
     * the `mapper` invocation.
     * @param field
     *           field being mapped
     * @param includeEmpty
     *           if set, invokes mapper for fields with empty value
     * @param mapper
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): DataGrid.HtmlSpec;

    /**
     * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
     * lambda application.
     *
     * Result of this function call is a copy of current instance with all references replaced based on results of the
     * `mapper` invocation.
     *
     * @param action
     *           function to be executed for each pair of field type and Obj instance
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): DataGrid.HtmlSpec;

    /**
     * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
     * lambda application.
     *
     * Result of this function call is a copy of current instance with all references replaced based on results of the
     * `mapper` invocation.
     *
     * @param includeEmpty
     *           if `true` will also process references with `null` / "Empty" references
     * @param mapper
     *           function to be executed for each pair of field type and Obj instance for producing new reference value
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): DataGrid.HtmlSpec;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): DataGrid.HtmlSpec;

    /**
     * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
     * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
     *
     * @param field
     *           name of the field
     * @param value
     *           of the field
     * @param doNotConvert
     *           if true, do not attempt to convert the value to match the field's type
     * @return new Obj
     *
     * @see #withoutField
     * @see #defaultField
     */
    withField(field: string, value: any, doNotConvert?: boolean): DataGrid.HtmlSpec;

    /**
     * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
     * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
     *
     * @param field
     *           the field
     * @param value
     *           of the field
     * @param doNotConvert
     *           if true, do not attempt to convert the value to match the field's type
     * @return new Obj
     *
     * @see #withoutField
     * @see #defaultField
     */
    withField(field: FieldType, value: any, doNotConvert?: boolean): DataGrid.HtmlSpec;

    /**
     * Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
     * defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
     *
     * @param fields
     *           map of field names/values
     * @param doNotConvert
     *           if true, attempt to convert the values to match the fields' type
     * @return new Obj
     */
    withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): DataGrid.HtmlSpec;

    /**
     * Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
     * If you would like to #unsetField, you should call #withoutFieldAtPath instead.
     *
     * Immutable objects may return the same instance if the field being set does not actually represent a
     * change to the existing object.
     *
     * @param path
     *           path to set value at
     * @param value
     *           value to set
     * @param doNotConvert
     *           if true, attempt to convert the values to match the fields' type
     * @param doNotCreateIfMissing
     *           true indicates that any empty reference along the path will not set the value
     * @return new Obj
     */
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): DataGrid.HtmlSpec;

    /**
     * Builds a new Obj without the specified path field.
     *
     * Immutable objects may return the same instance if the field being removed does not actually represent a
     * change to the existing object.
     *
     * @param path
     *           path for field to remove
     * @return new Obj
     *
     * @see #withFieldAtPath
     * @see #withoutField
     */
    withoutFieldAtPath(path: string): DataGrid.HtmlSpec;

    /**
     * Builds a new Obj, removing the field with the provided name.
     *
     * Immutable objects may return the same instance if the field being removed is not present in the existing object.
     *
     * @param field
     *           name of the field to remove
     * @return new Obj with removed field
     *
     * @see #unsetField
     * @see #removeField
     */
    withoutField(field: string | null): DataGrid.HtmlSpec;

    /**
     * Builds a new Obj, removing the field with the provided field type.
     *
     * Immutable objects may return the same instance if the field being removed is not present in the existing object.
     *
     * @param field
     *           name of the field to remove
     * @return new Obj with removed field
     *
     * @see #unsetField
     * @see #removeField
     */
    withoutField(field: FieldType | null): DataGrid.HtmlSpec;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: C3.Array<string | null> | null): DataGrid.HtmlSpec;

    /**
     * Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
     * exact same type as the type of the obj to respect the "ordinal" of the field type
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           field types to remove
     * @return new Obj with removed fields
     */
    withoutFieldsByType(fields: C3.Array<FieldType | null> | null): DataGrid.HtmlSpec;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): DataGrid.HtmlSpec;

    /**
     * Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
     * calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
     * {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
     * fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
     * fields that have already been set.
     *
     * {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
     * As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
     *
     * @param includeEmptyRefsWithDefaults
     *           it `true` then missing / empty child references that have fields with defaults will also be instantiated
     * @param defaultFields
     *           If not empty, a list of default field paths to populate.  Any default fields not specified in the
     *           array will be ignored.
     * @return new Obj
     *
     * @see #defaultField
     * @see FieldType#defaultValueConst
     * @see FieldType#defaultValue
     */
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): DataGrid.HtmlSpec;

    /**
     * Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
     * method will behave the same as {@link #unsetField}.
     *
     * @param field
     *         name of the field to default
     * @return new `Obj` with the specified field set to its default value
     *
     * @see #withField
     * @see #unsetField
     */
    defaultField(field: string): DataGrid.HtmlSpec;

    /**
     * Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
     * method will behave the same as {@link #unsetField}.
     *
     * @param field
     *         field type to default
     * @return new `Obj` with the specified field set to its default value
     *
     * @see #withField
     * @see #unsetField
     */
    defaultField(field: FieldType): DataGrid.HtmlSpec;

    /**
     * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
     * is different from {@link removeField}
     *
     * @param field
     *         name of the field to unset
     * @return new `Obj` with the specified field unset
     *
     * @see #withoutField
     * @see #removeField
     */
    unsetField(field: string): DataGrid.HtmlSpec;

    /**
     * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
     * is different from {@link removeField}
     *
     * @param field
     *         field type to unset
     * @return new `Obj` with the specified field unset
     *
     * @see #withoutField
     * @see #removeField
     */
    unsetField(field: FieldType): DataGrid.HtmlSpec;

    /**
     * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
     * is different from {@link #unsetField}
     *
     * @param field
     *         name of the field to remove
     * @return new `Obj` with the specified field removed
     *
     * @see #withoutField
     * @see #unsetField
     */
    removeField(field: string): DataGrid.HtmlSpec;

    /**
     * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
     * is different from {@link #unsetField}
     *
     * @param field
     *         field type to remove
     * @return new `Obj` with the specified field removed
     *
     * @see #withoutField
     * @see #unsetField
     */
    removeField(field: FieldType): DataGrid.HtmlSpec;

    /**
     * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
     * In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
     *
     * @param other
     *           object
     * @param fieldPathMergeSpec
     *           mapping of fields of the object to the respective merge annotations
     * @return the new merged Obj
     */
    mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): DataGrid.HtmlSpec;

    /**
     * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
     * In case of conflicts, fields of other instance take precedence.
     *
     * @param other
     *           object
     * @param otherFieldsFilter
     *           only fields of otherFieldsFilter type from other are merged into this obj.
     * @return the new merged Obj
     */
    mergeObj(other: Obj | null, otherFieldsFilter: Type): DataGrid.HtmlSpec;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): DataGrid.HtmlSpec;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): DataGrid.HtmlSpec;

    mergeJson(json: any | null): DataGrid.HtmlSpec;

    /**
     * Merge the obj references within the current obj
     * @param deep
     *        If set, traverses the reference fields within the obj as well for a deep merge
     * @param objKey
     *        lambda specifying how to obtain the key for the Obj while determining which Objs to merge
     * @param filter
     *        Field paths that need to be filtered from this merge
     * @return Obj with child references merged
     */
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): DataGrid.HtmlSpec;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj | null, deep?: boolean): DataGrid.HtmlSpec;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): C3.Array<DataGrid.HtmlSpec | null>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: any[]): C3.Array<DataGrid.HtmlSpec | null>;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<DataGrid.HtmlSpec | null> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): C3.Set<DataGrid.HtmlSpec | null>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<DataGrid.HtmlSpec | null> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string | null, DataGrid.HtmlSpec | null> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, DataGrid.HtmlSpec | null> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<DataGrid.HtmlSpec | null>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<DataGrid.HtmlSpec | null>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): DataGrid.HtmlSpec;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): DataGrid.HtmlSpec;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): DataGrid.HtmlSpec;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): DataGrid.HtmlSpec;

    /**
     * Construct an instance from provided fields
     * @param fields
     *            Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
     *            field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
     *            to Panda.make()
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
     *            -> 0) populated. Passing an empty value for a field will result in the initial value being set if
     *            the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
     *
     *
     * @see fromFields
     * @see beforeMake
     * @see afterMake
     * @see withDefaults
     */
    static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): DataGrid.HtmlSpec;

    /**
     * Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
     *
     * ```js
     * User.make({
     *   email: 'joe@smith.com',
     *   realName: 'Joe Smith'
     * })
     *
     * Obj.make({
     *   type: 'User',
     *   email: 'joe@smith.com',
     *   realName: 'Joe Smith'
     * })
     * ```
     *
     * ```py
     * c3.User.make({
     *   "email": 'joe@smith.com',
     *   "realName": 'Joe Smith'
     * })
     *
     * c3.Obj.make({
     *   "type": 'User',
     *   "email": 'joe@smith.com',
     *   "realName": 'Joe Smith'
     * })
     *
     * c3.User(email='joe@smith.com', realName='Joe Smith')
     *
     * c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
     * ```
     *
     * Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
     * specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
     * such as {@link Ann.Ser} do not apply.
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see fromFields
     * @see beforeMake
     * @see afterMake
     * @see withDefaults
     */
    static make(fields: any, withDefaults?: boolean): DataGrid.HtmlSpec;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): DataGrid.HtmlSpec;

    /**
     * Optional override that will be called every time instance of this type is created.
     *
     *
     * Note that it introduces additional overhead so should only be implemented for low volume data.
     */
    static beforeMake(fields: C3.Map<FieldType | null, any> | null): C3.Map<FieldType | null, any>;

    /**
     * Optional override that will be called after every instance creation.
     *
     * Note that it introduces additional overhead so should only be implemented for low volume data.
     */
    afterMake(): DataGrid.HtmlSpec;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): DataGrid.HtmlSpec;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec | null): Stream<DataGrid.HtmlSpec>;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec | null): DataGrid.HtmlSpec;
  }
}


interface λFunction<T, R> {
  (t: T): R
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λPredicate<T> {
  (t: T): boolean
}
