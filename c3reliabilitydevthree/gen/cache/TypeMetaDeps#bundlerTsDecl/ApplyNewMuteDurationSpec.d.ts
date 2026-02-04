export interface ApplyNewMuteDurationSpec {

  readonly objs?: C3.Array<ReliabilityAssetToModelRelation | null | Sensor | null | null>;
  withObjs(objs: C3.Array<ReliabilityAssetToModelRelation | null | Sensor | null | null> | Array<IReliabilityAssetToModelRelation | null | ISensor | null | null>): ApplyNewMuteDurationSpec;

  readonly updateAll: boolean;
  withUpdateAll(updateAll: boolean): ApplyNewMuteDurationSpec;

  readonly newMuteDuration: DateTime;
  withNewMuteDuration(newMuteDuration: DateTime | Date | string): ApplyNewMuteDurationSpec;

  readonly targetTimezone: string;
  withTargetTimezone(targetTimezone: string): ApplyNewMuteDurationSpec;
}

