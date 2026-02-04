export interface SourceTargetNode {

  readonly name?: string | null;
  withName(name: string | null): SourceTargetNode;

  readonly color?: string | null;
  withColor(color: string | null): SourceTargetNode;

  readonly fields?: C3.Array<Obj | null>;
  withFields(fields: C3.Array<Obj | null> | Array<IObj | null>): SourceTargetNode;

  readonly kind?: string | null;
  withKind(kind: string | null): SourceTargetNode;
}

