// TypeScript definitions for the C3 type ShannonEntropy

/**
 * Methods for computing Shannon's entropy value.
 * Entropy is a basic quantity in information theory associated to any random variable,
 * which can be interpreted as the average level of "information", "surprise", or "uncertainty" inherent in
 * the variable's possible outcomes.
 *
 * More details at: https://en.wikipedia.org/wiki/Entropy_(information_theory)
 *
 * @remarks this represents a value passed to a method that expects an instance of ShannonEntropy
 */
declare interface IShannonEntropy {
}

/**
 * Methods for computing Shannon's entropy value.
 * Entropy is a basic quantity in information theory associated to any random variable,
 * which can be interpreted as the average level of "information", "surprise", or "uncertainty" inherent in
 * the variable's possible outcomes.
 *
 * More details at: https://en.wikipedia.org/wiki/Entropy_(information_theory)
 *
 * @remarks this represents a made instance of ShannonEntropy
 */
declare class ShannonEntropy {

  /**
   * Compute Shannon's entropy for a string
   */
  static forString(input: string): number | null;
}

