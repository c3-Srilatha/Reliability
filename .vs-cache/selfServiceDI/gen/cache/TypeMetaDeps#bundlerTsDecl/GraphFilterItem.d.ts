export interface GraphFilterItem {

  readonly id?: string | null;
  withId(id: string | null): GraphFilterItem;

  readonly name?: string | null;
  withName(name: string | null): GraphFilterItem;

  readonly children?: C3.Array<GraphFilterItem | null>;
  withChildren(children: C3.Array<GraphFilterItem | null> | Array<IGraphFilterItem | null>): GraphFilterItem;
}

