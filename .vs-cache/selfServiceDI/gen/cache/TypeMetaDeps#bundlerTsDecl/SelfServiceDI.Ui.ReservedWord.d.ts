declare namespace SelfServiceDI.Ui {
  export interface ReservedWord {

    readonly meta?: Meta | null;
    withMeta(meta: IMeta | null): SelfServiceDI.Ui.ReservedWord;

    readonly name: string;
    withName(name: string): SelfServiceDI.Ui.ReservedWord;
  }
}

