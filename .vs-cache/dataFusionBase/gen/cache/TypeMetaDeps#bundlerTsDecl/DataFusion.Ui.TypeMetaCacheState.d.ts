declare namespace DataFusion.Ui {
  export interface TypeMetaCacheState {

    readonly meta?: Meta | null;
    withMeta(meta: IMeta | null): DataFusion.Ui.TypeMetaCacheState;

    readonly id?: string | null;
    withId(id: string | null): DataFusion.Ui.TypeMetaCacheState;

    readonly name?: string | null;
    withName(name: string | null): DataFusion.Ui.TypeMetaCacheState;

    readonly dataSpec?: UiSdlNoData | null;
    withDataSpec(dataSpec: IUiSdlNoData | null): DataFusion.Ui.TypeMetaCacheState;

    readonly disableDataRequestOnFirstRender?: boolean;
    withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): DataFusion.Ui.TypeMetaCacheState;

    readonly triggersRegistered?: boolean;
    withTriggersRegistered(triggersRegistered: boolean): DataFusion.Ui.TypeMetaCacheState;

    readonly wrapWithMetadataId?: boolean;
    withWrapWithMetadataId(wrapWithMetadataId: boolean): DataFusion.Ui.TypeMetaCacheState;

    readonly REDUX_NAMESPACE?: string | null;
    withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): DataFusion.Ui.TypeMetaCacheState;

    readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
    withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): DataFusion.Ui.TypeMetaCacheState;

    readonly typeMetasCache?: C3.Map<string | null, TypeMeta | null>;
    withTypeMetasCache(typeMetasCache: C3.Map<string | null, TypeMeta | null> | {[key: string | null]: ITypeMeta | null}): DataFusion.Ui.TypeMetaCacheState;

    readonly typeMetasCacheFetched?: boolean;
    withTypeMetasCacheFetched(typeMetasCacheFetched: boolean): DataFusion.Ui.TypeMetaCacheState;

    readonly metadataDepsJson?: any;
    withMetadataDepsJson(metadataDepsJson: any): DataFusion.Ui.TypeMetaCacheState;

    readonly editTypeMetaCache?: C3.Map<string | null, TypeMeta | null | DataFusionUiTypeMeta | null | null>;
    withEditTypeMetaCache(editTypeMetaCache: C3.Map<string | null, TypeMeta | null | DataFusionUiTypeMeta | null | null> | {[key: string | null]: ITypeMeta | null | IDataFusionUiTypeMeta | null | null}): DataFusion.Ui.TypeMetaCacheState;

    readonly pkgExclusionSet?: C3.Set<string | null>;
    withPkgExclusionSet(pkgExclusionSet: C3.Set<string | null> | Array<string | null>): DataFusion.Ui.TypeMetaCacheState;

    readonly whiteListedMixins?: any;
    withWhiteListedMixins(whiteListedMixins: any): DataFusion.Ui.TypeMetaCacheState;
  }
}

