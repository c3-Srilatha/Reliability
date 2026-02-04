export interface BreadcrumbItem {

  readonly label?: string | null;
  withLabel(label: string | null): BreadcrumbItem;

  readonly value?: string | null | UiSdlDynamicValueSpec | null | null;
  withValue(value: string | null | IUiSdlDynamicValueSpec | null | null): BreadcrumbItem;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): BreadcrumbItem;

  readonly iconProps?: BreadcrumbItemIconProps | null;
  withIconProps(iconProps: IBreadcrumbItemIconProps | null): BreadcrumbItem;
}

