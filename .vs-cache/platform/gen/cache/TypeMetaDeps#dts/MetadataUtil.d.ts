// TypeScript definitions for the C3 type MetadataUtil

/**
 * @remarks this represents a value passed to a method that expects an instance of MetadataUtil
 */
declare interface IMetadataUtil {
}

/**
 * @remarks this represents a made instance of MetadataUtil
 */
declare class MetadataUtil {

  /**
   * Get a file's content by path
   *
   * @param path
   *           The repo-relative path to the resource
   * @return the file's content
   */
  static fetchMetadataFileContentByPath(path?: string | null): string | null;

  /**
   * Get the set of objs from a metadata file
   * @param path
   *           The repo-relative path to the resource
   * @return An array of objects that represent rows of data
   */
  static fetchMetadataFileObjsByPath(path?: string | null): C3.Array<Obj | null>;

  /**
   * Write content(s) to a metadata resource(s)
   *
   * @param fileContents
   *           A map where:
   *           keys are the paths to the resource
   *           values are the contents to write to the respective resource
   * @return void
   */
  static updateMetadataFileContentByPath(fileContents?: C3.Map<string | null, string | null>): void;

  static allCanonicalTransformTypes(): C3.Map<string | null, C3.Array<string | null>>;

  /**
   * Gets a mapping of all canonical types mapped to their target types via
   * canonical transform types.
   * @return a map of canonical type names to a map of canonical transform type
   * names to an array target type names
   * @example
   * ```js
   *     {
   *         "CanonicalA": {
   *             "TransformCanonicalAToTypeBOrTypeC": [
   *                 "TypeB",
   *                 "TypeC"
   *             ]
   *         ]
   *     }
   * ```
   */
  static allCanonicalTransformTypeMappings(): C3.Map<string | null, C3.Map<string | null, C3.Array<string | null>>>;

  /**
   * Allows UI to call TagMetadataStore.upsertSeedObjs for SimpleMetric, CompoundMetric, and
   * Translation (for metric descriptions). Currently used in metric designer in C3Tools.
   *
   * Need to create a function for each because fields passed in from SaveMetric.js need to match
   * the parameter type exactly without extraneous fields as it is coming from the non-type system
   * aware UI. Thus, there cannot be a single function for passing in parent type Metric.
   *
   * @param metric
   *            A SimpleMetric or CompoundMetric depending on the function
   * @param metric
   *            The subpath to be used in determining the location the metric, if known.
   * @return the Pkg.FilesResult written
   */
  static upsertSimpleMetric(metric?: SimpleMetric | null, subpath?: string | null): Pkg.FilesResult | null;

  static upsertCompoundMetric(metric?: CompoundMetric | null, subpath?: string | null): Pkg.FilesResult | null;

  static upsertTranslation(translation?: Translation | null): Pkg.FilesResult | null;

  /**
   * Upsert a metric with translation for its description
   *
   * @param metric
   *            A SimpleMetric or CompoundMetric depending on the isCompoundMetric argument
   * @param translation
   *            The translation for the metric's description
   * @param isCompoundMetric
   *            Whether this metric is a compound metric. By default set to false.
   *
   * @return the Pkg.FilesResult written
   */
  static upsertMetricWithTranslation(metric: any, translation?: Translation | null, isCompoundMetric?: boolean): Pkg.FilesResult | null;

  /**
   * Allows UI to call MetadataStore.toTag().upsertSeedObjs for a type. The UI is non-type system aware,
   * thus the type for each field in the SeedObj needs to be added by calling Type.make()
   *
   * @param typeRef The type being upserted
   * @param objs The objects to upsert, as plain json
   * @param spec Serialization parameters
   * @param failIfObjExists If true, throw an error and don't make changes if any of the objects have an id that already exists
   */
  static upsertSeedObjs(typeRef?: Type | null, objs?: C3.Array<any>, subpath?: string | null, spec?: FileObjsOperSpec | null, failIfObjExists?: boolean): Pkg.FilesResult | null;

  /**
   * Allows UI to call MetadataStore.toTag().removeSeedObjs for a type. The UI is non-type system aware,
   * thus the type for each field in the SeedObj needs to be added by calling Type.make()
   */
  static removeSeedObjs(typeRef?: Type | null, objs?: C3.Array<any>, spec?: FileObjsOperSpec | null): Pkg.FilesResult | null;

  /**
   * Fetch types that mixin a certain type
   * Example: MetadataUtil.getTypesThatMixin('Persistable')
   *   -- returns all types that mixin the Persistable type
   *
   * @param mixinType
   *           The type which is mixed in by the fetched types
   * @param deep
   *           if true, return types that mixin other types that eventually mixin the specified type
   * @return Array of TypeRefs
   */
  static getTypesThatMixin(mixinType: Type, deep?: boolean): C3.Array<Type | null>;

  /**
   * Get types that mixin certain types
   *
   * @param typesThatMixinSpecs
   *            The specs of mixin types, one spec per mixin type {@see TypesThatMixinSpec}
   *
   * @return an array of TypeRefs
   */
  static getTypesThatMixinMultiple(typesThatMixinSpecs: C3.Array<TypesThatMixinSpec | null>): C3.Array<Type | null>;

  /**
   * Find all types on which the targetType depends.
   * Example: MetadataUtil.getDependentTypes('Ann.Stream')
   *   -- returns Ann.Stream, Ann.Annotation, and Ann.Doc
   * Example: MetadataUtil.getDependentTypes('Persistable')
   *   -- returns the hundreds of types on which Peristable depends
   *
   * @param targetType
   *           The type which is mixed in by the fetched types
   * @return array of TypeRefs for the types on which the targetType depends
   */
  static getTypeDependencies(targetType: Type): C3.Array<Type | null>;

  /**
   * Takes a metric id and returns all the types that this SimpleMetric can also be applied to. This is
   * determined by looking at the metric name of the passed in metric, and returning source types of other
   * metrics with the same metric name
   *
   * @param metricId
   *           The metric id that will be used to find other types with the same metric name.
   * @return Array of TypeRefs
   */
  static getSimpleMetricSourceTypes(metricId?: string | null): C3.Array<Type | null>;

  /**
   * Returns all of the types in this tag
   */
  static getTagTypeMetadata(): C3.Array<Type | null>;

  /**
   * Returns a Type, given its name.
   * @param typeName
   *           Name of the type to look for.
   * @return A Type object
   */
  static readType(typeName: string): Type | null;

  /**
   * Returns the JSON representation of a Type instead of a C3.typesys.Type or a Type.
   * This allows developers to work around issues of mismatch between Type and C3.typesys.Type in tests.
   *
   * @param typeName
   *           Name of the type to look for.
   * @return JSON representation of the Type.
   */
  static readTypeObj(typeName: string): any;

  /**
   * Returns the metadata issues of the current tag
   * @param severity
   *        Minimal severity to retrieve
   * @param fileUrl
   *        Metadata file url by which issues will be filtered
   * @param spec
   *        Fetchspec for the KendoGrid detail collection
   */
  static getMetadataIssues(severity?: string | null, fileUrl?: string | null, spec?: FetchSpec | null): C3.Array<Pkg.Issue | null>;

  /**
   * wrapper function to remove a type from the root package using TagMetadataStore
   * @param typeName The name of the type to be deleted
   */
  static removeType(typeRef: Type): Pkg.FileResult;

  /**
   * wrapper function to upsert a type to the root package using TagMetadataStore
   * @param typeObj the type object to upsert as a type.
   */
  static upsertType(typeObj: any): Pkg.FileResult;

  /**
   * wrapper function to batch upsert/remove types
   * @param typesToUpSert
   *        TypeContents to upsert
   * @param typesToRemove
   *        Types to remove
   * @return The metaDataFileResult of the operation
   */
  static updateTypes(typesToUpsert?: C3.Array<any>, typesToRemove?: C3.Array<Type | null>): Pkg.FilesResult | null;

  /**
   * wrapper function to remove types and any transforms from those types
   * @param types
   *           the types to be deleted along with their transforms
   * @return the Pkg.FilesResult
   */
  static removeTypesAndTransforms(types?: C3.Array<Type | null>): Pkg.FilesResult;

  /**
   * Get the implementation file of a type by its extension and typeName.
   * @param typeName
   *        The name of the type.
   * @param extension
   *        The extension of the file to find (eg: js, py, java).
   * @param tenant
   *        The tenant of the package.
   * @param fallBackOnDependentPackage
   *        If true and missing in `tenant`, implementation will be searched for in dependent packages.
   * @return The implementation file as a string.
   */
  static fetchTypeImplementationByExtension(typeName: string, extension: string, tenant: string, fallBackOnDependentPackage?: boolean): MetadataTypeImplementationResult | null;

  /**
   * function to save the type as well the implementation files for the type. If the implementation file
   * already exists for a language in @param package, it will override the implementation with value specified
   * in @param implementations
   * @param typeObj the type object to upsert as a type.
   * @param implementations
   *        the map of all the implementations to be saved. Key should be the language of the implementation
   *        such as "js"/"py"/"r"/"java" etc and value should be the implementation in that language
   * @param package
   *        the package to search existing implementation files for
   * @return the upserted type
   */
  static saveType(typeObj: any, implementations?: C3.Map<string | null, string | null>, package_?: string | null): Pkg.FileResult | null;

  /**
   * This function is called by {@link saveType} to make sure that saving the type won't cause problems.
   * {@link TagMetadataStore.upsertType} will appear to succeed for some bad types, but result in metadata errors
   * that are difficult to recover from.
   *
   * The things that are currently checked are
   * - the type has the same name as a platform type
   * - the type needs a schema name but doesn't have one
   * - the type is a persistable type with a circular dependency (see {@link validateIncludedReferenceFieldDependency})
   *
   * If any of these checks fails, an exception is thrown.
   *
   * @param typeObj
   *           The type object to check before saving
   */
  static validateType(typeObj: any): void;

  /**
   * Check whether the given type object has a field that could be the beginning of a path among included reference
   * type fields that contains a circular dependency.
   *
   * A persistable type can have fields that are nonpersistable reference types. When the type
   * is provisioned, we need to create separate tables for those fields.  If those field types
   * also have nonpersistable reference type fields, tables need to be created for them as well,
   * and so on.  A metadata error will occur if there is a circular relationship among some of
   * these field types, since we can't create infinitely many tables.
   *
   * The problem only occurs among nonpersistable types - persistable types already have tables
   * to store them. Also, if the original type itself is nonpersistable, then there is no problem,
   * since nothing is being stored.
   *
   * This function checks whether a given type object would cause a circular relationship if it
   * were saved, starting from the type itself.  It is assumed that the type has been declared
   * to be persistable.
   *
   * (This function does not check whether saving a nonpersistable type would cause a circular
   * relationship starting from an existing persistable type - for example, if existing
   * persistable type A has a field with nonpersistable type B, then saving a version of B
   * with a circular reference would cause the metadata error.  We can't catch something like
   * that without searching through every type.)
   *
   * This is basically the same check as the one in TypeDbExtensions.buildCalcFields().
   *
   * @param typeObj
   *           The type object to check before saving. It is assumed to be declared as persistable.
   */
  static validateIncludedReferenceFieldDependency(typeObj: any): void;
}

