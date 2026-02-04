declare namespace SelfServiceDI.Ui {
  export interface DataConnectorCredentialConfig {

    readonly fieldNameMapping?: C3.Map<string | null, SelfServiceDI.Ui.DataConnectorCredentialValueConfig | null>;
    withFieldNameMapping(fieldNameMapping: C3.Map<string | null, SelfServiceDI.Ui.DataConnectorCredentialValueConfig | null> | {[key: string | null]: ISelfServiceDI.Ui.DataConnectorCredentialValueConfig | null}): SelfServiceDI.Ui.DataConnectorCredentialConfig;

    readonly sharedValues?: C3.Map<string | null, string | null>;
    withSharedValues(sharedValues: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): SelfServiceDI.Ui.DataConnectorCredentialConfig;
  }
}

