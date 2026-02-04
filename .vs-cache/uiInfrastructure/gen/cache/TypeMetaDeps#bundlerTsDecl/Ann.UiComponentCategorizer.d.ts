declare namespace Ann {
  export interface UiComponentCategorizer {

    readonly VALUE_ONLY_FIELD?: string | null;
    withVALUE_ONLY_FIELD(VALUE_ONLY_FIELD: string | null): Ann.UiComponentCategorizer;

    readonly noInherit?: boolean;
    withNoInherit(noInherit: boolean): Ann.UiComponentCategorizer;

    readonly name: string;
    withName(name: string): Ann.UiComponentCategorizer;

    readonly category?: string | null;
    withCategory(category: string | null): Ann.UiComponentCategorizer;

    readonly aliases?: C3.Array<string | null>;
    withAliases(aliases: C3.Array<string | null> | Array<string | null>): Ann.UiComponentCategorizer;

    readonly hide?: boolean;
    withHide(hide: boolean): Ann.UiComponentCategorizer;
  }
}

