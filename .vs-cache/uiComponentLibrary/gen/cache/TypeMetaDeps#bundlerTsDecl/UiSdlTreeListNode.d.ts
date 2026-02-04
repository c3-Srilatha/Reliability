export interface UiSdlTreeListNode {

  readonly nodeId: string;
  withNodeId(nodeId: string): UiSdlTreeListNode;

  readonly obj: any;
  withObj(obj: any): UiSdlTreeListNode;

  readonly parentId?: string | null;
  withParentId(parentId: string | null): UiSdlTreeListNode;

  readonly depth?: number | null;
  withDepth(depth: number | null): UiSdlTreeListNode;

  readonly hasChildren?: boolean;
  withHasChildren(hasChildren: boolean): UiSdlTreeListNode;

  readonly expanded?: boolean;
  withExpanded(expanded: boolean): UiSdlTreeListNode;

  readonly children?: C3.Array<UiSdlTreeListNode | null>;
  withChildren(children: C3.Array<UiSdlTreeListNode | null> | Array<IUiSdlTreeListNode | null>): UiSdlTreeListNode;
}

