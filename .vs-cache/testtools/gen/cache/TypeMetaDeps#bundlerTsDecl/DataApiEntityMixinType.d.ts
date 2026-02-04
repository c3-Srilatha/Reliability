export interface DataApiEntityMixinType {

  readonly mixinIntField?: number | null;
  withMixinIntField(mixinIntField: number | null): DataApiEntityMixinType;
}

