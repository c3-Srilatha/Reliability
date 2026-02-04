// TypeScript definitions for the C3 type Genai.SourceFileTypes

/**
 * Supported file formats for source file ingestion
 *
 * @remarks this represents a value passed to a method that expects an instance of Genai.SourceFileTypes
 */
declare namespace Genai {
  export interface ISourceFileTypes {

    /**
     * C3doc markdown file
     */
    C3DOC_MD?: string;

    /**
     * C3doc markdown file
     */
    C3DOC?: string;

    /**
     * Markdown file
     */
    MD?: string;

    /**
     * Jupyter notebook
     */
    IPYNB?: string;

    /**
     * PDF file
     */
    PDF?: string;

    /**
     * C3typ file
     */
    C3TYP?: string;

    /**
     * DOC file
     */
    DOC?: string;

    /**
     * DOCX file
     */
    DOCX?: string;

    /**
     * HTML file
     */
    HTML?: string;

    /**
     * PPTX file
     */
    PPTX?: string;

    /**
     * TXT file
     */
    TXT?: string;

    /**
     * RTF file
     */
    RTF?: string;

    /**
     * PNG file
     */
    PNG?: string;

    /**
     * JPEG file
     */
    JPEG?: string;

    /**
     * JPG file
     */
    JPG?: string;

    /**
     * XLSX file
     */
    XLSX?: string;
  }
}

/**
 * Supported file formats for source file ingestion
 *
 * @remarks this represents a made instance of Genai.SourceFileTypes
 */
declare namespace Genai {
  export class SourceFileTypes {

    /**
     * C3doc markdown file
     */
    readonly C3DOC_MD?: string;
    withC3DOC_MD(C3DOC_MD: string | null): Genai.SourceFileTypes;

    /**
     * C3doc markdown file
     */
    readonly C3DOC?: string;
    withC3DOC(C3DOC: string | null): Genai.SourceFileTypes;

    /**
     * Markdown file
     */
    readonly MD?: string;
    withMD(MD: string | null): Genai.SourceFileTypes;

    /**
     * Jupyter notebook
     */
    readonly IPYNB?: string;
    withIPYNB(IPYNB: string | null): Genai.SourceFileTypes;

    /**
     * PDF file
     */
    readonly PDF?: string;
    withPDF(PDF: string | null): Genai.SourceFileTypes;

    /**
     * C3typ file
     */
    readonly C3TYP?: string;
    withC3TYP(C3TYP: string | null): Genai.SourceFileTypes;

    /**
     * DOC file
     */
    readonly DOC?: string;
    withDOC(DOC: string | null): Genai.SourceFileTypes;

    /**
     * DOCX file
     */
    readonly DOCX?: string;
    withDOCX(DOCX: string | null): Genai.SourceFileTypes;

    /**
     * HTML file
     */
    readonly HTML?: string;
    withHTML(HTML: string | null): Genai.SourceFileTypes;

    /**
     * PPTX file
     */
    readonly PPTX?: string;
    withPPTX(PPTX: string | null): Genai.SourceFileTypes;

    /**
     * TXT file
     */
    readonly TXT?: string;
    withTXT(TXT: string | null): Genai.SourceFileTypes;

    /**
     * RTF file
     */
    readonly RTF?: string;
    withRTF(RTF: string | null): Genai.SourceFileTypes;

    /**
     * PNG file
     */
    readonly PNG?: string;
    withPNG(PNG: string | null): Genai.SourceFileTypes;

    /**
     * JPEG file
     */
    readonly JPEG?: string;
    withJPEG(JPEG: string | null): Genai.SourceFileTypes;

    /**
     * JPG file
     */
    readonly JPG?: string;
    withJPG(JPG: string | null): Genai.SourceFileTypes;

    /**
     * XLSX file
     */
    readonly XLSX?: string;
    withXLSX(XLSX: string | null): Genai.SourceFileTypes;

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
}


interface λConsumer<T> {
  (t: T): void
}
