// TypeScript definitions for the C3 type Logger

/**
 * Utility for logging any arbitrary information and for publishing any arbitrary events.
 *
 * It is crucial that all logging is done in a consistently formatted manner instead of using string concatenation. This
 * way we can ensure that values get properly quoted as well as all logs are monitored to prevent accidental leakage of
 * secrets or PII or sensitive data.
 *
 * It is preferred to pass context object as argument and use fields and dot notation in the format instead of passing
 * fields as arguments.
 *
 * E.g. prefer:
 *
 * ```
 *   log().info("User ${username} logged in on ${now()}", user)
 * ```
 * to:
 *
 * ```
 *   log().info("User {} logged in on {}", user.username, now())
 * ```
 *
 * Note that C3 type implementation should always use default logger for that type [ accessible via `log()` ] instead of
 * creating a new logger.
 *
 * Logger also supports arbitrary event publishing. Only real difference between event and and log is that if event has
 * no listeners it will immediately be discarded while log entries will be persisted as long as corresponding log
 * level is enabled.
 *
 * @remarks this represents a value passed to a method that expects an instance of Logger
 */
declare interface ILogger {
}

/**
 * Utility for logging any arbitrary information and for publishing any arbitrary events.
 *
 * It is crucial that all logging is done in a consistently formatted manner instead of using string concatenation. This
 * way we can ensure that values get properly quoted as well as all logs are monitored to prevent accidental leakage of
 * secrets or PII or sensitive data.
 *
 * It is preferred to pass context object as argument and use fields and dot notation in the format instead of passing
 * fields as arguments.
 *
 * E.g. prefer:
 *
 * ```
 *   log().info("User ${username} logged in on ${now()}", user)
 * ```
 * to:
 *
 * ```
 *   log().info("User {} logged in on {}", user.username, now())
 * ```
 *
 * Note that C3 type implementation should always use default logger for that type [ accessible via `log()` ] instead of
 * creating a new logger.
 *
 * Logger also supports arbitrary event publishing. Only real difference between event and and log is that if event has
 * no listeners it will immediately be discarded while log entries will be persisted as long as corresponding log
 * level is enabled.
 *
 * @remarks this represents a made instance of Logger
 */
declare class Logger {

  /**
   * Build the canonical string representation of this instance. This must be implemented to provide serialization.
   *
   * If the object has no content, and fromString would properly reproduce it from a null value, toString may return
   * null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
   *
   * @see #fromString
   */
  toString(): string | null;

  /**
   * Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
   * provide deserialization.
   *
   * fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
   * of called-on type, but perhaps not the same type.
   *
   * E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
   *
   * @see #toString
   */
  static fromString(s: string | null): Logger | null;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): Logger | null;

  /**
   * @return name of this logger
   */
  name(): string;

  /**
   * @return true if given event name has any listeners
   */
  hasListeners(event: string): boolean;

  /**
   * @return true if given event type has any listeners
   */
  hasListeners(event: Type): boolean;

  /**
   * Fires arbitrary event with a given name. Note that if event name matches C3 type it needs to mixin Event and
   * keys in the event data need to match fields from that type. You may consider using other overload in that case.
   */
  event(event: string, data: λConsumer<MapBuilder<string | null, any>>): void;

  /**
   * Fires event of a predefined type.
   *
   * @see Event.fire
   */
  event(event: Type, data: λConsumer<ObjBuilder<E>>): void;

  /**
   * @return true if ERROR level logging is enabled
   */
  isErrorEnabled(): boolean;

  /**
   * Logs message at ERROR level using provided Obj as a scope for the format template.
   */
  error(format: string, scope: Obj, err?: C3.Error | null): void;

  /**
   * Logs message at ERROR level using provided MapBuilder for building scope for the format template.
   */
  error(format: string, scope: λConsumer<MapBuilder<string | null, any>>, err?: C3.Error | null): void;

  /**
   * Logs message at ERROR level using positional bindings. Note that if error shows up at any position in the provided
   * args it will be removed from bindings and will be formatted separately.
   */
  error(format: string, ...args: any[]): void;

  /**
   * Logs message at ERROR level using provided message and Java exception.
   */
  error(msg: string, ex: any): void;

  /**
   * Logs Java exception at ERROR level.
   */
  error(ex: any): void;

  /**
   * @return true if WARN level logging is enabled
   */
  isWarnEnabled(): boolean;

  /**
   * Logs message at WARN level using provided Obj as a scope for the format template.
   */
  warn(format: string, scope: Obj, err?: C3.Error | null): void;

  /**
   * Logs message at WARN level using provided MapBuilder for building scope for the format template.
   */
  warn(format: string, scope: λConsumer<MapBuilder<string | null, any>>, err?: C3.Error | null): void;

  /**
   * Logs message at WARN level using positional bindings. Note that if error shows up at any position in the provided
   * args it will be removed from bindings and will be formatted separately.
   */
  warn(format: string, ...args: any[]): void;

  /**
   * Logs message at WARN level using provided message and Java exception.
   */
  warn(msg: string, ex: any): void;

  /**
   * Logs Java exception at WARN level.
   */
  warn(ex: any): void;

  /**
   * @return true if INFO level logging is enabled
   */
  isInfoEnabled(): boolean;

  /**
   * Logs message at INFO level using provided Obj as a scope for the format template.
   */
  info(format: string, scope: Obj, err?: C3.Error | null): void;

  /**
   * Logs message at INFO level using provided MapBuilder for building scope for the format template.
   */
  info(format: string, scope: λConsumer<MapBuilder<string | null, any>>, err?: C3.Error | null): void;

  /**
   * Logs message at INFO level using positional bindings. Note that if error shows up at any position in the provided
   * args it will be removed from bindings and will be formatted separately.
   */
  info(format: string, ...args: any[]): void;

  /**
   * Logs the time it took to execute the provided supplier.
   *
   * @see {@link #info(string, any ...)}
   */
  timeAndInfo(supplier: λSupplier<T | null>, format: string, ...args: any[]): T | null;

  /**
   * Logs the time it took to execute the provided function.
   *
   * @see {@link #info(string, any ...)}
   */
  timeAndInfo(val?: T | null, func: λFunction<T | null, R | null>, format: string, ...args: any[]): R | null;

  /**
   * Logs the time it took to execute the provided runnable.
   *
   * @see {@link #info(string, any ...)}
   */
  timeAndInfo(runnable: λNullConsumer, format: string, ...args: any[]): void;

  /**
   * Logs the time it took to execute the provided consumer.
   *
   * @see {@link #info(string, any ...)}
   */
  timeAndInfo(val?: T | null, consumer: λConsumer<T | null>, format: string, ...args: any[]): void;

  /**
   * @return true if DEBUG level logging is enabled
   */
  isDebugEnabled(): boolean;

  /**
   * Logs message at DEBUG level using provided Obj as a scope for the format template.
   */
  debug(format: string, scope: Obj, err?: C3.Error | null): void;

  /**
   * Logs message at DEBUG level using provided MapBuilder for building scope for the format template.
   */
  debug(format: string, scope: λConsumer<MapBuilder<string | null, any>>, err?: C3.Error | null): void;

  /**
   * Logs message at DEBUG level using positional bindings. Note that if error shows up at any position in the provided
   * args it will be removed from bindings and will be formatted separately.
   */
  debug(format: string, ...args: any[]): void;

  /**
   * @return true if TRACE level logging is enabled
   */
  isTraceEnabled(): boolean;

  /**
   * Logs message at TRACE level using provided Obj as a scope for the format template.
   */
  trace(format: string, scope: Obj, err?: C3.Error | null): void;

  /**
   * Logs message at TRACE level using provided MapBuilder for building scope for the format template.
   */
  trace(format: string, scope: λConsumer<MapBuilder<string | null, any>>, err?: C3.Error | null): void;

  /**
   * Logs message at TRACE level using positional bindings. Note that if error shows up at any position in the provided
   * args it will be removed from bindings and will be formatted separately.
   */
  trace(format: string, ...args: any[]): void;

  /**
   * Logs message at a given {@link Logger.Level} using positional bindings. Note that if error shows up at any position in the provided
   * args it will be removed from bindings and will be formatted separately.
   */
  log(level: string, format: string, ...args: any[]): void;

  /**
   * Sets log level for this logger
   */
  setLogLevel(level: string, timeout?: string | null): void;

  /**
   * Sets additive for this logger
   * Each logging event for a given logger will be forwarded to all the appenders in that logger
   *     as well as the appenders higher in the hierarchy. So if your loggers has Logger.AppenderKind.ServerLog and
   *     the root logger has Logger.AppenderKind.Console then all logging events will print at least to console and to the file.
   */
  setAdditive(additive: boolean): void;

  /**
   * Adds an appender for this logger, which will ensure that the relevant log is also going to the configured logger.
   * @see {@link Logger.AppenderKind}
   *
   * If no Logger.Level it will be set to Logger.Level.Error
   */
  addAppender(appender: string, level?: string | null): void;

  /**
   *  Sets up logger for the provided type if there exists a {@link Logger.Config}
   * @param typeName
   *           Type's logger that will be setup
   */
  setupLogger(typeName: string): void;

  /**
   * Sets up logger for the provided config
   * @param config
   *           {@link Logger.Config} to set
   */
  setupLogger(config: Logger.Config): void;

  /**
   * Start appending log entries to the specified file, in addition to the normal location. This may be called
   * multiple times and each log entry is sent to all destinations.
   *
   * Note that this will always start with the specified file, but multiple files may be created (one per flush).
   * The files after the first may have a number appended before the final extension. For example: starting with
   * "gs://bucket/directory/stuff.log" will create that file, but if flushing is required before #stopForwarding is
   * called, the next flush will create "gs://bucket/directory/stuff.2.log" and so on.
   *
   * @param file the file URL to write to
   * @param level the lowest log level to forward (errors only by default)
   *
   * @see #stopForwarding
   * @see #addAppender
   */
  static startForwarding(file: string, level?: string | null): void;

  /**
   * Stop appending log entries to the specified file, as started by #startForwarding. This will flush pending
   * entries.
   *
   * @param file the file URL we are writing to
   * @param failIfUnknown if true, throw an error if we aren't currently forwarding logs to this file
   */
  static stopForwarding(file: string, failIfUnknown?: boolean): void;

  /**
   * Flush log entries to the specified file, as started by #startForwarding. Calling this is only necessary if there
   * is a pause and #stopForwarding is not called.
   *
   * @param file the file URL we are writing to
   * @param failIfUnknown if true, throw an error if we aren't currently forwarding logs to this file
   */
  static flushForwarding(file: string, failIfUnknown?: boolean): void;

  /**
   * @return the file URLs for all active calls to #startForwarding.
   */
  static listForwarding(): C3.Array<string>;

  /**
   * Constructor of a temporary logger. Note that this method is primarily for ad-hoc logging e.g. from console.
   * Application code should always use default logger for parent type [ accessible via `log()` ] instead of this
   * method.
   */
  static for(name: string): Logger;

  static for(klass: any): Logger;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λConsumer<T> {
  (t: T): void
}

interface λSupplier<R> {
  (): R
}

interface λNullConsumer {
  (): void
}
