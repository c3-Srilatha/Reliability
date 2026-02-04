export interface DataFusionUiDeclaredFieldType {

  readonly declaredPkgPath?: string | null;
  withDeclaredPkgPath(declaredPkgPath: string | null): DataFusionUiDeclaredFieldType;

  readonly declaredSrcLine?: number | null;
  withDeclaredSrcLine(declaredSrcLine: number | null): DataFusionUiDeclaredFieldType;

  readonly declaredSrcCharInLine?: number | null;
  withDeclaredSrcCharInLine(declaredSrcCharInLine: number | null): DataFusionUiDeclaredFieldType;

  readonly pkg: Pkg;
  withPkg(pkg: IPkg): DataFusionUiDeclaredFieldType;

  readonly json?: any;
  withJson(json: any): DataFusionUiDeclaredFieldType;

  readonly annotationsJson?: any | null;
  withAnnotationsJson(annotationsJson: any | null): DataFusionUiDeclaredFieldType;

  readonly doc?: string | null;
  withDoc(doc: string | null): DataFusionUiDeclaredFieldType;

  readonly docSingleLine?: boolean;
  withDocSingleLine(docSingleLine: boolean): DataFusionUiDeclaredFieldType;

  readonly name?: string | null;
  withName(name: string | null): DataFusionUiDeclaredFieldType;

  readonly declaredDefault?: string | null;
  withDeclaredDefault(declaredDefault: string | null): DataFusionUiDeclaredFieldType;

  readonly storedCalc?: boolean;
  withStoredCalc(storedCalc: boolean): DataFusionUiDeclaredFieldType;

  readonly calcExpr?: string | null;
  withCalcExpr(calcExpr: string | null): DataFusionUiDeclaredFieldType;

  readonly calcPeriod?: string | null;
  withCalcPeriod(calcPeriod: string | null): DataFusionUiDeclaredFieldType;

  readonly calcSchedule?: string | null;
  withCalcSchedule(calcSchedule: string | null): DataFusionUiDeclaredFieldType;

  readonly fkey?: string | null;
  withFkey(fkey: string | null): DataFusionUiDeclaredFieldType;

  readonly key?: string | null;
  withKey(key: string | null): DataFusionUiDeclaredFieldType;

  readonly schemaName?: string | null;
  withSchemaName(schemaName: string | null): DataFusionUiDeclaredFieldType;

  readonly schemaSuffix?: string | null;
  withSchemaSuffix(schemaSuffix: string | null): DataFusionUiDeclaredFieldType;

  readonly translatedBy?: string | null;
  withTranslatedBy(translatedBy: string | null): DataFusionUiDeclaredFieldType;

  readonly notPersistable?: boolean;
  withNotPersistable(notPersistable: boolean): DataFusionUiDeclaredFieldType;

  readonly final?: boolean;
  withFinal(final: boolean): DataFusionUiDeclaredFieldType;

  readonly private?: boolean;
  withPrivate(private_: boolean): DataFusionUiDeclaredFieldType;

  readonly constant?: boolean;
  withConstant(constant: boolean): DataFusionUiDeclaredFieldType;

  readonly valueType?: ValueType | null;
  withValueType(valueType: IValueType | null): DataFusionUiDeclaredFieldType;

  readonly comments?: C3.Array<DslComment | null>;
  withComments(comments: C3.Array<DslComment | null> | Array<IDslComment | null>): DataFusionUiDeclaredFieldType;

  readonly uiSettings?: DataFusionUiDeclaredFieldTypeUiSettings | null;
  withUiSettings(uiSettings: IDataFusionUiDeclaredFieldTypeUiSettings | null): DataFusionUiDeclaredFieldType;
}

