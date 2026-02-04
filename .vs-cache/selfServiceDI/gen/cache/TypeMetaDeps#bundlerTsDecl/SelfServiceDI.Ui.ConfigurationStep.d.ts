declare namespace SelfServiceDI.Ui {
  export interface ConfigurationStep {

    readonly meta?: Meta | null;
    withMeta(meta: IMeta | null): SelfServiceDI.Ui.ConfigurationStep;

    readonly name: string;
    withName(name: string): SelfServiceDI.Ui.ConfigurationStep;

    readonly priority: number;
    withPriority(priority: number): SelfServiceDI.Ui.ConfigurationStep;

    readonly hidden?: boolean;
    withHidden(hidden: boolean): SelfServiceDI.Ui.ConfigurationStep;

    readonly hideProgress?: boolean;
    withHideProgress(hideProgress: boolean): SelfServiceDI.Ui.ConfigurationStep;

    readonly label?: string | null | UiSdlDynamicValueSpec | null | null;
    withLabel(label: string | null | IUiSdlDynamicValueSpec | null | null): SelfServiceDI.Ui.ConfigurationStep;

    readonly componentId: string;
    withComponentId(componentId: string): SelfServiceDI.Ui.ConfigurationStep;

    readonly retrieveNextStep: UiSdlDynamicValueSpecParam;
    withRetrieveNextStep(retrieveNextStep: IUiSdlDynamicValueSpecParam): SelfServiceDI.Ui.ConfigurationStep;

    readonly continueText?: string | null | UiSdlDynamicValueSpec | null | null;
    withContinueText(continueText: string | null | IUiSdlDynamicValueSpec | null | null): SelfServiceDI.Ui.ConfigurationStep;

    readonly backText?: string | null | UiSdlDynamicValueSpec | null | null;
    withBackText(backText: string | null | IUiSdlDynamicValueSpec | null | null): SelfServiceDI.Ui.ConfigurationStep;

    readonly cancelText?: string | null | UiSdlDynamicValueSpec | null | null;
    withCancelText(cancelText: string | null | IUiSdlDynamicValueSpec | null | null): SelfServiceDI.Ui.ConfigurationStep;

    readonly saveText?: string | null | UiSdlDynamicValueSpec | null | null;
    withSaveText(saveText: string | null | IUiSdlDynamicValueSpec | null | null): SelfServiceDI.Ui.ConfigurationStep;

    readonly editModeLabel?: string | null | UiSdlDynamicValueSpec | null | null;
    withEditModeLabel(editModeLabel: string | null | IUiSdlDynamicValueSpec | null | null): SelfServiceDI.Ui.ConfigurationStep;

    readonly categories?: C3.Array<SelfServiceDI.Ui.DataConnectorCategory | null>;
    withCategories(categories: C3.Array<SelfServiceDI.Ui.DataConnectorCategory | null> | Array<ISelfServiceDI.Ui.DataConnectorCategory | null>): SelfServiceDI.Ui.ConfigurationStep;

    readonly saveInEditMode?: boolean;
    withSaveInEditMode(saveInEditMode: boolean): SelfServiceDI.Ui.ConfigurationStep;
  }
}

