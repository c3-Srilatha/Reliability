// TypeScript definitions for the C3 type EventStream

/**
 * Stream of events. It is parameterized by the event type.
 *
 * @remarks this represents a value passed to a method that expects an instance of EventStream
 */
declare interface IEventStream<E> {

  /**
   * Callback lambda on close of this stream
   */
  onClose?: λConsumer<EventStream<E> | null> | null;
}


interface λConsumer<T> {
  (t: T): void
}
/**
 * Stream of events. It is parameterized by the event type.
 *
 * @remarks this represents a made instance of EventStream
 */
declare class EventStream<E> {

  /**
   * Callback lambda on close of this stream
   */
  onClose?: λConsumer<EventStream<E> | null> | null;
  withOnClose(onClose: λConsumer<EventStream<E> | null> | null): EventStream;

  /**
   * Deallocates any potential resource and calls onClose if provided.
   */
  close(): void;

  /**
   * Deallocates any potential resource.
   */
  doClose(): void;

  /**
   * @returns true if this Closable resource has been closed
   */
  closed(): boolean;

  /**
   * Convert the internal object representation to a JSON object. By default (i.e. with no arguments) the result will
   * contain no type information.
   *
   * @see #toTypedJson
   * @see serdeser.c3doc
   * @see JsonType
   */
  toJson(): any;

  /**
   * Convert the internal object representation to a _typed_ JSON object.
   * @param omitTopLevelType
   *        Whether to leave out `type: {{ type of this serializable instance }}` as the **first** key-value pair in
   *        the outer level of the produced json.
   * @param runtime
   *        If provided, then any special serialization logic required for the {@link ImplLanguage.Runtime} will be
   *        performed. **NOTE** This argument is ignored if `typed` is not `true`. @see Ann.Ser
   *
   *
   * @return JSON object representation
   *
   * @see #fromJson
   * @see #toJson
   * @see serdeser.c3doc
   * @see JsonType
   */
  toTypedJson(omitTopLevelType?: boolean, actionRequirement?: string | null): any;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJson is be called on the type be deserialized and must reconstruct an object of the appropriate type (which may
   * be  a type that mixes in the type on which it is called). This means that the resulting object's type will be isA
   * the called-on type, but perhaps not identical. In particular, `fromJson` works for any actual type and will return
   * an instance of the correct type.
   *
   * @see #toJson
   */
  static fromJson(json: any | null): EventStream<E> | null;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJsonString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromJsonString` works for any actual
   * type and will return an instance of the correct type.
   *
   * @see #toJsonString
   */
  static fromJsonString(json: string | null): EventStream<E> | null;

  /**
   * Load the XML-based representation and reconstruct the corresponding object.
   *
   * fromXmlString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual
   * type and will return an instance of the correct type.
   *
   * @see #toXmlString
   */
  static fromXmlString(xml: string | null): EventStream<E> | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): EventStream<E> | null;

  /**
   * Construct an instance with initial state.
   */
  static make(): EventStream<E>;

  /**
   * Unique id of this even stream.
   */
  get id(): string | null;

  /**
   * Type of the events in this stream.
   */
  eventType(): ValueType | null;

  /**
   * Register a callback for the next value from this event stream.
   */
  onNext(callback: λConsumer<E | null>): void;

  /**
   * Creates a new event stream also returning push stream for publishing events.
   */
  static create(eventType: ValueType): Pair<EventStream<T> | null, EventStream.PushStream<T> | null> | null;
}


interface λConsumer<T> {
  (t: T): void
}
