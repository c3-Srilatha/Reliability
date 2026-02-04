// TypeScript definitions for the C3 type Str

/**
 * Helper class for string values, implemented on `java.util.String` for Java, `String` for JavaScript and `str`
 * for Python.
 *
 * @remarks this represents a value passed to a method that expects an instance of Str
 */
declare interface IStr {

  UTF8?: string | null;
}

/**
 * Helper class for string values, implemented on `java.util.String` for Java, `String` for JavaScript and `str`
 * for Python.
 *
 * @remarks this represents a made instance of Str
 */
declare class Str {

  readonly UTF8?: string | null;
  withUTF8(UTF8: string | null): Str;

  static myType(): Type | null;

  static myType(pkg: Pkg | null): Type | null;

  /**
   * Convert a CamelCase string to one whose words, defined by upper-case letters, to one separated by the specified
   * character.
   */
  static camelCaseToCharSeparated(input: string | null, separator: number): string | null;

  /**
   * Convert a CamelCase string to one whose words, defined by upper-case letters, to one separated by dashes.
   */
  static camelCaseToDashSeparated(input: string | null): string | null;

  /**
   * Convert a CamelCase string to one whose words, defined by upper-case letters, to one separated by spaces.
   */
  static camelCaseToSpaceSeparated(input: string | null): string | null;

  /**
   * Converts string to identifier
   *
   * @param str
   * @return identifier
   */
  static toIdentifier(str: string | null): string | null;

  /**
   * Converts string to identifier and makes it more human readable
   */
  static toIdentifier(str: string | null, separator: string | null): string | null;

  /**
   * @return capitalized version of the original string.
   */
  static capitalize(s: string | null): string | null;

  /**
   * Convert a string separated into words with the specified character into a camelCase identifier.
   * Note that the first word is not capitalized.
   */
  static charSeparatedToCamelCase(input: string | null, separator: number): string | null;

  /**
   * Convert a string separated into words with the specified character into a PascalCase identifier.
   * Note that the first word IS capitalized.
   */
  static charSeparatedToPascalCase(input: string | null, separator: number): string | null;

  /**
   * Find the string with that forms a prefix of all the values. If there is no common prefix, return empty.
   */
  static commonPrefix(...values: string | null[]): string | null;

  /**
   * Find the string with that forms a suffix of all the values. If there is no common suffix, return empty.
   */
  static commonSuffix(...values: string | null[]): string | null;

  /**
   * Extract a snippet from the text including the target line and two lines above and below. If the text is empty
   * or the target line is non-positive, return null.
   *
   * @param text
   *        source text
   * @param targetLine
   *        1-based line number
   */
  static contextLines(text: string | null, targetLine: number): string | null;

  /**
   * @return the longer of two strings.
   */
  static longer(s1: string | null, s2: string | null): string | null;

  /**
   * @return if s1 is longer than s2 (s1.length > s2)
   */
  static isLonger(s1: string | null, s2: string | null): boolean;

  /**
   * @return the shorter of two strings.
   */
  static shorter(s1: string | null, s2: string | null): string | null;

  /**
   * @return if s2 is shorter than s1 (s1.length < s2)
   */
  static isShorter(s1: string | null, s2: string | null): boolean;

  /**
   * @param nullIsGreater
   *        if we want to treat null as greater. This is useful for evaluating minimum length instead of
   *        maximum length.
   * @return positive a is longer than b, 0 if equal, negative if b is longer than a. Also handles null case.
   */
  static compareLength(a: string | null, b: string | null, nullIsGreater?: boolean): number;

  /**
   * @return concatenated string of arguments
   * @see #join
   */
  static concat(...strs: any[]): string | null;

  /**
   * @return concatenated string of arguments
   * @see #join
   */
  static concat(...strs: string | null[]): string | null;

  /**
   * Split the input string into an array of strings, each having maximum length of chunkSize
   *
   * @return An array of strings that have maximum length of chunkSize
   */
  static chunk(str: string | null, chunkSize: number): C3.Array<string | null>;

  /**
   * @return `true` if all character in this string satisfy given predicate
   */
  static containsAll(s: string | null, charPredicate: λPredicate<number | null> | null): boolean;

  /**
   * @return `true` if any character in this string satisfying given predicate
   */
  static containsAny(s: string | null, charPredicate: λPredicate<number | null> | null): boolean;

  static countMatches(s: string | null, c: number): number;

  static countMatches(str: string | null, findStr: string | null): number;

  /**
   * Split a string into lines, separated by all reasonable flavors of newlines. The passed lambda is called for each
   * string with the newline character(s) removed.
   *
   * @param str
   *        string to split
   * @param lambda
   *        lambda called with each line
   * @return number of lines read
   */
  static eachLine(str: string | null, lambda: λConsumer<string | null> | null): number;

  static eachLine(str: string | null, lambda: λBiConsumer<string | null, number | null> | null): number;

  static encodedBase64StringToBinary(s: string | null): any | null;

  static endsWith(root: string | null, suffix: string | null): boolean;

  static startsWith(root: string | null, prefix: string | null): boolean;

  static eq(s1: string | null, s2: string | null): boolean;

  static equals(s1: string | null, s2: string | null): boolean;

  static equalsIgnoreCase(s1: string | null, s2: string | null): boolean;

  /**
   * Return the string value, or the default value if empty.
   */
  static defaultTo(a: string | null, defaultValue: string | null): string | null;

  /**
   * Replace characters that would be significant in HTML with entity escapes. This makes the content safe to
   * appear as content of an element or the value of an attribute.
   */
  static escapeHtml(s: string | null): string | null;

  /**
   * Escape a language identifier based on custom rules for what is an allowable initial and subsequent identifier
   * character. If there are no valid identifier characters at all, null is returned.
   *
   * @param name
   *        input text
   * @param escapeFirst
   *        character to escape sequences of invalid text as beginning of identifier
   * @param escapeRest
   *        character to escape sequences of invalid text in the rest of identifier
   * @param validFirst
   *        lambda to determine whether a character is valid as the first one in an identifier
   * @param validRest
   *        lambda to determine whether a character is valid in a the rest of an identifier
   */
  static escapeIdentifier(name: string | null, escapeFirst: number, escapeRest: number, validFirst: λPredicate<number | null> | null, validRest: λPredicate<number | null> | null): string | null;

  /**
   * Escape a language identifier based on custom rules for what is an allowable initial and subsequent identifier
   * character. If there are no valid identifier characters at all, null is returned.
   *
   * @param name
   *        input text
   * @param escapeWith
   *        character to escape sequences of invalid text
   * @param validFirst
   *        lambda to determine whether a character is valid as the first one in an identifier
   * @param validRest
   *        lambda to determine whether a character is valid in any part of an identifier
   */
  static escapeIdentifier(name: string | null, escapeWith: number, validFirst: λPredicate<number | null> | null, validRest: λPredicate<number | null> | null): string | null;

  static escapeJava(str: string | null): string | null;

  /**
   * Escape any regular expression special characters in the string.
   *
   * @param s
   *        input string
   * @return escaped for regular expression literal match
   */
  static escapeRegex(s: string | null): string | null;

  /**
   * @return index of the character in this string satisfying given predicate
   */
  static firstIndexOf(s: string | null, charPredicate: λPredicate<number | null> | null): number;

  /**
   * converts camel case to underscored string
   *
   * @param str
   *        input string with camel case
   * @return converted string with underscore
   */
  static camelCaseToLowerUnderscore(str: string | null): string | null;

  /**
   * converts underscored string to camel case
   *
   * @param str
   *        input string with underscore
   * @return converted string with camel case
   */
  static lowerUnderscoreToCamelCase(str: string | null): string | null;

  /**
   * UnEscape and quote the string
   *
   * @param str
   *        input string
   * @return quoted, unescaped string
   */
  static unescapeAndQuote(str: string | null): string | null;

  /**
   * convert upper underscored string to lower hyphened string
   */
  static upperUnderscoreToLowerHypen(str: string | null): string | null;

  /**
   * Make the first character of the string lower-case, if alphabetic.
   */
  static firstLower(s: string | null): string | null;

  /**
   * Make the first character of the string upper-case, if alphabetic.
   */
  static firstUpper(s: string | null): string | null;

  /**
   * Split a string into lines, separated by all reasonable flavors of newlines. The passed lambda is called for each
   * string with the newline character(s) removed in the style of fold. The initial value is null.
   *
   * @param str
   *        string to split
   * @param folder
   *        lambda called with each line and line number
   * @return final value returned by lambda
   */
  static foldLines(str: string | null, folder: λTriFunction<string | null, number | null, any, any> | null): any;

  /**
   * Split a string into lines, separated by all reasonable flavors of newlines. The passed lambda is called for each
   * string with the newline character(s) removed in the style of fold.
   *
   * @param str
   *        string to split
   * @param initialValue
   *        initial value for fold
   * @param lambda
   *        lambda called with each line and line number
   * @return final value returned by lambda
   */
  static foldLines(str: string | null, initialValue: any, lambda: λTriFunction<string | null, number | null, any, any> | null): any;

  /**
   * Splits a string into lines and concatenates all filtered lines
   *
   * @param str
   *        string to split
   * @param predicate
   *        to filter lines
   * @return all filtered lines concatenated with new line character
   */
  static filter(str: string | null, predicate: λPredicate<string | null> | null): string | null;

  static format(template: string | null, bindings?: C3.Map<string | null, any>): string | null;

  static format(format: string | null, ...args: any[]): string | null;

  /**
   * Return a number formatted with the specified number of significant digits. If the number is larger than 10 to the
   * number of significant digits, more will be printed, but there will be no fractional component. Trailing zero
   * digits in the fraction (and the decimal point itself) will be trimmed.
   */
  static formatNumber(value: number | null, digits: number): string | null;

  /**
   * Return a number formatted with the specified number of significant digits. If the number is larger than 10 to the
   * number of significant digits, more will be printed, but there will be no fractional component. If trimZeros is
   * true, trailing zero digits in the fraction (and the decimal point itself) will be trimmed.
   *
   * @param value
   *        value to format
   * @param digits
   *        number of significant digits
   * @param trimZeros
   *        if true, remove trailing zeros in fraction
   */
  static formatNumber(value: number | null, digits: number, trimZeros?: boolean): string | null;

  /**
   * Build a string representation of the binary data, where each byte is represented by two hexadecimal digits.
   *
   * @param value
   *        ByteBuffer to be converted
   * @return hex encoded string
   */
  static fromBinaryToHex(value: any | null): string | null;

  /**
   * Build a base64 encoded string representation of the binary data.
   *
   * @param value
   *        ByteBuffer to be converted
   * @return base64 encoded string
   */
  static fromBinaryToBase64(value: any | null): string | null;

  /**
   * Taken and modified from {@link sun.nio.fs.Globs} because Globs.toUnixRegexPattern is not a public static function.
   * This is the same implementation that is used in FileSystems.getDefault().getPathMatcher("glob: ").
   * Removed branch conditions for a window regex pattern as well as starting "^" and ending "$" symbols. Converts a
   * standard POSIX Shell globbing pattern into a regular expression pattern. The result can be used with the standard
   * {@link java.util.regex} API to recognize strings which match the glob pattern.
   *
   *
   * See also, the POSIX Shell language:
   * http://pubs.opengroup.org/onlinepubs/009695399/utilities/xcu_chap02.html#tag_02_13_01
   *
   * @param glob
   *        A glob pattern.
   * @return A regex pattern to recognize the given glob pattern.
   */
  static globToRegex(glob: string | null): string | null;

  /**
   * Returns a function that can be applied to check a path string will match the pathPrefixOrGlob.
   *
   * @param pathPrefixOrGlob
   * @return
   */
  static pathMatcher(pathPrefixOrGlob: string | null): λPredicate<string | null> | null;

  /**
   * @return true if input is Capitalized string. The initial character must be an upper-case letter and all other
   *         characters must not be upper-case letters (non letters do not count).
   */
  static isCapitalized(input: string | null): boolean;

  static isDateTime(s: string | null): boolean;

  /**
   * @return whether the string is null, empty or composed entire of whitespace.
   */
  static isEmpty(input: string | null): boolean;

  static isNotEmpty(input: string | null): boolean;

  /**
   * Whether or not the specified character is safe in a regular expression (has no special meaning).
   */
  static isRegexSafe(c: number): boolean;

  /**
   * Return true if there are no lower-case letters in the string and there is more than one capital letter.
   * Note that this is true for "DFE", but false for "R" and "S3" because they have only a single capital.
   */
  static isUpperCase(s: string | null): boolean;

  /**
   * @return true if input string is lowercase
   */
  static isLowerCase(str: string | null): boolean;

  /**
   * @return true if string is valid ip address
   */
  static isValidIp(str: string | null): boolean;

  /**
   * @return true if string is valid ipv4 address
   */
  static isValidIpv4(str: string | null): boolean;

  /**
   * @return true if string is valid ipv6 address
   */
  static isValidIpv6(str: string | null): boolean;

  static isValidUSPhoneNumber(str: string | null): boolean;

  /**
   * @return `true` if this string only contains digits of fixed length
   */
  static isZeroPaddedInt(s: string | null, numDigits: number): boolean;

  static join(separator: number, strs: Collection<string | null> | null): string | null;

  static join(separator: number, start: number, end: number, strs?: C3.Array<string | null>): string | null;

  static join(separator: number, ...strs: string | null[]): string | null;

  static join(separator: number, finalSep: boolean, ...strs: string | null[]): string | null;

  static join(separator: string | null, strs: Collection<string | null> | null): string | null;

  /**
   * @return last index of the character in this string satisfying given predicate
   */
  static lastIndexOf(s: string | null, charPredicate: λPredicate<number | null> | null): number;

  /**
   * Convert each character to lower-case. Non-letter characters are unchanged.
   *
   * @param str
   *        The string you want to process.
   * @return The string with all characters lower case
   */
  static lowerCase(str: string | null): string | null;

  /**
   * Return a restrictive regular expression string that matches all of the specified inputs. Null and empty (but not
   * sequences of only whitespace) inputs are ignored. If no restricted regular expression can be generated, null is
   * returned. If the input list is empty, return null.
   *
   * @param inputs
   *        list of strings to match
   * @param fallback
   *        if nothing specific, return `.+`
   */
  static matchingRegex(inputs: Collection<string | null> | null, fallback?: boolean): string | null;

  /**
   * @return n-th occurrence of character in the string
   */
  static nthIndexOf(s: string | null, ch: number, n: number): number;

  /**
   * @return a string of the specified number of spaces.
   */
  static padding(width: number): string | null;

  /**
   * @return given string with spaces padded to prefix of the string so that total length is no less then provided
   *         length
   */
  static padLeft(s: string | null, length: number): string | null;

  /**
   * @return given string with provided character padded to prefix of the string so that total length is no less then
   *         provided length
   */
  static padLeft(s: string | null, length: number, pad: number): string | null;

  /**
   * @return given string with spaces padded to suffix of the string so that total length is no less then provided
   *         length
   */
  static padRight(s: string | null, length: number): string | null;

  /**
   * @return given string with provided character padded to suffix of the string so that total length is no less then
   *         provided length
   */
  static padRight(s: string | null, length: number, pad: number): string | null;

  static parseBoolean(str: string | null): boolean;

  /**
   * Attempt to form the English plural form of a singular noun phrase. Note that this uses some heuristics and only
   * has exceptions for the most common English words.
   * Also, some English words are the same in the singular and plural, for example: "series" and "aircraft".
   *
   * @param singularForm
   *        singular English phrase
   * @return string with likely plural form of singular noun
   * @see #singularize
   */
  static pluralize(singularForm: string | null): string | null;

  /**
   * @return prefix of the string until #separator character
   */
  static prefix(s: string | null, separator: number): string | null;

  /**
   * Wraps text in the provided quote character and escapes all quotes within the text.
   */
  static quote(s: string | null): string | null;

  /**
   * Wraps text in the provided quote character and escapes all quotes within the text.
   */
  static quote(s: string | null, quote: number): string | null;

  /**
   * Wraps text in the double quote '"' and escapes existing double quotes with two double quotes ('""') within the
   * text. Based on RFC 4180 (and Excel) - Common Format and MIME Type for Comma-Separated Values (CSV) Files
   * (https://tools.ietf.org/html/rfc4180)
   */
  static quoteCsvCell(s: string | null): string | null;

  /**
   * Produce a compact string of a large random number usable to make a key like to be unique.
   * Note that this is not as unique as a random UUID, but only has a 1 in 570 trillion (9^30 * 29) chance of
   * collisions (assuming perfectly distributed lower bits of Random integer values).
   * This string will be 10 digits long and composed of digits and capital letters (without the vowels),
   * making it easy to read (for example "4GGXN5BNBR").
   *
   * @return compact random number representation
   */
  static randomSuffix(): string | null;

  /**
   * Adjust the spacing on the left of a block of code to match the specified indentation. Existing indentation
   * relative to the first line's indentation is preserved.
   *
   * @param s
   *        code to indent
   * @param indent
   *        new indentation to use
   */
  static reindent(s: string | null, indent: string | null): string | null;

  /**
   * @return string with part removed after first occurrence of separator character [ including separator ]
   */
  static first(s: string | null, separator: number): string | null;

  /**
   * @return string with part removed before last occurrence of separator character [ including separator ]
   */
  static last(s: string | null, separator: number): string | null;

  /**
   * @return string with part removed before first occurrence of separator character [ including separator ]
   */
  static removeFirst(s: string | null, separator: number): string | null;

  /**
   * @return string with initial parts removed based on separator; limit parameter determines how parts to remove.
   */
  static removeHead(s: string | null, separator: number, limit: number): string | null;

  /**
   * @return string with part removed after last occurrence of separator character [ including separator ]
   */
  static removeLast(s: string | null, separator: number): string | null;

  static removePrefix(s: string | null, prefix: string | null): string | null;

  /**
   * Remove any occurrance of the specified character from the string.
   */
  static removeChar(s: string | null, c: number): string | null;

  static removeSuffix(s: string | null, suffix: string | null): string | null;

  static removeTrailing(input: string | null, n: number): string | null;

  /**
   * @return string containing of provided character repeated #count times
   */
  static repeat(c: number, count: number): string | null;

  /**
   * @return new string with #from suffix replaced with #to; if #s does not end with #from then returns unchanged
   */
  static replaceSuffix(s: string | null, from: string | null, to: string | null): string | null;

  static safeId(id: string | null): string | null;

  static safeId(id: string | null, idLen: number): string | null;

  /**
   * Split a path into an array of components. Leading and trailing slashes are ignored and duplicate slashes
   * treated as one.
   */
  static splitPath(path: string | null): C3.Array<string | null>;

  /**
   * Converts a name to a conventional C3 type name. A conventional C3 type name is singular and capitalized (ie.
   * warehouses -> Warehouse)
   *
   * @param name
   *        non-conventional name of entity
   * @return conventional C3 type naming convention of provided name
   */
  static typeName(name: string | null): string | null;

  /**
   * Receives and converts an arbitrary input string into a "safe" string. The conversion will do the following:
   * 1. Make sure the result is at most maxLength in length
   * 2. Validate every character to be within the specified allowed (or disallowed) charset and replace with
   * replacement character if not valid.
   * 3. Guarantee (with very high probability) the uniqueness of the result.
   *
   * @param str
   *        the input string
   * @param maxLength
   *        the max length of the result
   * @param charsetRegex
   *        the regex with the valid (or invalid, see next param) character set
   * @param validateAllowed
   *        if true, charsetRegex is interpreted as all valid chars, if false - as all invalid chars
   * @param replacement
   *        the replacement to be put in place of all invalids
   * @return unique (with very high probability) value for arbitrary string input
   */
  static safeString(str: string | null, maxLength: number, charsetRegex: string | null, validateAllowed: boolean | null, replacement: string | null): string | null;

  /**
   * Checks whether every character in the input string is within the specified allowed (or disallowed) charset
   *
   * @param str
   *        the input string
   * @param charsetRegex
   *        the regex with the valid (or invalid, see next param) character set
   * @param validateAllowed
   *        if true, charsetRegex is interpreted as all valid chars, if false - as all invalid chars
   * @return boolean indicating whether the string matched the charset regex
   */
  static validateCharset(str: string | null, charsetRegex: string | null, validateAllowed?: boolean): boolean;

  /**
   * Attempt to form the English singular form of a plural noun. Note that this uses some heuristics and only has
   * exceptions for the most common English words.
   * Also, some English words are the same in the singular and plural, for example: "series" and "aircraft".
   * If you require a different value for the singular form, use {@link #singularizeDifferent} instead.
   *
   * @return string with likely singular form of plural noun
   * @see #pluralize
   * @see #singularizeDifferent
   */
  static singularize(pluralForm: string | null): string | null;

  /**
   * @return string with likely plural form of singular with prefix
   */
  static singularize(prefix: string | null, pluralForm: string | null): string | null;

  /**
   * Attempt to form the English singular form of a plural noun phrase. Note that this uses some heuristics and only
   * has exceptions for the most common English words.
   * Since some English words are the same in the singular and plural (for example: "series" and "aircraft"), this
   * method will prefix the result with "one" to guarantee a unique result.
   *
   * @param pluralForm
   *        plural English phrase
   * @return string with different (singular) form of plural noun
   * @see #singularize
   */
  static singularizeDifferent(pluralForm: string | null): string | null;

  /**
   * Attempt to form the English singular form of a plural noun phrase. Note that this uses some heuristics and only
   * has exceptions for the most common English words.
   * Since some English words are the same in the singular and plural (for example: "series" and "aircraft"), this
   * method will use the specified prefix to guarantee a unique result. If the specified prefix value ends with
   * a space or punctuation, the result will be simple concatenation, otherwise the first letter of the phrase
   * will be upper-cased, forming a camel case result.
   *
   * @param pluralForm
   *        plural English phrase
   * @return string with different (singular) form of plural noun
   * @see #singularize
   */
  static singularizeDifferent(pluralForm: string | null, prefix: string | null): string | null;

  static split(s: string | null, regex: string | null): C3.Array<string | null>;

  /**
   * Separate the last word from the rest of the phrase by spaces, punctuation or case changes.
   *
   * @param phrase
   *        to be split up
   * @return a pair with the prior words (or empty) and the last word (of the full phrase).
   */
  static splitLastWord(phrase: string | null): Pair<string | null, string | null> | null;

  /**
   * Separate the first word from the rest of the phrase by provided separator.
   *
   * @param phrase
   *        to be split up
   * @return a pair with the first word and the following words (or empty)
   */
  static splitFirstWord(phrase: string | null, separator: number): Pair<string | null, string | null> | null;

  /**
   * Remove JavaDoc/JSDoc style multi-line comment separators. Note that this works for all multi-line comments, not
   * just ones that start with /**). It also removes the leftmost column of asterisks used in block formatting, but
   * preserves the newlines and relative indentation.
   */
  static stripJDoc(str: string | null): string | null;

  /**
   * Strip comment characters from single- or multi-line comments. This attempts to separate the contents of the
   * comment from the comment marks in general.
   */
  static stripComment(raw: string | null): string | null;

  /**
   * @return suffix from the string starting after last occurrence of the given separator or empty string
   */
  static suffix(s: string | null, separator: number): string | null;

  static toBigInt(s: string | null, failIfInvalid?: boolean, for_?: string | null): number | null;

  static toBigInt(s: string | null, intType: IntType | null, failIfInvalid?: boolean): number | null;

  static toBinary(s: string | null): any | null;

  static toBinary(s: string | null, binType: BinaryType | null, failIfInvalid?: boolean): any | null;

  static toBinary(s: string | null, charset: string | null): any | null;

  static toBool(s: string | null, failIfInvalid?: boolean): boolean;

  static toBool(s: string | null, failIfInvalid?: boolean, for_?: string | null): boolean;

  static toBool(s: string | null, boolType: BooleanType | null, failIfInvalid?: boolean): boolean;

  static toByte(s: string | null, failIfInvalid?: boolean): number | null;

  static toByte(s: string | null, failIfInvalid?: boolean, for_?: string | null): number | null;

  static toChar(s: string | null, failIfInvalid?: boolean, for_?: string | null): number | null;

  static toChar(s: string | null, charType: PrimitiveType | null, failIfInvalid?: boolean): number | null;

  static toDateTime(s: string | null, failIfInvalid?: boolean, for_?: string | null): DateTime | null;

  static toDateTime(s: string | null, dtType: DateTimeType | null, failIfInvalid?: boolean): DateTime | null;

  static toDecimal(s: string | null, failIfInvalid?: boolean, for_?: string | null): number | null;

  static toDecimal(s: string | null, decType: DecimalType | null, failIfInvalid?: boolean): number | null;

  static toDouble(s: string | null, failIfInvalid?: boolean, for_?: string | null): number | null;

  static toDouble(s: string | null, dblType: DoubleType | null, failIfInvalid?: boolean): number | null;

  static toFloat(s: string | null, failIfInvalid?: boolean, for_?: string | null): number | null;

  static toFloat(s: string | null, floatType: FloatType | null, failIfInvalid?: boolean): number | null;

  static toInt(s: string | null, failIfInvalid?: boolean, for_?: string | null): number | null;

  static toInt(s: string | null, intType: IntType | null, failIfInvalid?: boolean): number | null;

  static toInt16(s: string | null, failIfInvalid?: boolean, for_?: string | null): number | null;

  static toInt16(s: string | null, int16Type: Int16Type | null, failIfInvalid?: boolean): number | null;

  static toInt32(s: string | null, failIfInvalid?: boolean, for_?: string | null): number | null;

  static toInt32(s: string | null, int32Type: Int32Type | null, failIfInvalid?: boolean): number | null;

  static toJson(value: string | null, failIfInvalid?: boolean): any | null;

  static toJson(value: string | null, failIfInvalid?: boolean, for_?: string | null): any | null;

  /**
   * @return Avoid encoding overhead by direct conversion from String to byte[]. Different Strings should always
   *         have different byte arrays. This is used in cases where you quickly want the 1:1 byte[] representation
   *         of a String for something such as hashing.
   */
  static toUtf16ByteArray(s: string | null): C3.Array<number>;

  static toValue(s: string | null, vt: ValueType | null, failIfInvalid?: boolean, for_?: string | null): any;

  /**
   * Convert any Unicode string into something resembling a US English string that might have similar pronunciation.
   * Non-ASCII characters which have no transliteration are removed. ASCII (0-7F) characters remain as-is.
   *
   * This should only be used as a way to make Unicode strings 7-bit safe and with the understanding that not all
   * characters will be represented in the output. The result may also be confusing to a human, especially for
   * languages like Japanese that depend heavily on context.
   *
   * For example, "熊猫" maps to "Xiong Mao" and "गज" to "gj" (**not** "gaje").
   *
   * @param s
   *        string to transliterate
   * @param wordsOnly
   *        if true, punctuation and whitespace characters in transliteration are discarded
   */
  static transliterate(s: string | null, wordsOnly?: boolean): string | null;

  /**
   * Remove any trailing whitespace from the string.
   */
  static trimRight(s: string | null): string | null;

  static eachToken(value: string | null, action: λTriConsumer<string | null, number | null, number | null> | null): void;

  /**
   * @return obfuscated string
   */
  static obfuscate(value: string | null, seed: number | null): string | null;

  /**
   * used for obfuscating a single word or number
   *
   * @return obfuscated word
   */
  static obfuscateWord(wordOrNumber: string | null, seed: number | null): string | null;

  /**
   * converts hyphenated string to camel case string
   */
  static hyphenToCamelCase(str: string | null): string | null;

  /**
   * Returns the longest common subsequence shared between the two provided strings.
   */
  static longestCommonSubsequence(a: string | null, b: string | null): number;

  /**
   * Truncates string to limit number of characters and replaces last character with ellipses (…) if actually
   * truncated.
   *
   * @param s
   *        string to be truncated
   * @param maximum
   *        length of resulting string
   */
  static truncate(s: string | null, maximum: number): string | null;

  /**
   * Truncates string to limit number of characters and replaces last character with ellipses (…) if actually
   * truncated.
   *
   * @param s
   *        string to be truncated
   * @param maximum
   *        length of resulting string
   * @param appendEllipses
   *        replace last character with ellipses if true
   */
  static truncate(s: string | null, maximum: number, appendEllipses?: boolean): string | null;

  static unescapeJava(str: string | null): string | null;

  static unquote(s: string | null): string | null;

  static unquote(s: string | null, quoteChar: number): string | null;

  /**
   * Convert each character to upper-case. Non-letter characters are unchanged.
   *
   * @param str
   *        The string you want to process.
   * @return The string with all characters capitalized.
   */
  static upperCase(str: string | null): string | null;

  /**
   * Check if a string is numeric
   */
  static isNum(str: string | null): boolean;

  /**
   * Generate a randomUuid string
   */
  static randomUuid(): string | null;

  /**
   * Is the given string a uuid
   */
  static isUuid(uuid: string | null): boolean;

  /**
   * Produce a UUID encoded in a shorter number of characters.
   * This is done by creating an ASCII string using base-64 encoding of the binary data rather
   * then hex with separators, making the result 22 characters long instead of 36
   * (for example "mNNYBo9jSjmm0Tsu3f6UaA" instead of "0433ed86-2f92-49d9-a706-9dac4363baf2").
   *
   * @return compact string encoding
   */
  static compactUuid(): string | null;

  /**
   * Encodes a value to replace the separator character such that the result does not contain any instances of that
   * character. Values can be decoded using decode.
   *
   * @param value
   *        value to be encoded
   * @param separator
   *        separator character to replace
   * @return input value encoded to not contain the separator character
   */
  static encodeValue(value: string | null, separator: number): string | null;

  /**
   * Decodes a value encoded with encodeValue.
   *
   * @param value
   *        value to be decoded
   * @param separator
   *        separator character indicated when the value was encoded
   * @return original value that was encoded
   */
  static decodeValue(value: string | null, separator: number): string | null;

  static escapeAndQuote(str: string | null): string | null;

  static needsEscape(b: number): boolean;

  static lookupEscapeChar(b: number): number;

  static lookupUnescapeChar(b: number): number;

  static escapeChar(b: number): string | null;

  /**
   * Convenience overload that defaults to a "f_" prefix because usually identifiers are used for field names.
   *
   * @param id
   *        possibly invalid Type System identifier
   * @return valid Type System identifier that can be parsed by DSL
   */
  static identifier(id: string | null): string | null;

  /**
   * Ensures that the provided identifier String is parsable by Type System DSL. A valid identifier is defined by
   * {@link Dsl#ID_RE}. Another way of describing a valid identifier is a letter or underscore followed by a possibly
   * empty sequence of letters, underscores, or digits.
   * ```
   * Str.identifier("2016-10-14T01:00:01", "c_") == "c_2016_10_14T01_00_01"
   * Str.identifier("985743-2314", "c_") == "c_985743_2314"
   * Str.identifier("567385147c4", "c_") == "c_567385147c4"
   * Str.identifier("validFieldName", "c_") == "validFieldName"
   * Str.identifier("F", "c_") == "F"
   * Str.identifier("f", "c_") == "f"
   * Str.identifier("_", "c_") == "_"
   * ```
   *
   * @param id
   *        possibly invalid Type System identifier
   * @param prefix
   *        if the provided field name needs to be prefixed to be valid
   * @return valid Type System identifier that can be parsed by DSL
   */
  static identifier(id: string | null, prefix: string | null): string | null;

  /**
   * @return extracted filename from a file system path
   */
  static filename(path: string): string | null;

  /**
   * @return extracted parent directory from a file system path
   */
  static parentDirectory(path: string): string | null;

  /**
   * @return word at given index.
   * @param lineContent
   *        the string content of the line that need to find the word at indexed location.
   * @param index
   *        zero-based index for the word in the lineContent. As long as the index is within the range of the word,
   *        the same word will be returned.
   *        E.g., with lineContent 'hello world!', the word 'world' will be returned for index 6-10.
   */
  static wordAt(lineContent: string | null, index: number): string | null;

  /**
   * Return the start index (inclusive) and ending index (exclusive) of word at given index (0-based).
   * dot on the left side of a word is inclusive, dot on the right side of a word is exclusive.
   */
  static wordRangeAt(lineContent: string | null, index: number): Pair<number | null, number | null> | null;

  /**
   * Return the string with leading and trailing spaces removed. If the string is null, return null.
   */
  static trim(s: string | null): string | null;

  /**
   * Return the string with any empty lines removed.
   */
  static removeBlankLines(s: string | null): string | null;

  /**
   * Produce the binary result of compressing this string as UTF-8 using the Snappy compression.
   *
   * @see Bin#uncompressSnappyString
   */
  static compressSnappy(s: string | null): any | null;

  /**
   * Produce the binary result of compressing this string as UTF-8 using the Gzip compression.
   *
   * @see Bin#uncompressGzipString
   */
  static compressGzip(s: string | null): any | null;
}


interface λTriConsumer<T, U, V> {
  (t: T, u: U, v: V): void
}

interface λConsumer<T> {
  (t: T): void
}

interface λTriFunction<T, U, V, R> {
  (t: T, u: U, v: V): R
}

interface λBiConsumer<T, U> {
  (t: T, u: U): void
}

interface λPredicate<T> {
  (t: T): boolean
}
