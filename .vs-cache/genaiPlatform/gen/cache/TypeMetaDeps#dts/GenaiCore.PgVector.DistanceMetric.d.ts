// TypeScript definitions for the C3 type GenaiCore.PgVector.DistanceMetric

/**
 * Enumeration of supported distance metrics for pgvector.
 *
 * @remarks this represents a value passed to a method that expects an instance of GenaiCore.PgVector.DistanceMetric
 */
declare namespace GenaiCore.PgVector {
  export interface IDistanceMetric {

    /**
     * L2 represents the Euclidean distance. It measures the length of a segment that connects 2 points.
     */
    L2?: string;

    /**
     * Represents the Euclidean distance between 2 sparse vectors.
     */
    L2_SPARSE_VECTOR?: string;

    /**
     * Represents the Dot product between two vectors.
     */
    INNER_PRODUCT?: string;

    /**
     * Represents the Dot product between two sparse vectors.
     */
    INNER_PRODUCT_SPARSE_VECTOR?: string;

    /**
     * Cosine similarity uses the cosine of the angle between two sets of vectors to measure how similar they are.
     */
    COSINE?: string;

    /**
     * Cosine similarity uses the cosine of the angle between two sets of sparse vectors to measure how similar they are.
     */
    COSINE_SPARSE_VECTOR?: string;

    /**
     * The L1 distance, also known as the Manhattan distance or Taxicab distance, is a way to calculate the distance
     * between two vectors by adding up the absolute differences between their components.
     */
    L1?: string;

    /**
     * The L1 distance, also known as the Manhattan distance or Taxicab distance, is a way to calculate the distance
     * between two sparse vectors by adding up the absolute differences between their components.
     */
    L1_SPARSE_VECTOR?: string;

    /**
     * The Hamming distance between two vectors is the number of positions at which the corresponding elements of the
     * vectors differ.
     * This is compatible with only binary quantized vectors.
     */
    HAMMING?: string;

    /**
     * The Jaccard distance is a metric used to measure the dissimilarity between two sets.
     * It is based on the Jaccard Index, which measures the similarity between two sets.
     * The Jaccard distance is simply one minus the Jaccard index.
     */
    JACCARD?: string;
  }
}

/**
 * Enumeration of supported distance metrics for pgvector.
 *
 * @remarks this represents a made instance of GenaiCore.PgVector.DistanceMetric
 */
declare namespace GenaiCore.PgVector {
  export class DistanceMetric {

    /**
     * L2 represents the Euclidean distance. It measures the length of a segment that connects 2 points.
     */
    readonly L2?: string;
    withL2(L2: string | null): GenaiCore.PgVector.DistanceMetric;

    /**
     * Represents the Euclidean distance between 2 sparse vectors.
     */
    readonly L2_SPARSE_VECTOR?: string;
    withL2_SPARSE_VECTOR(L2_SPARSE_VECTOR: string | null): GenaiCore.PgVector.DistanceMetric;

    /**
     * Represents the Dot product between two vectors.
     */
    readonly INNER_PRODUCT?: string;
    withINNER_PRODUCT(INNER_PRODUCT: string | null): GenaiCore.PgVector.DistanceMetric;

    /**
     * Represents the Dot product between two sparse vectors.
     */
    readonly INNER_PRODUCT_SPARSE_VECTOR?: string;
    withINNER_PRODUCT_SPARSE_VECTOR(INNER_PRODUCT_SPARSE_VECTOR: string | null): GenaiCore.PgVector.DistanceMetric;

    /**
     * Cosine similarity uses the cosine of the angle between two sets of vectors to measure how similar they are.
     */
    readonly COSINE?: string;
    withCOSINE(COSINE: string | null): GenaiCore.PgVector.DistanceMetric;

    /**
     * Cosine similarity uses the cosine of the angle between two sets of sparse vectors to measure how similar they are.
     */
    readonly COSINE_SPARSE_VECTOR?: string;
    withCOSINE_SPARSE_VECTOR(COSINE_SPARSE_VECTOR: string | null): GenaiCore.PgVector.DistanceMetric;

    /**
     * The L1 distance, also known as the Manhattan distance or Taxicab distance, is a way to calculate the distance
     * between two vectors by adding up the absolute differences between their components.
     */
    readonly L1?: string;
    withL1(L1: string | null): GenaiCore.PgVector.DistanceMetric;

    /**
     * The L1 distance, also known as the Manhattan distance or Taxicab distance, is a way to calculate the distance
     * between two sparse vectors by adding up the absolute differences between their components.
     */
    readonly L1_SPARSE_VECTOR?: string;
    withL1_SPARSE_VECTOR(L1_SPARSE_VECTOR: string | null): GenaiCore.PgVector.DistanceMetric;

    /**
     * The Hamming distance between two vectors is the number of positions at which the corresponding elements of the
     * vectors differ.
     * This is compatible with only binary quantized vectors.
     */
    readonly HAMMING?: string;
    withHAMMING(HAMMING: string | null): GenaiCore.PgVector.DistanceMetric;

    /**
     * The Jaccard distance is a metric used to measure the dissimilarity between two sets.
     * It is based on the Jaccard Index, which measures the similarity between two sets.
     * The Jaccard distance is simply one minus the Jaccard index.
     */
    readonly JACCARD?: string;
    withJACCARD(JACCARD: string | null): GenaiCore.PgVector.DistanceMetric;

    /**
     * Translate the enum label (field name) to the value.
     * For simple enums (that don't define explicit values), the value is a string
     * that matches the label.
     * @param label the enum label
     * @return the associated value
     */
    static toValue(label: string, failIfInvalid?: boolean): string | null;

    /**
     * Translate the enum value to the label (field name).
     * @param value the enum value
     * @return the enum label
     */
    static toLabel(value: string, failIfInvalid?: boolean): string | null;

    /**
     * Get the index of the label in the enum.
     * @param label the enum label (field name)
     * @return index or -1 if not found
     */
    static labelIndex(label: string, failIfInvalid?: boolean): number;

    /**
     * Get the index of the value in the enum.
     * @param value the enum value
     * @return index or -1 if not found
     */
    static valueIndex(value: string, failIfInvalid?: boolean): number;

    /**
     * @return value type of values in this enum
     */
    static valueType(): ValueType;

    /**
     * Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
     * the field name (same as the labels).
     */
    static values(): Array_Type<string> | null;

    /**
     * Return an array of all enumeration labels. These are the same as the field names of the enum type.
     */
    static labels(): Array_Type<string> | null;

    /**
     * Return a map of all enumeration values to their labels.
     */
    static valueToLabels(): Map_Type<string, string> | null;

    /**
     * Return a map of all enumeration labels to their values.
     */
    static labelToValues(): Map_Type<string, string> | null;

    /**
     * Is value a valid value for this enum type?
     * @param value the enum value
     */
    static containsValue(value: string): boolean;

    /**
     * Calls provided action for each enum label.
     */
    static eachLabel(action?: λConsumer<string>): void;

    /**
     * Calls provided action for each enum value.
     */
    static eachValue(action?: λConsumer<string>): void;
  }
}


interface λConsumer<T> {
  (t: T): void
}
