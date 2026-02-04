export interface FetchCacheDataTestUtil {

  readonly EXPRESSION_ENGINE_FUNCTIONS_TEST: C3.Array<Obj | null>;
  withEXPRESSION_ENGINE_FUNCTIONS_TEST(EXPRESSION_ENGINE_FUNCTIONS_TEST: C3.Array<Obj | null> | Array<IObj | null>): FetchCacheDataTestUtil;

  readonly EXPRESSION_ENGINE_TYPE_METAS_TEST: C3.Array<Obj | null>;
  withEXPRESSION_ENGINE_TYPE_METAS_TEST(EXPRESSION_ENGINE_TYPE_METAS_TEST: C3.Array<Obj | null> | Array<IObj | null>): FetchCacheDataTestUtil;

  readonly PERSISTABLE_TYPE_METAS_TEST: C3.Array<Obj | null>;
  withPERSISTABLE_TYPE_METAS_TEST(PERSISTABLE_TYPE_METAS_TEST: C3.Array<Obj | null> | Array<IObj | null>): FetchCacheDataTestUtil;

  readonly CANONICAL_TYPE_METAS_TEST: C3.Array<Obj | null>;
  withCANONICAL_TYPE_METAS_TEST(CANONICAL_TYPE_METAS_TEST: C3.Array<Obj | null> | Array<IObj | null>): FetchCacheDataTestUtil;

  readonly TRANSFORM_CACHE_TEST: C3.Map<string | null, Transform | null>;
  withTRANSFORM_CACHE_TEST(TRANSFORM_CACHE_TEST: C3.Map<string | null, Transform | null> | {[key: string | null]: ITransform | null}): FetchCacheDataTestUtil;

  readonly TYPE_METAS_CACHE_TEST: C3.Map<string | null, Transform | null>;
  withTYPE_METAS_CACHE_TEST(TYPE_METAS_CACHE_TEST: C3.Map<string | null, Transform | null> | {[key: string | null]: ITransform | null}): FetchCacheDataTestUtil;
}

