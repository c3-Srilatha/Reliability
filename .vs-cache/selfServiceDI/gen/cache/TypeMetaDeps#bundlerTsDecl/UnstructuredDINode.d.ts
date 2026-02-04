export interface UnstructuredDINode {

  readonly name?: string | null;
  withName(name: string | null): UnstructuredDINode;

  readonly header?: UnstructuredDINodeHeader | null;
  withHeader(header: IUnstructuredDINodeHeader | null): UnstructuredDINode;

  readonly subHeader?: UnstructuredDINodeHeader | null;
  withSubHeader(subHeader: IUnstructuredDINodeHeader | null): UnstructuredDINode;

  readonly packageName?: string | null;
  withPackageName(packageName: string | null): UnstructuredDINode;

  readonly configured: boolean;
  withConfigured(configured: boolean): UnstructuredDINode;

  readonly kind: string;
  withKind(kind: string): UnstructuredDINode;

  readonly color?: string | null;
  withColor(color: string | null): UnstructuredDINode;

  readonly status?: UnstructuredDINodeStatus | null;
  withStatus(status: IUnstructuredDINodeStatus | null): UnstructuredDINode;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UnstructuredDINode;
}

