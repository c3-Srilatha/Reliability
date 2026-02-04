export interface StudioFlameGraphNode {

  readonly name?: string | null;
  withName(name: string | null): StudioFlameGraphNode;

  readonly value?: number | null;
  withValue(value: number | null): StudioFlameGraphNode;

  readonly tooltip?: string | null;
  withTooltip(tooltip: string | null): StudioFlameGraphNode;

  readonly children?: C3.Array<StudioFlameGraphNode | null>;
  withChildren(children: C3.Array<StudioFlameGraphNode | null> | Array<IStudioFlameGraphNode | null>): StudioFlameGraphNode;
}

