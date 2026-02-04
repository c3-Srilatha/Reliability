declare namespace SelfServiceDI.Ui {
  export interface ErrorMappingEntry {

    readonly pattern: string;
    withPattern(pattern: string): SelfServiceDI.Ui.ErrorMappingEntry;

    readonly translationKey: string;
    withTranslationKey(translationKey: string): SelfServiceDI.Ui.ErrorMappingEntry;
  }
}

