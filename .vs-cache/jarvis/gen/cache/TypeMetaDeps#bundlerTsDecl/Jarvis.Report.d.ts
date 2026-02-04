declare namespace Jarvis {
  export interface Report {

    readonly id: string;
    withId(id: string): Jarvis.Report;

    readonly data?: any | null;
    withData(data: any | null): Jarvis.Report;

    readonly content?: any | null;
    withContent(content: any | null): Jarvis.Report;

    readonly dataType?: string | null;
    withDataType(dataType: string | null): Jarvis.Report;

    readonly category?: string | null;
    withCategory(category: string | null): Jarvis.Report;

    readonly subcategory?: string | null;
    withSubcategory(subcategory: string | null): Jarvis.Report;

    readonly metricData?: C3.Map<string | null, number | null>;
    withMetricData(metricData: C3.Map<string | null, number | null> | {[key: string | null]: number | null}): Jarvis.Report;

    readonly jarvisBuild?: Jarvis.Build | null;
    withJarvisBuild(jarvisBuild: IJarvis.Build | null): Jarvis.Report;

    readonly step?: Jarvis.Step | null;
    withStep(step: IJarvis.Step | null): Jarvis.Report;

    readonly parent?: Jarvis.Report | null;
    withParent(parent: IJarvis.Report | null): Jarvis.Report;

    readonly amend?: λBiFunction<Jarvis.Report | null, Jarvis.Report | null, Jarvis.Report | null> | null;
    withAmend(amend: λBiFunction<Jarvis.Report | null, Jarvis.Report | null, IJarvis.Report | null> | null): Jarvis.Report;

    readonly updates?: C3.Array<Jarvis.Report | null>;
    withUpdates(updates: C3.Array<Jarvis.Report | null> | Array<IJarvis.Report | null>): Jarvis.Report;
  }
}


interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}
