// TypeScript definitions for the C3 type HtmlRenderable

/**
 * Any object can implement a renderer within the Console or UI by extending the {@link HtmlRenderable} interface and
 * implementing the {@link HtmlRenderable#renderer renderer} method.
 *
 * @see HtmlRenderer
 *
 * @remarks this represents a value passed to a method that expects an instance of HtmlRenderable
 */
declare interface IHtmlRenderable {
}

/**
 * Any object can implement a renderer within the Console or UI by extending the {@link HtmlRenderable} interface and
 * implementing the {@link HtmlRenderable#renderer renderer} method.
 *
 * @see HtmlRenderer
 *
 * @remarks this represents a made instance of HtmlRenderable
 */
declare class HtmlRenderable {

  /**
   * Return an instance of an {@link HtmlRenderer} set up to render this instance. If there is no capable renderer,
   * null may be returned. The implementation must be available within the browser (typically `js-client`).
   */
  renderer(): HtmlRenderer | null;
}

