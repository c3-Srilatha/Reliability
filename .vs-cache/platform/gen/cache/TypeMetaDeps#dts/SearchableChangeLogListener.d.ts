// TypeScript definitions for the C3 type SearchableChangeLogListener

/**
 * ChangeLogListener for search store
 *
 * @remarks this represents a value passed to a method that expects an instance of SearchableChangeLogListener
 */
declare interface ISearchableChangeLogListener {
}

/**
 * ChangeLogListener for search store
 *
 * @remarks this represents a made instance of SearchableChangeLogListener
 */
declare class SearchableChangeLogListener {

  /**
   * Called during invalidation to determine if a set of changes requires logging into the {@link ChangeLogQueue}.
   *
   * @param typeRef
   *        Type for the data changes.
   * @param changes
   *        List of changed entries.  For collection operations (specified in {@link sourceOperInfo}) this will be
   *        empty.
   *
   * @param sourceOperInfo
   *        Various information about the source operation that caused the changes.
   *
   * @return true if the set of changes require logging into the {@link ChangeLogQueue}.
   */
  static shouldLog(typeRef: Type, changes?: C3.Array<DbEditList | null>, sourceOperInfo: DbSourceOperInfo): boolean;

  /**
   * Called during invalidation to compute the info to put in the change log entries for a set of changes that require
   * logging into the {@link ChangeLogQueue}.
   *
   * @param typeRef
   *        Type for the data changes.
   * @param changes
   *        List of changed entries.  For collection operations (specified in {@link sourceOperInfo}) this will be
   *        empty.
   *
   * @param sourceOperInfo
   *        Various information about the source operation that caused the changes.
   *
   * @return a map of info to put in the change log entries keyed by the source Obj id.  Note that the targetTypeId
   *         in the actual change log entry will be that of the incoming source.  Every entry in the map will be used
   *         to generate a single ChangeLogQueue entry.
   */
  static logInfo(typeRef: Type, changes?: C3.Array<DbEditList | null>, sourceOperInfo: DbSourceOperInfo): C3.Map<string | null, SearchableChangeLogInfo | null>;

  /**
   * Called during ChangeLogQueueCompute to process entries that were invalidated by the listener type.
   *
   * @param typeRef
   *        TypeRef of the original changes the log entry was for.
   * @param logs
   *        Log info to process.  Each entry is an arry of info for changes logged for the same obj/id that is the key
   *        for that entry
   */
  static process(typeRef: Type, logs: C3.Map<string | null, C3.Array<SearchableChangeLogInfo | null>> | null): void;

  /**
   * Merges 2 potentially mergeable queue entries.
   *
   * @param entry1
   *        First entry to merge.
   * @param entry2
   *        Second entry to merge.
   *
   * @return An array of entries.  If they were merged, the returned array size will be 1, otherwise it will be 2.
   */
  static mergeEntries(entry1: ChangeLogQueueEntry, entry2: ChangeLogQueueEntry): C3.Array<ChangeLogQueueEntry | null>;
}

