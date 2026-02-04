// TypeScript definitions for the C3 type HadoopConfigFactory

/**
 * Factory to create an Apache hadoop Configuration object.
 *
 * @remarks this represents a value passed to a method that expects an instance of HadoopConfigFactory
 */
declare interface IHadoopConfigFactory<S> {
}

/**
 * Factory to create an Apache hadoop Configuration object.
 *
 * @remarks this represents a made instance of HadoopConfigFactory
 */
declare class HadoopConfigFactory<S> {

  static hadoopConfig(spec?: S | null): any;
}

