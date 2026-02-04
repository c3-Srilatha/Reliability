export interface MetadataFileChild {

  readonly id: string;
  withId(id: string): MetadataFileChild;

  readonly name: string;
  withName(name: string): MetadataFileChild;
}

