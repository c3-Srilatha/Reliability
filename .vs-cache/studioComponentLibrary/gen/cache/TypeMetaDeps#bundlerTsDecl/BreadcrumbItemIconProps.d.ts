export interface BreadcrumbItemIconProps {

  readonly iconSuffix?: string | null;
  withIconSuffix(iconSuffix: string | null): BreadcrumbItemIconProps;

  readonly color?: string | null;
  withColor(color: string | null): BreadcrumbItemIconProps;

  readonly imagePath?: string | null;
  withImagePath(imagePath: string | null): BreadcrumbItemIconProps;

  readonly tooltip?: string | null;
  withTooltip(tooltip: string | null): BreadcrumbItemIconProps;
}

