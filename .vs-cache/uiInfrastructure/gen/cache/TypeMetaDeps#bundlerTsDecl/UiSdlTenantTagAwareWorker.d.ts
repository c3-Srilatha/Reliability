export interface UiSdlTenantTagAwareWorker {

  readonly id?: string | null;
  withId(id: string | null): UiSdlTenantTagAwareWorker;

  readonly worker?: any;
  withWorker(worker: any): UiSdlTenantTagAwareWorker;

  readonly status?: string | null;
  withStatus(status: string | null): UiSdlTenantTagAwareWorker;
}

