export interface UiSdlMapMarkerShapeFieldSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlMapMarkerShapeFieldSetting;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): UiSdlMapMarkerShapeFieldSetting;

  readonly categoryShapes: C3.Array<UiSdlMapCategoryShapeSetting | null>;
  withCategoryShapes(categoryShapes: C3.Array<UiSdlMapCategoryShapeSetting | null> | Array<IUiSdlMapCategoryShapeSetting | null>): UiSdlMapMarkerShapeFieldSetting;
}

