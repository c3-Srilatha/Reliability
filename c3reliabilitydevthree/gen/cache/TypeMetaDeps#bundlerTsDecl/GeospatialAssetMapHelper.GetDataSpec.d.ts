declare namespace GeospatialAssetMapHelper {
  export interface GetDataSpec {

    readonly assetsFilter?: string | null;
    withAssetsFilter(assetsFilter: string | null): GeospatialAssetMapHelper.GetDataSpec;

    readonly selectedFacilities?: string | null;
    withSelectedFacilities(selectedFacilities: string | null): GeospatialAssetMapHelper.GetDataSpec;
  }
}

