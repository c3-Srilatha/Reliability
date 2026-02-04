declare namespace SelfServiceDI.Ui {
  export interface TreeNodeAction {

    readonly actionSuffix?: string | null;
    withActionSuffix(actionSuffix: string | null): SelfServiceDI.Ui.TreeNodeAction;

    readonly iconSuffix?: string | null;
    withIconSuffix(iconSuffix: string | null): SelfServiceDI.Ui.TreeNodeAction;

    readonly name: string;
    withName(name: string): SelfServiceDI.Ui.TreeNodeAction;

    readonly args?: any | null;
    withArgs(args: any | null): SelfServiceDI.Ui.TreeNodeAction;

    readonly disabled?: boolean;
    withDisabled(disabled: boolean): SelfServiceDI.Ui.TreeNodeAction;

    readonly error?: boolean | C3.Error | null | null;
    withError(error: boolean | IC3.Error | null | null): SelfServiceDI.Ui.TreeNodeAction;

    readonly disabledCondition?: UiSdlRenderCondition | null;
    withDisabledCondition(disabledCondition: IUiSdlRenderCondition | null): SelfServiceDI.Ui.TreeNodeAction;

    readonly disabledTooltip?: string | null;
    withDisabledTooltip(disabledTooltip: string | null): SelfServiceDI.Ui.TreeNodeAction;

    readonly hiddenCondition?: UiSdlRenderCondition | null;
    withHiddenCondition(hiddenCondition: IUiSdlRenderCondition | null): SelfServiceDI.Ui.TreeNodeAction;

    readonly meta?: Meta | null;
    withMeta(meta: IMeta | null): SelfServiceDI.Ui.TreeNodeAction;

    readonly priority: number;
    withPriority(priority: number): SelfServiceDI.Ui.TreeNodeAction;

    readonly hidden?: boolean;
    withHidden(hidden: boolean): SelfServiceDI.Ui.TreeNodeAction;

    readonly label: string;
    withLabel(label: string): SelfServiceDI.Ui.TreeNodeAction;

    readonly depth: number;
    withDepth(depth: number): SelfServiceDI.Ui.TreeNodeAction;

    readonly steps?: string | null;
    withSteps(steps: string | null): SelfServiceDI.Ui.TreeNodeAction;

    readonly categories: C3.Array<SelfServiceDI.Ui.DataConnectorCategory>;
    withCategories(categories: C3.Array<SelfServiceDI.Ui.DataConnectorCategory> | Array<ISelfServiceDI.Ui.DataConnectorCategory>): SelfServiceDI.Ui.TreeNodeAction;
  }
}

