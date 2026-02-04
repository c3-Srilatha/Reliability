// TypeScript definitions for the C3 type DataFusionCodeEditorContainerReact

/**
 * React renderer for {@link DataFusionCodeEditorContainer}
 *
 * @remarks this represents a value passed to a method that expects an instance of DataFusionCodeEditorContainerReact
 */
declare interface IDataFusionCodeEditorContainerReact {

  /**
   * Various system fields.
   */
  meta?: IMeta | null;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  id?: string | null;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  name?: string | null;

  /**
   * The data settings for this component.
   *
   * @uiSdlDesignerCustomRenderer(rendererType='')
   */
  dataSpec?: IUiSdlNoData | null;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  disableDataRequestOnFirstRender?: boolean;

  /**
   * Whether the effect triggers and epics have been registered
   */
  triggersRegistered?: boolean;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  wrapWithMetadataId?: boolean;

  /**
   * Whether the type under edit is a new entity. This should only be set from `true` to `false` once
   * a new entity type is saved successfully. Should be set to false if editing an existing root package type
   * or remixing a type.
   */
  isNewEntity?: boolean;

  /**
   * Whether the type under edit is a remix type.
   */
  isRemix?: boolean;

  /**
   * The name of the type under edit.
   */
  activeTypeName?: string | null;

  /**
   * The templates to be rendered when creating a new entity
   */
  codeEditorTemplates?: C3.Array<any | null> | Array<any | null>;

  /**
   * The code that is rendered for the type declaration in the code editor.
   */
  typeDeclarationCode?: string | null;

  /**
   * The type declaration code as it is first loaded in the code editor.
   */
  initialTypeDeclarationCode?: string | null;

  /**
   * The js implementation code for the type.
   */
  typeImplementationJsCode?: string | null;

  /**
   * If remixing, the remix implementation js code.
   */
  remixImplementationJsCode?: string | null;

  /**
   * The initial js implementation code for the type, as it is first loaded in the code editor.
   */
  initialTypeImplementationJsCode?: string | null;

  /**
   * If remixing, the initial js implementation code for the remix, as it is first loaded in the code editor.
   */
  initialRemixImplementationJsCode?: string | null;

  /**
   * A list of function names for the current type, grouped by member functions and static functions.
   */
  functionNamesList?: C3.Array<string | null> | Array<string | null>;

  /**
   * A map of function names to their declarations.
   */
  functionDeclarations?: C3.Map<string | null, string | null> | {[key: string | null]: string | null};

  /**
   * Status of if the function is implemented or not
   */
  functionImplementationStatus?: C3.Map<string | null, boolean> | {[key: string | null]: boolean};

  remixDeclarationCode?: string | null;

  /**
   * Resolved remix code, stored separately so we don't clear the original code
   */
  resolvedDeclarationCode?: string | null;

  /**
   * The editor pane that is currently visible
   */
  visibleEditorPane?: string | null;

  /**
   * {@link DataFusionCodeEditorContainerMode} enum to describe the editor pane mode; read-only or edit
   */
  editorPaneMode?: string | null;

  /**
   * {@link DataFusionCodeEditorContainerMode} enum to describe the remix pane mode; edit or read-only
   */
  remixPaneMode?: string | null;

  /**
   * When in remix `edit` mode, we can be in one of three views
   */
  remixEditMode?: string | null;

  /**
   * Set/clear the spinner
   */
  codeEditorDataLoading?: boolean;

  /**
   * Set the initial remix code once. Thereafter, use the code state
   */
  didSetInitialRemixCode?: boolean;

  /**
   * Whether the code editor is currently evaluating syntax.
   */
  isEvaluatingSyntax?: boolean;

  /**
   * Whether the code editor is currently saving or updating a type.
   */
  isCreatingOrUpdatingEntity?: boolean;

  /**
   * The list of issues in the code editor console, grouped by file.
   */
  codeEditorConsoleIssues?: C3.Map<string | null, C3.Array<Pkg.Issue | null>> | {[key: string | null]: C3.Array<Pkg.Issue | null> | Array<IPkg.Issue | null>};

  /**
   * Whether the fetch for the issues in the code editor console should start
   */
  shouldFetchCodeEditorConsoleIssues?: boolean;

  /**
   * Keeps track of how many times the code editor console issues have been fetched.
   * It is used to limit the number of fetch attempts.
   */
  codeEditorConsoleIssuesFetchCount?: number | null;

  /**
   * The texts to be displayed in the code editor create/update modal.
   */
  codeEditorCreateUpdateModalTexts?: C3.Map<string | null, string | null> | {[key: string | null]: string | null};

  /**
   * The map of language to corresponding suggested file content
   * js -> suggested js impl of file
   * c3typ -> suggested type declaration of file
   * Will support python and json in 8.10
   */
  codeEditorSuggestedFileContent?: C3.Map<string | null, string | null> | {[key: string | null]: string | null};

  /**
   * The map of language to correponding original file content
   * This is used when the user rejects the suggested changes
   * js -> original js impl of file
   * c3typ -> original type declaration of file
   * Will support python and json in 8.10
   */
  codeEditorOriginalFileContent?: C3.Map<string | null, string | null> | {[key: string | null]: string | null};

  /**
   * The map of language to correponding diff patches
   * This is used to show the diff and highlight in the code editor
   * e.g.
   * [
   *  {codeBlock: "line1\n", status: null, lineNumbers: [1]},
   *  {codeBlock: "line2\n", status: 'removed', lineNumbers: [2]},
   *  {codeBlock: "line2_modified\n", status: 'added', lineNumbers: [3]},
   *  {codeBlock: "line3\n", status: null, lineNumbers: [4]}
   * ]
   */
  codeEditorDiffPatches?: C3.Map<string | null, C3.Array<any | null>> | {[key: string | null]: C3.Array<any | null> | Array<any | null>};

  /**
   * The map of language to the id of latest message that contains suggested file content neither accepted nor rejected
   */
  pendingResolutionMessageIds?: C3.Map<string | null, string | null> | {[key: string | null]: string | null};
}

/**
 * React renderer for {@link DataFusionCodeEditorContainer}
 *
 * @remarks this represents a made instance of DataFusionCodeEditorContainerReact
 */
declare class DataFusionCodeEditorContainerReact extends Obj {

  /**
   * Various system fields.
   */
  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): DataFusionCodeEditorContainerReact;

  /**
   * Unique identifier for the logical object that instance of this type represents.
   */
  readonly id?: string | null;
  withId(id: string | null): DataFusionCodeEditorContainerReact;

  /**
   * The name of the component. Optional field for informational purposes only.
   */
  readonly name?: string | null;
  withName(name: string | null): DataFusionCodeEditorContainerReact;

  /**
   * The data settings for this component.
   *
   * @uiSdlDesignerCustomRenderer(rendererType='')
   */
  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): DataFusionCodeEditorContainerReact;

  /**
   * Disable if you want to avoid sending any and all requests for this component on first render.
   */
  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): DataFusionCodeEditorContainerReact;

  /**
   * Whether the effect triggers and epics have been registered
   */
  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): DataFusionCodeEditorContainerReact;

  /**
   * Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
   */
  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): DataFusionCodeEditorContainerReact;

  /**
   * Whether the type under edit is a new entity. This should only be set from `true` to `false` once
   * a new entity type is saved successfully. Should be set to false if editing an existing root package type
   * or remixing a type.
   */
  readonly isNewEntity?: boolean;
  withIsNewEntity(isNewEntity: boolean): DataFusionCodeEditorContainerReact;

  /**
   * Whether the type under edit is a remix type.
   */
  readonly isRemix?: boolean;
  withIsRemix(isRemix: boolean): DataFusionCodeEditorContainerReact;

  /**
   * The name of the type under edit.
   */
  readonly activeTypeName?: string | null;
  withActiveTypeName(activeTypeName: string | null): DataFusionCodeEditorContainerReact;

  /**
   * The templates to be rendered when creating a new entity
   */
  readonly codeEditorTemplates?: C3.Array<any | null>;
  withCodeEditorTemplates(codeEditorTemplates: C3.Array<any | null> | Array<any | null>): DataFusionCodeEditorContainerReact;

  /**
   * The code that is rendered for the type declaration in the code editor.
   */
  readonly typeDeclarationCode?: string | null;
  withTypeDeclarationCode(typeDeclarationCode: string | null): DataFusionCodeEditorContainerReact;

  /**
   * The type declaration code as it is first loaded in the code editor.
   */
  readonly initialTypeDeclarationCode?: string | null;
  withInitialTypeDeclarationCode(initialTypeDeclarationCode: string | null): DataFusionCodeEditorContainerReact;

  /**
   * The js implementation code for the type.
   */
  readonly typeImplementationJsCode?: string | null;
  withTypeImplementationJsCode(typeImplementationJsCode: string | null): DataFusionCodeEditorContainerReact;

  /**
   * If remixing, the remix implementation js code.
   */
  readonly remixImplementationJsCode?: string | null;
  withRemixImplementationJsCode(remixImplementationJsCode: string | null): DataFusionCodeEditorContainerReact;

  /**
   * The initial js implementation code for the type, as it is first loaded in the code editor.
   */
  readonly initialTypeImplementationJsCode?: string | null;
  withInitialTypeImplementationJsCode(initialTypeImplementationJsCode: string | null): DataFusionCodeEditorContainerReact;

  /**
   * If remixing, the initial js implementation code for the remix, as it is first loaded in the code editor.
   */
  readonly initialRemixImplementationJsCode?: string | null;
  withInitialRemixImplementationJsCode(initialRemixImplementationJsCode: string | null): DataFusionCodeEditorContainerReact;

  /**
   * A list of function names for the current type, grouped by member functions and static functions.
   */
  readonly functionNamesList?: C3.Array<string | null>;
  withFunctionNamesList(functionNamesList: C3.Array<string | null> | Array<string | null>): DataFusionCodeEditorContainerReact;

  /**
   * A map of function names to their declarations.
   */
  readonly functionDeclarations?: C3.Map<string | null, string | null>;
  withFunctionDeclarations(functionDeclarations: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): DataFusionCodeEditorContainerReact;

  /**
   * Status of if the function is implemented or not
   */
  readonly functionImplementationStatus?: C3.Map<string | null, boolean>;
  withFunctionImplementationStatus(functionImplementationStatus: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): DataFusionCodeEditorContainerReact;

  readonly remixDeclarationCode?: string | null;
  withRemixDeclarationCode(remixDeclarationCode: string | null): DataFusionCodeEditorContainerReact;

  /**
   * Resolved remix code, stored separately so we don't clear the original code
   */
  readonly resolvedDeclarationCode?: string | null;
  withResolvedDeclarationCode(resolvedDeclarationCode: string | null): DataFusionCodeEditorContainerReact;

  /**
   * The editor pane that is currently visible
   */
  readonly visibleEditorPane?: string | null;
  withVisibleEditorPane(visibleEditorPane: string | null): DataFusionCodeEditorContainerReact;

  /**
   * {@link DataFusionCodeEditorContainerMode} enum to describe the editor pane mode; read-only or edit
   */
  readonly editorPaneMode?: string | null;
  withEditorPaneMode(editorPaneMode: string | null): DataFusionCodeEditorContainerReact;

  /**
   * {@link DataFusionCodeEditorContainerMode} enum to describe the remix pane mode; edit or read-only
   */
  readonly remixPaneMode?: string | null;
  withRemixPaneMode(remixPaneMode: string | null): DataFusionCodeEditorContainerReact;

  /**
   * When in remix `edit` mode, we can be in one of three views
   */
  readonly remixEditMode?: string | null;
  withRemixEditMode(remixEditMode: string | null): DataFusionCodeEditorContainerReact;

  /**
   * Set/clear the spinner
   */
  readonly codeEditorDataLoading?: boolean;
  withCodeEditorDataLoading(codeEditorDataLoading: boolean): DataFusionCodeEditorContainerReact;

  /**
   * Set the initial remix code once. Thereafter, use the code state
   */
  readonly didSetInitialRemixCode?: boolean;
  withDidSetInitialRemixCode(didSetInitialRemixCode: boolean): DataFusionCodeEditorContainerReact;

  /**
   * Whether the code editor is currently evaluating syntax.
   */
  readonly isEvaluatingSyntax?: boolean;
  withIsEvaluatingSyntax(isEvaluatingSyntax: boolean): DataFusionCodeEditorContainerReact;

  /**
   * Whether the code editor is currently saving or updating a type.
   */
  readonly isCreatingOrUpdatingEntity?: boolean;
  withIsCreatingOrUpdatingEntity(isCreatingOrUpdatingEntity: boolean): DataFusionCodeEditorContainerReact;

  /**
   * The list of issues in the code editor console, grouped by file.
   */
  readonly codeEditorConsoleIssues?: C3.Map<string | null, C3.Array<Pkg.Issue | null>>;
  withCodeEditorConsoleIssues(codeEditorConsoleIssues: C3.Map<string | null, C3.Array<Pkg.Issue | null>> | {[key: string | null]: C3.Array<Pkg.Issue | null> | Array<IPkg.Issue | null>}): DataFusionCodeEditorContainerReact;

  /**
   * Whether the fetch for the issues in the code editor console should start
   */
  readonly shouldFetchCodeEditorConsoleIssues?: boolean;
  withShouldFetchCodeEditorConsoleIssues(shouldFetchCodeEditorConsoleIssues: boolean): DataFusionCodeEditorContainerReact;

  /**
   * Keeps track of how many times the code editor console issues have been fetched.
   * It is used to limit the number of fetch attempts.
   */
  readonly codeEditorConsoleIssuesFetchCount?: number | null;
  withCodeEditorConsoleIssuesFetchCount(codeEditorConsoleIssuesFetchCount: number | null): DataFusionCodeEditorContainerReact;

  /**
   * The texts to be displayed in the code editor create/update modal.
   */
  readonly codeEditorCreateUpdateModalTexts?: C3.Map<string | null, string | null>;
  withCodeEditorCreateUpdateModalTexts(codeEditorCreateUpdateModalTexts: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): DataFusionCodeEditorContainerReact;

  /**
   * The map of language to corresponding suggested file content
   * js -> suggested js impl of file
   * c3typ -> suggested type declaration of file
   * Will support python and json in 8.10
   */
  readonly codeEditorSuggestedFileContent?: C3.Map<string | null, string | null>;
  withCodeEditorSuggestedFileContent(codeEditorSuggestedFileContent: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): DataFusionCodeEditorContainerReact;

  /**
   * The map of language to correponding original file content
   * This is used when the user rejects the suggested changes
   * js -> original js impl of file
   * c3typ -> original type declaration of file
   * Will support python and json in 8.10
   */
  readonly codeEditorOriginalFileContent?: C3.Map<string | null, string | null>;
  withCodeEditorOriginalFileContent(codeEditorOriginalFileContent: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): DataFusionCodeEditorContainerReact;

  /**
   * The map of language to correponding diff patches
   * This is used to show the diff and highlight in the code editor
   * e.g.
   * [
   *  {codeBlock: "line1\n", status: null, lineNumbers: [1]},
   *  {codeBlock: "line2\n", status: 'removed', lineNumbers: [2]},
   *  {codeBlock: "line2_modified\n", status: 'added', lineNumbers: [3]},
   *  {codeBlock: "line3\n", status: null, lineNumbers: [4]}
   * ]
   */
  readonly codeEditorDiffPatches?: C3.Map<string | null, C3.Array<any | null>>;
  withCodeEditorDiffPatches(codeEditorDiffPatches: C3.Map<string | null, C3.Array<any | null>> | {[key: string | null]: C3.Array<any | null> | Array<any | null>}): DataFusionCodeEditorContainerReact;

  /**
   * The map of language to the id of latest message that contains suggested file content neither accepted nor rejected
   */
  readonly pendingResolutionMessageIds?: C3.Map<string | null, string | null>;
  withPendingResolutionMessageIds(pendingResolutionMessageIds: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): DataFusionCodeEditorContainerReact;

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
  static fromJson(json: any | null): DataFusionCodeEditorContainerReact | null;

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
  static fromJsonString(json: string | null): DataFusionCodeEditorContainerReact | null;

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
  static fromXmlString(xml: string | null): DataFusionCodeEditorContainerReact | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): DataFusionCodeEditorContainerReact | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): DataFusionCodeEditorContainerReact;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): DataFusionCodeEditorContainerReact;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): DataFusionCodeEditorContainerReact;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<DataFusionCodeEditorContainerReact | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<DataFusionCodeEditorContainerReact | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): DataFusionCodeEditorContainerReact;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): DataFusionCodeEditorContainerReact;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): DataFusionCodeEditorContainerReact;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): DataFusionCodeEditorContainerReact;

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
  withField(field: string, value: any, doNotConvert?: boolean): DataFusionCodeEditorContainerReact;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): DataFusionCodeEditorContainerReact;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): DataFusionCodeEditorContainerReact;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): DataFusionCodeEditorContainerReact;

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
  withoutFieldAtPath(path: string): DataFusionCodeEditorContainerReact;

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
  withoutField(field: string | null): DataFusionCodeEditorContainerReact;

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
  withoutField(field: FieldType | null): DataFusionCodeEditorContainerReact;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): DataFusionCodeEditorContainerReact;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): DataFusionCodeEditorContainerReact;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): DataFusionCodeEditorContainerReact;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): DataFusionCodeEditorContainerReact;

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
  defaultField(field: string): DataFusionCodeEditorContainerReact;

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
  defaultField(field: FieldType): DataFusionCodeEditorContainerReact;

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
  unsetField(field: string): DataFusionCodeEditorContainerReact;

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
  unsetField(field: FieldType): DataFusionCodeEditorContainerReact;

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
  removeField(field: string): DataFusionCodeEditorContainerReact;

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
  removeField(field: FieldType): DataFusionCodeEditorContainerReact;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): DataFusionCodeEditorContainerReact;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): DataFusionCodeEditorContainerReact;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): DataFusionCodeEditorContainerReact;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): DataFusionCodeEditorContainerReact;

  mergeJson(json: any | null): DataFusionCodeEditorContainerReact;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): DataFusionCodeEditorContainerReact;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): DataFusionCodeEditorContainerReact;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<DataFusionCodeEditorContainerReact | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<DataFusionCodeEditorContainerReact | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<DataFusionCodeEditorContainerReact | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<DataFusionCodeEditorContainerReact | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<DataFusionCodeEditorContainerReact | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, DataFusionCodeEditorContainerReact | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, DataFusionCodeEditorContainerReact | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<DataFusionCodeEditorContainerReact | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<DataFusionCodeEditorContainerReact | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): DataFusionCodeEditorContainerReact;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): DataFusionCodeEditorContainerReact;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): DataFusionCodeEditorContainerReact;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): DataFusionCodeEditorContainerReact;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): DataFusionCodeEditorContainerReact;

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
  static make(fields: any, withDefaults?: boolean): DataFusionCodeEditorContainerReact;

  /**
   * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
   * when the argument is a known string.
   *
   * @see #fromString
   */
  static make(s: string | null): DataFusionCodeEditorContainerReact | null;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): DataFusionCodeEditorContainerReact;

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
  afterMake(): DataFusionCodeEditorContainerReact;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): DataFusionCodeEditorContainerReact;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<DataFusionCodeEditorContainerReact>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): DataFusionCodeEditorContainerReact;

  /**
   * Produce the complete TSX file, including the declaration of the interface for the "props" based on the data
   * fields defined on the component type. This interface is always named with the type name plus "Props" and appended
   * to the existing source file.
   */
  static tsx(): string | null;

  /**
   * Produce the "props" interface for an arbitrary type. This will produce a TypeScript interface declaration that
   * includes all the data fields of the specified type, and the public data fields of types it mixes in. The details
   * can be controlled through the spec argument, but the defaults are what gets used by #tsx.
   *
   * @param type the type to examine
   * @param spec options for interface generation
   * @return TypeScript interface declaration
   */
  static buildProps(type: Type, spec?: ReactComponentPropsSpec | null): string | null;

  /**
   * The React component's tsx file path from root folder "/ui". i.e 'common/UiImg.tsx'
   */
  static tsxPath(): string | null;

  /**
   * If it has been imported, returns the imported module to render the UiComponent - the module at the tsxPath()
   */
  static importedModule(): any;

  /**
   * The render function must be implemented as the function the TSX implementation exports.
   */
  static render(props?: DataFusionCodeEditorContainerReact | null): void;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
   *           of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(spec?: FetchSpec | null): FetchResult<DataFusionCodeEditorContainerReact | null>;

  /**
   * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param filter
   *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
   * @return Requested objs.
   */
  static fetch(filter: Filter): FetchResult<DataFusionCodeEditorContainerReact | null>;

  /**
   * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
   * returned.
   *
   * @param spec
   *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
   * @return Requested obj stream.
   */
  static fetchObjStream(spec?: FetchStreamSpec | null): Stream<DataFusionCodeEditorContainerReact | null>;

  /**
   * Fetches multiple obj instances based on a specification and returns them as stream of Arrow batches with
   * specified maximum batch size.
   *
   * @param spec
   *           Specification of what data to fetch.
   * @return Stream of Arrow batches.
   */
  static fetchArrowStream(spec: FetchArrowStreamSpec): Stream<Arrow | null>;

  /**
   * Finds rows matching specification and returns them as iterator of Arrow batches.
   *
   * @param spec
   *           Specification of what rows to return.
   * @return Iterator of Arrow batches.
   */
  static scanArrow(spec: ScanArrowSpec): ArrowIterator | null;

  /**
   * Fetched multiple obj instances in multiple locales based on specification.
   *
   * @param spec
   *        Specification of what data to fetch. If not specified, all objs will be returned in all locales for the
   *        type.
   * @return Requested objs where key of map is locale id
   */
  static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<DataFusionCodeEditorContainerReact | null> | null>;

  /**
   * @return The number of entries that match the specification.
   */
  static fetchCount(spec?: FetchFilterSpec | null): number;

  /**
   * Gets the estimated count of objs that a fetch on the type with the optional filter will return.
   * For non-kv types, The count is obtained from the query explain plan for the fetch.
   * For kv types, the count is obtained by reading metadata from the state column and approximating the size of every
   * other column based on newColMaxObjCount. Since we compute based on max obj count, this value will be the
   * upper bound for the partition. For more accurate results, perform fillBuckets first.
   *
   * @param spec
   *        Optional filter to use for the estimated count.  Note that since the estimate is obtained from the query
   *        explain plan for the fetch it's accuracy will be MUCH greater if the filter involves only indexed
   *        fields.
   * @param updateStatistics
   *        If true, the database statistics for all tables involved in the query will be updated prior to obtaining
   *        the estimated row count.  This will give the most up to date estimate for types that are updated frequently.
   *
   * @return The requested estimated count.
   */
  static fetchCountEstimated(spec?: FetchFilterSpec | null, updateStatistics?: boolean): number;

  /**
   * Fetches all the data for this type based on provided filter and include spec, groups them by batchSize and invokes
   * a callback function for the given batch.
   *
   * @param spec
   *           Specification of the scan action.
   * @return Statistics of the scan action.
   */
  static scan(spec: ScanSpec): ScanStats | null;

  /**
   * Returns a stream of ids for batches where the result[i] is the starting id for batch 'i + 1'.
   *
   * @param spec
   *        Spec indicating how the operation should work.
   *
   * IMPORTANT - If both `suggestedNumBatches` and `batchSize` are specified in the spec, then the maximum number of
   *             rows that will participate in the resulting batches is `suggestedNumBatches` * `batchSize`.  This could
   *             cause an issue if the results are blindly used to create filters for fetching batches as the last batch
   *             would include EVERYTHING after the requested number of batches.  Therefore, typically only one or the
   *             other would be specified, depending on whether you are interested in controlling the number of batches
   *             or batch size.
   *
   * @return A stream of batch ids based on the input parameters.
   */
  static batchIds(spec?: BatchIdsSpec | null): Stream<string | null>;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(spec?: ExistsSpec | null): boolean;

  /**
   * @return True if there are at least the number of entries matching the filter/count specified in the spec.
   */
  static exists(filter: Filter): boolean;

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

  /**
   * Retrieves dependencies to types or other metadata elements for the given instance of metadata.
   */
  dependencies(): MetadataDeps<DataFusionCodeEditorContainerReact | null>;

  save(subPath?: string | null, contentType?: string | null): DataFusionCodeEditorContainerReact;

  remove(spec?: UpsertSpec | null): boolean;

  /**
   * Remove the metadata instance as well as its associated backward dependencies.
   * Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
   */
  removeWithChildren(): boolean;

  static removeAll(removeFilter?: string | null): number;

  update(srcObj?: DataFusionCodeEditorContainerReact | null, spec?: UpsertSpec | null): DataFusionCodeEditorContainerReact | null;

  upsert(srcObj?: DataFusionCodeEditorContainerReact | null, spec?: UpsertSpec | null): DataFusionCodeEditorContainerReact | null;

  /**
   * Retrieves folder that holds metadata.
   */
  static metadataFolder(): string | null;

  /**
   * If this Metadata type has arbitrary folder hierarchy.
   */
  static hasArbitraryFolderHierarchy(): boolean;

  /**
   * If metadata path is valid.
   * @param pkg
   *    name of the package
   * @param filePath
   *    path of metadata json file
   */
  static isValidMetadataJson(pkg: string, filePath: string): boolean;

  /**
   * Optional member function to enable custom validation logic.
   */
  validateMetadata(): ValidateObjResult;

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
  static fromString(s: string | null): DataFusionCodeEditorContainerReact | null;

  /**
   * @return single instance of this Identified type by id.
   */
  static forId(id: string | null, failIfMissing?: boolean): DataFusionCodeEditorContainerReact | null;

  jsonStringify(): string | null;

  static jsonify(value?: any): string | null;

  /**
   * A function to perform the setting and merging of keys and values for the dataSpec
   * and entity data in the react props. Components that need custom merging of multiple or nested datasources
   * should override this function and provide their own custom setting/merging logic.
   *
   * @param componentId
   *           The id of the component on which the function is being called
   * @param dataSpecFieldName
   *           The name of the field which is annotated as a dataSpec
   * @param dataDestinationFieldName
   *           Contains field name to store the returned data
   * @param props
   *           The object that will eventually be delivered to the component as react props
   * @param state
   *           The redux state
   * @returns props after the data has been set/merged
   */
  static doDataMerge(componentId: string, dataSpecFieldName: string, dataDestinationFieldName: string, props: DataFusionCodeEditorContainerReact, state: UiSdlReduxState): DataFusionCodeEditorContainerReact | null;

  /**
   * Triggered the first time a component renders. Applications should never
   * trigger this action manually, as it will be triggered internally by the
   * framework. If multiple instances of the same component (i.e. having the
   * same id) are present on a single page, the framework _may_ trigger this
   * action multiple times—at most once per component instance and at least once
   * overall.
   *
   * @param id
   *           The id of the component that is rendered.
   * @returns an `INITIAL_RENDER` action.
   */
  static renderInitialAction(id: string): UiSdlInitialRenderAction;

  /**
   * Triggered the first time a component renders. Component will trigger this action
   * when it registers effect triggers
   * @param id
   *           The id of the component that is rendered.
   * @returns an `REGISTER_TRIGGERS` action.
   */
  static registerTriggersAction(id: string): UiSdlRegisterTriggersAction;

  /**
   * Listens for actions of type `REGISTER_TRIGGERS` and flips a triggersRegistered when effect triggers are registered
   *
   * @param state
   *           Redux state
   * @param action
   *           Redux action
   * @returns a new Redux state
   */
  triggersRegisterEffect(state: UiSdlReduxState, action: UiSdlRegisterTriggersAction): UiSdlReduxState;

  /**
   * Triggered to create an entity action
   *
   * @param id
   *            Id of the component.
   * @returns a `UPSERT_ENTITY` action for this instance
   */
  static upsertEntityAction(id: string): UiSdlReduxAction<any>;

  /**
   * Triggered to set value of `isNewEntity`
   *
   * @param id
   *            Id of the component.
   * @param isNewEntity
   *           Whether this is a new or existing entity
   * @returns a `SET_IS_NEW_ENTITY` action for this instance
   */
  static setIsNewEntityAction(id: string, isNewEntity?: boolean): UiSdlReduxAction<any>;

  /**
   * Triggered to set value of `codeEditorTemplates`
   *
   * @param id
   *           Id of the component.
   * @param codeEditorTemplates
   *           Code editor template info
   * @returns a `SET_CODE_EDITOR_TEMPLATES` action for this instance
   */
  static setCodeEditorTemplatesAction(id: string, codeEditorTemplates?: C3.Array<any | null>): UiSdlReduxAction<any>;

  /**
   * Triggered to select one of the templates.
   *
   * @param id
   *           Id of the component.
   * @param codeEditorTemplateName
   *           The name of the template.
   * @returns a `SELECT_CODE_EDITOR_TEMPLATE` action for this instance
   */
  static selectCodeEditorTemplateAction(id: string, codeEditorTemplateName?: string | null): UiSdlReduxAction<any>;

  static setIsRemixAction(id: string, isRemix?: boolean): UiSdlReduxAction<any>;

  /**
   * Triggered to set value of `activeTypeName`
   *
   * @param id
   *           Id of the component.
   * @param activeTypeName
   *           The name of the active type
   * @returns a `SET_ACTIVE_TYPE_NAME` action for this instance
   */
  static setActiveTypeNameAction(id: string, activeTypeName?: string | null): UiSdlReduxAction<any>;

  /**
   * Triggered to set value of `typeDeclarationCode`
   *
   * @param id
   *           Id of the component.
   * @param typeDeclarationCode
   *           The declaration code for the entity
   * @returns a `SET_TYPE_DECLARATION_CODE` action for this instance
   */
  static setTypeDeclarationCodeAction(id: string, typeDeclarationCode?: string | null): UiSdlReduxAction<any>;

  /**
   * Triggered to set value of `visibleEditorPane`
   *
   * @param id
   *           Id of the component.
   * @param visibleEditorPane
   *           The name of the visible editor pane
   * @returns a `SET_VISIBLE_EDITOR_PANE` action for this instance
   */
  static setVisibleEditorPaneAction(id: string, visibleEditorPane?: string | null): UiSdlReduxAction<any>;

  /**
   * Triggered to set value of `editorPaneMode`
   *
   * @param id
   *           Id of the component.
   * @param editorPaneMode
   *           The mode of the editor pane (read-only or edit)
   * @returns a `SET_EDITOR_PANE_MODE` action for this instance
   */
  static setEditorPaneModeAction(id: string, editorPaneMode: string): UiSdlReduxAction<any>;

  /**
   * Triggered to set the value of `codeEditorDataLoading`
   *
   * @param id
   *           Id of the component.
   * @param codeEditorDataLoading
   *           Boolean indicating whether the code editor data is loading.
   * @returns a `SET_CODE_EDITOR_DATA_LOADING` action for this instance
   */
  static setCodeEditorDataLoadingAction(id: string, codeEditorDataLoading?: boolean): UiSdlReduxAction<any>;

  /**
   * Triggered to set value of `typeImplementationJsCode`
   *
   * @param id
   *           Id of the component.
   * @param typeImplementationJsCode
   *           The js implementation code for the type
   * @returns a `SET_TYPE_IMPLEMENTATION_JS_CODE` action for this instance
   */
  static setTypeImplementationJsCodeAction(id: string, typeImplementationJsCode?: string | null): UiSdlReduxAction<any>;

  /**
   * Triggered to set the value of `functionNamesList`.
   *
   * @param id
   *           Id of the component.
   * @param functionNamesList
   *           A list of function names for the current type.
   * @returns a `SET_FUNCTION_NAMES_LIST` action for this instance.
   */
  static setFunctionNamesListAction(id: string, functionNamesList?: C3.Array<string | null>): UiSdlReduxAction<any>;

  /**
   * Triggered to set the value of `functionDeclarations`.
   *
   * @param id
   *           Id of the component.
   * @param functionDeclarations
   *           A map of function names to their declarations.
   * @returns a `SET_FUNCTION_DECLARATIONS` action for this instance.
   */
  static setFunctionDeclarationsAction(id: string, functionDeclarations?: C3.Map<string | null, string | null>): UiSdlReduxAction<any>;

  /**
   * Triggered to set the value of `functionImplementationStatus`
   *
   * @param id
   *           Id of the component.
   * @param functionImplementationStatus
   *           A map of function names to their implementation status (true/false)
   * @returns a `SET_FUNCTION_IMPLEMENTATION_STATUS` action for this instance
   */
  static setFunctionImplementationStatusAction(id: string, functionImplementationStatus?: C3.Map<string | null, boolean>): UiSdlReduxAction<any>;

  /**
   * Triggered to set the value of `resolvedDeclarationCode`
   * @param id
   *           Id of the component.
   * @param resolvedDeclarationCode
   *           The resolved declaration code
   * @returns a `SET_RESOLVED_DECLARATION_CODE` action for this instance
   */
  static setResolvedDeclarationCodeAction(id: string, resolvedDeclarationCode?: string | null): UiSdlReduxAction<any>;

  static setRemixPaneModeAction(id: string, remixPaneMode?: string | null): UiSdlReduxAction<any>;

  /**
   * Triggered to set the value of `remixEditMode`
   *
   * @param id
   *           Id of the component.
   * @param remixEditMode
   *           The edit mode of the remix pane (resolution-declaration, original-declaration, or remix).
   * @returns a `SET_REMIX_EDIT_MODE` action for this instance
   */
  static setRemixEditModeAction(id: string, remixEditMode?: string | null): UiSdlReduxAction<any>;

  /**
   * Triggered when entity is successfully upserted.
   *
   * @param id
   *           Id of the component.
   * @returns a `UPSERT_ENTITY_SUCCESS` action for this instance
   */
  static upsertEntitySuccessAction(id: string): UiSdlReduxAction<any>;

  /**
   * Triggered to set the value of `remixDeclarationCode`
   *
   * @param id
   *           Id of the component.
   * @param remixDeclarationCode
   *           The remix declaration code to be set.
   * @returns a `SET_REMIX_DECLARATION_CODE` action for this instance
   */
  static setRemixDeclarationCodeAction(id: string, remixDeclarationCode?: string | null): UiSdlReduxAction<any>;

  /**
   * Triggered to set the value of `didSetInitialRemixCode`
   *
   * @param id
   *           Id of the component.
   * @param didSetInitialRemixCode
   *           Boolean indicating whether the initial remix code has been set.
   * @returns a `SET_DID_SET_INITIAL_REMIX_CODE` action for this instance
   */
  static setDidSetInitialRemixCodeAction(id: string, didSetInitialRemixCode?: boolean): UiSdlReduxAction<any>;

  /**
   * Triggered to evaluate the entity type.
   *
   * @param id
   *           Id of the component.
   * @returns an `EVALUATE_ENTITY` action for this instance.
   */
  static evaluateEntityAction(id: string): UiSdlReduxAction<any>;

  /**
   * Triggered to set the value of `isEvaluatingSyntax`.
   *
   * @param id
   *           Id of the component.
   * @param isEvaluatingSyntax
   *           Boolean indicating whether syntax evaluation is in progress.
   * @returns a `SET_IS_EVALUATING_SYNTAX` action for this instance
   */
  static setIsEvaluatingSyntaxAction(id: string, isEvaluatingSyntax?: boolean): UiSdlReduxAction<any>;

  /**
   * Triggered to set the value of `isCreatingOrUpdatingEntity`.
   *
   * @param id
   *           Id of the component.
   * @param isEvaluatingSyntax
   *           Boolean indicating whether creating or updating entity is in progress.
   * @returns a `SET_IS_CREATING_OR_UPDATING_ENTITY` action for this instance
   */
  static setIsCreatingOrUpdatingEntityAction(componentId: string, isCreatingOrUpdatingEntity: boolean): UiSdlReduxAction<any>;

  /**
   * Triggered to set the value of `codeEditorSuggestedFileContent`.
   *
   * @param id
   *           Id of the component.
   * @param suggestedFileContent
   *           The map of language to corresponding suggested file content
   * @returns a `SET_CODE_EDITOR_SUGGESTED_FILE_CONTENT` action for this instance
   */
  static setCodeEditorSuggestedFileContentAction(componentId: string, suggestedFileContent?: C3.Map<string | null, string | null>): UiSdlReduxAction<any>;

  /**
   * Triggered to set the value of `codeEditorOriginalFileContent`.
   *
   * @param componentId
   *           Id of the component.
   * @param originalFileContent
   *           The map of language to corresponding original file content
   * @returns a `SET_CODE_EDITOR_ORIGINAL_FILE_CONTENT` action for this instance
   */
  static setCodeEditorOriginalFileContentAction(componentId: string, originalFileContent?: C3.Map<string | null, string | null>): UiSdlReduxAction<any>;

  /**
   * Triggered to set the message id of given language in `pendingResolutionMessageIds`.
   *
   * @param componentId
   *           Id of the component.
   * @param language
   *           The language of the file content (e.g., 'js', 'c3typ')
   * @param messageId
   *          The id of the message that contains suggested file content
   * @returns a `SET_CODE_EDITOR_PENDING_RESOLUTION_MESSAGE_ID` action for this instance
   */
  static setCodePendingResolutionMessageIdAction(componentId: string, language: string, messageId: string): UiSdlReduxAction<any>;

  /**
   * Triggered to set `pendingResolutionMessageIds`.
   *
   * @param componentId
   *           Id of the component.
   * @param pendingResolutionMessageIds
   *          The map of language to the id of latest message that contains suggested file content
   * @returns a `SET_CODE_EDITOR_PENDING_RESOLUTION_MESSAGE_IDS` action for this instance
   */
  static setCodePendingResolutionMessageIdsAction(componentId: string, pendingResolutionMessageIds: C3.Map<string | null, string | null>): UiSdlReduxAction<any>;

  /**
   * Triggered to set the value of `codeEditorDiffPatches`.
   *
   * @param componentId
   *           Id of the component.
   * @param diffPatches
   *           The map of language to corresponding diff patches
   * @returns a `SET_CODE_EDITOR_DIFF_PATCHES` action for this instance
   */
  static setCodeEditorDiffPatchesAction(componentId: string, diffPatches?: C3.Map<string | null, C3.Array<any | null>>): UiSdlReduxAction<any>;

  /**
   * Triggered when the user accepts the suggested file content.
   *
   * @param componentId
   *           Id of the component.
   * @param language
   *           The language of the file content to accept (e.g., 'js', 'c3typ')
   * @returns an `ACCEPT_SUGGESTED_FILE_CONTENT` action for this instance
   */
  static acceptSuggestedFileContentAction(componentId: string, language: string): UiSdlReduxAction<any>;

  /**
   * Triggered when the user rejects the suggested file content.
   *
   * @param componentId
   *           Id of the component.
   * @param language
   *           The language of the file content to reject (e.g., 'js', 'c3typ')
   * @returns a `REJECT_SUGGESTED_FILE_CONTENT` action for this instance
   */
  static rejectSuggestedFileContentAction(componentId: string, language: string): UiSdlReduxAction<any>;

  /**
   * Triggered when resetting the current code editor
   * by reverting the file to original content, clearing the diff patches and pending resolution message ids.
   */
  static resetCodeEditorDiffAction(componentId: string): UiSdlReduxAction<any>;

  /**
   * Triggered when the container back button is clicked.
   *
   * @param id
   *           Id of the component.
   * @returns a `CLICKED_BACK_BUTTON` action for this instance
   */
  static clickedBackButtonAction(id: string): UiSdlReduxAction<any>;

  /**
   * Triggered when the container close button is clicked.
   *
   * @param id
   *           Id of the component.
   * @returns a `CLICKED_CLOSE_BUTTON` action for this instance
   */
  static clickedCloseButtonAction(id: string): UiSdlReduxAction<any>;

  /**
   * Triggered to set the value of `initialTypeDeclarationCode`
   *
   * @param id
   *           Id of the component.
   * @param initialTypeDeclarationCode
   *           The initial type declaration code for the entity
   * @returns a `SET_INITIAL_TYPE_DECLARATION_CODE` action for this instance
   */
  static setInitialTypeDeclarationCodeAction(id: string, initialTypeDeclarationCode?: string | null): UiSdlReduxAction<any>;

  /**
   * Triggered to set the value of `initialTypeImplementationJsCode`
   *
   * @param id
   *           Id of the component.
   * @param initialTypeImplementationJsCode
   *           The initial type implementation JS code for the entity
   * @returns a `SET_INITIAL_TYPE_IMPLEMENTATION_JS_CODE` action for this instance
   */
  static setInitialTypeImplementationJsCodeAction(id: string, initialTypeImplementationJsCode?: string | null): UiSdlReduxAction<any>;

  /**
   * Triggered to set the value of `initialRemixDeclarationCode`
   *
   * @param id
   *           Id of the component.
   * @param initialRemixDeclarationCode
   *           The initial remix declaration code for the entity
   * @returns a `SET_INITIAL_REMIX_DECLARATION_CODE` action for this instance
   */
  static setInitialRemixDeclarationCodeAction(id: string, initialRemixDeclarationCode?: string | null): UiSdlReduxAction<any>;

  /**
   * Triggered to set the value of `codeEditorConsoleIssues`
   *
   * @param id
   *           Id of the component.
   * @param fileName
   *           The name of the file where the issues were identified.
   * @param issues
   *           The list of issues in the code editor console.
   * @returns a `SET_CODE_EDITOR_CONSOLE_ISSUES` action for this instance.
   */
  static setCodeEditorConsoleIssuesAction(id: string, fileName?: string | null, issues?: C3.Array<Pkg.Issue | null>): UiSdlReduxAction<any>;

  /**
   * Triggered to set the value of `shouldFetchCodeEditorConsoleIssues`
   *
   * @param id
   *           Id of the component.
   * @param shouldFetchCodeEditorConsoleIssues
   *           Whether the fetch for the issues in the code editor console should start
   * @returns a `SET_SHOULD_FETCH_CODE_EDITOR_CONSOLE_ISSUES` action for this instance
   */
  static shouldFetchCodeEditorConsoleIssuesAction(id: string, shouldFetchCodeEditorConsoleIssues?: boolean): UiSdlReduxAction<any>;

  /**
   * Triggered to set the value of `codeEditorConsoleIssueFetchCount`.
   *
   * @param id
   *           Id of the component.
   * @param codeEditorConsoleIssuesFetchCount
   *           The number of times the issues of the console have been fetched.
   * @returns a `SET_CODE_EDITOR_CONSOLE_ISSUE_FETCH_COUNT` action for this instance.
   */
  static setCodeEditorConsoleIssuesFetchCountAction(id: string, codeEditorConsoleIssuesFetchCount?: number | null): UiSdlReduxAction<any>;

  /**
   * Triggered to set the value of `codeEditorCreateUpdateModalTexts`
   *
   * @param id
   *           Id of the component.
   * @param codeEditorCreateUpdateModalTexts
   *           The texts to be displayed in the code editor create/update modal.
   * @returns a `SET_CODE_EDITOR_CREATE_UPDATE_MODAL_TEXTS` action for this instance
   */
  static setCodeEditorCreateUpdateModalTextsAction(id: string, codeEditorCreateUpdateModalTexts?: C3.Map<string | null, string | null>): UiSdlReduxAction<any>;

  /**
   * Triggered to set value of `remixImplementationJsCode`
   *
   * @param id
   *           Id of the component.
   * @param remixImplementationJsCode
   *           The remix implementation js code for the type
   * @returns a `SET_REMIX_IMPLEMENTATION_JS_CODE` action for this instance
   */
  static setRemixImplementationJsCodeAction(id: string, remixImplementationJsCode?: string | null): UiSdlReduxAction<any>;

  /**
   * Triggered to set the value of `initialRemixImplementationJsCode`
   *
   * @param id
   *           Id of the component.
   * @param initialRemixImplementationJsCode
   *           The initial remix implementation JS code for the entity
   * @returns a `SET_INITIAL_REMIX_IMPLEMENTATION_JS_CODE` action for this instance
   */
  static setInitialRemixImplementationJsCodeAction(id: string, initialRemixImplementationJsCode?: string | null): UiSdlReduxAction<any>;

  /**
   * Triggered to set the type declaration code based on the current remix state and mode.
   *
   * @param id
   *           Id of the component.
   * @param code
   *           The code to be set for the type declaration.
   * @returns a `SET_TYPE_CODE` action for this instance
   */
  static setTypeCodeAction(id: string, code?: string | null): UiSdlReduxAction<any>;

  /**
   * Triggered to set the functions implementation code based on the current remix state.
   *
   * @param id
   *           Id of the component.
   * @param code
   *           The code to be set for the functions implementation.
   * @returns a `SET_FUNCTIONS_CODE` action for this instance
   */
  static setFunctionsCodeAction(id: string, code?: string | null): UiSdlReduxAction<any>;

  /**
   * Sets the value of `isNewEntity` in the component state
   */
  static isNewEntitySetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `codeEditorTemplates` in the component state
   */
  static codeEditorTemplatesSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  static isRemixSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `activeTypeName` in the component state
   */
  static activeTypeNameSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `typeDeclarationCode` in the component state
   */
  static typeDeclarationCodeSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `visibleEditorPane` in the component state
   */
  static visibleEditorPaneSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `editorPaneMode` in the component state
   */
  static editorPaneModeSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `codeEditorDataLoading` in the component state
   */
  static codeEditorDataLoadingSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `typeImplementationJsCode` in the component state
   */
  static typeImplementationJsCodeSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `functionNamesList` in the component state.
   */
  static functionNamesListSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `functionDeclarations` in the component state.
   */
  static functionDeclarationsSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `functionImplementationStatus` in the component state
   */
  static functionImplementationStatusSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  static remixPaneModeSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `remixEditMode` in the component state
   */
  static remixEditModeSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `remixDeclarationCode` in the component state
   */
  static remixDeclarationCodeSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `didSetInitialRemixCode` in the component state
   */
  static didSetInitialRemixCodeSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `resolvedDeclarationCode` in the component state
   */
  static resolvedDeclarationCodeSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `isEvaluatingSyntax` in the component state.
   */
  static isEvaluatingSyntaxSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `isCreatingOrUpdatingEntity` in the component state.
   */
  static isCreatingOrUpdatingEntitySetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `codeEditorOriginalFileContent` in the component state.
   */
  static codeEditorOriginalFileContentSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of message id of given language in `pendingResolutionMessageIds` in the component state.
   */
  static codeEditorPendingResolutionMessageIdSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `pendingResolutionMessageIds` in the component state.
   */
  static codeEditorPendingResolutionMessageIdsSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `codeEditorDiffPatches` in the component state.
   */
  static codeEditorDiffPatchesSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `initialTypeDeclarationCode` in the component state
   */
  static initialTypeDeclarationCodeSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `initialTypeImplementationJsCode` in the component state
   */
  static initialTypeImplementationJsCodeSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `initialRemixDeclarationCode` in the component state
   */
  static initialRemixDeclarationCodeSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `codeEditorConsoleIssues` in the component state
   */
  static codeEditorConsoleIssuesSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `shouldFetchCodeEditorConsoleIssues` in the component state
   */
  static shouldFetchCodeEditorConsoleIssuesSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `codeEditorConsoleIssuesFetchCount` in the component state.
   */
  static codeEditorConsoleIssuesFetchCountSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `codeEditorCreateUpdateModalTexts` in the component state
   */
  static codeEditorCreateUpdateModalTextsSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `remixImplementationJsCode` in the component state
   */
  static remixImplementationJsCodeSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Sets the value of `initialRemixImplementationJsCode` in the component state
   */
  static initialRemixImplementationJsCodeSetReducer(state: UiSdlReduxState, action: UiSdlReduxAction<any>): UiSdlReduxState;

  /**
   * Returns the current `codeEditorDiffPatches` from the Redux state.
   */
  static getCodeEditorDiffPatches(state: UiSdlReduxState, componentId: string): C3.Map<string | null, C3.Array<any | null>>;

  /**
   * Returns the current `codeEditorOriginalFileContent` from the Redux state.
   */
  static getCodeEditorOriginalFileContent(state: UiSdlReduxState, componentId: string): C3.Map<string | null, string | null>;

  /**
   * Returns the current `typeDeclarationCode` from the Redux state.
   */
  static getTypeDeclarationCode(state: UiSdlReduxState, componentId: string): string | null;

  /**
   * Returns the current `typeImplementationJsCode` from the Redux state.
   */
  static getTypeImplementationJsCode(state: UiSdlReduxState, componentId: string): string | null;

  /**
   * Returns the current `pendingResolutionMessageIds` from the Redux state.
   */
  static getPendingResolutionMessageIds(state: UiSdlReduxState, componentId: string): C3.Map<string | null, string | null>;

  /**
   * Returns the current message id given expected language from the Redux state.
   */
  static getPendingResolutionMessageId(state: UiSdlReduxState, componentId: string, language: string): string | null;

  /**
   * Returns the current `isRemix` value from the Redux state.
   */
  static getIsRemix(state: UiSdlReduxState, componentId: string): boolean;

  /**
   * Returns the current `remixPaneMode` value from the Redux state.
   */
  static getRemixPaneMode(state: UiSdlReduxState, componentId: string): string | null;

  /**
   * Returns the current `editorPaneMode` value from the Redux state.
   */
  static getEditorPaneMode(state: UiSdlReduxState, componentId: string): string | null;

  /**
   * Returns the current `remixEditMode` value from the Redux state.
   */
  static getRemixEditMode(state: UiSdlReduxState, componentId: string): string | null;

  /**
   * Returns the current `remixDeclarationCode` value from the Redux state.
   */
  static getRemixDeclarationCode(state: UiSdlReduxState, componentId: string): string | null;

  /**
   * Returns the current `remixImplementationJsCode` value from the Redux state.
   */
  static getRemixImplementationJsCode(state: UiSdlReduxState, componentId: string): string | null;

  /**
   * Returns whether the code diff for Gen Ai suggestion in code editor should be disabled
   */
  static getCodeEditorSuggestionDisabled(state: UiSdlReduxState, componentId: string): boolean;

  /**
   * Listens for actions of type `UPSERT_ENTITY` and upsert the entity.
   *
   * @param state
   *            Redux state
   * @param action
   *            Redux action
   * @returns a new Redux state
   */
  static upsertEntityEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Listens for actions of type `EVALUATE_ENTITY` and evaluates the entity.
   *
   * @param actionStream
   *           The stream of Redux actions.
   * @param stateStream
   *           The stream of Redux state.
   * @returns a new Redux state or side effects.
   */
  static evaluateEntityEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Listens for actions of type `SET_CODE_EDITOR_SUGGESTED_FILE_CONTENT` and processes suggested file content.
   *
   * @param actionStream
   *           The stream of Redux actions.
   * @param stateStream
   *           The stream of Redux state.
   * @returns a new Redux state or side effects.
   */
  static setCodeEditorSuggestedFileContentEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Listens for actions of type `ACCEPT_SUGGESTED_FILE_CONTENT` and accepts the suggested file content.
   *
   * @param actionStream
   *           The stream of Redux actions.
   * @param stateStream
   *           The stream of Redux state.
   * @returns a new Redux state or side effects.
   */
  static acceptSuggestedFileContentEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Listens for actions of type `REJECT_SUGGESTED_FILE_CONTENT` and rejects the suggested file content.
   *
   * @param actionStream
   *           The stream of Redux actions.
   * @param stateStream
   *           The stream of Redux state.
   * @returns a new Redux state or side effects.
   */
  static rejectSuggestedFileContentEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Sets the genai context on {@link StudioGenAiState} with some initial values.
   */
  static setInitialCodeEditorGenAiContextEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Listens for actions of type `RESET_CODE_EDITOR_DIFF` and resets the code editor diff.
   * @param actionStream
   *           The stream of Redux actions.
   * @param stateStream
   *           The stream of Redux state.
   * @returns a new Redux state or side effects.
   */
  static resetCodeEditorDiffEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Listens for actions of type `SET_TYPE_CODE` and updates the corresponding type declaration code in the Redux state
   * based on the current remix state and mode.
   *
   * @param actionStream
   *           The stream of Redux actions.
   * @param stateStream
   *           The stream of Redux state.
   * @returns a new Redux state or side effects.
   */
  static typeCodeSetEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Listens for actions of type `SET_FUNCTIONS_CODE` and updates the corresponding implementation code in the Redux state
   * based on the current remix state.
   *
   * @param actionStream
   *           The stream of Redux actions.
   * @param stateStream
   *           The stream of Redux state.
   * @returns a new Redux state or side effects.
   */
  static functionsCodeSetEpic(actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable): UiSdlActionsObservable;

  /**
   * Resolve the language to the corresponding {@link CodeEditorFileType}
   */
  static resolvedLanguage(language: string): string | null;
}


interface λFunction<T, R> {
  (t: T): R
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
