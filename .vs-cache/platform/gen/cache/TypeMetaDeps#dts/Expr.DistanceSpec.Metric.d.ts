// TypeScript definitions for the C3 type Expr.DistanceSpec.Metric

/**
 * Enum for distance metrics.
 *
 * @remarks this represents a value passed to a method that expects an instance of Expr.DistanceSpec.Metric
 */
declare namespace Expr.DistanceSpec {
  export interface IMetric {

    /**
     * L2 represents the Euclidean distance. It measures the length of a segment that connects 2 points.
     */
    readonly L2: "L2";

    /**
     * Represents the Euclidean distance between 2 sparse vectors.
     */
    readonly L2_SPARSE_VECTOR: "L2_SPARSE_VECTOR";

    /**
     * Represents the Dot product between two vectors.
     */
    readonly INNER_PRODUCT: "INNER_PRODUCT";

    /**
     * Represents the Dot product between two sparse vectors.
     */
    readonly INNER_PRODUCT_SPARSE_VECTOR: "INNER_PRODUCT_SPARSE_VECTOR";

    /**
     * Cosine similarity uses the cosine of the angle between two sets of vectors to measure how similar they are.
     */
    readonly COSINE: "COSINE";

    /**
     * Cosine similarity uses the cosine of the angle between two sets of sparse vectors to measure how similar they are.
     */
    readonly COSINE_SPARSE_VECTOR: "COSINE_SPARSE_VECTOR";

    /**
     * The L1 distance, also known as the Manhattan distance or Taxicab distance, is a way to calculate the distance
     * between two vectors by adding up the absolute differences between their components.
     */
    readonly L1: "L1";

    /**
     * The L1 distance, also known as the Manhattan distance or Taxicab distance, is a way to calculate the distance
     * between two sparse vectors by adding up the absolute differences between their components.
     */
    readonly L1_SPARSE_VECTOR: "L1_SPARSE_VECTOR";

    /**
     * The Hamming distance between two vectors is the number of positions at which the corresponding elements of the
     * vectors differ.
     * This is compatible with only binary quantized vectors.
     */
    readonly HAMMING: "HAMMING";

    /**
     * The Jaccard distance is a metric used to measure the dissimilarity between two sets.
     * It is based on the Jaccard Index, which measures the similarity between two sets.
     * The Jaccard distance is simply one minus the Jaccard index.
     */
    readonly JACCARD: "JACCARD";
  }
}

/**
 * Enum for distance metrics.
 *
 * @remarks this represents a made instance of Expr.DistanceSpec.Metric
 */
declare namespace Expr.DistanceSpec {
  export class Metric {

    /**
     * L2 represents the Euclidean distance. It measures the length of a segment that connects 2 points.
     */
    static readonly L2: "L2";

    /**
     * Represents the Euclidean distance between 2 sparse vectors.
     */
    static readonly L2_SPARSE_VECTOR: "L2_SPARSE_VECTOR";

    /**
     * Represents the Dot product between two vectors.
     */
    static readonly INNER_PRODUCT: "INNER_PRODUCT";

    /**
     * Represents the Dot product between two sparse vectors.
     */
    static readonly INNER_PRODUCT_SPARSE_VECTOR: "INNER_PRODUCT_SPARSE_VECTOR";

    /**
     * Cosine similarity uses the cosine of the angle between two sets of vectors to measure how similar they are.
     */
    static readonly COSINE: "COSINE";

    /**
     * Cosine similarity uses the cosine of the angle between two sets of sparse vectors to measure how similar they are.
     */
    static readonly COSINE_SPARSE_VECTOR: "COSINE_SPARSE_VECTOR";

    /**
     * The L1 distance, also known as the Manhattan distance or Taxicab distance, is a way to calculate the distance
     * between two vectors by adding up the absolute differences between their components.
     */
    static readonly L1: "L1";

    /**
     * The L1 distance, also known as the Manhattan distance or Taxicab distance, is a way to calculate the distance
     * between two sparse vectors by adding up the absolute differences between their components.
     */
    static readonly L1_SPARSE_VECTOR: "L1_SPARSE_VECTOR";

    /**
     * The Hamming distance between two vectors is the number of positions at which the corresponding elements of the
     * vectors differ.
     * This is compatible with only binary quantized vectors.
     */
    static readonly HAMMING: "HAMMING";

    /**
     * The Jaccard distance is a metric used to measure the dissimilarity between two sets.
     * It is based on the Jaccard Index, which measures the similarity between two sets.
     * The Jaccard distance is simply one minus the Jaccard index.
     */
    static readonly JACCARD: "JACCARD";

    /**
     * Translate the enum label (field name) to the value.
     * For simple enums (that don't define explicit values), the value is a string
     * that matches the label.
     * @param label the enum label
     * @return the associated value
     */
    static toValue(label: string | null, failIfInvalid?: boolean): string | null;

    /**
     * Translate the enum value to the label (field name).
     * @param value the enum value
     * @return the enum label
     */
    static toLabel(value: string | null, failIfInvalid?: boolean): string | null;

    /**
     * Get the index of the label in the enum.
     * @param label the enum label (field name)
     * @return index or -1 if not found
     */
    static labelIndex(label: string | null, failIfInvalid?: boolean): number;

    /**
     * Get the index of the value in the enum.
     * @param value the enum value
     * @return index or -1 if not found
     */
    static valueIndex(value: string | null, failIfInvalid?: boolean): number;

    /**
     * @return value type of values in this enum
     */
    static valueType(): ValueType;

    /**
     * Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
     * the field name (same as the labels).
     */
    static values(): C3.Array<string | null>;

    /**
     * Return an array of all enumeration labels. These are the same as the field names of the enum type.
     */
    static labels(): C3.Array<string | null>;

    /**
     * Return a map of all enumeration values to their labels.
     */
    static valueToLabels(): C3.Map<string | null, string | null>;

    /**
     * Return a map of all enumeration labels to their values.
     */
    static labelToValues(): C3.Map<string | null, string | null>;

    /**
     * Is value a valid value for this enum type?
     * @param value the enum value
     */
    static containsValue(value: string): boolean;

    /**
     * Calls provided action for each enum label.
     */
    static eachLabel(action?: λConsumer<string> | null): void;

    /**
     * Calls provided action for each enum value.
     */
    static eachValue(action?: λConsumer<string> | null): void;
  }
}


interface λConsumer<T> {
  (t: T): void
}
