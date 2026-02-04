export interface DataFusionUiTypeMeta {

  readonly declaredPkgPath?: string | null;
  withDeclaredPkgPath(declaredPkgPath: string | null): DataFusionUiTypeMeta;

  readonly declaredSrcLine?: number | null;
  withDeclaredSrcLine(declaredSrcLine: number | null): DataFusionUiTypeMeta;

  readonly declaredSrcCharInLine?: number | null;
  withDeclaredSrcCharInLine(declaredSrcCharInLine: number | null): DataFusionUiTypeMeta;

  readonly pkg: Pkg;
  withPkg(pkg: IPkg): DataFusionUiTypeMeta;

  readonly json?: any;
  withJson(json: any): DataFusionUiTypeMeta;

  readonly name?: string | null;
  withName(name: string | null): DataFusionUiTypeMeta;

  readonly varBindings?: C3.Map<string | null, ValueType | null>;
  withVarBindings(varBindings: C3.Map<string | null, ValueType | null> | {[key: string | null]: IValueType | null}): DataFusionUiTypeMeta;

  readonly annotationsJson?: any | null;
  withAnnotationsJson(annotationsJson: any | null): DataFusionUiTypeMeta;

  readonly doc?: string | null;
  withDoc(doc: string | null): DataFusionUiTypeMeta;

  readonly docSingleLine?: boolean;
  withDocSingleLine(docSingleLine: boolean): DataFusionUiTypeMeta;

  readonly comments?: C3.Array<DslComment | null>;
  withComments(comments: C3.Array<DslComment | null> | Array<IDslComment | null>): DataFusionUiTypeMeta;

  readonly declaredNative?: boolean;
  withDeclaredNative(declaredNative: boolean): DataFusionUiTypeMeta;

  readonly declaredEntity?: boolean;
  withDeclaredEntity(declaredEntity: boolean): DataFusionUiTypeMeta;

  readonly declaredEnum?: boolean;
  withDeclaredEnum(declaredEnum: boolean): DataFusionUiTypeMeta;

  readonly declaredUnionAlts?: AnyOfType | null;
  withDeclaredUnionAlts(declaredUnionAlts: IAnyOfType | null): DataFusionUiTypeMeta;

  readonly declaredDuck?: boolean;
  withDeclaredDuck(declaredDuck: boolean): DataFusionUiTypeMeta;

  readonly declaredAbstract?: boolean;
  withDeclaredAbstract(declaredAbstract: boolean): DataFusionUiTypeMeta;

  readonly declaredInline?: boolean;
  withDeclaredInline(declaredInline: boolean): DataFusionUiTypeMeta;

  readonly declaredFinal?: boolean;
  withDeclaredFinal(declaredFinal: boolean): DataFusionUiTypeMeta;

  readonly declaredPrivate?: boolean;
  withDeclaredPrivate(declaredPrivate: boolean): DataFusionUiTypeMeta;

  readonly declaredExtendable?: boolean;
  withDeclaredExtendable(declaredExtendable: boolean): DataFusionUiTypeMeta;

  readonly declaredNotExtendable?: boolean;
  withDeclaredNotExtendable(declaredNotExtendable: boolean): DataFusionUiTypeMeta;

  readonly declaredExtendsRefType?: DeclaredReferenceType | null;
  withDeclaredExtendsRefType(declaredExtendsRefType: IDeclaredReferenceType | null): DataFusionUiTypeMeta;

  readonly declaredNotMixable?: boolean;
  withDeclaredNotMixable(declaredNotMixable: boolean): DataFusionUiTypeMeta;

  readonly declaredMixinRefTypes?: C3.Array<DeclaredReferenceType | null>;
  withDeclaredMixinRefTypes(declaredMixinRefTypes: C3.Array<DeclaredReferenceType | null> | Array<IDeclaredReferenceType | null>): DataFusionUiTypeMeta;

  readonly declaredRemix?: boolean;
  withDeclaredRemix(declaredRemix: boolean): DataFusionUiTypeMeta;

  readonly declaredNotRemixable?: boolean;
  withDeclaredNotRemixable(declaredNotRemixable: boolean): DataFusionUiTypeMeta;

  readonly declaredRemixAlias?: string | null;
  withDeclaredRemixAlias(declaredRemixAlias: string | null): DataFusionUiTypeMeta;

  readonly declaredTypeKey?: string | null;
  withDeclaredTypeKey(declaredTypeKey: string | null): DataFusionUiTypeMeta;

  readonly declaredFieldTypes?: C3.Array<DataFusionUiDeclaredFieldType | null>;
  withDeclaredFieldTypes(declaredFieldTypes: C3.Array<DataFusionUiDeclaredFieldType | null> | Array<IDataFusionUiDeclaredFieldType | null>): DataFusionUiTypeMeta;

  readonly declaredInnerTypes?: C3.Array<any>;
  withDeclaredInnerTypes(declaredInnerTypes: C3.Array<any> | Array<any>): DataFusionUiTypeMeta;

  readonly declaredNativeRemixes?: C3.Map<string, any>;
  withDeclaredNativeRemixes(declaredNativeRemixes: C3.Map<string, any> | {[key: string]: any}): DataFusionUiTypeMeta;

  readonly declaredRemixes?: C3.Map<string, any>;
  withDeclaredRemixes(declaredRemixes: C3.Map<string, any> | {[key: string]: any}): DataFusionUiTypeMeta;

  readonly declaredSourceCode?: C3.Map<string | null, string | null>;
  withDeclaredSourceCode(declaredSourceCode: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): DataFusionUiTypeMeta;

  readonly declaredVars?: C3.Array<VarReferenceType | null>;
  withDeclaredVars(declaredVars: C3.Array<VarReferenceType | null> | Array<IVarReferenceType | null>): DataFusionUiTypeMeta;

  readonly declaredMetaRestriction?: string | null;
  withDeclaredMetaRestriction(declaredMetaRestriction: string | null): DataFusionUiTypeMeta;

  readonly declaredNativeRequirement?: string | null;
  withDeclaredNativeRequirement(declaredNativeRequirement: string | null): DataFusionUiTypeMeta;

  readonly declaredSchemaName?: string | null;
  withDeclaredSchemaName(declaredSchemaName: string | null): DataFusionUiTypeMeta;

  readonly defaultActionRequirement?: string | null;
  withDefaultActionRequirement(defaultActionRequirement: string | null): DataFusionUiTypeMeta;

  readonly _staticsCache?: any;
  with_staticsCache(_staticsCache: any): DataFusionUiTypeMeta;

  readonly _sourceCodeCache?: any;
  with_sourceCodeCache(_sourceCodeCache: any): DataFusionUiTypeMeta;
}

