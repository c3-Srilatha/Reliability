declare namespace SelfServiceDI.Ui {
  export interface DataConnectorCategory {

    readonly meta?: Meta | null;
    withMeta(meta: IMeta | null): SelfServiceDI.Ui.DataConnectorCategory;

    readonly name: string;
    withName(name: string): SelfServiceDI.Ui.DataConnectorCategory;

    readonly priority: number;
    withPriority(priority: number): SelfServiceDI.Ui.DataConnectorCategory;

    readonly hidden?: boolean;
    withHidden(hidden: boolean): SelfServiceDI.Ui.DataConnectorCategory;

    readonly label?: string | null;
    withLabel(label: string | null): SelfServiceDI.Ui.DataConnectorCategory;

    readonly sourceSystemType?: string | null;
    withSourceSystemType(sourceSystemType: string | null): SelfServiceDI.Ui.DataConnectorCategory;
  }
}

