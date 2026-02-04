declare namespace Ann {
  export interface CodeEditorTemplate {

    readonly VALUE_ONLY_FIELD?: string | null;
    withVALUE_ONLY_FIELD(VALUE_ONLY_FIELD: string | null): Ann.CodeEditorTemplate;

    readonly noInherit?: boolean;
    withNoInherit(noInherit: boolean): Ann.CodeEditorTemplate;

    readonly name?: string | null;
    withName(name: string | null): Ann.CodeEditorTemplate;

    readonly description?: string | null;
    withDescription(description: string | null): Ann.CodeEditorTemplate;

    readonly displayIcon?: string | null;
    withDisplayIcon(displayIcon: string | null): Ann.CodeEditorTemplate;
  }
}

