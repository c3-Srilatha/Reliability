export interface StudioHeaderComponentRef {

  readonly id: string;
  withId(id: string): StudioHeaderComponentRef;

  readonly rightDivider?: boolean;
  withRightDivider(rightDivider: boolean): StudioHeaderComponentRef;
}

