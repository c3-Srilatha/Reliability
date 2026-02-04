declare namespace Ann {
  export interface UiImportGenerator {

    readonly VALUE_ONLY_FIELD?: string | null;
    withVALUE_ONLY_FIELD(VALUE_ONLY_FIELD: string | null): Ann.UiImportGenerator;

    readonly noInherit?: boolean;
    withNoInherit(noInherit: boolean): Ann.UiImportGenerator;

    readonly generator: string;
    withGenerator(generator: string): Ann.UiImportGenerator;
  }
}

