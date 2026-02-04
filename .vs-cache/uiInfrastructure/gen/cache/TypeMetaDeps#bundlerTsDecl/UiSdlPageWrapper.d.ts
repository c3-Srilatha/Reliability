export interface UiSdlPageWrapper {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlPageWrapper;

  readonly id: string;
  withId(id: string): UiSdlPageWrapper;

  readonly containers?: C3.Array<UiSdlComponentRef<any> | null>;
  withContainers(containers: C3.Array<UiSdlComponentRef<any> | null> | Array<IUiSdlComponentRef<any> | null>): UiSdlPageWrapper;
}

