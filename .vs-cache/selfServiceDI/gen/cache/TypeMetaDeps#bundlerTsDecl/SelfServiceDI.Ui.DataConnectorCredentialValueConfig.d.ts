declare namespace SelfServiceDI.Ui {
  export interface DataConnectorCredentialValueConfig {

    readonly mapTo?: string | null | C3.Array<string | null> | null;
    withMapTo(mapTo: string | null | C3.Array<string | null> | Array<string | null> | null): SelfServiceDI.Ui.DataConnectorCredentialValueConfig;

    readonly prefix?: string | null;
    withPrefix(prefix: string | null): SelfServiceDI.Ui.DataConnectorCredentialValueConfig;

    readonly suffix?: string | null;
    withSuffix(suffix: string | null): SelfServiceDI.Ui.DataConnectorCredentialValueConfig;
  }
}

