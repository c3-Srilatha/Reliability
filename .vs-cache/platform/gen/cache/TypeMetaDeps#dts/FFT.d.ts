// TypeScript definitions for the C3 type FFT

/**
 * @remarks this represents a value passed to a method that expects an instance of FFT
 */
declare interface IFFT {
}

/**
 * @remarks this represents a made instance of FFT
 */
declare class FFT {

  static forward(input?: C3.Array<number | null>): C3.Array<number | null>;
}

