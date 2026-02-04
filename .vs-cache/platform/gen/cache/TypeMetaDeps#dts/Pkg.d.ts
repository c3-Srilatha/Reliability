// TypeScript definitions for the C3 type Pkg

/**
 * Application metadata for C3 package.
 *
 * @remarks this represents a value passed to a method that expects an instance of Pkg
 */
declare interface IPkg {
}

/**
 * Application metadata for C3 package.
 *
 * @remarks this represents a made instance of Pkg
 */
declare class Pkg {

  /**
   * @return the default instance to be used when member functions are called on this type. E.g.
   *         FileSystem.inst() should return a default file system. It is up to implementation to decide if default
   *         instance is a singleton or not.
   */
  static inst(): Pkg;

  /**
   * Build the canonical string representation of this instance. This must be implemented to provide serialization.
   *
   * If the object has no content, and fromString would properly reproduce it from a null value, toString may return
   * null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
   *
   * @see #fromString
   */
  toString(): string | null;

  /**
   * Build the canonical string representation of this instance. This must be implemented to provide serialization.
   *
   * If the object has no content, and fromString would properly reproduce it from a null value, toString may return
   * null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
   *
   * @see #fromString
   */
  static toString(): string | null;

  /**
   * Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
   * provide deserialization.
   *
   * fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
   * of called-on type, but perhaps not the same type.
   *
   * E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
   *
   * @see #toString
   */
  static fromString(s: string | null): Pkg | null;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): Pkg | null;

  /**
   * Produce a checksum that can easily be compared to determine if two objects are definitely different. Note that
   * there is a slight possibility that two objects with the same fingerprint will actually differ.
   *
   * The fingerprint recurses into field values, including collections and referenced Objs. The handling of nested
   * {@link Identified identified} references (typically entities) differ in that _only_ the `id` field is included
   * unless the allIdentifiedRefFields option is specified.
   *
   * If the object graph may contain recursive embedded object references, the trackRecursiveRefs option may be used.
   * However, maintaining the list of visited objects is costly so this should not be done unnecessarily.
   *
   * @param allIdentifiedRefFields
   *           if `true`, fingerprint individual fields of persistable references, not just the `id`
   * @param trackRecursiveRefs
   *           if `true`, a set of referenced objects is maintained to avoid infinite recursion
   * @param traversedRefs
   *           only considered together with trackRecursiveRefs and if provided then all traversed references are
   *           checked against and added to it
   * @return integer fingerprint
   *
   * @see https://en.wikipedia.org/wiki/Fingerprint_(computing)
   */
  fingerprint(allIdentifiedRefFields?: boolean, trackRecursiveRefs?: boolean, traversedRefs?: SetBuilder<Obj | null> | null): number;

  /**
   * Produce a checksum that can easily be compared to determine if two objects are definitely different. Note that
   * there is a slight possibility that two objects with the same fingerprint will actually differ.
   *
   * The fingerprint recurses into field values, including collections and referenced Objs. The handling of nested
   * {@link Identified identified} references (typically entities) differ in that _only_ the `id` field is included
   * unless the allIdentifiedRefFields option is specified.
   *
   * If the object graph may contain recursive embedded object references, the trackRecursiveRefs option may be used.
   * However, maintaining the list of visited objects is costly so this should not be done unnecessarily.
   *
   * @param allIdentifiedRefFields
   *           if `true`, fingerprint individual fields of persistable references, not just the `id`
   * @param trackRecursiveRefs
   *           if `true`, a set of referenced objects is maintained to avoid infinite recursion
   * @param traversedRefs
   *           only considered together with trackRecursiveRefs and if provided then all traversed references are
   *           checked against and added to it
   * @return integer fingerprint
   *
   * @see https://en.wikipedia.org/wiki/Fingerprint_(computing)
   */
  static fingerprint(allIdentifiedRefFields?: boolean, trackRecursiveRefs?: boolean, traversedRefs?: SetBuilder<Obj | null> | null): number;

  /**
   * Name of the package
   */
  name(): string | null;

  /**
   * Name of the package
   */
  static name(): string | null;

  /**
   * AppMode of the package
   */
  appMode(): string | null;

  /**
   * AppMode of the package
   */
  static appMode(): string | null;

  /**
   * @return true if static cached methods on this C3 Type are cached at the Pkg level
   */
  isCachedInPkg(meta: TypeMeta): boolean;

  /**
   * @return true if static cached methods on this C3 Type are cached at the Pkg level
   */
  static isCachedInPkg(meta: TypeMeta): boolean;

  /**
   * @return type by name
   */
  type(name: string | null, failIfMissing?: boolean): Type | null;

  /**
   * @return type by name
   */
  static type(name: string | null, failIfMissing?: boolean): Type | null;

  /**
   * @return type by name
   */
  typeMeta(name: string | null, failIfMissing?: boolean): TypeMeta | null;

  /**
   * @return type by name
   */
  static typeMeta(name: string | null, failIfMissing?: boolean): TypeMeta | null;

  /**
   * @return all type names defined by this C3 metadata package excluding inner types.
   */
  typeNames(includeInnerTypes?: boolean): C3.Set<string | null>;

  /**
   * @return all type names defined by this C3 metadata package excluding inner types.
   */
  static typeNames(includeInnerTypes?: boolean): C3.Set<string | null>;

  /**
   * @return all top-level type or with included types accessible from this package; note includes types declared in
   *         depending packages
   */
  types(includeInnerTypes?: boolean): C3.Map<string | null, Type | null>;

  /**
   * @return all top-level type or with included types accessible from this package; note includes types declared in
   *         depending packages
   */
  static types(includeInnerTypes?: boolean): C3.Map<string | null, Type | null>;

  /**
   * @return all top-level type or with included types accessible from this package; note includes types declared in
   *         depending packages
   */
  typeMetas(includeInnerTypes?: boolean): C3.Map<string | null, TypeMeta | null>;

  /**
   * @return all top-level type or with included types accessible from this package; note includes types declared in
   *         depending packages
   */
  static typeMetas(includeInnerTypes?: boolean): C3.Map<string | null, TypeMeta | null>;

  /**
   * @return type names declared by this package.
   */
  ownTypeNames(includeInnerTypes?: boolean): C3.Set<string | null>;

  /**
   * @return type names declared by this package.
   */
  static ownTypeNames(includeInnerTypes?: boolean): C3.Set<string | null>;

  /**
   * @return types declared by this package
   */
  ownTypes(includeInnerTypes?: boolean): C3.Map<string | null, Type | null>;

  /**
   * @return types declared by this package
   */
  static ownTypes(includeInnerTypes?: boolean): C3.Map<string | null, Type | null>;

  /**
   * @return types declared by this package
   */
  ownTypeMetas(includeInnerTypes?: boolean): C3.Map<string | null, TypeMeta | null>;

  /**
   * @return types declared by this package
   */
  static ownTypeMetas(includeInnerTypes?: boolean): C3.Map<string | null, TypeMeta | null>;

  /**
   * @return all type names defined by this C3 metadata package excluding inner types.
   */
  subTypeNames(type: Type, includeSelf?: boolean): C3.Set<string | null>;

  /**
   * @return all type names defined by this C3 metadata package excluding inner types.
   */
  static subTypeNames(type: Type, includeSelf?: boolean): C3.Set<string | null>;

  /**
   * @return all type source code paths for provided type in this C3 metadata package. `Pkg.Path`s are ordered in
   * proper execution order. {@link sourceCode}, {@link sourceCodeAndFilePaths}, {@link TypeMeta#sourceCode}, and
   * {@link TypeMeta#sourceCodeAndFilePaths} are all consumers of this file ordering.
   *
   * The semantics of proper execution order are described below, going from highest to lowest presidence:
   *    1) Test content always goes after non-test content
   *    2) Gen content always goes before non-gen content
   *    3) Alphabetically by file extension (not including {@Link Action.Requirement}, i.e. `js` comes before `py`)
   *    4) Source code for more general {@Link Action.Requirement} comes before source code for more specific {@Link Action.Requirement}
   *        - For {@Link Action.Requirement action requirements} `acreq1` and `acreq2`, if `acreq1` {@link Action.Requirement#isGreaterThan is greater than} `acreq2 then `acreq1` goes after `acreq2`.
   *    5) Alphabetically by path name
   *
   * Below is an example of the proper ordering of `Pkg.Path`s for a type `Bar`:
   *    "/gen/foo/Bar.js"
   *    "/gen/foo/Bar.js-server.js"
   *    "/gen/foo/Bar.py"
   *    "/gen/foo/Bar.py-server.py" <- gen files all come first
   *    "/foo/Bar.js"
   *    "/foo/Bar.js-server.js" <- ".js" should go before more specific @Link Action.Requirement} ".js-server.js"
   *    "/foo/Bar.py" <- "js" goes before "py" alphabetically
   *    "/foo/Bar.py-server.py"
   *    "/test/foo/Bar.js" <- Test files all come last. This is only applicable for types remixed in a test package
   *    "/test/foo/Bar.js-server.js"
   *    "/test/foo/Bar.py"
   *    "/test/foo/Bar.py-server.py"
   */
  typeSourceCodePaths(type: Type): C3.Array<string | null>;

  /**
   * @return all type source code paths for provided type in this C3 metadata package. `Pkg.Path`s are ordered in
   * proper execution order. {@link sourceCode}, {@link sourceCodeAndFilePaths}, {@link TypeMeta#sourceCode}, and
   * {@link TypeMeta#sourceCodeAndFilePaths} are all consumers of this file ordering.
   *
   * The semantics of proper execution order are described below, going from highest to lowest presidence:
   *    1) Test content always goes after non-test content
   *    2) Gen content always goes before non-gen content
   *    3) Alphabetically by file extension (not including {@Link Action.Requirement}, i.e. `js` comes before `py`)
   *    4) Source code for more general {@Link Action.Requirement} comes before source code for more specific {@Link Action.Requirement}
   *        - For {@Link Action.Requirement action requirements} `acreq1` and `acreq2`, if `acreq1` {@link Action.Requirement#isGreaterThan is greater than} `acreq2 then `acreq1` goes after `acreq2`.
   *    5) Alphabetically by path name
   *
   * Below is an example of the proper ordering of `Pkg.Path`s for a type `Bar`:
   *    "/gen/foo/Bar.js"
   *    "/gen/foo/Bar.js-server.js"
   *    "/gen/foo/Bar.py"
   *    "/gen/foo/Bar.py-server.py" <- gen files all come first
   *    "/foo/Bar.js"
   *    "/foo/Bar.js-server.js" <- ".js" should go before more specific @Link Action.Requirement} ".js-server.js"
   *    "/foo/Bar.py" <- "js" goes before "py" alphabetically
   *    "/foo/Bar.py-server.py"
   *    "/test/foo/Bar.js" <- Test files all come last. This is only applicable for types remixed in a test package
   *    "/test/foo/Bar.js-server.js"
   *    "/test/foo/Bar.py"
   *    "/test/foo/Bar.py-server.py"
   */
  static typeSourceCodePaths(type: Type): C3.Array<string | null>;

  typeSourceCodePaths(type: TypeMeta): C3.Array<string | null>;

  static typeSourceCodePaths(type: TypeMeta): C3.Array<string | null>;

  /**
   * Return seeded config keys for the given type
   * E.g. /config/KvStoreConfig/x.json
   * E.g. /config/KvStoreConfig/y.json
   * This api will caches values x,y for KvStoreConfig type
   */
  seededConfigKeys(type: Type): C3.Array<string | null>;

  /**
   * Return seeded config keys for the given type
   * E.g. /config/KvStoreConfig/x.json
   * E.g. /config/KvStoreConfig/y.json
   * This api will caches values x,y for KvStoreConfig type
   */
  static seededConfigKeys(type: Type): C3.Array<string | null>;

  /**
   * @return types that have specified annotation
   */
  typesWithAnn(annInnerTypeName: string, annField?: string | null, declaringTypesOnly?: boolean): C3.Array<Type | null>;

  /**
   * @return types that have specified annotation
   */
  static typesWithAnn(annInnerTypeName: string, annField?: string | null, declaringTypesOnly?: boolean): C3.Array<Type | null>;

  typeMetasWithAnn(annInnerTypeName: string, annField?: string | null, declaringTypesOnly?: boolean): C3.Array<TypeMeta | null>;

  static typeMetasWithAnn(annInnerTypeName: string, annField?: string | null, declaringTypesOnly?: boolean): C3.Array<TypeMeta | null>;

  /**
   * @return types that have a runtime java class annotation
   */
  typesWithRuntimeJavaClass(): C3.Array<Type | null>;

  /**
   * @return types that have a runtime java class annotation
   */
  static typesWithRuntimeJavaClass(): C3.Array<Type | null>;

  /**
   * Return an array of paths for type data file locations including in dependency pkgs, e.g.
   * For config: '/<pkgName>/config/<ConfigTypeName>/'
   * For metadata: '/<pkgName>/metadata/<MetadataTypeName>/'
   * For seed data: '/<pkgName>/seed/<SeedTypeName>/'
   * For other: '/<pkgName>/data/<TypeName>/'
   */
  typeDataPaths(type: Type): C3.Set<string | null>;

  /**
   * Return an array of paths for type data file locations including in dependency pkgs, e.g.
   * For config: '/<pkgName>/config/<ConfigTypeName>/'
   * For metadata: '/<pkgName>/metadata/<MetadataTypeName>/'
   * For seed data: '/<pkgName>/seed/<SeedTypeName>/'
   * For other: '/<pkgName>/data/<TypeName>/'
   */
  static typeDataPaths(type: Type): C3.Set<string | null>;

  /**
   * Reads all data of the given type in the current pkg and dependencies into a stream
   */
  typeData(type: Type): Stream<O | null>;

  /**
   * Reads all data of the given type in the current pkg and dependencies into a stream
   */
  static typeData(type: Type): Stream<O | null>;

  /**
   * Reads the data of the given type and key in the current pkg and dependencies
   */
  typeData(type: Type, key: string): O | null;

  /**
   * Reads the data of the given type and key in the current pkg and dependencies
   */
  static typeData(type: Type, key: string): O | null;

  /**
   * Reads all data of the given type in the current pkg and dependencies into a JSON stream
   */
  typeDataJson(type: Type): C3.Map<string | null, any | null>;

  /**
   * Reads all data of the given type in the current pkg and dependencies into a JSON stream
   */
  static typeDataJson(type: Type): C3.Map<string | null, any | null>;

  /**
   * Reads the data of the given type and key in the current pkg and dependencies into a JSON object
   */
  typeDataJson(type: Type, key: string): any | null;

  /**
   * Reads the data of the given type and key in the current pkg and dependencies into a JSON object
   */
  static typeDataJson(type: Type, key: string): any | null;

  /**
   * Read and deserialize metadata resources for a given type, returns map of key and Metadata instance.
   */
  metadata(type: Type): C3.Map<string | null, M | null>;

  /**
   * Read and deserialize metadata resources for a given type, returns map of key and Metadata instance.
   */
  static metadata(type: Type): C3.Map<string | null, M | null>;

  /**
   * Read and deserialize metadata resource for a given {@link Identified#id id value}
   */
  metadata(type: Type, key: string | null, failIfMissing?: boolean): M | null;

  /**
   * Read and deserialize metadata resource for a given {@link Identified#id id value}
   */
  static metadata(type: Type, key: string | null, failIfMissing?: boolean): M | null;

  /**
   * Read and deserialize metadata resources for a given type, returns map of key and Metadata instance.
   */
  metadata(type: TypeMeta): C3.Map<string | null, M | null>;

  /**
   * Read and deserialize metadata resources for a given type, returns map of key and Metadata instance.
   */
  static metadata(type: TypeMeta): C3.Map<string | null, M | null>;

  /**
   * Read and deserialize metadata resource for a given {@link Identified#id id value}
   */
  metadata(type: TypeMeta, key: string | null, failIfMissing?: boolean): M | null;

  /**
   * Read and deserialize metadata resource for a given {@link Identified#id id value}
   */
  static metadata(type: TypeMeta, key: string | null, failIfMissing?: boolean): M | null;

  /**
   * Remove metadata resources for a given type.
   *
   * @return the number of instances removed
   */
  removeMetadata(type: Type): number;

  /**
   * Remove metadata resources for a given type.
   *
   * @return the number of instances removed
   */
  static removeMetadata(type: Type): number;

  /**
   * Remove metadata resources for the specified keys in the given type.
   *
   * @return the number of metadata instances removed that correspond with the following `keys`
   */
  removeMetadata(type: Type, keys: C3.Array<string | null>): number;

  /**
   * Remove metadata resources for the specified keys in the given type.
   *
   * @return the number of metadata instances removed that correspond with the following `keys`
   */
  static removeMetadata(type: Type, keys: C3.Array<string | null>): number;

  /**
   * Remove metadata resource for a given key
   *
   * @return true if either the instance on the current pkg corresponding to `key` was removed or if `failIfMissing` is not true and no
   *         instance corresponding to `key` existed prior to the call to `removeMetadata`
   */
  removeMetadata(type: Type, key: string | null, failIfMissing?: boolean): boolean;

  /**
   * Remove metadata resource for a given key
   *
   * @return true if either the instance on the current pkg corresponding to `key` was removed or if `failIfMissing` is not true and no
   *         instance corresponding to `key` existed prior to the call to `removeMetadata`
   */
  static removeMetadata(type: Type, key: string | null, failIfMissing?: boolean): boolean;

  /**
   * Metadata serialized contents by key for a given type; note that if Metadata is hierarchical and `key` is provided
   * it may return more then one Pkg.File if there are base Metadata defined for a given key
   */
  metadataJsons(type: Type, key?: string | null): C3.Map<string | null, any | null>;

  /**
   * Metadata serialized contents by key for a given type; note that if Metadata is hierarchical and `key` is provided
   * it may return more then one Pkg.File if there are base Metadata defined for a given key
   */
  static metadataJsons(type: Type, key?: string | null): C3.Map<string | null, any | null>;

  /**
   * Metadata serialized contents by key for a given type; note that if Metadata is hierarchical and `key` is provided
   * it may return more then one Pkg.File if there are base Metadata defined for a given key
   */
  metadataJsons(type: TypeMeta, key?: string | null): C3.Map<string | null, any | null>;

  /**
   * Metadata serialized contents by key for a given type; note that if Metadata is hierarchical and `key` is provided
   * it may return more then one Pkg.File if there are base Metadata defined for a given key
   */
  static metadataJsons(type: TypeMeta, key?: string | null): C3.Map<string | null, any | null>;

  /**
   * For a given path from this Pkg, return the constructed Pkg.Path for that path
   */
  path(path: string, failIfMissing?: boolean): Pkg.Path | null;

  /**
   * For a given path from this Pkg, return the constructed Pkg.Path for that path
   */
  static path(path: string, failIfMissing?: boolean): Pkg.Path | null;

  /**
   * Read and deserialize config resource for a given key
   */
  config(type: Type, key: string, failIfMissing?: boolean): C | null;

  /**
   * Read and deserialize config resource for a given key
   */
  static config(type: Type, key: string, failIfMissing?: boolean): C | null;

  /**
   * Read and deserialize config resource as binary for a given key
   */
  configBinary(type: Type, key: string, failIfMissing?: boolean): any | null;

  /**
   * Read and deserialize config resource as binary for a given key
   */
  static configBinary(type: Type, key: string, failIfMissing?: boolean): any | null;

  /**
   * Reads all migration statuses for this package sorted by version reversed.
   *
   * @param version
   *         The version of the migration to filter by
   */
  migrationStatus(version?: string | null): C3.Map<string, Pkg.MigrationStatus>;

  /**
   * Reads all migration statuses for this package sorted by version reversed.
   *
   * @param version
   *         The version of the migration to filter by
   */
  static migrationStatus(version?: string | null): C3.Map<string, Pkg.MigrationStatus>;

  /**
   * All migrations declared in depending packages that have not been executed in this package, ordered by execution
   * order.
   *
   * @param version
   *         The Major.Minor version of the migration to filter by
   */
  pendingMigrations(version?: string | null): C3.Map<string, Pkg.Migration>;

  /**
   * All migrations declared in depending packages that have not been executed in this package, ordered by execution
   * order.
   *
   * @param version
   *         The Major.Minor version of the migration to filter by
   */
  static pendingMigrations(version?: string | null): C3.Map<string, Pkg.Migration>;

  /**
   * All migrations declared in depending packages that have not been executed in this package, grouped by dependency,
   * then version and then ordered by execution order.
   */
  pendingMigrationsByDepsAndVersion(): C3.Map<string, C3.Map<string, C3.Array<string>>>;

  /**
   * All migrations declared in depending packages that have not been executed in this package, grouped by dependency,
   * then version and then ordered by execution order.
   */
  static pendingMigrationsByDepsAndVersion(): C3.Map<string, C3.Map<string, C3.Array<string>>>;

  /**
   * Reads all migration lambdas declared in this package or in it's dependencies ordered by execution order.
   *
   * @param version
   *         The Major.Minor version of the migration to filter by
   */
  migrations(version?: string | null): C3.Map<string, Pkg.Migration>;

  /**
   * Reads all migration lambdas declared in this package or in it's dependencies ordered by execution order.
   *
   * @param version
   *         The Major.Minor version of the migration to filter by
   */
  static migrations(version?: string | null): C3.Map<string, Pkg.Migration>;

  /**
   * Reads a migration declared in this package.
   */
  migration(path: string, failIfMissing?: boolean): Pkg.Migration | null;

  /**
   * Reads a migration declared in this package.
   */
  static migration(path: string, failIfMissing?: boolean): Pkg.Migration | null;

  /**
   * Lookup compatibility transforms for a given method and client version.
   */
  compat(methodType: MethodType, clientVersion: string): Pkg.Compat.Action | null;

  /**
   * Lookup compatibility transforms for a given method and client version.
   */
  static compat(methodType: MethodType, clientVersion: string): Pkg.Compat.Action | null;

  /**
   * All compatibility transforms for a given from-to versions.
   */
  compats(fromVersion: string, toVersion: string): C3.Map<string | null, Pkg.Compat | null>;

  /**
   * All compatibility transforms for a given from-to versions.
   */
  static compats(fromVersion: string, toVersion: string): C3.Map<string | null, Pkg.Compat | null>;

  /**
   * Lookup compatibility transforms for a given type from the client version.
   */
  compatFrom(typeMeta: TypeMeta, clientVersion: string): Pkg.Compat | null;

  /**
   * Lookup compatibility transforms for a given type from the client version.
   */
  static compatFrom(typeMeta: TypeMeta, clientVersion: string): Pkg.Compat | null;

  /**
   * Lookup compatibility transforms for a given type to the client version.
   */
  compatTo(typeMeta: TypeMeta, clientVersion: string): Pkg.Compat | null;

  /**
   * Lookup compatibility transforms for a given type to the client version.
   */
  static compatTo(typeMeta: TypeMeta, clientVersion: string): Pkg.Compat | null;

  /**
   * False if this package does not need compatibility handling, i.e. all the resolved dependencies are compatible, i.e.
   * match the declared versions.
   */
  needsCompat(): boolean;

  /**
   * False if this package does not need compatibility handling, i.e. all the resolved dependencies are compatible, i.e.
   * match the declared versions.
   */
  static needsCompat(): boolean;

  /**
   * @param type
   *         The Type whose source code will be returned
   * @param actionRequirement
   *         The {@Link Action.Requirement} which we want to get source code for. If this action requirement
   *         {@link Action.Requirement#meetsRequirementFor meets requirement for} another action requirement, that  source code for that action requirement
   *         for the given Type is also included. This method only returns source code for script-based action requirement.
   *
   * @return Source code for a Type which is declared or remixed in the given Pkg. In the scenario that the provided
   *         Type has been remixed and has source code in its various remixes, this method does not include source code
   *         from dependent packages (if this is desired, see {@link TypeMeta#sourceCode}). The resulting code is
   *         ordered from least specific {@Link Action.Requirement} to most specific {@Link Action.Requirement}  (i.e. `Dog.py` comes before
   *         `Dog.py-sever-foo.py`).
   */
  sourceCode(type: Type, actionRequirement: string, failIfMissing?: boolean): string | null;

  /**
   * @param type
   *         The Type whose source code will be returned
   * @param actionRequirement
   *         The {@Link Action.Requirement} which we want to get source code for. If this action requirement
   *         {@link Action.Requirement#meetsRequirementFor meets requirement for} another action requirement, that  source code for that action requirement
   *         for the given Type is also included. This method only returns source code for script-based action requirement.
   *
   * @return Source code for a Type which is declared or remixed in the given Pkg. In the scenario that the provided
   *         Type has been remixed and has source code in its various remixes, this method does not include source code
   *         from dependent packages (if this is desired, see {@link TypeMeta#sourceCode}). The resulting code is
   *         ordered from least specific {@Link Action.Requirement} to most specific {@Link Action.Requirement}  (i.e. `Dog.py` comes before
   *         `Dog.py-sever-foo.py`).
   */
  static sourceCode(type: Type, actionRequirement: string, failIfMissing?: boolean): string | null;

  /**
   * @param type
   *         The Type whose source code will be returned
   * @param actionRequirement
   *         The {@Link Action.Requirement} which we want to get source code for. If this action requirement
   *         {@link Action.Requirement#meetsRequirementFor meets requirement for} another action requirement, that  source code for that action requirement
   *         for the given Type is also included. This method only returns source code for script-based action requirement.
   *
   * @return A Map from source code {@link Pkg.Path} (key) to source code (value) for all source code files for a
   *         Type which is declared or remixed in the given Pkg. In the scenario that the provided Type has been
   *         remixed and has source code in its various remixes, this method does not include source code from dependent
   *         packages (if this is desired, see {@link TypeMeta#sourceCodeAndFilePaths}). The returned Map is ordered
   *         from least specific {@Link Action.Requirement} to most specific {@Link Action.Requirement}  (i.e. `Dog.py` comes before `Dog.py-sever-foo.py`).
   */
  sourceCodeAndFilePaths(type: Type, actionRequirement: string, failIfMissing?: boolean): C3.Map<string | null, string | null>;

  /**
   * @param type
   *         The Type whose source code will be returned
   * @param actionRequirement
   *         The {@Link Action.Requirement} which we want to get source code for. If this action requirement
   *         {@link Action.Requirement#meetsRequirementFor meets requirement for} another action requirement, that  source code for that action requirement
   *         for the given Type is also included. This method only returns source code for script-based action requirement.
   *
   * @return A Map from source code {@link Pkg.Path} (key) to source code (value) for all source code files for a
   *         Type which is declared or remixed in the given Pkg. In the scenario that the provided Type has been
   *         remixed and has source code in its various remixes, this method does not include source code from dependent
   *         packages (if this is desired, see {@link TypeMeta#sourceCodeAndFilePaths}). The returned Map is ordered
   *         from least specific {@Link Action.Requirement} to most specific {@Link Action.Requirement}  (i.e. `Dog.py` comes before `Dog.py-sever-foo.py`).
   */
  static sourceCodeAndFilePaths(type: Type, actionRequirement: string, failIfMissing?: boolean): C3.Map<string | null, string | null>;

  sourceCodeAndFilePaths(type: TypeMeta, actionRequirement: string, failIfMissing?: boolean): C3.Map<string | null, string | null>;

  static sourceCodeAndFilePaths(type: TypeMeta, actionRequirement: string, failIfMissing?: boolean): C3.Map<string | null, string | null>;

  /**
   * @param pathPrefixOrGlob
   *            The prefix for the full pkg path or a glob pattern
   * @param noDependency
   *            If true, only return the file paths from the current Pkg
   * @param order
   *           Order paths as requested, defaults to {@link Pkg.FileOrder.REMIX}.
   *
   * @return pkg file paths starting with the pkg path prefix,
   *         or satisfying the glob pattern, or all paths if the prefix/glob is empty
   */
  paths(pathPrefixOrGlob?: string | null, noDependency?: boolean, order?: string | null): C3.Set<string | null>;

  /**
   * @param pathPrefixOrGlob
   *            The prefix for the full pkg path or a glob pattern
   * @param noDependency
   *            If true, only return the file paths from the current Pkg
   * @param order
   *           Order paths as requested, defaults to {@link Pkg.FileOrder.REMIX}.
   *
   * @return pkg file paths starting with the pkg path prefix,
   *         or satisfying the glob pattern, or all paths if the prefix/glob is empty
   */
  static paths(pathPrefixOrGlob?: string | null, noDependency?: boolean, order?: string | null): C3.Set<string | null>;

  /**
   * @param noDependency
   *            If true, only return the test file paths from the current Pkg
   * @param order
   *           Order paths as requested, defaults to {@link Pkg.FileOrder.REMIX}.
   *
   * @return pkg test file paths
   */
  testPaths(noDependency?: boolean, order?: string | null): C3.Set<string | null>;

  /**
   * @param noDependency
   *            If true, only return the test file paths from the current Pkg
   * @param order
   *           Order paths as requested, defaults to {@link Pkg.FileOrder.REMIX}.
   *
   * @return pkg test file paths
   */
  static testPaths(noDependency?: boolean, order?: string | null): C3.Set<string | null>;

  /**
   * @param pathPrefixOrGlob
   *            The prefix for the full pkg path or a glob pattern
   * @param noDependency
   *            If true, only return the pkg files from the current Pkg
   * @return pkg files with paths starting with the pkg path prefix,
   *         or satisfying the glob pattern, or all pkg files if the prefix/glob is empty
   */
  files(pathPrefixOrGlob?: string | null, noDependency?: boolean): C3.Map<string | null, Pkg.File | null>;

  /**
   * @param pathPrefixOrGlob
   *            The prefix for the full pkg path or a glob pattern
   * @param noDependency
   *            If true, only return the pkg files from the current Pkg
   * @return pkg files with paths starting with the pkg path prefix,
   *         or satisfying the glob pattern, or all pkg files if the prefix/glob is empty
   */
  static files(pathPrefixOrGlob?: string | null, noDependency?: boolean): C3.Map<string | null, Pkg.File | null>;

  /**
   * Returns all files accessible by this Pkg based on spec filtered and ordered.
   */
  files(spec?: Pkg.FilesSpec | null): C3.Array<Pkg.File | null>;

  /**
   * Returns all files accessible by this Pkg based on spec filtered and ordered.
   */
  static files(spec?: Pkg.FilesSpec | null): C3.Array<Pkg.File | null>;

  /**
   * @return pkg file for the pkg path
   */
  file(path: string | null, failIfMissing?: boolean): Pkg.File | null;

  /**
   * @return pkg file for the pkg path
   */
  static file(path: string | null, failIfMissing?: boolean): Pkg.File | null;

  /**
   * @return the encoded path for the pkg file associated with the given Pkg.Path
   */
  fileEncodedPath(path: string | null, failIfMissing?: boolean): string | null;

  /**
   * @return the encoded path for the pkg file associated with the given Pkg.Path
   */
  static fileEncodedPath(path: string | null, failIfMissing?: boolean): string | null;

  /**
   * @return pkg file for the specified type
   */
  typeFile(typeName: string | null, failIfMissing?: boolean): Pkg.File | null;

  /**
   * @return pkg file for the specified type
   */
  static typeFile(typeName: string | null, failIfMissing?: boolean): Pkg.File | null;

  /**
   * @return A mapping of folder paths that contain specialized type data (ui metadata, config, etc) to the corresponding type names
   */
  declaredDataFolders(): C3.Map<string | null, string | null>;

  /**
   * @return A mapping of folder paths that contain specialized type data (ui metadata, config, etc) to the corresponding type names
   */
  static declaredDataFolders(): C3.Map<string | null, string | null>;

  /**
   * @param pathPrefixOrGlob
   *            The prefix for the full pkg path or a glob pattern
   * @param noDependency
   *            If true, only return the pkg file contents from the current Pkg
   * @param noLambda
   *            If true, returns read only pkg content without lambda that produces content on demand
   *
   * @return pkg file contents with paths starting with the Pkg path prefix,
   *         or satisfying the glob pattern, or all metadata file contents if the prefix/glob is empty
   */
  contents(pathPrefixOrGlob?: string | null, noDependency?: boolean, noLambda?: boolean): C3.Map<string | null, Content | null>;

  /**
   * @param pathPrefixOrGlob
   *            The prefix for the full pkg path or a glob pattern
   * @param noDependency
   *            If true, only return the pkg file contents from the current Pkg
   * @param noLambda
   *            If true, returns read only pkg content without lambda that produces content on demand
   *
   * @return pkg file contents with paths starting with the Pkg path prefix,
   *         or satisfying the glob pattern, or all metadata file contents if the prefix/glob is empty
   */
  static contents(pathPrefixOrGlob?: string | null, noDependency?: boolean, noLambda?: boolean): C3.Map<string | null, Content | null>;

  /**
   * @return content for a given pkg path accessible from this package
   */
  content(path: string | null, failIfMissing?: boolean): Content | null;

  /**
   * @return content for a given pkg path accessible from this package
   */
  static content(path: string | null, failIfMissing?: boolean): Content | null;

  /**
   * @return write content for a given pkg path accessible from this package.
   * Note: if content is null, content will be deleted completely.
   */
  writeContentString(path: string | null, content: string | null): void;

  /**
   * @return write content for a given pkg path accessible from this package.
   * Note: if content is null, content will be deleted completely.
   */
  static writeContentString(path: string | null, content: string | null): void;

  /**
   * To remove the pkgFile.
   * see {@link Pkg#writeContentString}
   */
  deleteContent(path: string | null, confirm?: boolean): void;

  /**
   * To remove the pkgFile.
   * see {@link Pkg#writeContentString}
   */
  static deleteContent(path: string | null, confirm?: boolean): void;

  /**
   * Delete contents for the given {@link Pkg.Path}s.
   * see {@link Pkg#deleteContent}
   */
  deleteContents(paths: C3.Array<string | null>, confirm?: boolean): void;

  /**
   * Delete contents for the given {@link Pkg.Path}s.
   * see {@link Pkg#deleteContent}
   */
  static deleteContents(paths: C3.Array<string | null>, confirm?: boolean): void;

  /**
   * @return resource content for the relative pkg path (subpath) that is accessible from this package; note that all
   *         resources should be located under `<package root>/resource/`
   */
  resource(resourcePath: string | null, failIfMissing?: boolean): Content | null;

  /**
   * @return resource content for the relative pkg path (subpath) that is accessible from this package; note that all
   *         resources should be located under `<package root>/resource/`
   */
  static resource(resourcePath: string | null, failIfMissing?: boolean): Content | null;

  /**
   * @return names of the other C3 packages that this package is depending on and are declared in the package descriptor.
   * **platform** package is automatically added because its implicit.
   */
  implicitAndDeclaredDependencyNames(): C3.Set<string | null>;

  /**
   * @return names of the other C3 packages that this package is depending on and are declared in the package descriptor.
   * **platform** package is automatically added because its implicit.
   */
  static implicitAndDeclaredDependencyNames(): C3.Set<string | null>;

  /**
   * @return other C3 packages that this package is depending on and are declared in the package descriptor
   * **platform** package is automatically added because its implicit.
   */
  implicitAndDeclaredDependencies(): C3.Map<string | null, Pkg | null>;

  /**
   * @return other C3 packages that this package is depending on and are declared in the package descriptor
   * **platform** package is automatically added because its implicit.
   */
  static implicitAndDeclaredDependencies(): C3.Map<string | null, Pkg | null>;

  /**
   * @return C3 packages by name that this package is depending on and are declared in the package descriptor
   * **platform** package is automatically added because its implicit.
   */
  implicitAndDeclaredDependency(dependencyName: string, failIfMissing?: boolean): Pkg | null;

  /**
   * @return C3 packages by name that this package is depending on and are declared in the package descriptor
   * **platform** package is automatically added because its implicit.
   */
  static implicitAndDeclaredDependency(dependencyName: string, failIfMissing?: boolean): Pkg | null;

  /**
   * @return names of the other C3 packages that this package is depending on
   */
  dependencyNames(): C3.Set<string | null>;

  /**
   * @return names of the other C3 packages that this package is depending on
   */
  static dependencyNames(): C3.Set<string | null>;

  /**
   * @return other C3 packages that this package is depending on
   */
  dependencies(): C3.Map<string | null, Pkg | null>;

  /**
   * @return other C3 packages that this package is depending on
   */
  static dependencies(): C3.Map<string | null, Pkg | null>;

  /**
   * Return version of this pkg. {@link Pkg.Decl#version}
   */
  version(): string | null;

  /**
   * Return version of this pkg. {@link Pkg.Decl#version}
   */
  static version(): string | null;

  /**
   * Return Major.Minor component of the version of this package. {@link Pkg.Decl#version}
   */
  versionMajorMinor(): SemanticVersion.MajorMinor;

  /**
   * Return Major.Minor component of the version of this package. {@link Pkg.Decl#version}
   */
  static versionMajorMinor(): SemanticVersion.MajorMinor;

  /**
   * Return version up to which this pkg is compatible to. {@link Pkg.Decl#compatibleToVersion}
   */
  compatibleToVersion(): string | null;

  /**
   * Return version up to which this pkg is compatible to. {@link Pkg.Decl#compatibleToVersion}
   */
  static compatibleToVersion(): string | null;

  /**
   * Return Major.Minor component of the version of the `platform` package dependency; this will be the version of the
   * API url for C3 applications where this is a root package. E.g. if `app` depends on platform version 8.5, then app's
   * API url will be `<app-url/api/8.5/` even if hosting C3 environment is running on a version 8.6.
   */
  platformVersion(): string | null;

  /**
   * Return Major.Minor component of the version of the `platform` package dependency; this will be the version of the
   * API url for C3 applications where this is a root package. E.g. if `app` depends on platform version 8.5, then app's
   * API url will be `<app-url/api/8.5/` even if hosting C3 environment is running on a version 8.6.
   */
  static platformVersion(): string | null;

  /**
   * Return Major.Minor component of the version of the `platform` package dependency; this will be the version of the
   * API url for C3 applications where this is a root package. E.g. if `app` depends on platform version 8.5, then app's
   * API url will be `<app-url/api/8.5/` even if hosting C3 environment is running on a version 8.6.
   */
  platformVersionMajorMinor(): SemanticVersion.MajorMinor;

  /**
   * Return Major.Minor component of the version of the `platform` package dependency; this will be the version of the
   * API url for C3 applications where this is a root package. E.g. if `app` depends on platform version 8.5, then app's
   * API url will be `<app-url/api/8.5/` even if hosting C3 environment is running on a version 8.6.
   */
  static platformVersionMajorMinor(): SemanticVersion.MajorMinor;

  /**
   * Return version of all dependencies and their versions declared in this Pkg.
   */
  dependencyDeclaredVersions(): C3.Map<string | null, string | null>;

  /**
   * Return version of all dependencies and their versions declared in this Pkg.
   */
  static dependencyDeclaredVersions(): C3.Map<string | null, string | null>;

  /**
   * Return version of all dependencies and their versions declared in this Pkg.
   */
  dependencyDeclaredVersionMajorMinors(): C3.Map<string, SemanticVersion.MajorMinor>;

  /**
   * Return version of all dependencies and their versions declared in this Pkg.
   */
  static dependencyDeclaredVersionMajorMinors(): C3.Map<string, SemanticVersion.MajorMinor>;

  /**
   * @return exact versions of all dependencies being used by the package
   */
  dependencyResolvedVersions(): C3.Map<string | null, string | null>;

  /**
   * @return exact versions of all dependencies being used by the package
   */
  static dependencyResolvedVersions(): C3.Map<string | null, string | null>;

  /**
   * Return exact versions of all dependencies being used by the package
   */
  dependencyResolvedVersionMajorMinors(): C3.Map<string, SemanticVersion.MajorMinor>;

  /**
   * Return exact versions of all dependencies being used by the package
   */
  static dependencyResolvedVersionMajorMinors(): C3.Map<string, SemanticVersion.MajorMinor>;

  /**
   * Return version of all dependencies and their versions used in this Pkg.
   */
  dependencyVersions(): C3.Map<string | null, string | null>;

  /**
   * Return version of all dependencies and their versions used in this Pkg.
   */
  static dependencyVersions(): C3.Map<string | null, string | null>;

  /**
   * @return  A flattened list of all dependencies generated during dependency resolution in PkgName:SemanticVersion format.
   * This is different from the lock that lives in {@link Pkg.Category#PACKAGE_LOCK} (next to {@link FileExt#PKG})
   */
  resolvedVersions(): C3.Array<string | null>;

  /**
   * @return  A flattened list of all dependencies generated during dependency resolution in PkgName:SemanticVersion format.
   * This is different from the lock that lives in {@link Pkg.Category#PACKAGE_LOCK} (next to {@link FileExt#PKG})
   */
  static resolvedVersions(): C3.Array<string | null>;

  /**
   * @return C3 packages by name that this package is depending on
   */
  dependency(dependencyName: string, failIfMissing?: boolean): Pkg | null;

  /**
   * @return C3 packages by name that this package is depending on
   */
  static dependency(dependencyName: string, failIfMissing?: boolean): Pkg | null;

  /**
   * @return scope for resolving types in this package
   */
  scope(): TypesysScope;

  /**
   * @return scope for resolving types in this package
   */
  static scope(): TypesysScope;

  /**
   * Dynamic type with provided {@link DeclaredFieldType}s
   */
  dynamicTypeFromDeclaredFields(fields: C3.Array<DeclaredFieldType | null>): TypeMeta;

  /**
   * Dynamic type with provided {@link DeclaredFieldType}s
   */
  static dynamicTypeFromDeclaredFields(fields: C3.Array<DeclaredFieldType | null>): TypeMeta;

  /**
   * Dynamic type having a fields with provided name and value types
   */
  dynamicTypeFromFields(fields: C3.Map<string | null, ValueType | null>): TypeMeta;

  /**
   * Dynamic type having a fields with provided name and value types
   */
  static dynamicTypeFromFields(fields: C3.Map<string | null, ValueType | null>): TypeMeta;

  /**
   * Dynamic type from the given Type Meta fields. A new type meta will be created with the dynamic type name prefix
   */
  dynamicTypeFromTypeMeta(typeMeta: TypeMeta): TypeMeta;

  /**
   * Dynamic type from the given Type Meta fields. A new type meta will be created with the dynamic type name prefix
   */
  static dynamicTypeFromTypeMeta(typeMeta: TypeMeta): TypeMeta;

  /**
   * Dynamic type mixing provided type and having a new field with provided name and value type
   */
  dynamicTypeWithNewField(type: Type, fieldName: string, fieldValueType: ValueType): TypeMeta;

  /**
   * Dynamic type mixing provided type and having a new field with provided name and value type
   */
  static dynamicTypeWithNewField(type: Type, fieldName: string, fieldValueType: ValueType): TypeMeta;

  /**
   * Dynamic type mixing provided type and having a new field with provided {@link DeclaredFieldType}s
   */
  dynamicTypeWithNewDeclaredField(type: Type, fieldType: DeclaredFieldType): TypeMeta;

  /**
   * Dynamic type mixing provided type and having a new field with provided {@link DeclaredFieldType}s
   */
  static dynamicTypeWithNewDeclaredField(type: Type, fieldType: DeclaredFieldType): TypeMeta;

  /**
   * Dynamic type mixing the provided type and renaming an existing field with provided name and value type
   */
  dynamicTypeWithRenamedField(type: Type | null, oldFieldName: string, newFieldName: string, fieldValueType?: ValueType | null, doNotFailIfOldFieldIsMissing?: boolean): TypeMeta;

  /**
   * Dynamic type mixing the provided type and renaming an existing field with provided name and value type
   */
  static dynamicTypeWithRenamedField(type: Type | null, oldFieldName: string, newFieldName: string, fieldValueType?: ValueType | null, doNotFailIfOldFieldIsMissing?: boolean): TypeMeta;

  /**
   * Dynamic type mixing provided type with a new name
   */
  dynamicTypeWithName(type: Type, newName: string): TypeMeta;

  /**
   * Dynamic type mixing provided type with a new name
   */
  static dynamicTypeWithName(type: Type, newName: string): TypeMeta;

  /**
   * Add or modify type in this package
   */
  upsertType(subPath: string | null, typeDsl: string | null, sourceCode?: C3.Map<string | null, string | null>, isTest?: boolean): TypeMeta;

  /**
   * Add or modify type in this package
   */
  static upsertType(subPath: string | null, typeDsl: string | null, sourceCode?: C3.Map<string | null, string | null>, isTest?: boolean): TypeMeta;

  /**
   * Deletes the following types from the given type names
   * see {@link Pkg#upsertType}
   * see {@link Pkg#deleteContents}
   */
  removeTypes(types: C3.Array<string | null>, confirm?: boolean): void;

  /**
   * Deletes the following types from the given type names
   * see {@link Pkg#upsertType}
   * see {@link Pkg#deleteContents}
   */
  static removeTypes(types: C3.Array<string | null>, confirm?: boolean): void;

  /**
   * Discards all loaded types
   */
  clear(): void;

  /**
   * Discards all loaded types
   */
  static clear(): void;

  /**
   * Retrieves a specific dependence or artifact for a given type such as mixins, annotations, documentation, `d.ts`
   * or `pyi` interface, etc
   *
   * For available dependencies see fields on {@link TypeMetaDeps}
   *
   * @param
   *    type name
   * @param
   *    dependency name of the field from {@link TypeMetaDeps}
   * @return requested dependency
   */
  typeMetaDep(typeName: string, dependency: string): any;

  /**
   * Retrieves a specific dependence or artifact for a given type such as mixins, annotations, documentation, `d.ts`
   * or `pyi` interface, etc
   *
   * For available dependencies see fields on {@link TypeMetaDeps}
   *
   * @param
   *    type name
   * @param
   *    dependency name of the field from {@link TypeMetaDeps}
   * @return requested dependency
   */
  static typeMetaDep(typeName: string, dependency: string): any;

  /**
   * Retrieves all dependencies for a desired type including mixins, annotations, documentation, `d.ts`
   * or `pyi` interface, etc
   *
   * For available dependencies see fields on {@link TypeMetaDeps}
   *
   * @return map of requested dependencies for type
   */
  typeMetaDepsFor(typeName: string): TypeMetaDeps | null;

  /**
   * Retrieves all dependencies for a desired type including mixins, annotations, documentation, `d.ts`
   * or `pyi` interface, etc
   *
   * For available dependencies see fields on {@link TypeMetaDeps}
   *
   * @return map of requested dependencies for type
   */
  static typeMetaDepsFor(typeName: string): TypeMetaDeps | null;

  /**
   * Retrieves all {@link Pkg.Issue}s related with given typeName.
   *
   * @return map of {@link Pkg.Issue}s for given type with {@link Pkg.Path} as the key.
   */
  issuesForType(typeName: string): C3.Map<string | null, C3.Array<Pkg.Issue | null>>;

  /**
   * Retrieves all {@link Pkg.Issue}s related with given typeName.
   *
   * @return map of {@link Pkg.Issue}s for given type with {@link Pkg.Path} as the key.
   */
  static issuesForType(typeName: string): C3.Map<string | null, C3.Array<Pkg.Issue | null>>;

  /**
   * Retrieves a specific dependence or artifact for all types such as mixins, annotations, documentation, `d.ts`
   * or `pyi` interface, etc
   *
   * For available dependencies see fields on {@link TypeMetaDeps}
   *
   * @param
   *    dependency name of the field from {@link TypeMetaDeps}
   * @return map of requested dependency by type name
   */
  typeMetaDeps(dependency: string): C3.Map<string | null, any>;

  /**
   * Retrieves a specific dependence or artifact for all types such as mixins, annotations, documentation, `d.ts`
   * or `pyi` interface, etc
   *
   * For available dependencies see fields on {@link TypeMetaDeps}
   *
   * @param
   *    dependency name of the field from {@link TypeMetaDeps}
   * @return map of requested dependency by type name
   */
  static typeMetaDeps(dependency: string): C3.Map<string | null, any>;

  /**
   * Retrieves cached backwards depending types for a given dependency element
   *
   * For available dependencies see fields on {@link TypeMetaDeps }
   */
  typeMetaBackwardDeps(dependency: string, key: string | null): C3.Set<string | null>;

  /**
   * Retrieves cached backwards depending types for a given dependency element
   *
   * For available dependencies see fields on {@link TypeMetaDeps }
   */
  static typeMetaBackwardDeps(dependency: string, key: string | null): C3.Set<string | null>;

  /**
   * Retrieves a specific dependence or artifact for a given pkg file
   *
   * For available dependencies see fields on {@link PkgFileDeps}
   *
   * @param pkgPath
   *    url of encodedPath of file.
   * @param
   *    dependency name of the field from {@link PkgFileDeps}
   * @return requested dependency
   */
  fileDep(pkgPath: string, dependency: string): any;

  /**
   * Retrieves a specific dependence or artifact for a given pkg file
   *
   * For available dependencies see fields on {@link PkgFileDeps}
   *
   * @param pkgPath
   *    url of encodedPath of file.
   * @param
   *    dependency name of the field from {@link PkgFileDeps}
   * @return requested dependency
   */
  static fileDep(pkgPath: string, dependency: string): any;

  /**
   * Retrieves a specific dependence or artifact for all files
   *
   * For available dependencies see fields on {@link PkgFileDeps}
   *
   * @param
   *    dependency name of the field from {@link PkgFileDeps}
   * @return map of requested dependency by  file
   */
  fileDeps(dependency: string): C3.Map<string | null, any>;

  /**
   * Retrieves a specific dependence or artifact for all files
   *
   * For available dependencies see fields on {@link PkgFileDeps}
   *
   * @param
   *    dependency name of the field from {@link PkgFileDeps}
   * @return map of requested dependency by  file
   */
  static fileDeps(dependency: string): C3.Map<string | null, any>;

  /**
   * Retrieves cached backwards depending files for a given dependency element
   *
   * For available dependencies see fields on {@link PkgFileDeps }
   *
   * @param dependency
   *     name of the field from {@link PkgFileDeps}
   * @param key
   *    key of the dependency.
   * @return set of files that have given dependency
   */
  fileBackwardDeps(dependency: string, key: string | null): C3.Set<string | null>;

  /**
   * Retrieves cached backwards depending files for a given dependency element
   *
   * For available dependencies see fields on {@link PkgFileDeps }
   *
   * @param dependency
   *     name of the field from {@link PkgFileDeps}
   * @param key
   *    key of the dependency.
   * @return set of files that have given dependency
   */
  static fileBackwardDeps(dependency: string, key: string | null): C3.Set<string | null>;

  /**
   * Retrieves a specific dependence or artifact for a given Metadata element such as componentUnits of a Unit or
   * securityLevel of a Role
   *
   * It is significantly more efficient to use this method vs loading instance of the target metadata
   *
   * For available dependencies see fields on a specific sub type of {@link MetadataDeps} for a given Metadata sub-type
   *
   * @param MetadataType
   *         type of a target metadata element
   * @param metadataKey
   *         key value for a metadata element we are looking up a dependency for
   * @param dependencyName
   *         dependency name i.e. name of the field from corresponding {@link MetadataDeps}
   * @return requested dependency value
   */
  metadataDep(metadataType: Type, metadataKey: string | null, dependencyName: string, failIfKeyIsInvalid?: boolean): any;

  /**
   * Retrieves a specific dependence or artifact for a given Metadata element such as componentUnits of a Unit or
   * securityLevel of a Role
   *
   * It is significantly more efficient to use this method vs loading instance of the target metadata
   *
   * For available dependencies see fields on a specific sub type of {@link MetadataDeps} for a given Metadata sub-type
   *
   * @param MetadataType
   *         type of a target metadata element
   * @param metadataKey
   *         key value for a metadata element we are looking up a dependency for
   * @param dependencyName
   *         dependency name i.e. name of the field from corresponding {@link MetadataDeps}
   * @return requested dependency value
   */
  static metadataDep(metadataType: Type, metadataKey: string | null, dependencyName: string, failIfKeyIsInvalid?: boolean): any;

  /**
   * Retrieves a specific dependence or artifact for all types such as mixins, annotations, documentation, `d.ts`
   * or `pyi` interface, etc
   *
   * It is significantly more efficient to use this method vs loading all metadata instance
   *
   * For available dependencies see fields on corresponding sub-type of {@link MetadataDeps }
   *
   * @param dependencyName
   *         dependency name of the field from {@link TypeMetaDeps}
   * @return map of requested dependency by type name
   */
  metadataDeps(metadataType: Type, dependencyName: string): C3.Map<string | null, any>;

  /**
   * Retrieves a specific dependence or artifact for all types such as mixins, annotations, documentation, `d.ts`
   * or `pyi` interface, etc
   *
   * It is significantly more efficient to use this method vs loading all metadata instance
   *
   * For available dependencies see fields on corresponding sub-type of {@link MetadataDeps }
   *
   * @param dependencyName
   *         dependency name of the field from {@link TypeMetaDeps}
   * @return map of requested dependency by type name
   */
  static metadataDeps(metadataType: Type, dependencyName: string): C3.Map<string | null, any>;

  /**
   * Retrieves cached backwards depending types for a given dependency element
   *
   * It is significantly more efficient to use this method vs enumerating all metadata instances
   *
   * @param metadataType
   *         type of a target metadata element
   * @param dependencyName
   *         name of the field from corresponding {@link MetadataDeps} that contains dependency element or elements
   * @param dependencyKey
   *         dependency key for lookup
   * @return set of keys for metadata elements that have a given dependency
   *
   * For available dependencies see fields on corresponding sub-type of {@link MetadataDeps }
   */
  metadataBackwardDeps(metadataType: Type, dependencyName: string, dependencyKey: string | null): C3.Set<string | null>;

  /**
   * Retrieves cached backwards depending types for a given dependency element
   *
   * It is significantly more efficient to use this method vs enumerating all metadata instances
   *
   * @param metadataType
   *         type of a target metadata element
   * @param dependencyName
   *         name of the field from corresponding {@link MetadataDeps} that contains dependency element or elements
   * @param dependencyKey
   *         dependency key for lookup
   * @return set of keys for metadata elements that have a given dependency
   *
   * For available dependencies see fields on corresponding sub-type of {@link MetadataDeps }
   */
  static metadataBackwardDeps(metadataType: Type, dependencyName: string, dependencyKey: string | null): C3.Set<string | null>;

  /**
   * Retrieves a specific dependence or artifact for a given seed data element such as componentUnits of a Unit or
   * securityLevel of a Role
   *
   * It is significantly more efficient to use this method vs loading instance of the target seed data
   *
   * For available dependencies see fields on a specific sub type of {@link SeedDataDeps} for a given SeedData sub-type
   *
   * @param seedDataType
   *         type of a target seed data element
   * @param seedDataKey
   *         key value for a seed data element we are looking up a dependency for
   * @param dependencyName
   *         dependency name i.e. name of the field from corresponding {@link SeedDataDeps}
   * @return requested dependency value
   */
  seedDataDep(seedDataType: Type, seedDataKey: string | null, dependencyName: string, failIfKeyIsInvalid?: boolean): any;

  /**
   * Retrieves a specific dependence or artifact for a given seed data element such as componentUnits of a Unit or
   * securityLevel of a Role
   *
   * It is significantly more efficient to use this method vs loading instance of the target seed data
   *
   * For available dependencies see fields on a specific sub type of {@link SeedDataDeps} for a given SeedData sub-type
   *
   * @param seedDataType
   *         type of a target seed data element
   * @param seedDataKey
   *         key value for a seed data element we are looking up a dependency for
   * @param dependencyName
   *         dependency name i.e. name of the field from corresponding {@link SeedDataDeps}
   * @return requested dependency value
   */
  static seedDataDep(seedDataType: Type, seedDataKey: string | null, dependencyName: string, failIfKeyIsInvalid?: boolean): any;

  /**
   * Retrieves a specific dependence or artifact for all types such as mixins, annotations, documentation, `d.ts`
   * or `pyi` interface, etc
   *
   * It is significantly more efficient to use this method vs loading all seedData instance
   *
   * For available dependencies see fields on corresponding sub-type of {@link SeedDataDeps }
   *
   * @param dependencyName
   *         dependency name of the field from {@link TypeMetaDeps}
   * @return map of requested dependency by type name
   */
  seedDataDeps(seedDataType: Type, dependencyName: string): C3.Map<string | null, any>;

  /**
   * Retrieves a specific dependence or artifact for all types such as mixins, annotations, documentation, `d.ts`
   * or `pyi` interface, etc
   *
   * It is significantly more efficient to use this method vs loading all seedData instance
   *
   * For available dependencies see fields on corresponding sub-type of {@link SeedDataDeps }
   *
   * @param dependencyName
   *         dependency name of the field from {@link TypeMetaDeps}
   * @return map of requested dependency by type name
   */
  static seedDataDeps(seedDataType: Type, dependencyName: string): C3.Map<string | null, any>;

  /**
   * Retrieves cached backwards depending types for a given dependency element
   *
   * It is significantly more efficient to use this method vs enumerating all seed data instances
   *
   * @param seedDataType
   *         type of a target seed data element
   * @param dependencyName
   *         name of the field from corresponding {@link SeedDataDeps} that contains dependency element or elements
   * @param dependencyKey
   *         dependency key for lookup
   * @return set of keys for seed data elements that have a given dependency
   *
   * For available dependencies see fields on corresponding sub-type of {@link SeedDataDeps }
   */
  seedDataBackwardDeps(seedDataType: Type, dependencyName: string, dependencyKey: string | null): C3.Set<string | null>;

  /**
   * Retrieves cached backwards depending types for a given dependency element
   *
   * It is significantly more efficient to use this method vs enumerating all seed data instances
   *
   * @param seedDataType
   *         type of a target seed data element
   * @param dependencyName
   *         name of the field from corresponding {@link SeedDataDeps} that contains dependency element or elements
   * @param dependencyKey
   *         dependency key for lookup
   * @return set of keys for seed data elements that have a given dependency
   *
   * For available dependencies see fields on corresponding sub-type of {@link SeedDataDeps }
   */
  static seedDataBackwardDeps(seedDataType: Type, dependencyName: string, dependencyKey: string | null): C3.Set<string | null>;

  innerTypeMetas(typeName: string): C3.Set<TypeMeta | null>;

  static innerTypeMetas(typeName: string): C3.Set<TypeMeta | null>;

  /**
   * Saves source code for a C3 Type instance to a file
   * The path of the saved source file is: {@link Pkg#categoryPrefix}/src/#crcSubPath
   */
  saveSourceCode(srcSubPath: string, src: string): void;

  /**
   * Saves source code for a C3 Type instance to a file
   * The path of the saved source file is: {@link Pkg#categoryPrefix}/src/#crcSubPath
   */
  static saveSourceCode(srcSubPath: string, src: string): void;

  /**
   * Saves an instance to a file.
   * The path of the saved file is:
   * {@link Pkg#categoryPrefix}/subPath/{@link TypeMeta#prototypeName}/{@link Pkg#filenameFor}.fileExtension
   */
  saveMetadata(metadata: T | null, subPath?: string | null, contentType?: string | null): T | null;

  /**
   * Saves an instance to a file.
   * The path of the saved file is:
   * {@link Pkg#categoryPrefix}/subPath/{@link TypeMeta#prototypeName}/{@link Pkg#filenameFor}.fileExtension
   */
  static saveMetadata(metadata: T | null, subPath?: string | null, contentType?: string | null): T | null;

  /**
   * Returns the filename of a savable instance
   * See {@link Pkg#saveMetadata}
   */
  fileNameFor(withType: WithType | null, failIfUnknown?: boolean): string | null;

  /**
   * Returns the filename of a savable instance
   * See {@link Pkg#saveMetadata}
   */
  static fileNameFor(withType: WithType | null, failIfUnknown?: boolean): string | null;

  /**
   * Returns the prefix corresponding to the category of a savable instance.
   * This will be one of "meta/", "seed/", and "config/" depending on the type of the `withType` instance passed.
   * See {@link Pkg#saveMetadata}
   */
  pkgCategoryInfixFor(withType: WithType | null): string | null;

  /**
   * Returns the prefix corresponding to the category of a savable instance.
   * This will be one of "meta/", "seed/", and "config/" depending on the type of the `withType` instance passed.
   * See {@link Pkg#saveMetadata}
   */
  static pkgCategoryInfixFor(withType: WithType | null): string | null;

  /**
   * Returns the full path for a savable instance.
   * If the instance has already been saved and therefore has a {@link Meta#deserSource}, then that path is returned.
   * Otherwise, the path is
   * {@link Pkg#categoryPrefix}/{@link TypeMeta#prototypeName}/{@link Pkg#filenameFor}.fileExtension
   */
  pkgPathFor(withType: WithType | null): string | null;

  /**
   * Returns the full path for a savable instance.
   * If the instance has already been saved and therefore has a {@link Meta#deserSource}, then that path is returned.
   * Otherwise, the path is
   * {@link Pkg#categoryPrefix}/{@link TypeMeta#prototypeName}/{@link Pkg#filenameFor}.fileExtension
   */
  static pkgPathFor(withType: WithType | null): string | null;

  /**
   * Returns true, if this Pkg contents can be modified.
   */
  isUpdatable(): boolean;

  /**
   * Returns true, if this Pkg contents can be modified.
   */
  static isUpdatable(): boolean;

  /**
   * Returns true, if this Pkg contents need to be validated for runtime code-gen
   */
  needRuntimeCodeValidation(): boolean;

  /**
   * Returns true, if this Pkg contents need to be validated for runtime code-gen
   */
  static needRuntimeCodeValidation(): boolean;

  /**
   * Loads new instance of TypeMeta from source in this package but does not add it to metadata cache.
   */
  loadTypeMeta(name: string, failIfMissing?: boolean): TypeMeta | null;

  /**
   * Loads new instance of TypeMeta from source in this package but does not add it to metadata cache.
   */
  static loadTypeMeta(name: string, failIfMissing?: boolean): TypeMeta | null;

  /**
   * The kinds of code generation required by this package. Expected valid values are "Col", "Java", "Js", "Poly",
   * "Py", "React", "StdLib", "Type". A valid value must match precisely the prefix of an existing code generator class
   * name.
   */
  codeGen(): C3.Set<string | null>;

  /**
   * The kinds of code generation required by this package. Expected valid values are "Col", "Java", "Js", "Poly",
   * "Py", "React", "StdLib", "Type". A valid value must match precisely the prefix of an existing code generator class
   * name.
   */
  static codeGen(): C3.Set<string | null>;

  /**
   * Get the hash/digest of a file within the package.
   * @param  pkgPath to the file within the package
   * @return hash string
   * @see Fingerprint.md5
   */
  fileFingerprint(pkgPath: string): string | null;

  /**
   * Get the hash/digest of a file within the package.
   * @param  pkgPath to the file within the package
   * @return hash string
   * @see Fingerprint.md5
   */
  static fileFingerprint(pkgPath: string): string | null;

  /**
   * write content for a given {@link Pkg.Path}.
   * Note: if content is null, file will be deleted for the given pkgPath.
   */
  writeContent(pkgPath: string, content: Content | null): void;

  /**
   * write content for a given {@link Pkg.Path}.
   * Note: if content is null, file will be deleted for the given pkgPath.
   */
  static writeContent(pkgPath: string, content: Content | null): void;

  /**
   * write contents for a given {@link Pkg.Path}s.
   * Note: if content is null, file will be deleted for the given pkgPath.
   */
  static writeContents(pkgPathToContent?: C3.Map<string, Content | null>): void;

  /**
   * Write UI bundles (static assets) from then given local path.
   * @param srcPath
   *         Path to local directory containing UI bundles.
   * @param dstPath
   *         PkgPath prefix to write UI bundles to.
   */
  writeUiBundlesFromLocalPath(srcPath: string, dstPath: string): void;

  /**
   * Write UI bundles (static assets) from then given local path.
   * @param srcPath
   *         Path to local directory containing UI bundles.
   * @param dstPath
   *         PkgPath prefix to write UI bundles to.
   */
  static writeUiBundlesFromLocalPath(srcPath: string, dstPath: string): void;

  /**
   * Whether to use the tsDecl files generated during pkg validation rather than generating during bundling
   * @see TypeMetaDeps#tsDecl
   */
  useGeneratedTsDeclFilesForUiBundling(): boolean;

  /**
   * Whether to use the tsDecl files generated during pkg validation rather than generating during bundling
   * @see TypeMetaDeps#tsDecl
   */
  static useGeneratedTsDeclFilesForUiBundling(): boolean;

  /**
   * In-place updates {@link Pkg.Decl#dependencies} of the {@link Pkg package}.
   *
   * In-memory instance of Pkg may not reflect this change. Use return value or get pkg using `C3.pkg(...)`.
   *
   * @param pkgName
   *         Name of the package
   * @param version
   *         {@link SemanticVersion semantic version} of the package.
   * @return Returns updated pkg instance.
   */
  updateDependency(depPkgName: string, depVersion: string): Pkg;

  /**
   * In-place updates {@link Pkg.Decl#dependencies} of the {@link Pkg package}.
   *
   * In-memory instance of Pkg may not reflect this change. Use return value or get pkg using `C3.pkg(...)`.
   *
   * @param pkgName
   *         Name of the package
   * @param version
   *         {@link SemanticVersion semantic version} of the package.
   * @return Returns updated pkg instance.
   */
  static updateDependency(depPkgName: string, depVersion: string): Pkg;

  /**
   * Listen to {@link Pkg.Event} produced by this Pkg changes.
   * @return a handle to EventStream and current {@link PkgState} for the Pkg.
   */
  listen(): PkgListenResult | null;

  /**
   * Listen to {@link Pkg.Event} produced by this Pkg changes.
   * @return a handle to EventStream and current {@link PkgState} for the Pkg.
   */
  static listen(): PkgListenResult | null;

  /**
   * @return the current state of the Pkg, including list of all existing {@link Pkg.Issue} in the Pkg, and the next
   * expected sequence number for {@link Pkg.Event#sequenceNum}.
   */
  state(): PkgState | null;

  /**
   * @return the current state of the Pkg, including list of all existing {@link Pkg.Issue} in the Pkg, and the next
   * expected sequence number for {@link Pkg.Event#sequenceNum}.
   */
  static state(): PkgState | null;

  /**
   * @return the next expected sequence number for {@link Pkg.Event#sequenceNum}.
   */
  nextEventSequenceNum(): number;

  /**
   * @return the next expected sequence number for {@link Pkg.Event#sequenceNum}.
   */
  static nextEventSequenceNum(): number;

  /**
   * Fire given event. This api is for testing purpose only.
   */
  firePkgEvent(e: Pkg.Event): void;

  /**
   * Fire given event. This api is for testing purpose only.
   */
  static firePkgEvent(e: Pkg.Event): void;

  /**
   * Collect all seeddatafiles from this Pkg and persist the seed objs.
   * NOTE: also persists objs from the `/data` folder
   */
  upsertAllSeed(): C3.Array<SeedData.Issue | null>;

  /**
   * Collect all seeddatafiles from this Pkg and persist the seed objs.
   * NOTE: also persists objs from the `/data` folder
   */
  static upsertAllSeed(): C3.Array<SeedData.Issue | null>;

  /**
   * Trigger any validations on adding a file to Pkg.
   */
  fileCreated(file: Pkg.File): void;

  /**
   * Trigger any validations on adding a file to Pkg.
   */
  static fileCreated(file: Pkg.File): void;

  /**
   * Trigger any validations on updating a file to Pkg.
   */
  fileUpdated(file: Pkg.File, oldContent?: ContentValue | null): void;

  /**
   * Trigger any validations on updating a file to Pkg.
   */
  static fileUpdated(file: Pkg.File, oldContent?: ContentValue | null): void;

  /**
   * Trigger any validations on remove a file to the Pkg.
   */
  fileRemoved(file: Pkg.File, oldContent?: ContentValue | null): void;

  /**
   * Trigger any validations on remove a file to the Pkg.
   */
  static fileRemoved(file: Pkg.File, oldContent?: ContentValue | null): void;

  /**
   * For this pkg, validate pkg artifacts for own Metadata  and return issues by Pkg.Path
   */
  validateMetadata(spec?: ValidateMetadataSpec | null): C3.Map<string | null, C3.Array<Pkg.Issue | null>>;

  /**
   * For this pkg, validate pkg artifacts for own Metadata  and return issues by Pkg.Path
   */
  static validateMetadata(spec?: ValidateMetadataSpec | null): C3.Map<string | null, C3.Array<Pkg.Issue | null>>;

  /**
   * For this pkg, validate pkg artifacts for own SeedData instances and return issues by Pkg.Path
   */
  validateSeedData(): C3.Map<string | null, C3.Array<Pkg.Issue | null>>;

  /**
   * For this pkg, validate pkg artifacts for own SeedData instances and return issues by Pkg.Path
   */
  static validateSeedData(): C3.Map<string | null, C3.Array<Pkg.Issue | null>>;

  /**
   * For this pkg, validate pkg artifacts for own ConfigData instances and return issues by Pkg.Path
   */
  validateConfigData(): C3.Map<string | null, C3.Array<Pkg.Issue | null>>;

  /**
   * For this pkg, validate pkg artifacts for own ConfigData instances and return issues by Pkg.Path
   */
  static validateConfigData(): C3.Map<string | null, C3.Array<Pkg.Issue | null>>;

  /**
   * For this pkg, validate own pkg artifacts for given type and return issues by Pkg.Path
   */
  validateTypeData(typeName: string): C3.Map<string | null, C3.Array<Pkg.Issue | null>>;

  /**
   * For this pkg, validate own pkg artifacts for given type and return issues by Pkg.Path
   */
  static validateTypeData(typeName: string): C3.Map<string | null, C3.Array<Pkg.Issue | null>>;

  /**
   * @return map of all packages available to path to .c3pkg.json file, and null if the package is a java resource.
   */
  static pkgs(): C3.Map<string | null, string | null>;

  /**
   * Setup zip file as repository package content.
   */
  static setupZipPkg(url?: string | null): void;

  /**
   * Read all cached metadata issues in this package. Return all {@link Pkg.Issue} in a map with pkgPath as key.
   */
  readIssues(): C3.Map<string | null, C3.Array<Pkg.Issue | null>>;

  /**
   * Read all cached metadata issues in this package. Return all {@link Pkg.Issue} in a map with pkgPath as key.
   */
  static readIssues(): C3.Map<string | null, C3.Array<Pkg.Issue | null>>;

  /**
   * Updates this package by inferring and upserting metadata from {@link Data} in the default {@link Dataset}.
   * `features` argument is currently not supported.
   */
  update(features?: C3.Array<Feature.Set | null> | null): void;

  /**
   * Updates this package by inferring and upserting metadata from {@link Data} in the default {@link Dataset}.
   * `features` argument is currently not supported.
   */
  static update(features?: C3.Array<Feature.Set | null> | null): void;

  /**
   * Return local file system root folder containing the package descriptor file (.c3pkg.json).
   */
  localRoot(): string | null;

  /**
   * Return local file system root folder containing the package descriptor file (.c3pkg.json).
   */
  static localRoot(): string | null;

  /**
   * Generate zip artifact for this package
   *
   * @param artifactPath
   *           File path to store the generated artifact
   * @param artifactWithDependencies
   *           Whether or not to generate artifact with the dependent packages
   * @return the path to the generated zip artifact
   */
  zipArtifact(artifactPath?: string | null, artifactWithDependencies?: boolean): string | null;

  /**
   * Generate zip artifact for this package
   *
   * @param artifactPath
   *           File path to store the generated artifact
   * @param artifactWithDependencies
   *           Whether or not to generate artifact with the dependent packages
   * @return the path to the generated zip artifact
   */
  static zipArtifact(artifactPath?: string | null, artifactWithDependencies?: boolean): string | null;

  /**
   * Remove the current instance of the package, so it can be reloaded on first access.
   */
  evict(): void;

  /**
   * Remove the current instance of the package, so it can be reloaded on first access.
   */
  static evict(): void;

  /**
   * Return Pkg.Decl for this pkg.
   */
  decl(): Pkg.Decl | null;

  /**
   * Return Pkg.Decl for this pkg.
   */
  static decl(): Pkg.Decl | null;

  /**
   * Return package descriptor file name (.c3pkg.json).
   */
  descriptorFileName(): string;

  /**
   * Return package descriptor file name (.c3pkg.json).
   */
  static descriptorFileName(): string;

  /**
   * Return a meta URL for the root of this package, which will be "meta://packageName/".
   */
  rootMetaUrl(): string;

  /**
   * Return a meta URL for the root of this package, which will be "meta://packageName/".
   */
  static rootMetaUrl(): string;

  /**
   * Return a pkg URL for the root of this package, which will be "scheme://packageName/".
   */
  rootUrl(): string;

  /**
   * Return a pkg URL for the root of this package, which will be "scheme://packageName/".
   */
  static rootUrl(): string;

  /**
   * Return a meta URL for the root of the named package, which will be "meta://packageName/".
   */
  static rootMetaUrlFor(pkgName: string): string;

  /**
   * Return a pkg URL for the root of the named package, which will be "scheme://packageName/".
   */
  static rootUrlFor(pkgName: string): string;

  /**
   * Return a meta URL for this package's descriptor file, which will be "meta://pkgName/pkgName.c3pkg.json".
   */
  descriptorMetaUrl(): string;

  /**
   * Return a meta URL for this package's descriptor file, which will be "meta://pkgName/pkgName.c3pkg.json".
   */
  static descriptorMetaUrl(): string;

  /**
   * Return a pkg URL for this package's descriptor file, which will be "scheme://pkgName/pkgName.c3pkg.json".
   */
  declUrl(): string;

  /**
   * Return a pkg URL for this package's descriptor file, which will be "scheme://pkgName/pkgName.c3pkg.json".
   */
  static declUrl(): string;

  /**
   * Return a meta URL for the named package's descriptor file, which will be "meta://pkgName/pkgName.c3pkg.json".
   *
   * @see #descriptorFileName
   */
  static descriptorMetaUrlFor(pkgName: string): string;

  /**
   * Return a pkg URL for the named package's descriptor file, which will be "scheme://pkgName/pkgName.c3pkg.json".
   */
  static declUrlFor(pkgName: string): string;

  /**
   *  Return the full path for the named package's descriptor file, , which will be "/pkgName/pkgName.c3pkg.json".
   *
   * @see #descriptorFileName
   */
  static descriptorFullPathFor(pkgName: string): string;

  /**
   *  Return the full path for the named package's decl file, , which will be "/pkgName/pkgName.c3pkg.json".
   *
   * @see #declFileName
   */
  static declPathFor(pkgName: string): string;

  /**
   * Return this pkg descriptor file name (.c3pkg.json).
   */
  declFileName(): string;

  /**
   * Return this pkg descriptor file name (.c3pkg.json).
   */
  static declFileName(): string;

  /**
   * Return the path for the given package's dependency lock file
   */
  static lockPathFor(pkgName: string): string;

  /**
   * Return the path for the given package's list of resolved dependency versions
   */
  static resolvedVersionsPath(pkgName: string): string;

  /**
   * Return the subpath part for issue files, i.e. '/gen/cache/Pkg.Issue/'
   */
  static issueCachePath(): string;

  /**
   * return  pkg path of any issues to be written for a given pkg.path.
   *        e.g for `meta://pkgA/seed/Feature/testR%23id.json` this returns
   *                `meta://pkgA/gen/cache/Pkg.Issue/pkgA%2Fseed%2FFeature%2FtestR%2523id.json`
   */
  static issuePathForFile(pkgPath?: string | null): string;

  /**
   * Produce a visualization of the graph based on the specified type. This will be a directed graph with the types
   * that reference it as well as the types it references.
   */
  typeGraph(fromType: Type, spec?: Pkg.TypeGraphSpec | null): Content;

  /**
   * Produce a visualization of the graph based on the specified type. This will be a directed graph with the types
   * that reference it as well as the types it references.
   */
  static typeGraph(fromType: Type, spec?: Pkg.TypeGraphSpec | null): Content;
}

