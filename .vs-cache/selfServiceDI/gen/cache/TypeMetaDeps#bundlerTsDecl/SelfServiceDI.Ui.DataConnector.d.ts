declare namespace SelfServiceDI.Ui {
  export interface DataConnector {

    readonly meta?: Meta | null;
    withMeta(meta: IMeta | null): SelfServiceDI.Ui.DataConnector;

    readonly name: string;
    withName(name: string): SelfServiceDI.Ui.DataConnector;

    readonly priority: number;
    withPriority(priority: number): SelfServiceDI.Ui.DataConnector;

    readonly hidden?: boolean;
    withHidden(hidden: boolean): SelfServiceDI.Ui.DataConnector;

    readonly label: string;
    withLabel(label: string): SelfServiceDI.Ui.DataConnector;

    readonly associatedPath?: string | null;
    withAssociatedPath(associatedPath: string | null): SelfServiceDI.Ui.DataConnector;

    readonly storageKind: string | null | string | null | string | null;
    withStorageKind(storageKind: string | null | string | null | string | null): SelfServiceDI.Ui.DataConnector;

    readonly provider?: string | null;
    withProvider(provider: string | null): SelfServiceDI.Ui.DataConnector;

    readonly imagePath?: string | null;
    withImagePath(imagePath: string | null): SelfServiceDI.Ui.DataConnector;

    readonly iconName?: string | null;
    withIconName(iconName: string | null): SelfServiceDI.Ui.DataConnector;

    readonly category?: SelfServiceDI.Ui.DataConnectorCategory | null;
    withCategory(category: ISelfServiceDI.Ui.DataConnectorCategory | null): SelfServiceDI.Ui.DataConnector;

    readonly credentialConfig?: SelfServiceDI.Ui.DataConnectorCredentialConfig | null;
    withCredentialConfig(credentialConfig: ISelfServiceDI.Ui.DataConnectorCredentialConfig | null): SelfServiceDI.Ui.DataConnector;

    readonly beforeCredentialSetContext?: SelfServiceDI.Ui.DataConnectorCredentialConfig | null;
    withBeforeCredentialSetContext(beforeCredentialSetContext: ISelfServiceDI.Ui.DataConnectorCredentialConfig | null): SelfServiceDI.Ui.DataConnector;

    readonly fieldOverrides?: C3.Map<string | null, C3.Map<string | null, any>>;
    withFieldOverrides(fieldOverrides: C3.Map<string | null, C3.Map<string | null, any>> | {[key: string | null]: C3.Map<string | null, any> | {[key: string | null]: any}}): SelfServiceDI.Ui.DataConnector;

    readonly existingFieldsProperties?: C3.Map<string | null, C3.Map<string | null, any>>;
    withExistingFieldsProperties(existingFieldsProperties: C3.Map<string | null, C3.Map<string | null, any>> | {[key: string | null]: C3.Map<string | null, any> | {[key: string | null]: any}}): SelfServiceDI.Ui.DataConnector;

    readonly sourceSystemType?: string | null;
    withSourceSystemType(sourceSystemType: string | null): SelfServiceDI.Ui.DataConnector;

    readonly beforeCredentialSetAction?: ActionRef | null;
    withBeforeCredentialSetAction(beforeCredentialSetAction: IActionRef | null): SelfServiceDI.Ui.DataConnector;

    readonly errorMappings?: C3.Array<SelfServiceDI.Ui.ErrorMappingEntry | null>;
    withErrorMappings(errorMappings: C3.Array<SelfServiceDI.Ui.ErrorMappingEntry | null> | Array<ISelfServiceDI.Ui.ErrorMappingEntry | null>): SelfServiceDI.Ui.DataConnector;
  }
}

