// TypeScript definitions for the C3 type AwsAthena

/**
 * Any type mixes AwsAthena meaning the data source of the type comes from Aws S3 and corresponding
 * {@link AwsAthenaDatabase database} and {@link AwsAthenaTable table} is created for the type.
 *
 * @remarks this represents a value passed to a method that expects an instance of AwsAthena
 */
declare interface IAwsAthena<T> {
}

/**
 * Any type mixes AwsAthena meaning the data source of the type comes from Aws S3 and corresponding
 * {@link AwsAthenaDatabase database} and {@link AwsAthenaTable table} is created for the type.
 *
 * @remarks this represents a made instance of AwsAthena
 */
declare class AwsAthena<T> {

  /**
   * Fetches multiple obj instances and return as a stream with given specification.
   */
  static fetch(spec?: FetchStreamSpec | null): Stream<T | null>;

  /**
   * Create corresponding {@link AwsAthenaDatabase database} and {@link AwsAthenaTable table} on Athena for the mixin type.
   * {@link AwsAthenaDatabase database} will not be created if exists already. The created name of the
   * {@link AwsAthenaTable table} will use the schema name of the mixin type. The following form shows for detail about
   * created {@link AwsAthenaTable table}.
   *
   * |                property                |                          value                          |
   * |----------------------------------------|---------------------------------------------------------|
   * | {@link AwsAthenaTable#name}            |               schema name of the mixin type             |
   * | {@link AwsAthenaTable#database} name   |                  c3__<pod>_<tenant>_<tag>               |
   * | {@link AwsAthenaTable#sourceS3Url}     | s3://c3--<pod>-<tenant>-<tag>/athena/source/<type name>/|
   * | {@link AwsAthenaTable#sourceEncrypted} |                            false                        |
   * | {@link AwsAthenaTable#resultS3Url}     | s3://c3--<pod>-<tenant>-<tag>/athena/stage/<type name>/ |
   * | {@link AwsAthenaTable#partition}       |         undefined, currently not supported              |
   * | {@link AwsAthenaTable#dataFormat}      |                    {@link ContentType#csv}              |
   * | {@link AwsAthenaTable#terminators}     |   ',' for field, 'undefined' for both array and map key |
   */
  static upsertCollection(): void;
}

