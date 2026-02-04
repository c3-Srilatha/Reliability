// TypeScript definitions for the C3 type MetadataTransformer

/**
 * Metadata or seed data transformer.
 *
 * SRC type can be any type (or `anyof` several C3 types); Source files will be expected to be under
 * `seed/ ** /SRC/` folder.
 *
 * SRC can also be Type itself, in which case it will be called with each type modified by provisioning.
 *
 * DEST type can be any type including {@link Type}; if DEST is a {@link Type} then transformed .c3typ files will end
 * up under `src/transform/ ** /<type-name>.c3typ`; otherwise target files will be added as
 * `seed/transform/ ** /DEST/from_<metadata transformer type name>.json`.
 *
 * DEST can also be an array of a type, in which case zero or more results are expected to be produced from each SRC.
 *
 * DEST can be a metadata file, in which case the contents will be stored in the tag as though the file was provisioned.
 *
 * @remarks this represents a value passed to a method that expects an instance of MetadataTransformer
 */
declare interface IMetadataTransformer<SRC, DEST> {
}

/**
 * Metadata or seed data transformer.
 *
 * SRC type can be any type (or `anyof` several C3 types); Source files will be expected to be under
 * `seed/ ** /SRC/` folder.
 *
 * SRC can also be Type itself, in which case it will be called with each type modified by provisioning.
 *
 * DEST type can be any type including {@link Type}; if DEST is a {@link Type} then transformed .c3typ files will end
 * up under `src/transform/ ** /<type-name>.c3typ`; otherwise target files will be added as
 * `seed/transform/ ** /DEST/from_<metadata transformer type name>.json`.
 *
 * DEST can also be an array of a type, in which case zero or more results are expected to be produced from each SRC.
 *
 * DEST can be a metadata file, in which case the contents will be stored in the tag as though the file was provisioned.
 *
 * @remarks this represents a made instance of MetadataTransformer
 */
declare class MetadataTransformer<SRC, DEST> {

  /**
   * Metadata or seed data transformation logic. Result can be any number of instances of DEST type that will be
   * provisioned into a tag.
   */
  static transform(src?: C3.Array<SRC | null>): MetadataTransformResult<DEST>;

  /**
   * @return source type for this metadata transformer.
   */
  static sourceTypes(failIfAbstract?: boolean): C3.Array<Type | null>;

  /**
   * @return target type for this metadata transformer.
   */
  static targetType(failIfAbstract?: boolean): Type | null;

  /**
   * @return all metadata transformer types in the current tag.
   */
  static allTransformerTypes(): C3.Array<Type | null>;

  /**
   * @return all metadata transformer types for provided source type.
   */
  static allTransformerTypesForSourceType(sourceType: Type): C3.Array<Type | null>;

  /**
   * @return all metadata transformer types for provided target type.
   */
  static allTransformerTypesForTargetType(targetType: Type): C3.Array<Type | null>;

  /**
   * @return all source types across all metadata transformers with target types they transform into.
   */
  static allSourceTypesWithTargetTypes(): C3.Map<string | null, C3.Array<Type | null>>;
}

