export interface GraphFilterSection {

  readonly title?: string | null;
  withTitle(title: string | null): GraphFilterSection;

  readonly roots?: C3.Array<GraphFilterItem | null>;
  withRoots(roots: C3.Array<GraphFilterItem | null> | Array<IGraphFilterItem | null>): GraphFilterSection;
}

