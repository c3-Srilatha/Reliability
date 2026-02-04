export interface GeospatialAssetMapHelper {

  readonly MARKER_FEATURE_PROP?: string | null;
  withMARKER_FEATURE_PROP(MARKER_FEATURE_PROP: string | null): GeospatialAssetMapHelper;

  readonly RELATION_FEATURE_PROP?: string | null;
  withRELATION_FEATURE_PROP(RELATION_FEATURE_PROP: string | null): GeospatialAssetMapHelper;

  readonly RELATION_ASSET_CLASS_NAME?: string | null;
  withRELATION_ASSET_CLASS_NAME(RELATION_ASSET_CLASS_NAME: string | null): GeospatialAssetMapHelper;

  readonly RELATION_ASSET_CLASS_ICON?: string | null;
  withRELATION_ASSET_CLASS_ICON(RELATION_ASSET_CLASS_ICON: string | null): GeospatialAssetMapHelper;
}

