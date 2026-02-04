#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.IntType import IntType
from c3.platform.Pair import Pair
from c3.platform.Type import Type
from c3.platform.Collection import Collection
from c3.platform.Pkg import Pkg
from c3.platform.ValueType import ValueType
from c3.platform.Pair import Pair
from c3.platform.DecimalType import DecimalType
from c3.platform.PrimitiveType import PrimitiveType
from c3.platform.DateTimeType import DateTimeType
from c3.platform.DoubleType import DoubleType
from c3.platform.Int16Type import Int16Type
from c3.platform.BooleanType import BooleanType
from c3.platform.FloatType import FloatType
from c3.platform.BinaryType import BinaryType
from c3.platform.Int32Type import Int32Type

# Python definitions for the C3 type Str


class Str(Value):
    """
    Helper class for string values, implemented on `java.util.String` for Java, `String` for JavaScript and `str`
    for Python.
    
    @remarks this represents a made instance of Str
    """
    
    UTF8: Optional[str]=None
    def __init__(self, UTF8: Optional[str]=None) -> None: ...

    @overload
    @classmethod
    def myType(cls) -> Union[Type]:
        ...
    @overload
    @classmethod
    def myType(cls, pkg: Pkg) -> Union[Type]:
        ...
    @classmethod
    def camelCaseToCharSeparated(cls, input: str, separator: int) -> Union[str]:
    """
    Convert a CamelCase string to one whose words, defined by upper-case letters, to one separated by the specified
    character.
    """
        ...
    @classmethod
    def camelCaseToDashSeparated(cls, input: str) -> Union[str]:
    """
    Convert a CamelCase string to one whose words, defined by upper-case letters, to one separated by dashes.
    """
        ...
    @classmethod
    def camelCaseToSpaceSeparated(cls, input: str) -> Union[str]:
    """
    Convert a CamelCase string to one whose words, defined by upper-case letters, to one separated by spaces.
    """
        ...
    @overload
    @classmethod
    def toIdentifier(cls, str: str) -> Union[str]:
    """
    Converts string to identifier
    
    @param str
    @return identifier
    """
        ...
    @overload
    @classmethod
    def toIdentifier(cls, str: str, separator: str) -> Union[str]:
    """
    Converts string to identifier and makes it more human readable
    """
        ...
    @classmethod
    def capitalize(cls, s: str) -> Union[str]:
    """
    @return capitalized version of the original string.
    """
        ...
    @classmethod
    def charSeparatedToCamelCase(cls, input: str, separator: int) -> Union[str]:
    """
    Convert a string separated into words with the specified character into a camelCase identifier.
    Note that the first word is not capitalized.
    """
        ...
    @classmethod
    def charSeparatedToPascalCase(cls, input: str, separator: int) -> Union[str]:
    """
    Convert a string separated into words with the specified character into a PascalCase identifier.
    Note that the first word IS capitalized.
    """
        ...
    @classmethod
    def commonPrefix(cls, *values: Array[str]) -> Union[str]:
    """
    Find the string with that forms a prefix of all the values. If there is no common prefix, return empty.
    """
        ...
    @classmethod
    def commonSuffix(cls, *values: Array[str]) -> Union[str]:
    """
    Find the string with that forms a suffix of all the values. If there is no common suffix, return empty.
    """
        ...
    @classmethod
    def contextLines(cls, text: str, targetLine: int) -> Union[str]:
    """
    Extract a snippet from the text including the target line and two lines above and below. If the text is empty
    or the target line is non-positive, return null.
    
    @param text
           source text
    @param targetLine
           1-based line number
    """
        ...
    @classmethod
    def longer(cls, s1: str, s2: str) -> Union[str]:
    """
    @return the longer of two strings.
    """
        ...
    @classmethod
    def isLonger(cls, s1: str, s2: str) -> bool:
    """
    @return if s1 is longer than s2 (s1.length > s2)
    """
        ...
    @classmethod
    def shorter(cls, s1: str, s2: str) -> Union[str]:
    """
    @return the shorter of two strings.
    """
        ...
    @classmethod
    def isShorter(cls, s1: str, s2: str) -> bool:
    """
    @return if s2 is shorter than s1 (s1.length < s2)
    """
        ...
    @classmethod
    def compareLength(cls, a: str, b: str, nullIsGreater: bool=None) -> int:
    """
    @param nullIsGreater
           if we want to treat null as greater. This is useful for evaluating minimum length instead of
           maximum length.
    @return positive a is longer than b, 0 if equal, negative if b is longer than a. Also handles null case.
    """
        ...
    @overload
    @classmethod
    def concat(cls, *strs: Array[Any]) -> Union[str]:
    """
    @return concatenated string of arguments
    @see #join
    """
        ...
    @overload
    @classmethod
    def concat(cls, *strs: Array[str]) -> Union[str]:
    """
    @return concatenated string of arguments
    @see #join
    """
        ...
    @classmethod
    def chunk(cls, str: str, chunkSize: int) -> Union[Array[str]]:
    """
    Split the input string into an array of strings, each having maximum length of chunkSize
    
    @return An array of strings that have maximum length of chunkSize
    """
        ...
    @classmethod
    def containsAll(cls, s: str, charPredicate: Callable[[Union[int]], bool]) -> bool:
    """
    @return `true` if all character in this string satisfy given predicate
    """
        ...
    @classmethod
    def containsAny(cls, s: str, charPredicate: Callable[[Union[int]], bool]) -> bool:
    """
    @return `true` if any character in this string satisfying given predicate
    """
        ...
    @overload
    @classmethod
    def countMatches(cls, s: str, c: int) -> int:
        ...
    @overload
    @classmethod
    def countMatches(cls, str: str, findStr: str) -> int:
        ...
    @overload
    @classmethod
    def eachLine(cls, str: str, lambda_: Callable[[Union[str]]]) -> int:
    """
    Split a string into lines, separated by all reasonable flavors of newlines. The passed lambda is called for each
    string with the newline character(s) removed.
    
    @param str
           string to split
    @param lambda
           lambda called with each line
    @return number of lines read
    """
        ...
    @overload
    @classmethod
    def eachLine(cls, str: str, lambda_: Callable[[Union[str], Union[int]]]) -> int:
        ...
    @classmethod
    def encodedBase64StringToBinary(cls, s: str) -> Union[any]:
        ...
    @classmethod
    def endsWith(cls, root: str, suffix: str) -> bool:
        ...
    @classmethod
    def startsWith(cls, root: str, prefix: str) -> bool:
        ...
    @classmethod
    def eq(cls, s1: str, s2: str) -> bool:
        ...
    @classmethod
    def equals(cls, s1: str, s2: str) -> bool:
        ...
    @classmethod
    def equalsIgnoreCase(cls, s1: str, s2: str) -> bool:
        ...
    @classmethod
    def defaultTo(cls, a: str, defaultValue: str) -> Union[str]:
    """
    Return the string value, or the default value if empty.
    """
        ...
    @classmethod
    def escapeHtml(cls, s: str) -> Union[str]:
    """
    Replace characters that would be significant in HTML with entity escapes. This makes the content safe to
    appear as content of an element or the value of an attribute.
    """
        ...
    @overload
    @classmethod
    def escapeIdentifier(cls, name: str, escapeFirst: int, escapeRest: int, validFirst: Callable[[Union[int]], bool], validRest: Callable[[Union[int]], bool]) -> Union[str]:
    """
    Escape a language identifier based on custom rules for what is an allowable initial and subsequent identifier
    character. If there are no valid identifier characters at all, null is returned.
    
    @param name
           input text
    @param escapeFirst
           character to escape sequences of invalid text as beginning of identifier
    @param escapeRest
           character to escape sequences of invalid text in the rest of identifier
    @param validFirst
           lambda to determine whether a character is valid as the first one in an identifier
    @param validRest
           lambda to determine whether a character is valid in a the rest of an identifier
    """
        ...
    @overload
    @classmethod
    def escapeIdentifier(cls, name: str, escapeWith: int, validFirst: Callable[[Union[int]], bool], validRest: Callable[[Union[int]], bool]) -> Union[str]:
    """
    Escape a language identifier based on custom rules for what is an allowable initial and subsequent identifier
    character. If there are no valid identifier characters at all, null is returned.
    
    @param name
           input text
    @param escapeWith
           character to escape sequences of invalid text
    @param validFirst
           lambda to determine whether a character is valid as the first one in an identifier
    @param validRest
           lambda to determine whether a character is valid in any part of an identifier
    """
        ...
    @classmethod
    def escapeJava(cls, str: str) -> Union[str]:
        ...
    @classmethod
    def escapeRegex(cls, s: str) -> Union[str]:
    """
    Escape any regular expression special characters in the string.
    
    @param s
           input string
    @return escaped for regular expression literal match
    """
        ...
    @classmethod
    def firstIndexOf(cls, s: str, charPredicate: Callable[[Union[int]], bool]) -> int:
    """
    @return index of the character in this string satisfying given predicate
    """
        ...
    @classmethod
    def camelCaseToLowerUnderscore(cls, str: str) -> Union[str]:
    """
    converts camel case to underscored string
    
    @param str
           input string with camel case
    @return converted string with underscore
    """
        ...
    @classmethod
    def lowerUnderscoreToCamelCase(cls, str: str) -> Union[str]:
    """
    converts underscored string to camel case
    
    @param str
           input string with underscore
    @return converted string with camel case
    """
        ...
    @classmethod
    def unescapeAndQuote(cls, str: str) -> Union[str]:
    """
    UnEscape and quote the string
    
    @param str
           input string
    @return quoted, unescaped string
    """
        ...
    @classmethod
    def upperUnderscoreToLowerHypen(cls, str: str) -> Union[str]:
    """
    convert upper underscored string to lower hyphened string
    """
        ...
    @classmethod
    def firstLower(cls, s: str) -> Union[str]:
    """
    Make the first character of the string lower-case, if alphabetic.
    """
        ...
    @classmethod
    def firstUpper(cls, s: str) -> Union[str]:
    """
    Make the first character of the string upper-case, if alphabetic.
    """
        ...
    @overload
    @classmethod
    def foldLines(cls, str: str, folder: Callable[[Union[str], Union[int], Union[Any]], Union[Any]]) -> Union[Any]:
    """
    Split a string into lines, separated by all reasonable flavors of newlines. The passed lambda is called for each
    string with the newline character(s) removed in the style of fold. The initial value is null.
    
    @param str
           string to split
    @param folder
           lambda called with each line and line number
    @return final value returned by lambda
    """
        ...
    @overload
    @classmethod
    def foldLines(cls, str: str, initialValue: Any, lambda_: Callable[[Union[str], Union[int], Union[Any]], Union[Any]]) -> Union[Any]:
    """
    Split a string into lines, separated by all reasonable flavors of newlines. The passed lambda is called for each
    string with the newline character(s) removed in the style of fold.
    
    @param str
           string to split
    @param initialValue
           initial value for fold
    @param lambda
           lambda called with each line and line number
    @return final value returned by lambda
    """
        ...
    @classmethod
    def filter(cls, str: str, predicate: Callable[[Union[str]], bool]) -> Union[str]:
    """
    Splits a string into lines and concatenates all filtered lines
    
    @param str
           string to split
    @param predicate
           to filter lines
    @return all filtered lines concatenated with new line character
    """
        ...
    @overload
    @classmethod
    def format(cls, template: str, bindings: Map[str, Any]=None) -> Union[str]:
        ...
    @overload
    @classmethod
    def format(cls, format: str, *args: Array[Any]) -> Union[str]:
        ...
    @overload
    @classmethod
    def formatNumber(cls, value: float, digits: int) -> Union[str]:
    """
    Return a number formatted with the specified number of significant digits. If the number is larger than 10 to the
    number of significant digits, more will be printed, but there will be no fractional component. Trailing zero
    digits in the fraction (and the decimal point itself) will be trimmed.
    """
        ...
    @overload
    @classmethod
    def formatNumber(cls, value: float, digits: int, trimZeros: bool=None) -> Union[str]:
    """
    Return a number formatted with the specified number of significant digits. If the number is larger than 10 to the
    number of significant digits, more will be printed, but there will be no fractional component. If trimZeros is
    true, trailing zero digits in the fraction (and the decimal point itself) will be trimmed.
    
    @param value
           value to format
    @param digits
           number of significant digits
    @param trimZeros
           if true, remove trailing zeros in fraction
    """
        ...
    @classmethod
    def fromBinaryToHex(cls, value: any) -> Union[str]:
    """
    Build a string representation of the binary data, where each byte is represented by two hexadecimal digits.
    
    @param value
           ByteBuffer to be converted
    @return hex encoded string
    """
        ...
    @classmethod
    def fromBinaryToBase64(cls, value: any) -> Union[str]:
    """
    Build a base64 encoded string representation of the binary data.
    
    @param value
           ByteBuffer to be converted
    @return base64 encoded string
    """
        ...
    @classmethod
    def globToRegex(cls, glob: str) -> Union[str]:
    """
    Taken and modified from {@link sun.nio.fs.Globs} because Globs.toUnixRegexPattern is not a public static function.
    This is the same implementation that is used in FileSystems.getDefault().getPathMatcher("glob: ").
    Removed branch conditions for a window regex pattern as well as starting "^" and ending "$" symbols. Converts a
    standard POSIX Shell globbing pattern into a regular expression pattern. The result can be used with the standard
    {@link java.util.regex} API to recognize strings which match the glob pattern.
    
    
    See also, the POSIX Shell language:
    http://pubs.opengroup.org/onlinepubs/009695399/utilities/xcu_chap02.html#tag_02_13_01
    
    @param glob
           A glob pattern.
    @return A regex pattern to recognize the given glob pattern.
    """
        ...
    @classmethod
    def pathMatcher(cls, pathPrefixOrGlob: str) -> Union[Callable[[Union[str]], bool]]:
    """
    Returns a function that can be applied to check a path string will match the pathPrefixOrGlob.
    
    @param pathPrefixOrGlob
    @return
    """
        ...
    @classmethod
    def isCapitalized(cls, input: str) -> bool:
    """
    @return true if input is Capitalized string. The initial character must be an upper-case letter and all other
            characters must not be upper-case letters (non letters do not count).
    """
        ...
    @classmethod
    def isDateTime(cls, s: str) -> bool:
        ...
    @classmethod
    def isEmpty(cls, input: str) -> bool:
    """
    @return whether the string is null, empty or composed entire of whitespace.
    """
        ...
    @classmethod
    def isNotEmpty(cls, input: str) -> bool:
        ...
    @classmethod
    def isRegexSafe(cls, c: int) -> bool:
    """
    Whether or not the specified character is safe in a regular expression (has no special meaning).
    """
        ...
    @classmethod
    def isUpperCase(cls, s: str) -> bool:
    """
    Return true if there are no lower-case letters in the string and there is more than one capital letter.
    Note that this is true for "DFE", but false for "R" and "S3" because they have only a single capital.
    """
        ...
    @classmethod
    def isLowerCase(cls, str: str) -> bool:
    """
    @return true if input string is lowercase
    """
        ...
    @classmethod
    def isValidIp(cls, str: str) -> bool:
    """
    @return true if string is valid ip address
    """
        ...
    @classmethod
    def isValidIpv4(cls, str: str) -> bool:
    """
    @return true if string is valid ipv4 address
    """
        ...
    @classmethod
    def isValidIpv6(cls, str: str) -> bool:
    """
    @return true if string is valid ipv6 address
    """
        ...
    @classmethod
    def isValidUSPhoneNumber(cls, str: str) -> bool:
        ...
    @classmethod
    def isZeroPaddedInt(cls, s: str, numDigits: int) -> bool:
    """
    @return `true` if this string only contains digits of fixed length
    """
        ...
    @overload
    @classmethod
    def join(cls, separator: int, strs: Collection[str]) -> Union[str]:
        ...
    @overload
    @classmethod
    def join(cls, separator: int, start: int, end: int, strs: Array[str]=None) -> Union[str]:
        ...
    @overload
    @classmethod
    def join(cls, separator: int, *strs: Array[str]) -> Union[str]:
        ...
    @overload
    @classmethod
    def join(cls, separator: int, finalSep: bool, *strs: Array[str]) -> Union[str]:
        ...
    @overload
    @classmethod
    def join(cls, separator: str, strs: Collection[str]) -> Union[str]:
        ...
    @classmethod
    def lastIndexOf(cls, s: str, charPredicate: Callable[[Union[int]], bool]) -> int:
    """
    @return last index of the character in this string satisfying given predicate
    """
        ...
    @classmethod
    def lowerCase(cls, str: str) -> Union[str]:
    """
    Convert each character to lower-case. Non-letter characters are unchanged.
    
    @param str
           The string you want to process.
    @return The string with all characters lower case
    """
        ...
    @classmethod
    def matchingRegex(cls, inputs: Collection[str], fallback: bool=None) -> Union[str]:
    """
    Return a restrictive regular expression string that matches all of the specified inputs. Null and empty (but not
    sequences of only whitespace) inputs are ignored. If no restricted regular expression can be generated, null is
    returned. If the input list is empty, return null.
    
    @param inputs
           list of strings to match
    @param fallback
           if nothing specific, return `.+`
    """
        ...
    @classmethod
    def nthIndexOf(cls, s: str, ch: int, n: int) -> int:
    """
    @return n-th occurrence of character in the string
    """
        ...
    @classmethod
    def padding(cls, width: int) -> Union[str]:
    """
    @return a string of the specified number of spaces.
    """
        ...
    @overload
    @classmethod
    def padLeft(cls, s: str, length: int) -> Union[str]:
    """
    @return given string with spaces padded to prefix of the string so that total length is no less then provided
            length
    """
        ...
    @overload
    @classmethod
    def padLeft(cls, s: str, length: int, pad: int) -> Union[str]:
    """
    @return given string with provided character padded to prefix of the string so that total length is no less then
            provided length
    """
        ...
    @overload
    @classmethod
    def padRight(cls, s: str, length: int) -> Union[str]:
    """
    @return given string with spaces padded to suffix of the string so that total length is no less then provided
            length
    """
        ...
    @overload
    @classmethod
    def padRight(cls, s: str, length: int, pad: int) -> Union[str]:
    """
    @return given string with provided character padded to suffix of the string so that total length is no less then
            provided length
    """
        ...
    @classmethod
    def parseBoolean(cls, str: str) -> bool:
        ...
    @classmethod
    def pluralize(cls, singularForm: str) -> Union[str]:
    """
    Attempt to form the English plural form of a singular noun phrase. Note that this uses some heuristics and only
    has exceptions for the most common English words.
    Also, some English words are the same in the singular and plural, for example: "series" and "aircraft".
    
    @param singularForm
           singular English phrase
    @return string with likely plural form of singular noun
    @see #singularize
    """
        ...
    @classmethod
    def prefix(cls, s: str, separator: int) -> Union[str]:
    """
    @return prefix of the string until #separator character
    """
        ...
    @overload
    @classmethod
    def quote(cls, s: str) -> Union[str]:
    """
    Wraps text in the provided quote character and escapes all quotes within the text.
    """
        ...
    @overload
    @classmethod
    def quote(cls, s: str, quote: int) -> Union[str]:
    """
    Wraps text in the provided quote character and escapes all quotes within the text.
    """
        ...
    @classmethod
    def quoteCsvCell(cls, s: str) -> Union[str]:
    """
    Wraps text in the double quote '"' and escapes existing double quotes with two double quotes ('""') within the
    text. Based on RFC 4180 (and Excel) - Common Format and MIME Type for Comma-Separated Values (CSV) Files
    (https://tools.ietf.org/html/rfc4180)
    """
        ...
    @classmethod
    def randomSuffix(cls) -> Union[str]:
    """
    Produce a compact string of a large random number usable to make a key like to be unique.
    Note that this is not as unique as a random UUID, but only has a 1 in 570 trillion (9^30 * 29) chance of
    collisions (assuming perfectly distributed lower bits of Random integer values).
    This string will be 10 digits long and composed of digits and capital letters (without the vowels),
    making it easy to read (for example "4GGXN5BNBR").
    
    @return compact random number representation
    """
        ...
    @classmethod
    def reindent(cls, s: str, indent: str) -> Union[str]:
    """
    Adjust the spacing on the left of a block of code to match the specified indentation. Existing indentation
    relative to the first line's indentation is preserved.
    
    @param s
           code to indent
    @param indent
           new indentation to use
    """
        ...
    @classmethod
    def first(cls, s: str, separator: int) -> Union[str]:
    """
    @return string with part removed after first occurrence of separator character [ including separator ]
    """
        ...
    @classmethod
    def last(cls, s: str, separator: int) -> Union[str]:
    """
    @return string with part removed before last occurrence of separator character [ including separator ]
    """
        ...
    @classmethod
    def removeFirst(cls, s: str, separator: int) -> Union[str]:
    """
    @return string with part removed before first occurrence of separator character [ including separator ]
    """
        ...
    @classmethod
    def removeHead(cls, s: str, separator: int, limit: int) -> Union[str]:
    """
    @return string with initial parts removed based on separator; limit parameter determines how parts to remove.
    """
        ...
    @classmethod
    def removeLast(cls, s: str, separator: int) -> Union[str]:
    """
    @return string with part removed after last occurrence of separator character [ including separator ]
    """
        ...
    @classmethod
    def removePrefix(cls, s: str, prefix: str) -> Union[str]:
        ...
    @classmethod
    def removeChar(cls, s: str, c: int) -> Union[str]:
    """
    Remove any occurrance of the specified character from the string.
    """
        ...
    @classmethod
    def removeSuffix(cls, s: str, suffix: str) -> Union[str]:
        ...
    @classmethod
    def removeTrailing(cls, input: str, n: int) -> Union[str]:
        ...
    @classmethod
    def repeat(cls, c: int, count: int) -> Union[str]:
    """
    @return string containing of provided character repeated #count times
    """
        ...
    @classmethod
    def replaceSuffix(cls, s: str, from_: str, to: str) -> Union[str]:
    """
    @return new string with #from suffix replaced with #to; if #s does not end with #from then returns unchanged
    """
        ...
    @overload
    @classmethod
    def safeId(cls, id: str) -> Union[str]:
        ...
    @overload
    @classmethod
    def safeId(cls, id: str, idLen: int) -> Union[str]:
        ...
    @classmethod
    def splitPath(cls, path: str) -> Union[Array[str]]:
    """
    Split a path into an array of components. Leading and trailing slashes are ignored and duplicate slashes
    treated as one.
    """
        ...
    @classmethod
    def typeName(cls, name: str) -> Union[str]:
    """
    Converts a name to a conventional C3 type name. A conventional C3 type name is singular and capitalized (ie.
    warehouses -> Warehouse)
    
    @param name
           non-conventional name of entity
    @return conventional C3 type naming convention of provided name
    """
        ...
    @classmethod
    def safeString(cls, str: str, maxLength: int, charsetRegex: str, validateAllowed: bool, replacement: str) -> Union[str]:
    """
    Receives and converts an arbitrary input string into a "safe" string. The conversion will do the following:
    1. Make sure the result is at most maxLength in length
    2. Validate every character to be within the specified allowed (or disallowed) charset and replace with
    replacement character if not valid.
    3. Guarantee (with very high probability) the uniqueness of the result.
    
    @param str
           the input string
    @param maxLength
           the max length of the result
    @param charsetRegex
           the regex with the valid (or invalid, see next param) character set
    @param validateAllowed
           if true, charsetRegex is interpreted as all valid chars, if false - as all invalid chars
    @param replacement
           the replacement to be put in place of all invalids
    @return unique (with very high probability) value for arbitrary string input
    """
        ...
    @classmethod
    def validateCharset(cls, str: str, charsetRegex: str, validateAllowed: bool=None) -> bool:
    """
    Checks whether every character in the input string is within the specified allowed (or disallowed) charset
    
    @param str
           the input string
    @param charsetRegex
           the regex with the valid (or invalid, see next param) character set
    @param validateAllowed
           if true, charsetRegex is interpreted as all valid chars, if false - as all invalid chars
    @return boolean indicating whether the string matched the charset regex
    """
        ...
    @overload
    @classmethod
    def singularize(cls, pluralForm: str) -> Union[str]:
    """
    Attempt to form the English singular form of a plural noun. Note that this uses some heuristics and only has
    exceptions for the most common English words.
    Also, some English words are the same in the singular and plural, for example: "series" and "aircraft".
    If you require a different value for the singular form, use {@link #singularizeDifferent} instead.
    
    @return string with likely singular form of plural noun
    @see #pluralize
    @see #singularizeDifferent
    """
        ...
    @overload
    @classmethod
    def singularize(cls, prefix: str, pluralForm: str) -> Union[str]:
    """
    @return string with likely plural form of singular with prefix
    """
        ...
    @overload
    @classmethod
    def singularizeDifferent(cls, pluralForm: str) -> Union[str]:
    """
    Attempt to form the English singular form of a plural noun phrase. Note that this uses some heuristics and only
    has exceptions for the most common English words.
    Since some English words are the same in the singular and plural (for example: "series" and "aircraft"), this
    method will prefix the result with "one" to guarantee a unique result.
    
    @param pluralForm
           plural English phrase
    @return string with different (singular) form of plural noun
    @see #singularize
    """
        ...
    @overload
    @classmethod
    def singularizeDifferent(cls, pluralForm: str, prefix: str) -> Union[str]:
    """
    Attempt to form the English singular form of a plural noun phrase. Note that this uses some heuristics and only
    has exceptions for the most common English words.
    Since some English words are the same in the singular and plural (for example: "series" and "aircraft"), this
    method will use the specified prefix to guarantee a unique result. If the specified prefix value ends with
    a space or punctuation, the result will be simple concatenation, otherwise the first letter of the phrase
    will be upper-cased, forming a camel case result.
    
    @param pluralForm
           plural English phrase
    @return string with different (singular) form of plural noun
    @see #singularize
    """
        ...
    @classmethod
    def split(cls, s: str, regex: str) -> Union[Array[str]]:
        ...
    @classmethod
    def splitLastWord(cls, phrase: str) -> Union[Pair[str, str]]:
    """
    Separate the last word from the rest of the phrase by spaces, punctuation or case changes.
    
    @param phrase
           to be split up
    @return a pair with the prior words (or empty) and the last word (of the full phrase).
    """
        ...
    @classmethod
    def splitFirstWord(cls, phrase: str, separator: int) -> Union[Pair[str, str]]:
    """
    Separate the first word from the rest of the phrase by provided separator.
    
    @param phrase
           to be split up
    @return a pair with the first word and the following words (or empty)
    """
        ...
    @classmethod
    def stripJDoc(cls, str: str) -> Union[str]:
    """
    Remove JavaDoc/JSDoc style multi-line comment separators. Note that this works for all multi-line comments, not
    just ones that start with /**). It also removes the leftmost column of asterisks used in block formatting, but
    preserves the newlines and relative indentation.
    """
        ...
    @classmethod
    def stripComment(cls, raw: str) -> Union[str]:
    """
    Strip comment characters from single- or multi-line comments. This attempts to separate the contents of the
    comment from the comment marks in general.
    """
        ...
    @classmethod
    def suffix(cls, s: str, separator: int) -> Union[str]:
    """
    @return suffix from the string starting after last occurrence of the given separator or empty string
    """
        ...
    @overload
    @classmethod
    def toBigInt(cls, s: str, failIfInvalid: bool=None, for_: str=None) -> Union[float]:
        ...
    @overload
    @classmethod
    def toBigInt(cls, s: str, intType: IntType, failIfInvalid: bool=None) -> Union[float]:
        ...
    @overload
    @classmethod
    def toBinary(cls, s: str) -> Union[any]:
        ...
    @overload
    @classmethod
    def toBinary(cls, s: str, binType: BinaryType, failIfInvalid: bool=None) -> Union[any]:
        ...
    @overload
    @classmethod
    def toBinary(cls, s: str, charset: str) -> Union[any]:
        ...
    @overload
    @classmethod
    def toBool(cls, s: str, failIfInvalid: bool=None) -> bool:
        ...
    @overload
    @classmethod
    def toBool(cls, s: str, failIfInvalid: bool=None, for_: str=None) -> bool:
        ...
    @overload
    @classmethod
    def toBool(cls, s: str, boolType: BooleanType, failIfInvalid: bool=None) -> bool:
        ...
    @overload
    @classmethod
    def toByte(cls, s: str, failIfInvalid: bool=None) -> Union[int]:
        ...
    @overload
    @classmethod
    def toByte(cls, s: str, failIfInvalid: bool=None, for_: str=None) -> Union[int]:
        ...
    @overload
    @classmethod
    def toChar(cls, s: str, failIfInvalid: bool=None, for_: str=None) -> Union[int]:
        ...
    @overload
    @classmethod
    def toChar(cls, s: str, charType: PrimitiveType, failIfInvalid: bool=None) -> Union[int]:
        ...
    @overload
    @classmethod
    def toDateTime(cls, s: str, failIfInvalid: bool=None, for_: str=None) -> Union[datetime]:
        ...
    @overload
    @classmethod
    def toDateTime(cls, s: str, dtType: DateTimeType, failIfInvalid: bool=None) -> Union[datetime]:
        ...
    @overload
    @classmethod
    def toDecimal(cls, s: str, failIfInvalid: bool=None, for_: str=None) -> Union[float]:
        ...
    @overload
    @classmethod
    def toDecimal(cls, s: str, decType: DecimalType, failIfInvalid: bool=None) -> Union[float]:
        ...
    @overload
    @classmethod
    def toDouble(cls, s: str, failIfInvalid: bool=None, for_: str=None) -> Union[float]:
        ...
    @overload
    @classmethod
    def toDouble(cls, s: str, dblType: DoubleType, failIfInvalid: bool=None) -> Union[float]:
        ...
    @overload
    @classmethod
    def toFloat(cls, s: str, failIfInvalid: bool=None, for_: str=None) -> Union[float]:
        ...
    @overload
    @classmethod
    def toFloat(cls, s: str, floatType: FloatType, failIfInvalid: bool=None) -> Union[float]:
        ...
    @overload
    @classmethod
    def toInt(cls, s: str, failIfInvalid: bool=None, for_: str=None) -> Union[int]:
        ...
    @overload
    @classmethod
    def toInt(cls, s: str, intType: IntType, failIfInvalid: bool=None) -> Union[int]:
        ...
    @overload
    @classmethod
    def toInt16(cls, s: str, failIfInvalid: bool=None, for_: str=None) -> Union[int]:
        ...
    @overload
    @classmethod
    def toInt16(cls, s: str, int16Type: Int16Type, failIfInvalid: bool=None) -> Union[int]:
        ...
    @overload
    @classmethod
    def toInt32(cls, s: str, failIfInvalid: bool=None, for_: str=None) -> Union[int]:
        ...
    @overload
    @classmethod
    def toInt32(cls, s: str, int32Type: Int32Type, failIfInvalid: bool=None) -> Union[int]:
        ...
    @overload
    @classmethod
    def toJson(cls, value: str, failIfInvalid: bool=None) -> Union[any]:
        ...
    @overload
    @classmethod
    def toJson(cls, value: str, failIfInvalid: bool=None, for_: str=None) -> Union[any]:
        ...
    @classmethod
    def toUtf16ByteArray(cls, s: str) -> Union[Array[int]]:
    """
    @return Avoid encoding overhead by direct conversion from String to byte[]. Different Strings should always
            have different byte arrays. This is used in cases where you quickly want the 1:1 byte[] representation
            of a String for something such as hashing.
    """
        ...
    @classmethod
    def toValue(cls, s: str, vt: ValueType, failIfInvalid: bool=None, for_: str=None) -> Union[Any]:
        ...
    @classmethod
    def transliterate(cls, s: str, wordsOnly: bool=None) -> Union[str]:
    """
    Convert any Unicode string into something resembling a US English string that might have similar pronunciation.
    Non-ASCII characters which have no transliteration are removed. ASCII (0-7F) characters remain as-is.
    
    This should only be used as a way to make Unicode strings 7-bit safe and with the understanding that not all
    characters will be represented in the output. The result may also be confusing to a human, especially for
    languages like Japanese that depend heavily on context.
    
    For example, "熊猫" maps to "Xiong Mao" and "गज" to "gj" (**not** "gaje").
    
    @param s
           string to transliterate
    @param wordsOnly
           if true, punctuation and whitespace characters in transliteration are discarded
    """
        ...
    @classmethod
    def trimRight(cls, s: str) -> Union[str]:
    """
    Remove any trailing whitespace from the string.
    """
        ...
    @classmethod
    def eachToken(cls, value: str, action: Callable[[Union[str], Union[float], Union[int]]]) -> None:
        ...
    @classmethod
    def obfuscate(cls, value: str, seed: int) -> Union[str]:
    """
    @return obfuscated string
    """
        ...
    @classmethod
    def obfuscateWord(cls, wordOrNumber: str, seed: int) -> Union[str]:
    """
    used for obfuscating a single word or number
    
    @return obfuscated word
    """
        ...
    @classmethod
    def hyphenToCamelCase(cls, str: str) -> Union[str]:
    """
    converts hyphenated string to camel case string
    """
        ...
    @classmethod
    def longestCommonSubsequence(cls, a: str, b: str) -> int:
    """
    Returns the longest common subsequence shared between the two provided strings.
    """
        ...
    @overload
    @classmethod
    def truncate(cls, s: str, maximum: int) -> Union[str]:
    """
    Truncates string to limit number of characters and replaces last character with ellipses (…) if actually
    truncated.
    
    @param s
           string to be truncated
    @param maximum
           length of resulting string
    """
        ...
    @overload
    @classmethod
    def truncate(cls, s: str, maximum: int, appendEllipses: bool=None) -> Union[str]:
    """
    Truncates string to limit number of characters and replaces last character with ellipses (…) if actually
    truncated.
    
    @param s
           string to be truncated
    @param maximum
           length of resulting string
    @param appendEllipses
           replace last character with ellipses if true
    """
        ...
    @classmethod
    def unescapeJava(cls, str: str) -> Union[str]:
        ...
    @overload
    @classmethod
    def unquote(cls, s: str) -> Union[str]:
        ...
    @overload
    @classmethod
    def unquote(cls, s: str, quoteChar: int) -> Union[str]:
        ...
    @classmethod
    def upperCase(cls, str: str) -> Union[str]:
    """
    Convert each character to upper-case. Non-letter characters are unchanged.
    
    @param str
           The string you want to process.
    @return The string with all characters capitalized.
    """
        ...
    @classmethod
    def isNum(cls, str: str) -> bool:
    """
    Check if a string is numeric
    """
        ...
    @classmethod
    def randomUuid(cls) -> Union[str]:
    """
    Generate a randomUuid string
    """
        ...
    @classmethod
    def isUuid(cls, uuid: str) -> bool:
    """
    Is the given string a uuid
    """
        ...
    @classmethod
    def compactUuid(cls) -> Union[str]:
    """
    Produce a UUID encoded in a shorter number of characters.
    This is done by creating an ASCII string using base-64 encoding of the binary data rather
    then hex with separators, making the result 22 characters long instead of 36
    (for example "mNNYBo9jSjmm0Tsu3f6UaA" instead of "0433ed86-2f92-49d9-a706-9dac4363baf2").
    
    @return compact string encoding
    """
        ...
    @classmethod
    def encodeValue(cls, value: str, separator: int) -> Union[str]:
    """
    Encodes a value to replace the separator character such that the result does not contain any instances of that
    character. Values can be decoded using decode.
    
    @param value
           value to be encoded
    @param separator
           separator character to replace
    @return input value encoded to not contain the separator character
    """
        ...
    @classmethod
    def decodeValue(cls, value: str, separator: int) -> Union[str]:
    """
    Decodes a value encoded with encodeValue.
    
    @param value
           value to be decoded
    @param separator
           separator character indicated when the value was encoded
    @return original value that was encoded
    """
        ...
    @classmethod
    def escapeAndQuote(cls, str: str) -> Union[str]:
        ...
    @classmethod
    def needsEscape(cls, b: int) -> bool:
        ...
    @classmethod
    def lookupEscapeChar(cls, b: int) -> int:
        ...
    @classmethod
    def lookupUnescapeChar(cls, b: int) -> int:
        ...
    @classmethod
    def escapeChar(cls, b: int) -> Union[str]:
        ...
    @overload
    @classmethod
    def identifier(cls, id: str) -> Union[str]:
    """
    Convenience overload that defaults to a "f_" prefix because usually identifiers are used for field names.
    
    @param id
           possibly invalid Type System identifier
    @return valid Type System identifier that can be parsed by DSL
    """
        ...
    @overload
    @classmethod
    def identifier(cls, id: str, prefix: str) -> Union[str]:
    """
    Ensures that the provided identifier String is parsable by Type System DSL. A valid identifier is defined by
    {@link Dsl#ID_RE}. Another way of describing a valid identifier is a letter or underscore followed by a possibly
    empty sequence of letters, underscores, or digits.
    ```
    Str.identifier("2016-10-14T01:00:01", "c_") == "c_2016_10_14T01_00_01"
    Str.identifier("985743-2314", "c_") == "c_985743_2314"
    Str.identifier("567385147c4", "c_") == "c_567385147c4"
    Str.identifier("validFieldName", "c_") == "validFieldName"
    Str.identifier("F", "c_") == "F"
    Str.identifier("f", "c_") == "f"
    Str.identifier("_", "c_") == "_"
    ```
    
    @param id
           possibly invalid Type System identifier
    @param prefix
           if the provided field name needs to be prefixed to be valid
    @return valid Type System identifier that can be parsed by DSL
    """
        ...
    @classmethod
    def filename(cls, path: str) -> Union[str]:
    """
    @return extracted filename from a file system path
    """
        ...
    @classmethod
    def parentDirectory(cls, path: str) -> Union[str]:
    """
    @return extracted parent directory from a file system path
    """
        ...
    @classmethod
    def wordAt(cls, lineContent: str, index: int) -> Union[str]:
    """
    @return word at given index.
    @param lineContent
           the string content of the line that need to find the word at indexed location.
    @param index
           zero-based index for the word in the lineContent. As long as the index is within the range of the word,
           the same word will be returned.
           E.g., with lineContent 'hello world!', the word 'world' will be returned for index 6-10.
    """
        ...
    @classmethod
    def wordRangeAt(cls, lineContent: str, index: int) -> Union[Pair[int, int]]:
    """
    Return the start index (inclusive) and ending index (exclusive) of word at given index (0-based).
    dot on the left side of a word is inclusive, dot on the right side of a word is exclusive.
    """
        ...
    @classmethod
    def trim(cls, s: str) -> Union[str]:
    """
    Return the string with leading and trailing spaces removed. If the string is null, return null.
    """
        ...
    @classmethod
    def removeBlankLines(cls, s: str) -> Union[str]:
    """
    Return the string with any empty lines removed.
    """
        ...
    @classmethod
    def compressSnappy(cls, s: str) -> Union[any]:
    """
    Produce the binary result of compressing this string as UTF-8 using the Snappy compression.
    
    @see Bin#uncompressSnappyString
    """
        ...
    @classmethod
    def compressGzip(cls, s: str) -> Union[any]:
    """
    Produce the binary result of compressing this string as UTF-8 using the Gzip compression.
    
    @see Bin#uncompressGzipString
    """
        ...

