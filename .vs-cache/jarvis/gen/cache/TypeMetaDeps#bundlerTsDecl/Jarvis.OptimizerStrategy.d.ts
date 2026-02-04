declare namespace Jarvis {
  export interface OptimizerStrategy {

    static readonly MANUAL: "MANUAL";

    static readonly SERIAL: "SERIAL";

    static readonly ROUND_ROBIN: "ROUND_ROBIN";

    static readonly LONGEST_PROCESSING_TIME_FIRST: "LONGEST_PROCESSING_TIME_FIRST";
  }
}

