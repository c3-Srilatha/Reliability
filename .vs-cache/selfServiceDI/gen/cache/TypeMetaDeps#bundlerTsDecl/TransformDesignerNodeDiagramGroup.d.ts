export interface TransformDesignerNodeDiagramGroup {

  readonly name?: string | null;
  withName(name: string | null): TransformDesignerNodeDiagramGroup;

  readonly kind?: string | null;
  withKind(kind: string | null): TransformDesignerNodeDiagramGroup;

  readonly color?: string | null;
  withColor(color: string | null): TransformDesignerNodeDiagramGroup;

  readonly icon?: string | null;
  withIcon(icon: string | null): TransformDesignerNodeDiagramGroup;

  readonly iconColor?: string | null;
  withIconColor(iconColor: string | null): TransformDesignerNodeDiagramGroup;

  readonly additionalComponent?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withAdditionalComponent(additionalComponent: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): TransformDesignerNodeDiagramGroup;
}

