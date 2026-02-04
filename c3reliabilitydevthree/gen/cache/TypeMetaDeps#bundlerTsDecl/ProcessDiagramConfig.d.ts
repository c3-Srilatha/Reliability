export interface ProcessDiagramConfig {

  readonly id: string;
  withId(id: string): ProcessDiagramConfig;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): ProcessDiagramConfig;

  readonly name?: string | null;
  withName(name: string | null): ProcessDiagramConfig;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): ProcessDiagramConfig;

  readonly version?: number | null;
  withVersion(version: number | null): ProcessDiagramConfig;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): ProcessDiagramConfig;

  readonly parentAsset?: PhysicalAsset | null;
  withParentAsset(parentAsset: IPhysicalAsset | null): ProcessDiagramConfig;

  readonly componentAsset?: PhysicalAsset | null;
  withComponentAsset(componentAsset: IPhysicalAsset | null): ProcessDiagramConfig;

  readonly left?: number | null;
  withLeft(left: number | null): ProcessDiagramConfig;

  readonly top?: number | null;
  withTop(top: number | null): ProcessDiagramConfig;

  readonly width?: number | null;
  withWidth(width: number | null): ProcessDiagramConfig;

  readonly height?: number | null;
  withHeight(height: number | null): ProcessDiagramConfig;

  readonly dotX?: number | null;
  withDotX(dotX: number | null): ProcessDiagramConfig;

  readonly dotY?: number | null;
  withDotY(dotY: number | null): ProcessDiagramConfig;
}

