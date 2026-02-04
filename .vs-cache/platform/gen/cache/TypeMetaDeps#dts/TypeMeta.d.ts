// TypeScript definitions for the C3 type TypeMeta

/**
 * Type objects contain information about defined types. I.e., metadata is used to describe the declared types provided
 * by the platform or defined for an application.
 *
 * Types support both inheritance and composition. Inheritance is declared with the `extends` keyword. Only single
 * inheritance is possible. This approach is typically used for entity types as typically instances of all types from a
 * single inheritance tree are persisted in the same table.
 *
 * Composition is declared with the `mixes` keyword and multiple mixins may be used. However, only non-entity types may
 * be mixed in. As mentioned above entity types typically participate in inheritance.
 *
 * Any type may declare fields, but only {@link Obj} has built-in support for them. Most types are sub-types of Obj,
 * but types that explicitly mixin {@link Value} are opting out of Obj support.
 *
 * For general type system information, see {@link ts-overview.c3doc.md Type System}.
 *
 * @see Type
 * @see Obj
 *
 * @remarks this represents a value passed to a method that expects an instance of TypeMeta
 */
declare interface ITypeMeta {

  /**
   * Source file Pkg.Path a C3 Type declaration [.c3typ].
   */
  declaredPkgPath?: string | null;

  /**
   * Source line number in a C3 Type declaration [.c3typ] file starting with 1 where this metadata element is declared.
   */
  declaredSrcLine?: number | null;

  /**
   * Source character position in a line in a C3 Type declaration [.c3typ] file starting with 1 where this metadata
   * element is declared.
   */
  declaredSrcCharInLine?: number | null;

  /**
   * C3 application package this Type System element _belongs_ to; note that this maybe different from the package
   * where this type-system element was declared.
   *
   * @see #package
   */
  pkg: IPkg;

  /**
   * SDK json representing instance of this type
   */
  json?: any;

  /**
   * The name of this type, which will be unique within its package. For most types, there will be simply the declared
   * name (`User`). For nested inner types, this will include the parent type name (`Parent.Child`). For bound types,
   * the bindings will be incorporated into the name (`NormTimeseries<float>`).
   *
   * Note that #name could be null for dynamic types that are not part of any package.
   *
   * @see #prototypeName
   * @see #innerTypeName
   * @see #qname
   */
  name?: string | null;

  /**
   * The map of variable bindings applied.
   *
   * It is possible to have bind variable re-named. I.e. to have varBinding that itself is a variable of different name.
   */
  varBindings?: C3.Map<string | null, ValueType | null> | {[key: string | null]: IValueType | null};

  /**
   * The set of annotations defined on this element of metadata represented as json value.
   */
  annotationsJson?: any | null;

  /**
   * The raw textual documentation associated with this piece of metadata. This will have the original comment
   * characters removed, but otherwise be a simple block of text with the original formatting retained. Only
   * documentation comments (starting with `/**`) will be used for this purpose and only when immediately
   * preceding the structure they document.
   */
  doc?: string | null;

  docSingleLine?: boolean;

  /**
   * All comments associated with this type system element.
   */
  comments?: C3.Array<DslComment | null> | Array<IDslComment | null>;

  /**
   * True if this type is declared `native`. This means that its implementation is particular to a certain language
   * and perhaps even {@Link Action.Requirement}, and is not available in others.
   *
   * ```type
   * native type BrowserUtil
   * native py remix type DataFrame
   * ```
   *
   * @see #isNativeRemix
   */
  declaredNative?: boolean;

  /**
   * True if this type is declared as entity type. This means it may not be persisted in the database. Entity types
   * implicitly mixin {@link Persistable}.
   *
   * @see Persistable
   */
  declaredEntity?: boolean;

  /**
   * If true, this type is a declared as enum type:
   * ```type
   * enum type Colors { RED YELLOW GREEN BLUE }
   * ```
   *
   * @see Enum
   */
  declaredEnum?: boolean;

  /**
   * If set, this type is declared as a union type:
   * ```type
   * union type Stringish = string | [string]
   * ```
   *
   * @see Union
   */
  declaredUnionAlts?: IAnyOfType | null;

  /**
   * If true, this type is a "duck type". I.e. mixin pattern in any other type that is matching to this duck type will
   * be replaced by this type.
   *
   * E.g. type-system among others defines following duck types:
   * * `abstract entity duck type CachedPersistable mixes Cached`
   * * `duck type StrStream mixes Stream<string>`
   *
   * This means any entity type that is also `Cached` will actually mixin `CachedPersistable` and any method that is
   * returning `stream<string>` will actually return instance of `StrStream`
   *
   * @see #isDuckType
   */
  declaredDuck?: boolean;

  /**
   * True if this type is declared abstract. This means it may not be instantiated separately, but can be a mixin of
   * another type.
   *
   * Abstract methods declared in mixin types of an abstract type continue to be abstract. Normally abstract methods are
   * claimed by a sup-type unless those methods are explicitly re-declared as abstract using `<myMethod>: abstract ~`
   * syntax.
   *
   * Note that mixin of abstract type does not make sub-type automatically be abstract.  If such a type is also
   * abstract, it must be explicitly marked.
   *
   * @see FieldType#abstract
   */
  declaredAbstract?: boolean;

  /**
   * True if this type's methods are automatically inline. This is a **shortcut** for marking every "declared" method
   * as *inline* and these methods will be inline in all of the subtypes of the current type even if the subtype may
   * not be inline. This should only be used for performance critical types whose methods never need authorization and
   * don't expect any support for argument or return value processing.
   *
   * Please note that **overridden methods in an inline type DO NOT automatically become inline.** e.g
   * ```c3typ
   * type Boo {
   *   bar: function()
   *   baz: member function()
   * }
   *
   * inline type Foo mixes Boo {
   *    bar: inline ~
   *    baz: ~
   * }
   * ```
   * In the above code, Foo.bar is inline while Foo.baz is not. Boo.bar and Boo.baz both are not inline.
   *
   * @see #isInline
   * @see MethodType#inline
   * @see MethodType#isInline
   */
  declaredInline?: boolean;

  /**
   * True if this type is declared final. This means that none of its data fields or methods may be changed by types
   * that mix it in. Note that a type itself may not be final, but may also declare certain fields final.
   *
   * @see FieldType#isFinal
   * @see Method#isFinal
   * @see #notMixable
   */
  declaredFinal?: boolean;

  /**
   * True if this type is a private type. This means that it may not be used outside of its declaring package.
   *
   * @see FieldType#private
   */
  declaredPrivate?: boolean;

  /**
   * Indicates that a type is extendable.  Extendable types allow the creation of a type hierarchy where more specific
   * types extend less specific type (e.g. Hospital extends Facility extends FixedAsset).
   *
   * Extendable types are typically entity types and shares the same database table / storage and base type can be
   * queried to retrieve all instances of all sub-types.
   *
   * Setting this type modifier implicitly mixes {@link Extendable}.
   *
   * @see #declaredNotExtendable
   */
  declaredExtendable?: boolean;

  /**
   * True if this type may not be further extended. Note that this only makes sense for types which themselves extend
   * a type (marked as `extendable`), but don't allow further extension.
   *
   * ```type
   * extendable entity type Fruit
   * type StoneFruit extends Fruit
   * not extendable type Cherry extends StoneFruit
   * ```
   * In the example, above Cherry may not further be extended.
   *
   * @see #declaredExtendable
   */
  declaredNotExtendable?: boolean;

  /**
   * Reference to a base type this type extends.
   *
   * @see #baseType
   * @see #isExtendable
   * @see #isNotExtendable
   */
  declaredExtendsRefType?: IDeclaredReferenceType | null;

  /**
   * True if this type may not be mixed into any other types outside the declaring package. This is used by certain
   * types that the system needs to know cannot have new sub-types declared.
   */
  declaredNotMixable?: boolean;

  /**
   * References to other types that this type directly mixes in.
   *
   * @see #mixins
   * @see #inNotMixable
   */
  declaredMixinRefTypes?: C3.Array<DeclaredReferenceType | null> | Array<IDeclaredReferenceType | null>;

  /**
   * If true, this type is a remix of one with the same name in one of the packages this package depends on.
   *
   * A remix means the definitions augment the base definitions when provisioned. Otherwise, it is an error to have the
   * same type defined multiple times within the same tag (aka deployment unit). I.e. given package can not simply
   * declare an new type with the same name as in one of it's depending packages.
   *
   * @see #isNotRemixable
   */
  declaredRemix?: boolean;

  /**
   * True if this type may not be remixed. This is used by certain types that the system needs to know cannot be
   * changed from outside the package.
   */
  declaredNotRemixable?: boolean;

  /**
   * If this type was remixed by one or more remixes and type is specifying an alias, then all the aliases.
   * ```type
   * remix type Foo as OtherFoo
   * ```
   * In the above example, the remixed type is "Foo" with an alias "OtherFoo".
   */
  declaredRemixAlias?: string | null;

  /**
   * For extendable types, the key used to identify the type's position in the hierarchy.  The value contributes to
   * the {@link Extendable.typeIdent} field so that an instance's leaf type can be determined without having
   * {@link Obj.type} field value.
   */
  declaredTypeKey?: string | null;

  /**
   * Declared and overridden fields and methods on this type.
   *
   * @see declaredFieldTypesByName
   * @see declaredFieldType
   * @see overriddenFieldTypes
   */
  declaredFieldTypes?: C3.Array<DeclaredFieldType | null> | Array<IDeclaredFieldType | null>;

  /**
   * Types defined directly within this type. For example {@link Ann} has inner types for all possible annotations.
   */
  declaredInnerTypes?: C3.Array<any> | Array<any>;

  /**
   * Types that are implementation language native remixes of this type.
   */
  declaredNativeRemixes?: C3.Map<string, any> | {[key: string]: any};

  /**
   * Types that are remixes of this type along with pkg they were declared in.
   * For example, if package "app", depends on "industry", which depends on "foundation", and `Facility` was defined in
   * "foundation" and remixed in "app", then
   * ```js
   * C3.type("Facility").declaredRemixes.size() == 1
   * C3.type("Facility").declaredRemix == false
   * C3.type("Facility").package == 'foundation'
   * C3.type("Facility").declaredRemixes.keys().collect() == ['app']
   * C3.type("Facility").declaredRemixes.get("app").declaredRemix == true
   * C3.type("Facility").declaredRemixes.get("app").package == 'app'
   * ```
   *
   * @see #declaredRemix
   */
  declaredRemixes?: C3.Map<string, any> | {[key: string]: any};

  /**
   * Method(s) implementation source code. The key is the language name and the value is the source code for all
   * functions implemented in that language on this type.
   */
  declaredSourceCode?: C3.Map<string | null, string | null> | {[key: string | null]: string | null};

  /**
   * The list of unbound variable declarations and any restrictions on them.
   */
  declaredVars?: C3.Array<VarReferenceType | null> | Array<IVarReferenceType | null>;

  /**
   * _meta_ restriction for this type.
   */
  declaredMetaRestriction?: string | null;

  /**
   * If this is a native remix type, the {@Link Action.Requirement} for which the native implementation is defined.
   *
   * ```type
   * py native remix type DataFrame
   * ```
   *
   * The native remix type PyDataFrame is native to the "py" {@Link Action.Requirement}
   */
  declaredNativeRequirement?: string | null;

  /**
   * Name of the underlying schema (e.g. database table name)
   */
  declaredSchemaName?: string | null;

  /**
   * A type may globally specify a default implementation language and {@Link Action.Requirement}:
   *
   * ```type
   * js-browser type ConsoleGrid
   * ```
   *
   * This means that all methods without explicit claims, both declared and inherited abstract, are claimed for
   * the type's default {@Link Action.Requirement}, "js-browser" in this case. This is very convenient for types with lots of methods
   * all of which are implemented in the same language.
   *
   * @see MethodType#actionRequirementNames
   */
  defaultActionRequirement?: string | null;

  _staticsCache?: any;

  _sourceCodeCache?: any;
}

/**
 * Type objects contain information about defined types. I.e., metadata is used to describe the declared types provided
 * by the platform or defined for an application.
 *
 * Types support both inheritance and composition. Inheritance is declared with the `extends` keyword. Only single
 * inheritance is possible. This approach is typically used for entity types as typically instances of all types from a
 * single inheritance tree are persisted in the same table.
 *
 * Composition is declared with the `mixes` keyword and multiple mixins may be used. However, only non-entity types may
 * be mixed in. As mentioned above entity types typically participate in inheritance.
 *
 * Any type may declare fields, but only {@link Obj} has built-in support for them. Most types are sub-types of Obj,
 * but types that explicitly mixin {@link Value} are opting out of Obj support.
 *
 * For general type system information, see {@link ts-overview.c3doc.md Type System}.
 *
 * @see Type
 * @see Obj
 *
 * @remarks this represents a made instance of TypeMeta
 */
declare class TypeMeta extends Obj {

  /**
   * Source file Pkg.Path a C3 Type declaration [.c3typ].
   */
  readonly declaredPkgPath?: string | null;
  withDeclaredPkgPath(declaredPkgPath: string | null): TypeMeta;

  /**
   * Source line number in a C3 Type declaration [.c3typ] file starting with 1 where this metadata element is declared.
   */
  readonly declaredSrcLine?: number | null;
  withDeclaredSrcLine(declaredSrcLine: number | null): TypeMeta;

  /**
   * Source character position in a line in a C3 Type declaration [.c3typ] file starting with 1 where this metadata
   * element is declared.
   */
  readonly declaredSrcCharInLine?: number | null;
  withDeclaredSrcCharInLine(declaredSrcCharInLine: number | null): TypeMeta;

  /**
   * C3 application package this Type System element _belongs_ to; note that this maybe different from the package
   * where this type-system element was declared.
   *
   * @see #package
   */
  readonly pkg: Pkg;
  withPkg(pkg: IPkg): TypeMeta;

  /**
   * SDK json representing instance of this type
   */
  readonly json?: any;
  withJson(json: any): TypeMeta;

  /**
   * The name of this type, which will be unique within its package. For most types, there will be simply the declared
   * name (`User`). For nested inner types, this will include the parent type name (`Parent.Child`). For bound types,
   * the bindings will be incorporated into the name (`NormTimeseries<float>`).
   *
   * Note that #name could be null for dynamic types that are not part of any package.
   *
   * @see #prototypeName
   * @see #innerTypeName
   * @see #qname
   */
  readonly name?: string | null;
  withName(name: string | null): TypeMeta;

  /**
   * The map of variable bindings applied.
   *
   * It is possible to have bind variable re-named. I.e. to have varBinding that itself is a variable of different name.
   */
  readonly varBindings?: C3.Map<string | null, ValueType | null>;
  withVarBindings(varBindings: C3.Map<string | null, ValueType | null> | {[key: string | null]: IValueType | null}): TypeMeta;

  /**
   * The set of annotations defined on this element of metadata represented as json value.
   */
  readonly annotationsJson?: any | null;
  withAnnotationsJson(annotationsJson: any | null): TypeMeta;

  /**
   * The raw textual documentation associated with this piece of metadata. This will have the original comment
   * characters removed, but otherwise be a simple block of text with the original formatting retained. Only
   * documentation comments (starting with `/**`) will be used for this purpose and only when immediately
   * preceding the structure they document.
   */
  readonly doc?: string | null;
  withDoc(doc: string | null): TypeMeta;

  readonly docSingleLine?: boolean;
  withDocSingleLine(docSingleLine: boolean): TypeMeta;

  /**
   * All comments associated with this type system element.
   */
  readonly comments?: C3.Array<DslComment | null>;
  withComments(comments: C3.Array<DslComment | null> | Array<IDslComment | null>): TypeMeta;

  /**
   * True if this type is declared `native`. This means that its implementation is particular to a certain language
   * and perhaps even {@Link Action.Requirement}, and is not available in others.
   *
   * ```type
   * native type BrowserUtil
   * native py remix type DataFrame
   * ```
   *
   * @see #isNativeRemix
   */
  readonly declaredNative?: boolean;
  withDeclaredNative(declaredNative: boolean): TypeMeta;

  /**
   * True if this type is declared as entity type. This means it may not be persisted in the database. Entity types
   * implicitly mixin {@link Persistable}.
   *
   * @see Persistable
   */
  readonly declaredEntity?: boolean;
  withDeclaredEntity(declaredEntity: boolean): TypeMeta;

  /**
   * If true, this type is a declared as enum type:
   * ```type
   * enum type Colors { RED YELLOW GREEN BLUE }
   * ```
   *
   * @see Enum
   */
  readonly declaredEnum?: boolean;
  withDeclaredEnum(declaredEnum: boolean): TypeMeta;

  /**
   * If set, this type is declared as a union type:
   * ```type
   * union type Stringish = string | [string]
   * ```
   *
   * @see Union
   */
  readonly declaredUnionAlts?: AnyOfType | null;
  withDeclaredUnionAlts(declaredUnionAlts: IAnyOfType | null): TypeMeta;

  /**
   * If true, this type is a "duck type". I.e. mixin pattern in any other type that is matching to this duck type will
   * be replaced by this type.
   *
   * E.g. type-system among others defines following duck types:
   * * `abstract entity duck type CachedPersistable mixes Cached`
   * * `duck type StrStream mixes Stream<string>`
   *
   * This means any entity type that is also `Cached` will actually mixin `CachedPersistable` and any method that is
   * returning `stream<string>` will actually return instance of `StrStream`
   *
   * @see #isDuckType
   */
  readonly declaredDuck?: boolean;
  withDeclaredDuck(declaredDuck: boolean): TypeMeta;

  /**
   * True if this type is declared abstract. This means it may not be instantiated separately, but can be a mixin of
   * another type.
   *
   * Abstract methods declared in mixin types of an abstract type continue to be abstract. Normally abstract methods are
   * claimed by a sup-type unless those methods are explicitly re-declared as abstract using `<myMethod>: abstract ~`
   * syntax.
   *
   * Note that mixin of abstract type does not make sub-type automatically be abstract.  If such a type is also
   * abstract, it must be explicitly marked.
   *
   * @see FieldType#abstract
   */
  readonly declaredAbstract?: boolean;
  withDeclaredAbstract(declaredAbstract: boolean): TypeMeta;

  /**
   * True if this type's methods are automatically inline. This is a **shortcut** for marking every "declared" method
   * as *inline* and these methods will be inline in all of the subtypes of the current type even if the subtype may
   * not be inline. This should only be used for performance critical types whose methods never need authorization and
   * don't expect any support for argument or return value processing.
   *
   * Please note that **overridden methods in an inline type DO NOT automatically become inline.** e.g
   * ```c3typ
   * type Boo {
   *   bar: function()
   *   baz: member function()
   * }
   *
   * inline type Foo mixes Boo {
   *    bar: inline ~
   *    baz: ~
   * }
   * ```
   * In the above code, Foo.bar is inline while Foo.baz is not. Boo.bar and Boo.baz both are not inline.
   *
   * @see #isInline
   * @see MethodType#inline
   * @see MethodType#isInline
   */
  readonly declaredInline?: boolean;
  withDeclaredInline(declaredInline: boolean): TypeMeta;

  /**
   * True if this type is declared final. This means that none of its data fields or methods may be changed by types
   * that mix it in. Note that a type itself may not be final, but may also declare certain fields final.
   *
   * @see FieldType#isFinal
   * @see Method#isFinal
   * @see #notMixable
   */
  readonly declaredFinal?: boolean;
  withDeclaredFinal(declaredFinal: boolean): TypeMeta;

  /**
   * True if this type is a private type. This means that it may not be used outside of its declaring package.
   *
   * @see FieldType#private
   */
  readonly declaredPrivate?: boolean;
  withDeclaredPrivate(declaredPrivate: boolean): TypeMeta;

  /**
   * Indicates that a type is extendable.  Extendable types allow the creation of a type hierarchy where more specific
   * types extend less specific type (e.g. Hospital extends Facility extends FixedAsset).
   *
   * Extendable types are typically entity types and shares the same database table / storage and base type can be
   * queried to retrieve all instances of all sub-types.
   *
   * Setting this type modifier implicitly mixes {@link Extendable}.
   *
   * @see #declaredNotExtendable
   */
  readonly declaredExtendable?: boolean;
  withDeclaredExtendable(declaredExtendable: boolean): TypeMeta;

  /**
   * True if this type may not be further extended. Note that this only makes sense for types which themselves extend
   * a type (marked as `extendable`), but don't allow further extension.
   *
   * ```type
   * extendable entity type Fruit
   * type StoneFruit extends Fruit
   * not extendable type Cherry extends StoneFruit
   * ```
   * In the example, above Cherry may not further be extended.
   *
   * @see #declaredExtendable
   */
  readonly declaredNotExtendable?: boolean;
  withDeclaredNotExtendable(declaredNotExtendable: boolean): TypeMeta;

  /**
   * Reference to a base type this type extends.
   *
   * @see #baseType
   * @see #isExtendable
   * @see #isNotExtendable
   */
  readonly declaredExtendsRefType?: DeclaredReferenceType | null;
  withDeclaredExtendsRefType(declaredExtendsRefType: IDeclaredReferenceType | null): TypeMeta;

  /**
   * True if this type may not be mixed into any other types outside the declaring package. This is used by certain
   * types that the system needs to know cannot have new sub-types declared.
   */
  readonly declaredNotMixable?: boolean;
  withDeclaredNotMixable(declaredNotMixable: boolean): TypeMeta;

  /**
   * References to other types that this type directly mixes in.
   *
   * @see #mixins
   * @see #inNotMixable
   */
  readonly declaredMixinRefTypes?: C3.Array<DeclaredReferenceType | null>;
  withDeclaredMixinRefTypes(declaredMixinRefTypes: C3.Array<DeclaredReferenceType | null> | Array<IDeclaredReferenceType | null>): TypeMeta;

  /**
   * If true, this type is a remix of one with the same name in one of the packages this package depends on.
   *
   * A remix means the definitions augment the base definitions when provisioned. Otherwise, it is an error to have the
   * same type defined multiple times within the same tag (aka deployment unit). I.e. given package can not simply
   * declare an new type with the same name as in one of it's depending packages.
   *
   * @see #isNotRemixable
   */
  readonly declaredRemix?: boolean;
  withDeclaredRemix(declaredRemix: boolean): TypeMeta;

  /**
   * True if this type may not be remixed. This is used by certain types that the system needs to know cannot be
   * changed from outside the package.
   */
  readonly declaredNotRemixable?: boolean;
  withDeclaredNotRemixable(declaredNotRemixable: boolean): TypeMeta;

  /**
   * If this type was remixed by one or more remixes and type is specifying an alias, then all the aliases.
   * ```type
   * remix type Foo as OtherFoo
   * ```
   * In the above example, the remixed type is "Foo" with an alias "OtherFoo".
   */
  readonly declaredRemixAlias?: string | null;
  withDeclaredRemixAlias(declaredRemixAlias: string | null): TypeMeta;

  /**
   * For extendable types, the key used to identify the type's position in the hierarchy.  The value contributes to
   * the {@link Extendable.typeIdent} field so that an instance's leaf type can be determined without having
   * {@link Obj.type} field value.
   */
  readonly declaredTypeKey?: string | null;
  withDeclaredTypeKey(declaredTypeKey: string | null): TypeMeta;

  /**
   * Declared and overridden fields and methods on this type.
   *
   * @see declaredFieldTypesByName
   * @see declaredFieldType
   * @see overriddenFieldTypes
   */
  readonly declaredFieldTypes?: C3.Array<DeclaredFieldType | null>;
  withDeclaredFieldTypes(declaredFieldTypes: C3.Array<DeclaredFieldType | null> | Array<IDeclaredFieldType | null>): TypeMeta;

  /**
   * Types defined directly within this type. For example {@link Ann} has inner types for all possible annotations.
   */
  readonly declaredInnerTypes?: C3.Array<any>;
  withDeclaredInnerTypes(declaredInnerTypes: C3.Array<any> | Array<any>): TypeMeta;

  /**
   * Types that are implementation language native remixes of this type.
   */
  readonly declaredNativeRemixes?: C3.Map<string, any>;
  withDeclaredNativeRemixes(declaredNativeRemixes: C3.Map<string, any> | {[key: string]: any}): TypeMeta;

  /**
   * Types that are remixes of this type along with pkg they were declared in.
   * For example, if package "app", depends on "industry", which depends on "foundation", and `Facility` was defined in
   * "foundation" and remixed in "app", then
   * ```js
   * C3.type("Facility").declaredRemixes.size() == 1
   * C3.type("Facility").declaredRemix == false
   * C3.type("Facility").package == 'foundation'
   * C3.type("Facility").declaredRemixes.keys().collect() == ['app']
   * C3.type("Facility").declaredRemixes.get("app").declaredRemix == true
   * C3.type("Facility").declaredRemixes.get("app").package == 'app'
   * ```
   *
   * @see #declaredRemix
   */
  readonly declaredRemixes?: C3.Map<string, any>;
  withDeclaredRemixes(declaredRemixes: C3.Map<string, any> | {[key: string]: any}): TypeMeta;

  /**
   * Method(s) implementation source code. The key is the language name and the value is the source code for all
   * functions implemented in that language on this type.
   */
  readonly declaredSourceCode?: C3.Map<string | null, string | null>;
  withDeclaredSourceCode(declaredSourceCode: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): TypeMeta;

  /**
   * The list of unbound variable declarations and any restrictions on them.
   */
  readonly declaredVars?: C3.Array<VarReferenceType | null>;
  withDeclaredVars(declaredVars: C3.Array<VarReferenceType | null> | Array<IVarReferenceType | null>): TypeMeta;

  /**
   * _meta_ restriction for this type.
   */
  readonly declaredMetaRestriction?: string | null;
  withDeclaredMetaRestriction(declaredMetaRestriction: string | null): TypeMeta;

  /**
   * If this is a native remix type, the {@Link Action.Requirement} for which the native implementation is defined.
   *
   * ```type
   * py native remix type DataFrame
   * ```
   *
   * The native remix type PyDataFrame is native to the "py" {@Link Action.Requirement}
   */
  readonly declaredNativeRequirement?: string | null;
  withDeclaredNativeRequirement(declaredNativeRequirement: string | null): TypeMeta;

  /**
   * Name of the underlying schema (e.g. database table name)
   */
  readonly declaredSchemaName?: string | null;
  withDeclaredSchemaName(declaredSchemaName: string | null): TypeMeta;

  /**
   * A type may globally specify a default implementation language and {@Link Action.Requirement}:
   *
   * ```type
   * js-browser type ConsoleGrid
   * ```
   *
   * This means that all methods without explicit claims, both declared and inherited abstract, are claimed for
   * the type's default {@Link Action.Requirement}, "js-browser" in this case. This is very convenient for types with lots of methods
   * all of which are implemented in the same language.
   *
   * @see MethodType#actionRequirementNames
   */
  readonly defaultActionRequirement?: string | null;
  withDefaultActionRequirement(defaultActionRequirement: string | null): TypeMeta;

  readonly _staticsCache?: any;
  with_staticsCache(_staticsCache: any): TypeMeta;

  readonly _sourceCodeCache?: any;
  with_sourceCodeCache(_sourceCodeCache: any): TypeMeta;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): TypeMeta;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
   * called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
   * an instance of the correct type.
   *
   * @see #toJson
   */
  static fromJson(json: any | null): TypeMeta | null;

  /**
   * Load the JSON-based representation of TypeMeta.
   */
  static fromJson(json: any | null, pkg: Pkg): TypeMeta | null;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
   * called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
   * an instance of the correct type.
   *
   * @see #toJsonString
   */
  static fromJsonString(json: string | null): TypeMeta | null;

  /**
   * Load the JSON-based representation of TypeMeta.
   */
  static fromJsonString(json: string | null, pkg: Pkg): TypeMeta | null;

  /**
   * Load the XML-based representation and reconstruct the corresponding object.
   *
   * fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
   * may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
   * isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
   * will return an instance of the correct type.
   *
   * @see #toXmlString
   */
  static fromXmlString(xml: string | null): TypeMeta | null;

  /**
   * Load the XML-based representation of TypeMeta.
   */
  static fromXmlString(xml: string | null, pkg: Pkg): TypeMeta | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): TypeMeta | null;

  /**
   * Produce a checksum that can easily be compared to determine if two objects are definitely different. Note that
   * there is a slight possibility that two objects with the same fingerprint will actually differ.
   *
   * The fingerprint recurses into field values, including collections and referenced Objs. The handling of nested
   * {@link Identified identified} references (typically entities) differ in that _only_ the `id` field is included
   * unless the allIdentifiedRefFields option is specified.
   *
   * If the object graph may contain recursive embedded object references, the trackRecursiveRefs option may be used.
   * However, maintaining the list of visited objects is costly so this should not be done unnecessarily.
   *
   * @param allIdentifiedRefFields
   *           if `true`, fingerprint individual fields of persistable references, not just the `id`
   * @param trackRecursiveRefs
   *           if `true`, a set of referenced objects is maintained to avoid infinite recursion
   * @param traversedRefs
   *           only considered together with trackRecursiveRefs and if provided then all traversed references are
   *           checked against and added to it
   * @return integer fingerprint
   *
   * @see https://en.wikipedia.org/wiki/Fingerprint_(computing)
   */
  fingerprint(allIdentifiedRefFields?: boolean, trackRecursiveRefs?: boolean, traversedRefs?: SetBuilder<Obj | null> | null): number;

  /**
   * Whether the specified instance represents exactly the same object as this instance.
   */
  isSame(other: Obj | null): boolean;

  /**
   * Whether the specified type represents exactly the same instance as this type. This is the strictest form of
   * compatibility, representing identical declaration.
   *
   * @see #isCoercible
   */
  isSame(other: Type | null): boolean;

  /**
   * Whether the specified type represents exactly the same instance as this type. This is the strictest form of
   * compatibility, representing identical declaration.
   *
   * @see #isCoercible
   */
  isSame(other: string | null): boolean;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): TypeMeta;

  /**
   * Result of this function call is a copy of current instance with all fields replaced based on results of the
   * `mapper` invocation.
   *
   * @param spec
   *           which fields to include
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): TypeMeta;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<TypeMeta | null>;

  /**
   * Result of this function call is a copy of current instance with all fields replaced based on results of the
   * asynchronous `mapper` invocation.
   *
   * @param spec
   *           which fields to include
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<TypeMeta | null>;

  /**
   * Result of this function call is a copy of current instance with specified field value replaced based on result of
   * the `mapper` invocation.
   * @param field
   *           field being mapped
   * @param includeEmpty
   *           if set, invokes mapper for fields with empty value
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): TypeMeta;

  /**
   * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
   * lambda application.
   *
   * Result of this function call is a copy of current instance with all references replaced based on results of the
   * `mapper` invocation.
   *
   * @param action
   *           function to be executed for each pair of field type and Obj instance
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): TypeMeta;

  /**
   * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
   * lambda application.
   *
   * Result of this function call is a copy of current instance with all references replaced based on results of the
   * `mapper` invocation.
   *
   * @param includeEmpty
   *           if `true` will also process references with `null` / "Empty" references
   * @param mapper
   *           function to be executed for each pair of field type and Obj instance for producing new reference value
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): TypeMeta;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): TypeMeta;

  /**
   * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
   * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           name of the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, do not attempt to convert the value to match the field's type
   * @return new Obj
   *
   * @see #withoutField
   * @see #defaultField
   */
  withField(field: string, value: any, doNotConvert?: boolean): TypeMeta;

  /**
   * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
   * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, do not attempt to convert the value to match the field's type
   * @return new Obj
   *
   * @see #withoutField
   * @see #defaultField
   */
  withField(field: FieldType, value: any, doNotConvert?: boolean): TypeMeta;

  /**
   * Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
   * defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
   *
   * @param fields
   *           map of field names/values
   * @param doNotConvert
   *           if true, attempt to convert the values to match the fields' type
   * @return new Obj
   */
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): TypeMeta;

  /**
   * Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
   * If you would like to #unsetField, you should call #withoutFieldAtPath instead.
   *
   * Immutable objects may return the same instance if the field being set does not actually represent a
   * change to the existing object.
   *
   * @param path
   *           path to set value at
   * @param value
   *           value to set
   * @param doNotConvert
   *           if true, attempt to convert the values to match the fields' type
   * @param doNotCreateIfMissing
   *           true indicates that any empty reference along the path will not set the value
   * @return new Obj
   */
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): TypeMeta;

  /**
   * Builds a new Obj without the specified path field.
   *
   * Immutable objects may return the same instance if the field being removed does not actually represent a
   * change to the existing object.
   *
   * @param path
   *           path for field to remove
   * @return new Obj
   *
   * @see #withFieldAtPath
   * @see #withoutField
   */
  withoutFieldAtPath(path: string): TypeMeta;

  /**
   * Builds a new Obj, removing the field with the provided name.
   *
   * Immutable objects may return the same instance if the field being removed is not present in the existing object.
   *
   * @param field
   *           name of the field to remove
   * @return new Obj with removed field
   *
   * @see #unsetField
   * @see #removeField
   */
  withoutField(field: string | null): TypeMeta;

  /**
   * Builds a new Obj, removing the field with the provided field type.
   *
   * Immutable objects may return the same instance if the field being removed is not present in the existing object.
   *
   * @param field
   *           name of the field to remove
   * @return new Obj with removed field
   *
   * @see #unsetField
   * @see #removeField
   */
  withoutField(field: FieldType | null): TypeMeta;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): TypeMeta;

  /**
   * Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
   * exact same type as the type of the obj to respect the "ordinal" of the field type
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           field types to remove
   * @return new Obj with removed fields
   */
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): TypeMeta;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): TypeMeta;

  /**
   * Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
   * calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
   * {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
   * fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
   * fields that have already been set.
   *
   * {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
   * As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
   *
   * @param includeEmptyRefsWithDefaults
   *           it `true` then missing / empty child references that have fields with defaults will also be instantiated
   * @param defaultFields
   *           If not empty, a list of default field paths to populate.  Any default fields not specified in the
   *           array will be ignored.
   * @return new Obj
   *
   * @see #defaultField
   * @see FieldType#defaultValueConst
   * @see FieldType#defaultValue
   */
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): TypeMeta;

  /**
   * Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
   * method will behave the same as {@link #unsetField}.
   *
   * @param field
   *         name of the field to default
   * @return new `Obj` with the specified field set to its default value
   *
   * @see #withField
   * @see #unsetField
   */
  defaultField(field: string): TypeMeta;

  /**
   * Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
   * method will behave the same as {@link #unsetField}.
   *
   * @param field
   *         field type to default
   * @return new `Obj` with the specified field set to its default value
   *
   * @see #withField
   * @see #unsetField
   */
  defaultField(field: FieldType): TypeMeta;

  /**
   * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
   * is different from {@link removeField}
   *
   * @param field
   *         name of the field to unset
   * @return new `Obj` with the specified field unset
   *
   * @see #withoutField
   * @see #removeField
   */
  unsetField(field: string): TypeMeta;

  /**
   * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
   * is different from {@link removeField}
   *
   * @param field
   *         field type to unset
   * @return new `Obj` with the specified field unset
   *
   * @see #withoutField
   * @see #removeField
   */
  unsetField(field: FieldType): TypeMeta;

  /**
   * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
   * is different from {@link #unsetField}
   *
   * @param field
   *         name of the field to remove
   * @return new `Obj` with the specified field removed
   *
   * @see #withoutField
   * @see #unsetField
   */
  removeField(field: string): TypeMeta;

  /**
   * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
   * is different from {@link #unsetField}
   *
   * @param field
   *         field type to remove
   * @return new `Obj` with the specified field removed
   *
   * @see #withoutField
   * @see #unsetField
   */
  removeField(field: FieldType): TypeMeta;

  /**
   * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
   * In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
   *
   * @param other
   *           object
   * @param fieldPathMergeSpec
   *           mapping of fields of the object to the respective merge annotations
   * @return the new merged Obj
   */
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): TypeMeta;

  /**
   * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
   * In case of conflicts, fields of other instance take precedence.
   *
   * @param other
   *           object
   * @param otherFieldsFilter
   *           only fields of otherFieldsFilter type from other are merged into this obj.
   * @return the new merged Obj
   */
  mergeObj(other: Obj | null, otherFieldsFilter: Type): TypeMeta;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): TypeMeta;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): TypeMeta;

  mergeJson(json: any | null): TypeMeta;

  /**
   * Merge the obj references within the current obj
   * @param deep
   *        If set, traverses the reference fields within the obj as well for a deep merge
   * @param objKey
   *        lambda specifying how to obtain the key for the Obj while determining which Objs to merge
   * @param filter
   *        Field paths that need to be filtered from this merge
   * @return Obj with child references merged
   */
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): TypeMeta;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): TypeMeta;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<TypeMeta | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<TypeMeta | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<TypeMeta | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<TypeMeta | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<TypeMeta | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, TypeMeta | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, TypeMeta | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<TypeMeta | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<TypeMeta | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): TypeMeta;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): TypeMeta;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): TypeMeta;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): TypeMeta;

  /**
   * Construct an instance from provided fields
   * @param fields
   *            Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
   *            field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
   *            to Panda.make()
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
   *            -> 0) populated. Passing an empty value for a field will result in the initial value being set if
   *            the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
   *
   *
   * @see fromFields
   * @see beforeMake
   * @see afterMake
   * @see withDefaults
   */
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): TypeMeta;

  /**
   * Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
   *
   * ```js
   * User.make({
   *   email: 'joe@smith.com',
   *   realName: 'Joe Smith'
   * })
   *
   * Obj.make({
   *   type: 'User',
   *   email: 'joe@smith.com',
   *   realName: 'Joe Smith'
   * })
   * ```
   *
   * ```py
   * c3.User.make({
   *   "email": 'joe@smith.com',
   *   "realName": 'Joe Smith'
   * })
   *
   * c3.Obj.make({
   *   "type": 'User',
   *   "email": 'joe@smith.com',
   *   "realName": 'Joe Smith'
   * })
   *
   * c3.User(email='joe@smith.com', realName='Joe Smith')
   *
   * c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
   * ```
   *
   * Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
   * specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
   * such as {@link Ann.Ser} do not apply.
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see fromFields
   * @see beforeMake
   * @see afterMake
   * @see withDefaults
   */
  static make(fields: any, withDefaults?: boolean): TypeMeta;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): TypeMeta | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): TypeMeta;

  /**
   * Construct an instance of TypeMeta from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields: boolean, pkg: Pkg): TypeMeta;

  /**
   * Optional override that will be called every time instance of this type is created.
   *
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static beforeMake(fields: C3.Map<FieldType | null, any> | null): C3.Map<FieldType | null, any>;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  afterMake(): TypeMeta;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): TypeMeta;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<TypeMeta>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): TypeMeta;

  /**
   * The metadata path where the parent type's declaration file is located:
   * Format: /<package>/[gen|test]/src/<pkg-sub-path>/<name>.c3typ
   * E.g. for the given package folder structure:
   * ```
   * myRepo
   *  |
   *  -  myPkg
   *      |
   *      -  src
   *          |
   *          - folder1
   *              |
   *              - folder2
   *                  |
   *                  - SomeType1.c3typ
   *          - SomeType3.c3typ
   *      -  test
   *          |
   *           - src
   *              |
   *              - SomeType2.c3typ
   *      -  gen
   *          |
   *           - src
   *              |
   *              - SomeType4.c3typ
   * ```
   * For SomeType1.c3typ will return -> /myPkg/src/folder1/folder2/SomeType1.c3typ
   * For SomeType3.c3typ will return -> /myPkg/src/SomeType3.c3typ
   * For SomeType2.c3typ will return -> /myPkg/test/src/SomeType2.c3typ
   * For SomeType4.c3typ will return -> /myPkg/gen/src/SomeType4.c3typ
   *
   * @see #package
   * @see #pkgSubPath
   */
  get pkgPath(): Pkg.Path;

  /**
   * The name of the package where this type was declared.
   *
   * For example, if package "app", depends on "industry", which depends on "foundation", provisioning app will bring
   * in the types in the industry and foundation packages as well. This means that the `package` of the Location
   * type will be foundation, even if it gets remixed by industry (or even app).
   *
   * @see #pkg
   * @see #pkgPath
   * @see #pkgSubPath
   */
  get package(): string;

  /**
   * The version of the package where this type was declared.
   */
  get packageVersionMajorMinor(): SemanticVersion.MajorMinor;

  /**
   * Dot (".") separated relative path of the folder where this type's declaration file is located in the package
   * E.g. for the given structure
   * ```
   * myRepo
   *  |
   *  -  myPkg
   *      |
   *      -  src
   *          |
   *          - folder1
   *              |
   *              - folder2
   *                  |
   *                  - SomeType1.c3typ
   *          - SomeType3.c3typ
   *      -  test
   *          |
   *           - src
   *              |
   *              - SomeType2.c3typ
   *      -  gen
   *          |
   *           - src
   *              |
   *              - SomeType4.c3typ
   * ```
   * For SomeType1.c3typ will return -> folder1/folder2
   * For SomeType3.c3typ will return -> "" (empty string)
   * For SomeType3.c3typ will return -> "" (empty string)
   * For SomeType4.c3typ will return -> "" (empty string)
   *
   * @see #pkgPath
   * @see #package
   */
  get pkgSubPath(): string;

  /**
   * Pkg where this type was declared, note could be different then #pkg.
   */
  get declaredPkg(): Pkg;

  get metadataPath(): string | null;

  /**
   * Convert the internal object representation of this instance to SdkJson for an efficient loading of type at
   * execution time.
   */
  toTypesysJson(): Typesys.Json;

  /**
   * @return package for built-in Type System; this could be different from #pkg() when package is loaded from a disk
   *         for code gen
   */
  typesys(): Pkg;

  /**
   * @return an instance with the #declaredSrcLine and #declaredSrcCharInLine fields unset.
   */
  withoutDeclaredSrcPos(recursive?: boolean): TypeMeta;

  /**
   * @return whether this type is parametric
   */
  isGeneric(): boolean;

  /**
   * Whether or not this type has a generic prototype from which it was narrowed i.e. if all its generic variables are
   * bound. Note that when it has neither unbound nor bound variables it is neither generic nor narrowed.
   */
  isNarrowed(): boolean;

  /**
   * Whether or not all variables are bound to `any` or to the variable's restriction.
   *
   * @see #bindAll
   */
  isNarrowedToAny(): boolean;

  /**
   * Generic Type from which this type was bound / narrowed.
   *
   * For example, `NormTimeseries<double>` type #prototype set to unbound `NormTimeseries`.
   *
   * @see #name
   * @see #prototypeName
   */
  prototype(): TypeMeta;

  /**
   * The list of unbound variables and any restrictions on them.
   */
  vars(): C3.Array<VarReferenceType | null>;

  /**
   * The map of unbound variables by name.
   */
  varsByName(): C3.Map<string | null, VarReferenceType | null>;

  /**
   * Get a single unbound variable reference by name.
   */
  var(var_: string, failIfMissing?: boolean): VarReferenceType | null;

  /**
   * Get a single unbound variable reference at index.
   */
  varAt(var_: number, failIfMissing?: boolean): VarReferenceType | null;

  /**
   * Get a single unbound variable index in the #vars array.
   */
  varIndex(var_: string, failIfMissing?: boolean): number;

  /**
   * Get a single unbound variable index in the #vars array based on a var name for a given mixin.
   */
  varIndex(mixin: Type, var_: string, failIfMissing?: boolean): number;

  varIndex(mixin: string, var_: string, failIfMissing?: boolean): number;

  /**
   * Whether or not the provided variable name is an unbound generic variable.
   */
  isVar(var_: string): boolean;

  /**
   * Return whether or not given generic variable has a binding.
   *
   * @see #bindVar
   */
  hasVarBinding(var_: string): boolean;

  /**
   * Return whether or not any generic variables have bindings.
   *
   * @see #bindVar
   */
  hasVarBindings(): boolean;

  /**
   * Get a single variable binding value. Note that the value may be null if unbound or may not be fully bound if
   * given variable was bound to another generic variable.
   *
   * @param var name of the generic variable
   */
  varBinding(var_: string, failIfUnbound?: boolean): ValueType | null;

  /**
   * Get a single variable binding value at provided index in declared variables array. Note that the value may be null
   * if unbound or if variable at index was bound to another generic variable.
   *
   * @param index of a generic variable
   */
  varBinding(indx: number, failIfUnbound?: boolean): ValueType | null;

  /**
   * Get a single variable binding value for the specified type. The specified type may be the same type or a mixin.
   * Note that the specified type is the one that declares the generic variable. The type on which the method is called
   * may be one that mixes in that type or a bound version of that type.
   *
   * For example, on `Range<datetime>` both forms will return `datetime`:
   *  - `type.meta().varBinding(Range, "V")`
   *  - `type.meta().varBinding("V")`
   *
   * However, {@link IntRange} has no generic binding itself, but binds its mixin {@link Range}:
   *  - `IntRange.meta().varBinding("V")` returns null
   *  - `IntRange.meta().varBinding(Range, "V")` returns `int`
   *
   * The combination of type and variable name is unique, even for a type that mixes in multiple generic types that
   * use the same variable name.
   *
   * Type adds this overload to the base method in {@link Generic}.
   *
   * @param mixin the type to get the binding for
   * @param var name of the variable on the specified type
   * @param failIfUnbound if true, throw an error if the variable is not found or not fully bound
   */
  varBinding(mixin: Type, var_: string, failIfUnbound?: boolean): ValueType | null;

  varBinding(mixin: string, var_: string, failIfUnbound?: boolean): ValueType | null;

  /**
   * Bind a single variable to the specified value type and return a new instance. The result may still be generic if
   * there are remaining unbound variables.
   */
  bindVar(var_: string, binding: ValueType): TypeMeta;

  /**
   * Bind a first variable to the specified value type and return a new instance. The result may still be generic if
   * there are remaining unbound variables.
   */
  bindVar(binding: ValueType, ...bindings: ValueType | null[]): TypeMeta;

  bindVar(serializedBinding: string): TypeMeta;

  /**
   * Bind all variables to the specified value types and return a new instance. Bindings are applied in the declaration
   * / mixin order
   */
  bindVars(bindings: C3.Array<ValueType | null> | null): TypeMeta;

  /**
   * Bind all variables to `any` or to variable restriction
   */
  bindAll(): TypeMeta;

  /**
   * @return name if this generic based on structure of it
   */
  buildName(): string;

  /**
   * @return prototype name with bindings
   */
  prototypeNameWithBindings(): string;

  /**
   * Override this method to return the merged set of annotations from itself and its hierarchy
   * E.g.
   * ```type
   *   @config(folder="x")
   *   type A {
   *   }
   *   @config(secret=true)
   *   type B mixes A
   * ```
   * => return config(secret=true, folder="x") for type B
   * If not overridden, by default this returns #annotationJson
   */
  mergedAnnotationsJson(): any | null;

  /**
   * The declared annotations for this metadata element.
   */
  declaredAnnotations(): Annotations;

  /**
   * The annotations for this metadata element.
   */
  annotations(): Annotations;

  /**
   * Whether this metadata element has any annotation.
   */
  hasAnnotations(): boolean;

  /**
   * Whether this metadata element has annotation with provided name.
   */
  hasAnnotation(ann: string | null): boolean;

  /**
   * Whether this metadata element has annotation field value.
   */
  hasAnnotationValue(ann: string | null, annField: string | null): boolean;

  /**
   * @return annotation with provided name
   */
  annotation(ann: string | null, failIfMissing?: boolean): Annotation | null;

  /**
   * @return annotation value for provided annotation name and annotation field
   */
  annotationValue(ann: string | null, annField: string | null): any;

  /**
   * Add an annotation to the given metadata
   */
  withAnnotation(ann: Annotation): TypeMeta;

  /**
   * Add an annotation to the given metadata
   * @param ann
   *         annotation to add
   * @param annField
   *         which field on the annotation needs to be set
   * @param value
   *         value for the field
   */
  withAnnotation(ann: string, annField?: string | null, value?: any): TypeMeta;

  /**
   * Whether the specified instances have same annotations.
   */
  static haveSameAnnotations(a1: Annotatable | null, a2: Annotatable): boolean;

  /**
   * Return the JSON for annotations that can be inherited by children of this element of metadata. Annotations are
   * normally inherited, but ones marked with {@link Annotation#noInherit} will not be.
   */
  inheritableAnnotationsJson(): any | null;

  /**
   * Return an instance of an {@link HtmlRenderer} set up to render this instance. If there is no capable renderer,
   * null may be returned. The implementation must be available within the browser (typically `js-client`).
   */
  renderer(): HtmlRenderer | null;

  /**
   * Documentation parsing will produce a structured documentation object from the attributes of the metadata along
   * with the contents of the documentation comment. This can be examined and also rendered for display to the user
   * using {@link DocumentationRenderer}.
   *
   * If this is not one of the known metadata types, nor has any documentation associated, the method returns null.
   * Otherwise, it will build an object that contains as much as is possible to assemble about the piece of
   * structure, both from the metadata itself and from the text in #docText.
   *
   * @return parsed documentation object
   *
   * @see DocumentationParser
   */
  docParsed(spec?: DocumentationParserSpec | null): TypeDocumentation;

  /**
   * Rendered markdown document for the Documentable instance.
   */
  docMarkdown(): string | null;

  /**
   * Rendered plain text for the Documentable instance.
   */
  docText(): string | null;

  /**
   * Whether the specified instances have same documentation.
   */
  static haveSameDoc(d1: Documentable | null, d2: Documentable): boolean;

  /**
   * @return key field type.
   */
  static keyFieldType(): FieldType;

  /**
   * @return key field value.
   */
  keyFieldValue(): string | null;

  /**
   * Build a map of the correct type with a single element which is this instance and key field value as key.
   */
  singletonMap(): C3.Map<string | null, WithKey | null>;

  cachedFingerprint(): number;

  /**
   * @return identifier that can safely be used in the code for provided language
   */
  identifier(lang?: string | null): string;

  /**
   * TypeMeta.toString will build the DSL type declaration string.
   * @see #fromString
   */
  toString(): string;

  toString(spec: DslPrintSpec): string;

  /**
   * TypeMeta.fromString will build a type instance from a valid DSL declaration string.
   * @see #toString
   */
  static fromString(s: string | null): TypeMeta | null;

  /**
   * The name of this instance.
   */
  cacheKey(): string | null;

  /**
   * Additional metadata specific to entity types.
   */
  db(failIfNotEntityType?: boolean): TypeMeta.Db | null;

  /**
   * @return True if type mixes NoSystemCols
   */
  isNoSystemCols(): boolean;

  isPersistableUpsertHelper(): boolean;

  isInvalidationDisabled(): boolean;

  isNoMetaOverrideType(): boolean;

  /**
   * Returns true if the type mixes {@link Searchable}
   */
  isSearchable(): boolean;

  /**
   * @return true if this type has a hierarchy denorm target.
   * Beneficial since Type system cache does not cache null values
   */
  isHierDenormTarget(): boolean;

  /**
   * @return true if the type is in the KV datastore and persistence can be optimized persisting the input raw values
   *         (e.g no boxing of primitive values for fields with the "any" value type.
   */
  canPersistKvRaw(): boolean;

  /**
   * @return True if the type has the field `id` and it's persistable.
   */
  hasPersistableId(): boolean;

  /**
   * @return True if the type has the field `name` and it's persistable.
   */
  hasPersistableName(): boolean;

  /**
   * @return True if the type has the field `meta` and it's persistable.
   */
  hasPersistableMeta(): boolean;

  /**
   * @return True if the type (or one of its base types) has generic bindings
   */
  hasPersistableTypeWithBindings(): boolean;

  /**
   * @return true if the type has a viewFilter or viewInclude specified
   */
  hasViewIncludeOrFilter(): boolean;

  hasShortId(): boolean;

  /**
   * @return True if instances of this type should persist the specific type bindings.  Note that for types that extend
   * this type and specify the bindings in the type definition will return false.
   */
  persistTypeWithBindings(): boolean;

  /**
   * @return false if duplicates should be removed when persisting instances of this type
   */
  persistDuplicates(): boolean;

  /**
   * @return True if the type is configured to retain a history of edits to each obj.
   */
  keepVersionHistory(): boolean;

  /**
   * @return Table name for non-external entity types (e.g. includes "C3_2_" prefix).
   */
  rootC3TableName(): string | null;

  /**
   * @return a map of all tables used for persisted collections, keyed by the field path for the collection field.
   */
  collectionTables(): C3.Map<string | null, string | null>;

  /**
   * @param unique
   *        If true, return unique indexes else non-unique indexes.
   *
   * @return list of indexes defined for this type in the @db(index) extension.
   */
  indexes(unique?: boolean): C3.Array<Db.Index | null>;

  /**
   * @return the value specified in {@link Ann.Db#datastore} (if any) or overridden in the Db.Domain.  This will
   *         currently be "kv" for data persisted in the KV store, null by default for data persisted in the c3 managed
   *         relational datastore, or the name of a specific datastore.
   */
  datastore(): string | null;

  /**
   * The datastore to maintain a parallel synchronized copy of the data for the type, typically to a system like
   * Redshift for advanced analytic querying capabilities.
   */
  secondaryDatastore(): string | null;

  /**
   * @return the {@link PgPartitionDef} for the type if it is defined and valid.
   */
  pgPartition(): PgPartitionDef | null;

  /**
   * @return list of unique indexes defined for this type in the db extension. Each entry will be an array of fields in
   * the unique index.  Index fields can optionally refer to a field of an included reference and that's why FieldPath
   * is used
   */
  uniqueConstraints(): C3.Array<C3.Array<FieldPath | null>>;

  shortIdPrefix(): string | null;

  shortIdSuffixType(): string | null;

  shortIdReservationRange(): number | null;

  /**
   * @return set of all fields used in any of the unique field sequences
   */
  allUniqueConstraintFields(): C3.Set<FieldPath | null>;

  /**
   * @return List of all collection fields (including nested) that are persisted in this type.
   */
  persistableCollectionFields(): C3.Array<FieldPath | null>;

  /**
   * @return list of all fields that have the textSearchField db annotation. For Postgres, a full text search index
   *         will be created
   */
  textSearchFields(): C3.Array<FieldPath | null>;

  /**
   * @return the list of fields comprising the primary key. If the type has a composite key, it will be the fields
   *         defined in the key type. Otherwise the id field will be returned for persistable types. For
   *         non-persistable fields, an empty array is returned.
   */
  primaryKeyFields(): C3.Array<FieldPath | null>;

  /**
   * @return The set of all read calc fields in this type
   */
  readCalcFields(): C3.Array<FieldPath | null>;

  /**
   * Gets the set of all stored calc fields in this type and, optionally, any of its extension base types
   */
  storedCalcFields(inclExtBaseFields?: boolean): C3.Array<FieldPath | null>;

  /**
   * Gets the set of all stored calc fields that specify a fixed period for recalc in this type and, optionally, any of
   * its extension base types
   */
  periodicCalcFields(inclExtBaseFields?: boolean): C3.Array<FieldPath | null>;

  /**
   * Gets the set of all stored calc fields that specify a fixed schedule for recalc in this type and, optionally, any
   * of its extension base types
   */
  scheduledCalcFields(inclExtBaseFields?: boolean): C3.Array<FieldPath | null>;

  /**
   * Gets the set of all fields in this type and, optionally, any of it's extension base types that have
   * the @db(timedValueHistoryField) annotation
   *
   * @param inclExtBaseFields
   *        true indicates that fields defined in extension base types for the type should be included. False
   *        means that only fields defined in the type itself should be returned.
   * @return the set of all fields in this type and, optionally, any of it's extension base types that have the
   * @db(timedValueHistoryField) annotation
   */
  timedValueFields(inclExtBaseFields?: boolean): C3.Array<string | null>;

  /**
   * Gets the set of all fields in this type and, optionally, any of it's extension base types that are the field
   * referenced in a @db(timedValueHistoryField) annotation for a timed value field
   *
   * @param inclExtBaseFields
   *        true indicates that fields defined in extension base types for the type should be included. False
   *        means that only fields defined in the type itself should be returned.
   * @return the set of all fields in this type and, optionally, any of it's extension base types that are the field
   *         referenced in a @db(timedValueHistoryField) annotation for a timed value field
   */
  timedValueHistoryFields(inclExtBaseFields?: boolean): C3.Map<string | null, string | null>;

  /**
   * Get the timed value history field for the specified timed value field.
   *
   * @param field
   *        The timed value field.
   *
   * @return The timed value history field for the specified timed value field.  If the specified field is not a timed
   *         value field, or is not associated with a history field, null is returned.
   */
  timedValueFieldForHistoryField(field: string): string | null;

  /**
   * Gets the set of all fields in this type and, optionally, any of it's extension base types that have
   * the @db(timedCharacteristicHistoryField) annotation
   *
   * @param inclExtBaseFields
   *        true indicates that fields defined in extension base types for the type should be included. False
   *        means that only fields defined in the type itself should be returned.
   * @return the set of all fields in this type and, optionally, any of it's extension base types that have the
   * @db(timedCharacteristicHistoryField) annotation
   */
  timedCharacteristicFields(inclExtBaseFields?: boolean): C3.Array<string | null>;

  /**
   * Gets the set of all fields in this type and, optionally, any of it's extension base types that are the field
   * referenced in a @db(timedCharacteristicHistory) annotation for a timed characteristic field
   *
   * @param inclExtBaseFields
   *        true indicates that fields defined in extension base types for the type should be included. False
   *        means that only fields defined in the type itself should be returned.
   * @return the set of all fields in this type and, optionally, any of it's extension base types that are the field
   *         referenced in a @db(timedCharacteristicHistoryField) annotation for a timed characteristic field
   */
  timedCharacteristicHistoryFields(inclExtBaseFields?: boolean): C3.Map<string | null, string | null>;

  /**
   * Get the timed characteristic history field for the specified timed characteristic field.
   *
   * @param field
   *        The timed characteristic field.
   *
   * @return The timed characteristic history field for the specified timed characteristic field.  If the specified
   *         field is not a timed characteristic field, or is not associated with a history field, null is returned.
   */
  timedCharacteristicFieldForHistoryField(field: string): string | null;

  /**
   * @return a map of timed value parent types/fields grouped by source type.
   */
  timedValuesParent(): C3.Map<string | null, C3.Array<string | null>>;

  /**
   * Returns a map of timed characteristic parent types/fields grouped by source type.
   */
  timedCharacteristicsParent(): C3.Map<string | null, C3.Array<string | null>>;

  /**
   * @return List of all fields that specify the {@link Ann.Db#include} annotation.
   */
  fieldsWithInclude(): C3.Array<FieldPath | null>;

  /**
   * Map, keyed by types that have fkey fields with this type as a reference type, where each element is the list of
   * the fkey field names.
   */
  fkeyParents(): C3.Map<Type | null, C3.Array<string | null>>;

  /**
   * @return calc field backward dependencies for a type
   */
  calcBwdDeps(): C3.Array<TypeBackwardDep | null>;

  /**
   * @return calc field backward dependencies for all calc fields of a type
   */
  calcBwdDepsByPathKey(): C3.Map<string | null, TypeBackwardDep | null>;

  /**
   * @return calc field backward dependencies for only calc fields that depend on a specific type
   */
  calcBwdDepsForType(type: TypeMeta): C3.Array<TypeBackwardDep | null>;

  /**
   * @return a calc field expression rewritten to replace type casting with typeIdent checks.  Note this only returns
   *         a rewritten expression if there were replaced type casts.
   *
   * FOR INTERNAL USE ONLY
   */
  rewrittenCalcFieldExpr(origExpr: string): any;

  /**
   * Determines the set of fields that trigger invalidation for the specified queue.
   *
   * @param queueType
   *        Queue type to check invalidation for.
   * @param includeBaseTypes
   *        If true, base type fields will also be included.
   * @param includeExtensionTypes
   *        If true, extension types will also be included.
   * @param ignoreSelfDeps
   *        If true, self deps (e.g. deps that have no parent) will be ignored.
   * @param forBeforeUpdate
   *        If true, only looking for deps that should be triggered during the beforeUpdate phase.
   *
   * @return the set of fields that trigger invalidation for the specified queue
   */
  triggeringFields(queueType: Type, includeBaseTypes?: boolean, includeExtensionTypes?: boolean, ignoreSelfDeps?: boolean, forBeforeUpdate?: boolean): C3.Set<string | null>;

  /**
   * Determines the set of fields that trigger invalidation for the specified key.
   *
   * @param key
   *        key describing trigger scenario
   *
   * @return the set of fields that trigger invalidation for the specified key.
   */
  _triggeringFields(scenario: string): C3.Set<string | null>;

  /**
   * @return the hierarchy denorm type for this type's hierarchy
   */
  hierDenormTarget(): HierDenormTarget | null;

  /**
   * @return acl backward dependencies for a type
   */
  aclBwdDeps(): C3.Array<TypeBackwardDep | null>;

  /**
   * Called by platform when a Persistable type is accessed to ensure that its schema is up to date.
   *
   * @return true if the schema was updated in this JVM/app
   */
  validateSchema(): boolean;

  /**
   * Called by platform when a Kv type is accessed to ensure that its schema is up to date.
   *
   * @return true if the schema was updated in this JVM/app (result of first call is cached return value).
   */
  validateKvSchema(): boolean;

  /**
   * Called by {@link validateSchema} to validate the schema for a type and all its extension types.
   *
   * @return true if the schema was updated in this JVM for the type and current app code (result of first call is
   *         cached return value).
   */
  doValidateSchema(): boolean;

  /**
   * @return List of all fields that the db engine enforces constraints on.
   */
  dbEngineConstraintFields(newRecord?: boolean): C3.Array<FieldType | null>;

  /**
   * @return true if all of the db engine constraint fields are "simple" (e.g. don't involve included references).
   */
  useSimpleDbEngineConstraintCheck(newRecord?: boolean): boolean;

  /**
   * @return The composite key type for the type, if any. The composite key type is the type in the mixin chain that
   *         directly mixes CompositeKey. For CompositeKey types themselves, this will return itself.
   */
  compositeKeyType(): Type | null;

  /**
   * @return the list of fields comprising the composite key, For any type that isA composite key and an empty
   *         array otherwise.
   */
  compositeKeyFields(): C3.Array<FieldPath | null>;

  /**
   * @return a list of all fields that are fkey fields (both array and single ref)
   */
  fkeyFields(): C3.Array<FieldPath | null>;

  /**
   * Db Extension: @return filter spec to be used for a read only fkey relationship.
   */
  fkeyRefFilter(field: string): string | null;

  /**
   * Db Extension: @return limit to be used for a read only fkey relationship.
   */
  fkeyRefLimit(field: string): number;

  /**
   * Db Extension: @return field path that is a foreign key in the reference type for a read only one to many
   * relationship.
   */
  fkeyRefFkey(field: string): string | null;

  /**
   * Db Extension: @return field path that is a key in the source type for a read only one to many relationship.
   */
  fkeyRefKey(field: string): string | null;

  /**
   * Db Extension: @return order spec to be used for a read only one to many relationship.
   */
  fkeyRefOrder(field: string): string | null;

  /**
   * @return whether this value type is an fkey reference array field.
   */
  isFkeyRefArray(field: string): boolean;

  /**
   * @return whether this value type is an fkey reference array field.
   */
  isFkeyRefArray(ft: FieldType): boolean;

  isFkeyRef(field: string): boolean;

  /**
   * @return the list of field that are the "latest characteristic" fields linked to `TimedCharacteristicHistory`
   *         fields.
   */
  latestCharacteristicsFields(): C3.Array<FieldPath | null>;

  /**
   * @return true if this C3 Type is a subtype of {@link AclEnabled}
   */
  isAclEnabled(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link AclEnabledTypes}
   */
  isAclEnabledTypes(): boolean;

  /**
   * @return true if this C3 type is a subtype of {@link JdbcStore}
   */
  isJdbcStore(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link TimedDataHeader}
   */
  isTimedDataHeader(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link IntervalDataHeader}
   */
  isIntervalDataHeader(): boolean;

  /**
   * @return true if the type supports timed fetch
   */
  isTimedValueType(): boolean;

  /**
   * @return true if the type is a timed interval type
   */
  isTimedIntervalType(): boolean;

  /**
   * @return true if the type is a {@link TimedRelation} or {@link TimedRelationRef} or {@link TimedIntervalRelation}
   * or {@link TimedIntervalRelationRef}
   */
  isTimedRelationType(): boolean;

  /**
   * @return true if the type is a timed value history type
   */
  isTimedValueHistory(): boolean;

  /**
   * @return true if the type is a {@link TimedRelation} type
   */
  isTimedRelation(): boolean;

  /**
   * @return true if the type is a timed characteristic type
   */
  isTimedCharacteristicType(): boolean;

  /**
   * @return true if the type is a timed interval characteristic history type
   */
  isTimedIntervalCharacteristicHistory(): boolean;

  /**
   * @return true if the type supports timed fetch
   */
  isTimedFetchType(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link IntervalDataPoint}
   */
  isIntervalDataPoint(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link TimedDataPoint}
   */
  isTimedDataPoint(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link TimeseriesDataPoints}
   */
  isTimeseriesDataPoints(): boolean;

  /**
   * @return true if this C3 Type is sub type of either {@link IntervalDataPoint}, {@link TimedDataPoint} or
   * {@link TimeseriesDataPoints}
   */
  isAnyTimeseriesDataPoint(): boolean;

  /**
   * @return True if the type is versionable (e.g. mixes Versionable).
   */
  isVersionable(): boolean;

  /**
   * @return True if the type is a Geography (e.g. mixes Geo).
   */
  isGeography(): boolean;

  /**
   * @return True if the type is a Geometry (e.g. mixes Geom).
   */
  isGeometry(): boolean;

  /**
   * @return True if this type mixes in the TimedDataHeader type but not the NormalizedTimeseries type
   */
  isRawTimedData(): boolean;

  isRawTimedDataPoint(): boolean;

  /**
   * @return name of the field for partitioning instances of this type for storage.
   */
  partitionKeyField(): string | null;

  /**
   * @return FieldType of the field for partitioning instances of this type for storage.
   */
  partitionKeyFieldType(): FieldType | null;

  /**
   * @return compiled partition key field expression (or id) on the given type
   */
  compiledPartitionKeyFieldExpr(): Expr.Compiled<any, any>;

  /**
   * @return True if this type mixes in the IntervalDataHeader type but not the NormalizedTimeseries type
   */
  isRawTimeseries(): boolean;

  /**
   * Checks if type is facaded for a given app. Facaded types live in a different app.
   *
   * @return true if type is facaded in an app other than the one specified. I.e. call to this type from app that is
   *         different then provided app will resolve into a remote call
   */
  isFacade(app: string): boolean;

  /**
   * @return True if entity and not generic
   */
  canBePersisted(): boolean;

  /**
   * @return True if the type has any non-fkey child collections. Includes recursive included type fields.
   */
  hasChildCollection(): boolean;

  /**
   * Whether this type is only persists its key (e.g. Persistable, Identified, Named).
   *
   * @param includePersistable
   *        if true, then types mixing {@link Persistable} will return false.  Otherwise they will return true.
   *
   * @return true if this type only persists its key.
   */
  isPersistKey(dontIncludePersistable?: boolean): boolean;

  /**
   * @return if {@link isPersistKey} returns true, the key field to be persisted (e.g. "name" or "id").
   */
  persistKeyField(): string | null;

  isNoOverlapTimedIntervalValueHistoryType(parentType: TypeMeta): boolean;

  isRawTimeseriesDataPoint(): boolean;

  isAnyNormalized(): boolean;

  isNormalizedTimedDataPoint(): boolean;

  isNormalizedTimeseriesDataPoint(): boolean;

  isArchiveable(): boolean;

  isCompositeKeyType(): boolean;

  isCompactType(): boolean;

  isSystemType(): boolean;

  isVersioned(): boolean;

  /**
   * @return whether this TypeMeta has any #declaredRemixes
   */
  isRemix(): boolean;

  /**
   * Get the type metadata for an instantiated type by name.
   */
  static forName(name: string, failIfMissing?: boolean): TypeMeta | null;

  /**
   * Return the name of this type, qualified by its package. For example, the Facility type will have a name of
   * `Facility` and a qname of `foundation.Facility`, which is the package that defines it.
   *
   * @see #name
   */
  qname(): string | null;

  /**
   * @return the inner type name of this type, if it is indeed inner type otherwise `null`
   *
   * @see #name
   */
  innerTypeName(): string | null;

  /**
   * @return true if this is an inner type
   */
  isInnerType(): boolean;

  /**
   * @return name of the native remix type declaration; includes declared action requirement
   */
  nativeRemixName(): string | null;

  /**
   * Whether or not this is a native remix type. This means that its implementation is particular to a certain language,
   * or even {@Link Action.Requirement}.
   *
   * ```type
   * native py remix type DataFrame
   * ```
   *
   * The native remix type native to the "py" {@Link Action.Requirement} and a remix of the "DateFrame" type.
   *
   * @see nativeActionRequirement
   */
  isNativeRemix(): boolean;

  /**
   * @return true if this type or any of it's mixins has a native remix for a given {@Link Action.Requirement}
   *
   * @see isNativeRemix
   */
  hasNativeRemix(actionEngine: string | null): boolean;

  /**
   * If this is a native remix type then {@Link Action.Requirement} that this type has specific implementation for.
   */
  nativeActionRequirement(): string | null;

  /**
   * If this type has native remixes then list of {@Link Action.Requirement}s for them.
   */
  nativeActionRequirements(): C3.Array<string | null>;

  /**
   * Whether this is an abstract type that cannot be directly instantiated.
   */
  isAbstract(): boolean;

  /**
   * Whether this is an inline type i.e. one who's "declared" methods are implicitly inline.
   *
   * @see #declaredInline
   * @see MethodType#isInline
   */
  isInline(): boolean;

  /**
   * @return True if the type is an Instance.c3typ sub-type.
   */
  isInstance(): boolean;

  /**
   * @return True if the type is a Documentable (e.g. mixes Documentable).
   */
  isDocumentable(): boolean;

  /**
   * @return True if the type is a DslCommented (e.g. mixes DslCommented).
   */
  isDslCommented(): boolean;

  /**
   * Whether this type is an entity (aka persistable or stored) type by virtue of mixing {@link Persistable}).
   * Note that will return `false` for {@link Persistable} type itself.
   */
  isEntity(): boolean;

  /**
   * Whether this is an unnamed dynamic type created at runtime using #withFieldType or Pkg#dynamicType.
   */
  isDynamic(): boolean;

  /**
   * @return True if the type is external (e.g. Mixes External).
   */
  isExternal(): boolean;

  /**
   * Whether this type is potentially an entity, or is the {@link Persistable} type itself. This is an alias for
   * `isA(Persistable)`.
   *
   * Note that Persistable itself isPersistable, so often #isEntity is more useful.
   *
   * @see isEntity
   */
  isPersistable(): boolean;

  /**
   * Whether this type can *not* be persisted. I.e. it is not an entity type or is abstract.
   *
   * @see #isEntity
   * @see #isPersistable
   */
  isNotPersistable(): boolean;

  /**
   * @return true if type has {@link Ann.Db} with any key value datastore (i.e. mixes KvStore or default "kv" store)
   */
  isDatastoreKv(): boolean;

  /**
   * Whether this type is an annotation type, marked with the `@annotation` annotation.
   */
  isAnnotation(): boolean;

  /**
   * Whether this type is an Error type or subtype.
   */
  isError(): boolean;

  /**
   * Whether this type is a declared enum.
   *
   * @see Enum
   */
  isEnum(): boolean;

  /**
   * Whether this type is a declared anyof (union).
   *
   * @see Union
   */
  isUnion(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link Obj}
   */
  isObj(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link Partitionable}
   */
  isPartitionable(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link DimensionBase}
   */
  isDimensionBase(): boolean;

  /**
   * @return true if this C3 type contains fields that have ValueType of {@link Timeseries}
   */
  hasTsFields(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link Value} but not {@link Obj}
   */
  isValue(): boolean;

  /**
   * @return true if this C3 Type is a used to declare C3 Type Systems
   */
  isTypesys(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link Mutable}
   */
  isMutable(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link Stateful}
   */
  isStateful(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link StringSerializable}
   */
  isStringSerializable(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link Serializable}
   */
  isSerializable(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link JsSerializable}
   */
  isJsSerializable(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link WithType}
   */
  isWithType(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link WithKey}
   */
  isWithKey(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link WithId}
   */
  isWithId(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link WithName}
   */
  isWithName(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link WithUniqueId}
   */
  isWithUniqueId(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link WithUniqueName}
   */
  isWithUniqueName(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link WithRef}
   */
  isWithRef(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link Identifiable}
   */
  isIdentifiable(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link Identified}
   */
  isIdentified(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link Nameable}
   */
  isNameable(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link Named}
   */
  isNamed(): boolean;

  /**
   * @return true if this C3 type is a subtype of{@link WithGlobalKey}
   */
  isWithGlobalKey(): boolean;

  /**
   * @return true if this C3 Type is anonymous i.e it doesn't have a name
   */
  isAnonymous(): boolean;

  /**
   * Whether this type represents "fast data".
   *
   * @see DataPoint
   */
  isDataPoint(): boolean;

  /**
   * Whether this type is a parameter specification for a function. Note that spec parameters get auto initialized when
   * passed as arguments to a function / API call.
   *
   * @see Spec
   */
  isSpec(): boolean;

  /**
   * Whether this type represents result of the function call. Note that result types get automatically validated after
   * return from a method or API call.
   *
   * @see Result
   */
  isResult(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link Singleton}
   */
  isSingleton(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link Streamable}
   */
  isStreamable(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link Streamable.Arg}
   */
  isStreamableArg(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link Streamable.Result}
   */
  isStreamableResult(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link ReClaim}
   */
  isReClaim(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link DefaultInstance}
   */
  isDefaultInstance(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link DefaultClaim}
   */
  isDefaultClaim(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link Iface}
   */
  isIface(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link Cached}
   */
  isCached(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link Config}
   */
  isConfig(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link Configurable}
   */
  isConfigurable(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link ConfigChild}
   */
  isConfigChild(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link UserSingleton}
   */
  isUserSingleton(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link Content}
   */
  isContent(): boolean;

  /**
   * Whether this type is marked as a private type (not to be used outside its package).
   * Please note that "private" of the type is not inherited and a type will be `private` only
   * if its marked so explicitly.
   */
  isPrivate(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link Metadata}
   */
  isMetadata(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link SeedData}
   */
  isSeedData(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link ByteStream}
   */
  isByteStream(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link MetadataTransformer}
   */
  isMetadataTransformer(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link Source}
   */
  isSource(): boolean;

  /**
   * @return true if the type is a Timeseries type
   */
  isTimeseries(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link DataImpl}
   */
  isDataImpl(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link Array}
   */
  isArray(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link Map}
   */
  isMap(): boolean;

  /**
   * @return true if this C3 Type is a subtype of {@link Lambda}
   */
  isLambda(): boolean;

  /**
   * @return true if this C3 type is a subtype of {@link Columnar}
   */
  isColumnar(): boolean;

  /**
   * Determine whether this type mixes in (directly or indirectly) another type
   * or is that type itself.
   *
   * @param other instance of other type
   *
   * @see #isSame
   * @see #isCoercible
   */
  isA(other: Type | null): boolean;

  /**
   * Determine whether this type mixes in (directly or indirectly) another type
   * or is that type itself.
   *
   * @param other instance of other type
   *
   * @see #isSame
   * @see #isCoercible
   */
  isA(other: TypeMeta | null): boolean;

  /**
   * Determine whether this type mixes in (directly or indirectly) another type or is that type itself.
   *
   * @param other name of the other type
   *
   * @see #isSame
   * @see #isCoercible
   */
  isA(other: string | null): boolean;

  /**
   * Whether this type is a boxed type.
   */
  isBoxedType(): boolean;

  /**
   * Whether this type is a boxed primitive type (Integer, String, ...).
   */
  isBoxedPrimitiveType(): boolean;

  /**
   * Whether this type is a boxed array type.
   */
  isBoxedArrayType(): boolean;

  /**
   * Whether this type is a boxed map type.
   */
  isBoxedMapType(): boolean;

  /**
   * Whether this type is a boxed set type.
   */
  isBoxedSetType(): boolean;

  /**
   * Whether this type is a boxed collection type.
   */
  isBoxedCollectionType(): boolean;

  /**
   * Unboxes this boxed primitive type, returning the underlying value type.
   */
  unboxType(failIfNot?: boolean): ValueType | null;

  /**
   * Unboxes this boxed primitive type, returning the underlying primitive type.
   */
  unboxPrimitiveType(failIfNot?: boolean): PrimitiveType | null;

  /**
   * Unboxes this boxed array type.
   */
  unboxArrayType(): ArrayType | null;

  /**
   * Unboxes this boxed map type.
   */
  unboxMapType(): MapType | null;

  /**
   * Returns the number of field names shared between ths and other.
   */
  commonFieldNames(other: TypeMeta): number;

  /**
   * Returns a new TypeMeta with all declaredFieldTypes from ths plus any declaredFieldTypes from other that were not
   * already on ths. If both TypeMetas have a field with the same name and different type, the type from ths will be
   * preserved.
   */
  merge(other: TypeMeta): TypeMeta;

  /**
   * Return the name of the type from which this type was bound. This is generally the same as the name, but in the case
   * of bound types #prototypeName does not including the bindings.
   *
   * For example, `NormTimeseries<double>` would have a prototypeName of `NormTimeseries`.
   *
   * @see #name
   * @see #prototype
   */
  prototypeName(): string | null;

  /**
   * _meta restriction on this type. Actual semantic is specific to the type and depends on the specific implementation.
   * E.g. `Type` uses it for constraining value to subtypes of a _meta_ restriction, enum types use it as bind var for
   * implicit `Enum` mixin.
   */
  metaRestriction(): ValueType | null;

  /**
   * @return names of all inner types defined by this type or on all of its inner types if `deep` arg is true
   */
  innerTypeNames(deep?: boolean): C3.Set<string | null>;

  /**
   * @return all inner types defined by this type
   */
  innerTypes(deep?: boolean): C3.Array<TypeMeta | null>;

  /**
   * @return inner type meta defined by this type by name
   */
  innerType(innerType: string, failIfMissing?: boolean): TypeMeta | null;

  /**
   * @return inner type (not meta) defined by this type by name
   */
  innerTypeToType(innerType: string, failIfMissing?: boolean): Type | null;

  /**
   * @return name of the immediate outer type if this is an inner type
   */
  outerTypeName(): string | null;

  /**
   * @return immediate outer type if this is an inner type
   */
  outerType(): Type | null;

  /**
   * @return name of the root outer type if this is an inner type
   */
  outerRootTypeName(): string | null;

  /**
   * @return metadata sub path of the root outer type if this is an inner type
   */
  outerRootTypePkgSubPath(): string | null;

  /**
   * @return root outer type if this is an inner type
   */
  outerRootType(): Type | null;

  /**
   * Whether this type can be extended by another type.
   */
  isExtendable(): boolean;

  /**
   * Whether this type can no longer be extended by another type.
   */
  isNotExtendable(): boolean;

  /**
   * Whether this type is extending another type.
   */
  isExtension(): boolean;

  /**
   * Get the base type if this type is an extended type (e.g. it `extends` another type) or null if it isn't an
   * extension type.
   *
   * @param failIfMissing
   *           if true, throw an exception if the type is not an extension type
   *
   * @see #isExtension
   * @see #rootType
   */
  baseType(failIfMissing?: boolean): Type | null;

  baseTypeMeta(failIfMissing?: boolean): TypeMeta | null;

  /**
   * Get the root type if this type is an extended type (e.g. it `extends` another type) or the type itself if it isn't
   * an extension type.
   *
   * @see #isExtension
   * @see #baseType
   */
  rootType(): Type;

  /**
   * Gets the value of the typeKey appended to the type's base type's extensionIdent + ":". This value is used to
   * mark/identify object instances into one specific type.
   */
  typeIdent(): string | null;

  /**
   * Whether this type can no longer be mixed in by another package.
   */
  isNotMixable(): boolean;

  /**
   * Get the mixins of this type and types they mixin in turn.
   *
   * @see #declaredMixinReferenceTypes
   * @see #declaredMixinReferenceType
   * @see #declaredMixinTypes
   * @see #declaredMixinType
   * @see #implicitAndDeclaredMixinTypes
   * @see #implicitAndDeclaredMixinType
   */
  mixins(order?: string | null): C3.Array<Type | null>;

  mixinMetas(): C3.Array<TypeMeta | null>;

  /**
   * Get all unique mixins that have specialized / strongly typed Java interface and implementation class. Note if
   * this type itself has strongly typed Java interface and implementation class then return will be empty.
   *
   * Return is ordered by type prototype name.
   *
   * @see #isJava
   */
  javaMixinMetas(): C3.Array<TypeMeta | null>;

  /**
   * Get one only mixin if available that has a specialized / strongly typed Java interface and implementation class.
   * Note if this type itself has strongly typed Java interface and implementation class return will be 'null'.
   *
   * @see #javaMixinMetas
   */
  javaMixinMeta(): TypeMeta | null;

  /**
   * If this type has a multiple java mixins, return the name of the synthetic duck type for it. This is primarily used
   * to lookup and if needed generate at runtime appropriate java classes for this type.
   *
   * @see #javaMixinMetas
   */
  javaMixinDuckTypeName(): string | null;

  /**
   * True if this type has a specialized / strongly typed Java interface and implementation class.
   */
  isJava(): boolean;

  /**
   * Returns the {@link #mixinMetas} based on the provided prototypeNames. If multiple metas with the same
   * prototypeName are found, then the first encountered meta is selected. e.g For types defined below:
   * ```c3typ
   * Foo<T> mixes Value
   * ```
   * ```c3typ
   * Bar mixes Foo<Bar>, Value
   * ```
   * ```c3typ
   * Baz mixes Foo<Baz>, Bar, Value
   * ```
   * Following would be the expected behavior:
   * ```js
   * var prototypeNames = SetType.ofStr().makeBuilder().addAll('Foo', 'Value');
   * // Note that only the first encountered `Foo` mixin was returned.
   * Baz.meta().protoFilteredMixinMetas(prototypeNames).mapToStr(a => a.name) == ['Foo<Baz>`, `Value`]
   *
   * prototypeNames = SetType.ofStr().makeBuilder().addAll('Bar');
   *  Baz.meta().protoFilteredMixinMetas(prototypeNames).mapToStr(a => a.name) == ['Bar`]
   * ```
   * @see #uniqueProtoMixinMetas
   * @see #mixinMetas
   */
  protoFilteredMixinMetas(prototypeNames: SetBuilder<string | null>): C3.Array<TypeMeta | null>;

  /**
   * Returns the {@link #mixinMetas} based on the unique prototypeNames of the provided type.
   * If multiple metas with the same protoTypeName are found, then the first encountered meta is selected.
   * e.g For types defined below:
   * ```c3typ
   * Foo<T> mixes Value
   * ```
   * ```c3typ
   * Bar mixes Foo<Bar>, Value
   * ```
   * ```c3typ
   * Baz mixes Foo<Baz>, Bar, Value
   * ```
   * Following would be the expected behavior:
   * ```js
   * Baz.meta().uniqueProtoMixinMetas().mapToStr(a => a.name) == ['Foo<Baz>`, `Bar`, `Value`]
   * ```
   * @see #protoFilteredMixinMetas
   * @see #mixinMetas
   */
  uniqueProtoMixinMetas(): C3.Array<TypeMeta | null>;

  /**
   * Get a single mixin by name.
   *
   * @param name type name to search for
   */
  mixin(name: string | null, failIfMissing?: boolean): Type | null;

  mixinMeta(name: string | null, failIfMissing?: boolean): TypeMeta | null;

  /**
   * Get the mixin reference types of this type and types they mixin in turn.
   *
   * @see #declaredMixinRefTypes
   * @see #declaredMixinRefType
   * @see #declaredMixinTypes
   * @see #declaredMixinType
   * @see #mixins
   * @see #mixin
   */
  mixinReferenceTypes(order?: string | null): C3.Array<ReferenceType | null>;

  /**
   * Get a single declared mixin reference type by name.
   *
   * @param name type name to search for
   */
  mixinReferenceType(name: string, failIfMissing?: boolean): ReferenceType | null;

  /**
   * Get the mixins that have source code implemented for the specified {@Link Action.Requirement} and
   * all other {@Link Action.Requirement action requirements} whose {@link Action.Requirement#meetsRequirement requirements are met} by the provided action requirement.
   *
   * @param actionRequirement to check
   *
   * @see #hasSourceCode
   */
  mixinsWithSourceCode(actionRequirement: string): C3.Array<Type | null>;

  /**
   * Get the declared mixins of this type.
   *
   * @see #mixins
   */
  declaredMixins(order?: string | null): C3.Array<Type | null>;

  declaredMixinMetas(): C3.Array<TypeMeta | null>;

  /**
   * Get a single declared mixin by name.
   *
   * @param name type name to search for
   */
  declaredMixin(name: string): Type | null;

  declaredMixinMeta(name: string): TypeMeta | null;

  /**
   * Get the declared and implicit mixins reference types for this type. Implicit mixin examples are `Persistable`
   * for entity types or `Enum` for enum types.
   *
   * @see #mixins
   */
  implicitAndDeclaredMixinRefTypes(): C3.Array<ReferenceType | null>;

  /**
   * Get the declared and implicit mixins of this type. Implicit mixin examples are `Persistable` for entity types or
   * `Enum` for enum types.
   *
   * @see #mixins
   */
  implicitAndDeclaredMixins(): C3.Array<Type | null>;

  implicitAndDeclaredMixinMetas(): C3.Array<TypeMeta | null>;

  /**
   * @return all types in the current package mixing this type
   */
  subTypes(includeSelf?: boolean): C3.Array<Type | null>;

  /**
   * @return all types in the current package mixing this type
   */
  subTypeMetas(includeSelf?: boolean): C3.Array<TypeMeta | null>;

  /**
   * @return all type names in the current package mixing this type
   */
  subTypeNames(includeSelf?: boolean): C3.Array<string | null>;

  /**
   * @return all types in the current package extending this type
   */
  extensionTypes(includeSelf?: boolean): C3.Array<Type | null>;

  /**
   * @return true if any types in the current package extend this type
   */
  hasExtensionTypes(includeSelf?: boolean): boolean;

  /**
   * @return all types in the current package extending this type
   */
  extensionTypeMetas(includeSelf?: boolean): C3.Array<TypeMeta | null>;

  /**
   * @return all type names in the current package extending this type
   */
  extensionTypeNames(includeSelf?: boolean): C3.Array<string | null>;

  /**
   * Fingerprint detecting when field value types gain first subtype (0→1 transition).
   * Triggers schema update to add "_J" column for heterogeneous references.
   * Subsequent subtypes (1→2+) don't change fingerprint since column is already heterogeneous.
   *
   * Example: Field `spec: ThreadPool.Spec` requires schema change when `UpdateSpec mixes ThreadPool.Spec`
   * is added (heterogeneous reference needs "_J" column for type discriminator).
   *
   * NOT cached - must reflect current type system state as new subtypes are loaded.
   * Only called during schema validation at startup, not in runtime hot paths.
   *
   * @return fingerprint of this type + boolean flags for field type subtype existence
   * @see fingerprint
   * @see Db.TypeSchema#validateSchema
   */
  hierarchyFingerprint(): number;

  /**
   * Alternatives for a Union type.
   *
   * @see Union
   */
  unionAlts(): AnyOfType | null;

  /**
   * @return `true` if this type is remixed
   */
  isRemixed(): boolean;

  /**
   * Whether this type can no longer be remixed in by another package.
   */
  isNotRemixable(): boolean;

  /**
   * @return all remix aliases for this type.
   */
  remixAliases(): C3.Set<string | null>;

  /**
   * @return native remix declaration of this type for a provided {@Link Action.Requirement actionRequirement} and
   * all other {@Link Action.Requirement action requirements} whose {@link Action.Requirement#meetsRequirement requirements are met} by the provided action requirement
   * or null if this type does not have native remix
   */
  declaredNativeRemix(actionRequirement: string): TypeMeta | null;

  /**
   * @return native remix of this type for a provided {@Link Action.Requirement actionRequirement} or null if this type does not have native remix nor does
   *         any of its mixins
   */
  nativeRemix(actionRequirement: string): TypeMeta | null;

  /**
   * @return names of all depending packages that contain remix of this type.
   */
  allRemixPackages(): C3.Set<string | null>;

  /**
   * Whether this type can no longer be mixed in or remixed by another package.
   */
  isFinal(): boolean;

  /**
   * Get a map of declared or overridden field or method types by field / method name for this type. Note since there
   * could be more then one field declaration for a name resulting map element type is actually array of FieldTypes.
   *
   * @see declaredFieldTypes
   * @see overriddenFieldTypes
   */
  declaredFieldTypesByName(): C3.Map<string | null, C3.Array<DeclaredFieldType | null>>;

  /**
   * Get a single declared or overridden field or method by name for this type. Note since there could be more then one
   * field declaration for the same name returns array of FieldTypes.
   */
  declaredFieldType(fieldOrMethod: string, failIfMissing?: boolean): C3.Array<DeclaredFieldType | null>;

  /**
   * Get all fields that are declared or overridden in this type.
   */
  declaredOrOverriddenFieldType(): C3.Array<FieldType | null>;

  /**
   * Get all methods that are declared or overridden in this type.
   */
  declaredOrOverriddenMethods(): C3.Array<Method | null>;

  /**
   * @return `true` if this type declares or overrides provided field.
   *
   * @see declaresField
   * @see overridesField
   */
  declaresOrOverridesField(fieldOrMethod: string | null): boolean;

  /**
   * @return `true` if this type declares not just overrides provided field.
   *
   * @see overridesField
   */
  declaresField(fieldOrMethod: string | null): boolean;

  /**
   * @return `true` if this types overrides provided field or method. I.e. one of the mixins declare field or method
   *         with the same name.
   *
   * @see declaresField
   */
  overridesField(fieldOrMethod: string | null): boolean;

  /**
   * Get all overridden field or method types by field / method name for this type.
   */
  overriddenFieldTypes(): C3.Array<DeclaredFieldType | null>;

  /**
   * Get a map of overridden field or method types by field / method name for this type.
   */
  overriddenFieldTypesByName(): C3.Map<string | null, C3.Array<DeclaredFieldType | null>>;

  /**
   * Get a single overridden field or method by name for this type.
   */
  overriddenFieldType(fieldOrMethod: string, failIfMissing?: boolean): C3.Array<DeclaredFieldType | null>;

  /**
   * Get the type (this one or the mixin) on which the specified field was originally declared. If no such field is
   * declared in the hierarchy, return null.
   *
   * ```type
   * type X {
   *   doit: optional member function()
   * }
   *
   * type Y mixes X {
   *   doit: ~ js server
   * }
   * ```
   *
   * In the example above, calling from type *Y*, `fieldTypeDeclaredOn("doit")` returns Y (since it is re-declared
   * there), but fieldTypeFirstDeclaredOn returns *X* (since that is the original declaration).
   *
   * @see fieldTypeDeclaredOn
   * @see declaresField
   * @see overridesField
   * @see Method#overloadImplementedOn
   */
  fieldTypeFirstDeclaredOn(fieldOrMethod: string, failIfMissing?: boolean): C3.Array<Type | null>;

  fieldTypeFirstDeclaredOnMeta(fieldOrMethod: string, failIfMissing?: boolean): C3.Array<TypeMeta | null>;

  /**
   * Get the type (this one or the closest mixin) on which the specified field is declared. If no such field is
   * declared in the hierarchy, return null. Note that this might be the original declaration of the field as a type
   * may override a field with additional information, such as providing a method implementation.
   *
   * @see fieldTypeFirstDeclaredOn
   * @see Method#overloadImplementedOn
   */
  fieldTypeDeclaredOn(fieldOrMethod: string, failIfMissing?: boolean): C3.Array<Type | null>;

  fieldTypeDeclaredOnMeta(fieldOrMethod: string, failIfMissing?: boolean): C3.Array<TypeMeta | null>;

  /**
   * Get all field type names for this type. This includes fields defined on mixins as well as defined (or redefined
   * / overridden) on the type itself.
   */
  fieldTypeNames(order?: string | null): C3.Set<string | null>;

  /**
   * Get all method and field type names for this type. This includes methods and fields defined on mixins as well as
   * defined (or redefined / overridden) on the type itself.
   */
  fieldTypeAndMethodNames(order?: string | null): C3.Set<string | null>;

  /**
   * Get all field types for this type. This includes fields defined on mixins as well as defined (or redefined) on the
   * type itself.
   */
  fieldTypes(order?: string | null): C3.Array<FieldType | null>;

  /**
   * Get all field types for this type with specified {@link Annotation}. This includes fields defined on mixins as
   * well as defined (or redefined) on the type itself.
   */
  fieldTypesWithAnn(ann: string, order?: string | null): C3.Array<FieldType | null>;

  /**
   * @return list of all field paths on this type, including fields coming from mixins
   */
  fieldPaths(): C3.Array<FieldPath | null>;

  /**
   * Generate merge specs for each data field paths on this type
   */
  fieldPathMergeSpecs(): C3.Map<string | null, string | null>;

  /**
   * Get field type with XmlField-txtContent annotation
   */
  xmlTxtContentFieldType(): FieldType | null;

  /**
   * Get a map of field types by field name for this type. This includes fields defined on mixins as well as defined
   * (or redefined) on the type itself.
   */
  fieldTypesByName(): C3.Map<string | null, FieldType | null>;

  /**
   * Get a single field type by name.
   *
   * @param field field name to find
   * @param failIfMissing throw an error if the field doesn't exist
   */
  fieldType(field: string, failIfMissing?: boolean): FieldType | null;

  /**
   * Looks up a field type by it's ordinal
   * @param ordinal
   *        of the field type
   * @param failIfMissing
   *        throw an error if the field doesn't exist
   */
  fieldTypeAtOrdinal(ordinal: number, failIfMissing?: boolean): FieldType | null;

  /**
   * Get a single field type by serialization name. If a field has an `@ser(name)` annotation (as many do on this type
   * for example), look up the field by that name before looking it up by the formal field name.
   *
   * @param serName serialized field name to find
   * @param failIfMissing throw an error if the field doesn't exist
   */
  fieldTypeBySerName(serName: string, failIfMissing?: boolean): FieldType | null;

  /**
   * Get a map of all field types by serialization name. If a field has an `@ser(name)` annotation (as many do on this type
   * for example), look up the field by that name before looking it up by the formal field name.
   */
  fieldTypesBySerName(): C3.Map<string | null, FieldType | null>;

  /**
   * Name to be used in serialization for a `WithType#type`.
   * By default it is "type" but can be overridden via `@ser(name="...")` on a `type` property
   * Returns "$type" if another field overrides to the serialized name of `type`.
   */
  get typeSerName(): string | null;

  /**
   * Traverses the field or field path
   */
  fieldPath(fieldPath: string, failIfInvalid?: boolean): FieldPath | null;

  /**
   * Traverses the field by provided field type, returning the corresponding FieldPath
   */
  fieldPath(fieldType: FieldType): FieldPath;

  /**
   * A list of data field types for this type; i.e. ones that are not methods, constants or inner types. Note that
   * resulting array is ordered based on field type ordinal.
   */
  dataFieldTypes(): C3.Array<FieldType | null>;

  /**
   * Get all data field type ordinals.
   *
   * @see dataFieldTypes
   */
  dataFieldTypeOrdinals(): C3.Map<string | null, number | null>;

  /**
   * Traverses all data fields including in references.
   */
  eachDataFieldPath(action: λConsumer<FieldPath>, recurse?: boolean): void;

  /**
   * Get a map of data field types by field name for this type.
   */
  dataFieldTypesByName(): C3.Map<string | null, FieldType | null>;

  /**
   * Get all of data field names for this type.
   */
  dataFieldTypeNames(): C3.Array<string | null>;

  /**
   * A list of data field types for this type that have default values. It also contains a list of field types that are
   * required primitives
   */
  dataFieldTypesWithDefault(): C3.Array<FieldType | null>;

  /**
   * A list of data field types for this type that require validation
   * @see ValueType#hasValidation
   */
  dataFieldTypesWithValidation(): C3.Array<FieldType | null>;

  /**
   * Get all field types for this type with specified {@link Ann.Config#secret}. This includes fields defined on mixins as
   * well as defined (or redefined) on the type itself.
   */
  dataFieldTypesWithSecretAnn(): C3.Array<FieldType | null>;

  /**
   * Get all field types for this type with specified {@link Ann.Vector}. This includes fields defined on mixins as
   * well as defined (or redefined) on the type itself.
   */
  dataFieldTypesWithVectorAnn(): C3.Array<FieldType | null>;

  /**
   * Get a single data field type by name.
   */
  dataFieldType(field: string | null, failIfMissing?: boolean): FieldType | null;

  /**
   * Produce a checksum that can easily be compared to determine if two fieldTypes are similar. We are excluding methods
   * and constants
   */
  dataFieldTypesFingerprint(): number;

  /**
   * Get FieldType of embedding field for the specified text field.
   */
  embeddingsFieldType(textField: string): FieldType | null;

  /**
   * Get a single constant by name.
   */
  constant(field: string | null, failIfMissing?: boolean): FieldType | null;

  /**
   * Get all constants.
   */
  constants(): C3.Array<FieldType | null>;

  /**
   * Get all constant ordinals.
   */
  constantOrdinals(): C3.Map<string | null, number | null>;

  /**
   * Get a {@link FieldType} describing an {@link #innerType}. This field {@link #isConstant is constant}, with its
   * {@link #defaultValue} being the inner type.
   */
  innerTypeConstant(innerTypeName: string | null, failIfMissing?: boolean): FieldType | null;

  /**
   * @return The set of all calc fields, (stored and read) in this type
   */
  calcFields(): C3.Array<FieldPath | null>;

  /**
   * Get the value type of a field by name.
   *
   * @param field field name to find
   * @param failIfMissing throw an error if the field doesn't exist
   */
  valueType(field: string, failIfMissing?: boolean): ValueType | null;

  /**
   * Traverses a reference type field or method return type, returning the Type on the other side of that ReferenceType.
   * Convenient equivalent to:
   * ```fieldType(name).valueType().asReferenceType().dereference()```
   * or
   * ```fieldType(name).valueType().asMethodType().returnType().asReferenceType().dereference()```
   * or
   * ```fieldType(name).valueType().asCollectionType().elementType().asReferenceType().dereference()```
   * or
   * ```fieldType(name).valueType().asMethodType().returnType().asCollectionType().elementType().asReferenceType().dereference()```
   */
  traverseType(field: string, failIfMissing?: boolean): Type | null;

  /**
   * Traverses a reference type field or method return type, returning the Type on the other side of that ReferenceType.
   * Convenient equivalent to:
   * ```fieldType(name).valueType().asReferenceType().dereference()```
   * or
   * ```fieldType(name).valueType().asMethodType().returnType().asReferenceType().dereference()```
   * or
   * ```fieldType(name).valueType().asCollectionType().elementType().asReferenceType().dereference()```
   * or
   * ```fieldType(name).valueType().asMethodType().returnType().asCollectionType().elementType().asReferenceType().dereference()```
   */
  traverseTypeMeta(field: string, failIfMissing?: boolean): TypeMeta | null;

  /**
   * Traverse the given field path.
   */
  traverseFieldPath(fieldPath: string): FieldPath | null;

  /**
   * Traverses the ser field name as provided on the type, returning the corresponding FieldPath
   *
   * @see Ann.Ser
   * @param serName
   *        serialization name of the field
   * @return the field path
   */
  traverseSerField(serName: string, failIfMissing?: boolean): FieldPath | null;

  serFieldTypes(): C3.Map<string | null, FieldType | null>;

  /**
   * @return fieldType with the matching serialized name.
   *
   * @see #serFieldTypes
   * @see Ann.Ser
   */
  serFieldType(serName: string, failIfMissing?: boolean): FieldType | null;

  /**
   * Whether or not there are any fields in this type whose serialization name differs from the normal field name.
   *
   * @see FieldType#serName
   */
  hasSerNameFields(): boolean;

  /**
   * Whether this type has any data fields. Note it skips constants.
   */
  hasFields(): boolean;

  /**
   * Whether this type has any data field with defaults. Note it skips constants.
   */
  hasFieldDefaults(): boolean;

  /**
   * Whether this type has any required fields.
   */
  hasRequiredFields(): boolean;

  /**
   * Whether this type has any constraints such as required fields or @constraint annotation.
   */
  hasConstraints(): boolean;

  /**
   * @return True if the type has annotation @config(minOverride="USER")
   */
  hasConfigOverrideUser(): boolean;

  /**
   * @return True if this type has Ann.Config#secret annotation or contains any object that do.
   */
  hasSecretField(): boolean;

  /**
   * Whether this type has any methods declared.
   */
  hasMethods(): boolean;

  /**
   * @return True if this type has beforeMake or afterMake overrides
   */
  hasBeforeMakeOverride(): boolean;

  /**
   * A list of methods for this type.
   */
  methods(order?: string | null): C3.Array<Method | null>;

  /**
   * Get a map of methods by name for this type.
   */
  methodsByName(): C3.Map<string | null, Method | null>;

  /**
   * Get the names of all methods for this type.
   */
  methodNames(): C3.Set<string | null>;

  /**
   * Get a single method by name.
   */
  method(method: string | null, failIfMissing?: boolean): Method | null;

  /**
   * A list of method for this type with specified {@link Annotation}.
   */
  methodOverloadsWithAnn(ann: string, order?: string | null): C3.Array<MethodType | null>;

  /**
   * Whether this type has any implicit methods (i.e. methods that are valid but not declared for the type) such as
   * `with<field-name>`, `set<field-name>`, etc.
   *
   * @see #implicitMethods
   */
  hasImplicitMethods(): boolean;

  /**
   * Get the implicit methods for this type such as `with<field-name>`, `set<field-name>` etc.
   *
   * @see #methods
   * @see #implicitMethodsByName
   */
  implicitMethods(): C3.Array<Method | null>;

  /**
   * Get the implicit methods map by name for this type.
   *
   * @see #methods
   * @see #implicitMethods
   */
  implicitMethodsByName(): C3.Map<string | null, Method | null>;

  /**
   * Get a single method by name, whether that method is declared or implicit.
   *
   * @see #methods
   * @see #implicitMethods
   */
  declaredOrImplicitMethod(method: string | null): Method | null;

  /**
   * Get the names of all member methods for this type.
   */
  memberMethodNames(): C3.Set<string | null>;

  /**
   * Whether this type has a member method of the given name
   */
  hasMemberMethod(name: string): boolean;

  /**
   * Whether this type has source code for function implementations, not including types it mixes in. If an {@Link Action.Requirement} is
   * specified, source code for that {@Link Action.Requirement action requirement}  and all other {@Link Action.Requirement action requirements} whose {@link Action.Requirement#meetsRequirement requirements are met} by the provided action requirement.
   * is checked. This does not include script files that are specific to an {@Link Action.Requirement}, only ones that provide the base implementation.
   *
   * @param actionRequirement The {@Link Action.Requirement} to check.
   */
  hasSourceCode(actionRequirement: string): boolean;

  /**
   * The combined source code for this type in the specified language. Use {@link #sourceCodeAndFilePaths} for the
   * individual code files.
   *
   * @param type
   *         The Type whose source code will be returned
   * @param actionRequirement
   *         The {@Link Action.Requirement}  which we want to get source code for. If this action requirement
   *         {@link Action.Requirement#meetsRequirementFor meets requirement for} another action requirement, that  source code for that action requirement
   *         for the given Type is also included. This method only returns source code for script-based action requirement.
   *
   * @return Source code for a Type and its remixes. This includes source code from dependent packages. The resulting
   *         code is ordered in proper execution order, which is ordered from lowest -> highest precedence. `Pkg`
   *         ordering takes highest precedence when determining the order of source code in the resulting string; all
   *         source code for the remix of a Type will come after all source code from the package which originally
   *         declared the Type. {@link declaredRemixes} enumerates all packages for which the given Type was remixed,
   *         in the order of highest -> lowest precedence. {@link package} is the package which originally declared
   *         this Type; source code from this package will have the lowest precedence. See
   *         {@link Pkg#typeSourceCodePaths} for documentation describing the order of source code files in the scenario
   *         that more than one file in a `Pkg` implements methods for the given Type and action requirement.
   */
  sourceCode(actionRequirement: string): string | null;

  /**
   * The individual source code files for this type in the specified language. Use {@link #sourceCode} for the merged
   * source code.
   *
   * @param type
   *         The Type whose source code will be returned
   * @param actionRequirement
   *         The {@Link Action.Requirement} which we want to get source code for. If this action requirement
   *         {@link Action.Requirement#meetsRequirementFor meets requirement for} another action requirement, the  source code for that action requirement
   *         for the given Type is also included. This method only returns source code for script-based action requirement.
   *
   * @return A map from source code {@link Pkg.Path} (key) to source code (value) for all source code files for a
   *         Type and its remixes. This includes source code from dependent packages. The resulting map is ordered in
   *         proper execution order, which is ordered from lowest -> highest precedence. `Pkg` ordering takes highest
   *         precedence when determining the order of source code in the resulting map; all source code for the remix of
   *         a Type will come after all source code from the package which originally declared the Type.
   *         {@link declaredRemixes} enumerates all packages for which the given Type was remixed, in the order of
   *         highest -> lowest precedence. {@link package} is the package which originally declared this Type; source
   *         code from this package will have the lowest precedence. See {@link Pkg#typeSourceCodePaths} for
   *         documentation describing the order of source code files in the scenario that more than one file in a
   *         `Pkg` implements methods for the given Type and actionEngine.
   */
  sourceCodeAndFilePaths(actionRequirement: string): C3.Map<string | null, string | null>;

  /**
   * @return prototype name parsed from file name. E.g. "Array.py-client.py" -> "Array"
   */
  static prototypeNameFromFileName(fileName: string): string;

  /**
   * Whether this type has source code for function implementations, not including types it mixes in. If a language is
   * specified, only source code for that language is checked. This does not include script files that are specific to
   * an {@Link Action.Requirement}, only ones that provide the base implementation.
   *
   * @param language The language to check.
   */
  actionRequirements(language?: string | null): C3.Array<string | null>;

  /**
   * Produce a reference type to this type.
   */
  referenceType(): ReferenceType;

  /**
   * Produce an array type of elements of this type.
   */
  arrayType(): ArrayType;

  /**
   * Produce a stream type of elements of this type.
   */
  streamType(): StreamType;

  /**
   * Produce a set type of elements of this type.
   */
  setType(): SetType;

  /**
   * Produce a map type with `string` as key type and this as element type.
   */
  mapType(): MapType;

  /**
   * Produce a map type of elements of this type and provided with key type.
   */
  mapTypeOf(keyType: ValueType): MapType;

  /**
   * Produce a columnar type for this type
   */
  columnarType(): TypeMeta;

  /**
   * Runtime java class of the type.
   *
   * @see Ann.Java#runtimeClassName
   */
  runtimeJavaClassName(): string | null;

  /**
   * Schema / table name for this type typically used by entity types.
   */
  schemaName(): string | null;

  /**
   * Produce a default UI configuration that incorporates the information present in the type itself,
   * when a default presentation of this type is desired.
   */
  defaultUi(): TypeDefaultUi;

  /**
   * @return corresponding and only Type for this TypeMeta
   */
  toType(): Type;

  /**
   * Convert the internal object representation of this TypeMeta to a JSON object specific to a {@Link Action.Engine}.
   */
  toSdkJson(actionEngine: string): any;

  /**
   * Creates a new dynamic type with the additional field definition as specified and returns it.
   * This type will be an anonymous type that mixes in the current type, adding the extra field.
   *
   * This is a shortcut method for adding a single new field.  See #putFieldTypes
   * for the more general function.
   *
   * @param field of the new field
   * @param valueType type of the new field
   * @return new dynamic type
   */
  withFieldType(field: string, valueType: ValueType): TypeMeta;

  /**
   * Creates a new dynamic type with the additional field definitions as specified and returns it.
   * This type will be an anonymous type that mixes in the current type, adding the extra fields.
   *
   * @param field map of field specifications
   * @return new dynamic type
   */
  withFieldTypes(fields: C3.Map<string | null, ValueType | null> | null): TypeMeta;

  /**
   * Creates a new dynamic type with the additional field definitions as specified and returns it.
   * This type will be an anonymous type that mixes in the current type, adding the extra fields.
   *
   * @param field iterable of field specifications
   * @return new dynamic type
   */
  withFieldTypesAnns(fields: C3.Array<any>): TypeMeta;

  /**
   * Creates a new dynamic type with only the selected fields.
   *
   * @param names
   *        list of field names to select from this TypeMeta
   */
  withSelectedFieldTypes(names: Collection<string | null>): TypeMeta | null;

  /**
   * @return new builder of instance of this type
   */
  objBuilder(): ObjBuilder<O>;

  /**
   * @return new builder of instance of this type with fields populated based on provided Obj
   */
  objBuilder(initial: O): ObjBuilder<O>;

  /**
   * @return builder of instance of this sub type of Typesys
   */
  objBuilder(pkg?: Pkg | null): ObjBuilder<O>;

  /**
   * @return object built by provided builder lambda
   */
  buildObj(builder?: λConsumer<ObjBuilder<O>> | null): O;

  /**
   * @return empty instance of this type
   */
  emptyObj(pkg?: Pkg | null): Obj | null;

  /**
   * @return resolved C3 type from a string serialized reference to it. Type resolution happens in the scope if this
   *         type e.g. if provided string is a bound generic variable reference then this method will return type that
   *         is bound to that generic variable. It will also bind / resolve generic variable in the provided input
   *         string. E.g. assuming `K` is a generic variable in this type bound to `string` and `E` is bound to a
   *         `Duration` C3 type then `dereference("Pair<K,E>")` will return `Pair<string, Duration>`
   */
  dereference(typeName: string, failIfMissing?: boolean): Type | null;

  /**
   * True if instances of this type are pooled by fingerprint
   */
  get hasObjPool(): boolean;

  /**
   * Generic dispatch of the C3 Action - i.e. application of function on a C3 Type. It handles both static and member
   * functions. For static methods #thisArg should be `null`.
   *
   * Note that args are expected to be of correct value type and no additional conversion will be performed.
   *
   * @see #callByName
   * @see #callJson
   */
  call(methodType: MethodType, thisArg: any, ...args: any[]): T | null;

  /**
   * Generic dispatch of the C3 Action - i.e. application of function on a C3 Type. It handles both static and member
   * functions. For static methods thisArg should be `null`. If target method is overloaded, will match overload based
   * on argument value types.
   *
   * Note that args are expected to be of correct value type and no additional conversion will be performed.
   *
   * @see #callByName
   * @see #callJson
   */
  call(method: Method, overloadIndex: number, thisArg: any, ...args: any[]): T | null;

  /**
   * Generic dispatch of the C3 Action - i.e. application of function on a C3 Type. It handles both static and member
   * functions. For static methods thisArg should be `null`. If target method is overloaded, will match overload based
   * on argument value types.
   *
   * Note that while implementation will perform argument conversion it's most efficient to call with correct argument
   * value types.
   *
   * @see #callByName
   * @see #callJson
   */
  call(action: string, thisArg: any, ...args: any[]): T | null;

  /**
   * Generic dispatch of the C3 Action - i.e. application of function on a C3 Type. It handles both static and member
   * functions. For member methods args should contain `this` key. If target method is overloaded will match overload
   * based on argument value types.
   *
   * Note that while implementation will perform argument conversion it's most efficient to call with correct argument
   * value types.
   *
   * @see #call
   * @see #callJson
   */
  callByName(action: string, args?: C3.Map<string | null, any>): T | null;

  /**
   * Generic dispatch of the C3 Action - i.e. application of function on a C3 Type. It handles both static and member
   * functions. If target method is overloaded will match overload based on argument value types.
   *
   * Note that while implementation will perform argument conversion it's most efficient to call with correct argument
   * value types.
   *
   * @see #call
   * @see #callJson
   */
  callByArgsAndKwargs(action: string, thisArg: any, args?: C3.Array<any>, kwargs?: C3.Map<string | null, any>): T | null;

  /**
   * Generic dispatch of the C3 Action - i.e. application of function on a C3 Type. It handles both static and member
   * functions. Expectation is that input is a valid serialization of C3 Action named arguments including `this` in case
   * of member actions. Return is a C3 value.
   *
   * @see #call
   * @see #callByName
   */
  callJson(action: string, input: any | null): T | null;

  /**
   * Generic dispatch of the C3 Action - i.e. application of function on a C3 Type. It handles both static and member
   * functions. Expectation is that args is a valid serialization of C3 Action positional arguments and kwargs
   * are a valid serialization of C3 Action named arguments.
   * Return is a C3 value.
   *
   * @see #call
   * @see #callByName
   */
  callJson(action: string, thisArg: any | null, args: any | null, kwargs: any | null): T | null;

  /**
   * Dispatch of the C3 Action from a Java Code Generated C3 type instances and implementations
   *
   * @see #call
   * @see #callByName
   * @see #callJson
   */
  callFromCodeGen(method: Method, overloadIndex: number, thisArg: any, ...args: any[]): T | null;

  /**
   * @return result(s) of call(s) to this method [ aka precomputation ]; this is different then #call as potentially
   *         multiple calls are made for each key in a provided #keys argument or array from #precomputationKeys method.
   *         If method only has single precomputed result, e.g. method has no parameters, then a single result is
   *         returned, otherwise a map of results is returned.
   *
   * @see MethodType#hasSinglePrecomputedResult
   */
  precompute(method: MethodType, thisArg: any, keys?: C3.Array<K | null>, include?: Include | null, exclude?: Exclude | null): R | null | C3.Map<K | null, R | null> | null;

  /**
   * @return empty instance of this type
   */
  instantiate(): O | null;

  /**
   * @return new instance of this type based on provided string representation
   *
   * @see StringSerializable#fromString
   */
  instantiate(s: string | null): O | null;

  /**
   * @return new instance of this type with the specified fields
   */
  instantiate(fields: C3.Map<FieldType | null, any> | null, pkg?: Pkg | null, state?: BitSet | null): O | null;

  /**
   * @return new instance of this type using the language-specific construction mechanism
   *
   * @see Obj#make
   */
  instantiate(fields: any, pkg?: Pkg | null, state?: BitSet | null): O | null;

  /**
   * @return type system scope for building / binding declared fields and value types.
   */
  scope(): TypesysScope;

  /**
   * @return Java class for interface for instances of this type or null
   */
  javaInterface(): any;

  /**
   * @return The set of all fields that constraints depend on in this type.
   */
  constraintDepFields(): C3.Array<FieldPath | null>;

  /**
   * @return {@link Db.Domain} if this entity type belongs to a specific Db.Domain
   *
   * @see Ann.Db#domain
   */
  dbDomain(): Db.Domain | null;

  /**
   * @return {@link Expr} for calculating target app id to call for type
   *
   * @see Ann.Call#app
   */
  targetAppExpr(): Expr | null;

  /**
   * @return {@link Expr} for calculating target server role for this type
   *
   * @see Ann.Call#serverRole
   */
  targetNodeRoleExpr(): Expr | null;

  /**
   * @return {@link Expr} for calculating target server node pool for this type
   *
   * @see Ann.Call#nodePool
   */
  targetNodePoolExpr(): Expr | null;

  /**
   * @return {@link Expr} for calculating target server node for this type
   *
   * @see Ann.Call#node
   */
  targetNodeExpr(): Expr | null;

  /**
   * @return {@link Expr} for calculating target thread-pool for this type
   *
   * @see Ann.Call#threadPool
   */
  targetThreadPoolExpr(): Expr | null;

  /**
   * @return True if any constraints have any fields they depend on.
   */
  hasConstraintDepFields(): boolean;

  /**
   * @return A list of field types that will have non-null values on Obj instantiation (e.g. fields with default values
   * on types that aren't entity types as well as boolean fields)
   */
  fieldTypesWithInitialValue(): C3.Array<FieldType | null>;

  /**
   * @returns the conditional constraint, if any, for the type.
   */
  conditionalConstraint(): Pair<Expr.Compiled<Obj | null, boolean> | null, string | null> | null;

  /**
   * @return cached and shared scope / compiled unit of given Action.Engine for this type.
   */
  actionEngineScope(actionEngine: string): any;

  /**
   * @return `true`, if this is an EventStream or has fields of type EventStream.
   */
  get hasEventStream(): boolean;

  /**
   * @return extension type at any level with provided typeIdent.
   */
  subTypeForTypeIdent(typeIdent: string | null, failIfInvalid?: boolean): Type | null;

  /**
   * @return True if the typeIdent is valid for any subtype of this type.
   */
  isValidTypeIdent(typeIdent: string): boolean;

  authz(): string | null;

  /**
   * @return value of `@action(authzChildActions=` annotation
   */
  authzChildActions(): boolean;

  /**
   * @return value of `@action(accessControlGroups=` annotation
   */
  accessControlGroups(): C3.Array<string | null>;

  /**
   * @return remixed type by merging annotations, fields and methods from a provided #remixType into this one
   */
  remix(remixType: TypeMeta): TypeMeta;

  /**
   * Get repository type belongs to.
   */
  repository(): string | null;

  /**
   * Ensures that this TypeMeta contains field names that can be parsed by Type System DSL. For example,
   * "hello:world" is an invalid field name because it contains the ":" character which is used as a delimiter between
   * field name and ValueType.
   *
   * @return new TypeMeta with invalid field names replaced with valid field names
   */
  ensureValidFieldNames(): TypeMeta;

  isAnyExpr(): boolean;

  /**
   * @return cached compiled expr for the given expression for given type.
   * Only use this method if you are going to invoke the same expression multiple times
   */
  compiledExpr(expr: string): Expr.Compiled<any, any>;

  /**
   * @return key field if this C3 Type is a subtype of {@link WithKey}
   */
  keyField(): string;

  /**
   * Get the path in repository to directory containing type.
   */
  parentDirPathInRepo(): string | null;

  setPrototype(prototype: TypeMeta): void;

  retainedObjs(filter?: string | null, offset?: number | null, limit?: number | null): Stream<Obj | null>;

  allocated(): number | null;

  hasConfiguredAnnotations(): boolean;

  isAnnotationType(): boolean;

  isPlatformType(): boolean;

  isEvaluatable(): boolean;

  /**
   * @return True if the given field is a constant, i.e., fixed to its default value.
   */
  isConstant(fieldName: string): boolean;

  /**
   * Reference type for the provided reference field type name.
   *
   * @param name
   *        of the reference typed field
   * @return a reference type for the field
   */
  fieldReferenceType(name: string): ReferenceType | null;

  /**
   * Calculates all "forward" dependencies of this type to other types or metadata elements
   */
  dependencies(): TypeMetaDeps;

  /**
   * @return fingerprint / checksum of this type including it's dependencies
   *
   * @see Fingerprintable#fingerprint
   */
  fingerprintWithDeps(): number;

  /**
   * Retrieves child metadata element at character position in the declaration of this C3 type
   *
   * @param line
   *        line number starting with 1 in the source file
   * @param charInLine
   *        character position in a line starting with 1 in the source file
   * @return child metadata element at character position in the declaration of this C3 type
   */
  metaElementAt(line: number, charInLine: number): Typesys | null;

  /**
   * @return map of declared child metadata elements where key is source line number starting with 1 in a c3typ and
   *         values are elements declared on that line ordered by declaration character position
   */
  get declaredMetaElements(): C3.Map<number | null, C3.Array<Typesys | null>>;

  /**
   * @return named TupleType for the given TypeMeta
   */
  toTupleType(): TupleType | null;

  toSubtype(): any;

  _javaSubtype(mixin: string): any;

  _myJavaMethods(): any;

  _javaMethods(mixin: string): any;

  avroSchema(): any;

  /**
   * Returns the field names of all of the fields on a {@link Searchable} type with the {@link Ann.Search} annotation
   */
  searchableFields(): C3.Array<string | null>;

  /**
   * @return True then 'null' values will not be cached.
   */
  doNotCacheNulls(): boolean;

  /**
   * Returns the {@link TypeMeta} of the types.
   *
   * @param names
   *        Names of the types to filter on. Action will throw an exception if a passed type name is null or invalid.
   *        If empty, it returns {@link TypeMeta} for all the types.
   *        If not empty, only returns the {@link TypeMeta} for the passed type names.
   * @param includeInnerTypes
   *        Includes inner {@link TypeMeta}s if set to true
   */
  static all(names?: C3.Array<string | null>, includeInnerTypes?: boolean): C3.Map<string | null, TypeMeta | null>;

  /**
   * Generates an {@link TypeMeta} based on the json provided
   *
   * e.g TypeMeta.inferTypeMetaFromJson
   *             ([{location: 'USA', power: 300}, { location: 'Canada', power: 100}])
   * will yield a type with fields: location: string and power: double
   *
   * @param jsons
   *         The json objects to use for inference
   * @param spec
   *         Settings to apply to the type inference
   * @return a TypeMeta for the provided jsons
   */
  static inferTypeMetaFromJson(jsons: Stream<any | null>, spec?: InferTypeSpec | null): TypeMeta;

  /**
   * Generates a list of {@link TypeMeta} corresponding to each stream of json provided
   * @param jsonStreams
   *         The individual json streams to use for each inference
   * @param spec
   *         Settings to apply to each type inference
   * @return an inferred {@link TypeMeta} for each jsonStream
   */
  static inferTypeMetaFromJsonBatch(jsonStreams: Stream<Stream<any | null>>, spec?: InferTypeSpec | null): C3.Array<TypeMeta | null>;

  /**
   * Validates the source code of this type for various action requirements.
   *
   * @return a map of action requirement to list of issues found in the source code for that action requirement
   */
  validateSourceCode(): C3.Map<string | null, C3.Array<Pkg.Issue | null>>;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λConsumer<T> {
  (t: T): void
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λPredicate<T> {
  (t: T): boolean
}
