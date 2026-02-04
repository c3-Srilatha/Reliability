// TypeScript definitions for the C3 type PageLoadTimeMeasurable

/**
 * An abstract interface representing any page that can be opened for measuring load time
 *
 * @remarks this represents a value passed to a method that expects an instance of PageLoadTimeMeasurable
 */
declare interface IPageLoadTimeMeasurable {
}

/**
 * An abstract interface representing any page that can be opened for measuring load time
 *
 * @remarks this represents a made instance of PageLoadTimeMeasurable
 */
declare class PageLoadTimeMeasurable {

  /**
   * Opens the page without any unnecessary wait logic so that its load time can be measured
   */
  openForMeasuringLoadTime(): void;
}

