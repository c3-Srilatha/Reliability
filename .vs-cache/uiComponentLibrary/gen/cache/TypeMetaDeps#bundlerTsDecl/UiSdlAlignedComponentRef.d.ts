export interface UiSdlAlignedComponentRef<C> {

  readonly id: string;
  withId(id: string): UiSdlAlignedComponentRef;

  readonly alignment?: string | null;
  withAlignment(alignment: string | null): UiSdlAlignedComponentRef;
}

