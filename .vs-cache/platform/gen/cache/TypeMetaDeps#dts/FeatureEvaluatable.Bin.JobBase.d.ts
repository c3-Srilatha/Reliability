// TypeScript definitions for the C3 type FeatureEvaluatable.Bin.JobBase

/**
 * This type provides the common functions to be used in feature metastore related jobs, including {@link Feature.Store.MaterializationJob}
 * and {@link Feature.Set.CreateSnapshotJob}.
 *
 * @remarks this represents a value passed to a method that expects an instance of FeatureEvaluatable.Bin.JobBase
 */
declare namespace FeatureEvaluatable.Bin {
  export interface IJobBase {
  }
}

/**
 * This type provides the common functions to be used in feature metastore related jobs, including {@link Feature.Store.MaterializationJob}
 * and {@link Feature.Set.CreateSnapshotJob}.
 *
 * @remarks this represents a made instance of FeatureEvaluatable.Bin.JobBase
 */
declare namespace FeatureEvaluatable.Bin {
  export class JobBase {

    /**
     * This function is called to intercept the {@link MapReduce#scanTargetType} to increase the probability of subjects belonging to
     * the same bin ending up in the same map task / batch.
     * @param objs
     *        source subjects to be processed
     * @param subjectType
     *        Persistable subjectType of the subjects
     * @param strategy
     *        The strategy to be used for the binning of the subjects
     * @return
     *        If feature metastore is used, return a new subjects stream that will be iterated in batches determined by the input binning strategy,
     *        otherwise return the original subjects stream.
     */
    static doScanTargetType(objs: Stream<Obj | null>, subjectType: Type, strategy: FeatureEvaluatable.Bin.Strategy): Stream<Obj | null>;
  }
}

