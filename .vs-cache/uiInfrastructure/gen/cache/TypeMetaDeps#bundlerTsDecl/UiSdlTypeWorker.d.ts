export interface UiSdlTypeWorker {

  readonly id?: string | null;
  withId(id: string | null): UiSdlTypeWorker;

  readonly worker?: any;
  withWorker(worker: any): UiSdlTypeWorker;

  readonly status?: string | null;
  withStatus(status: string | null): UiSdlTypeWorker;
}

