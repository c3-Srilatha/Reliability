// TypeScript definitions for the C3 type Genai.Agent.Config

/**
 * Configuration for an agent.
 *
 * @remarks this represents a value passed to a method that expects an instance of Genai.Agent.Config
 */
declare namespace Genai.Agent {
  export interface IConfig {

    /**
     * The unique and required name of this instance.
     */
    name: string;

    configOverride?: string;

    secretOverride?: string;

    /**
     * Captures any issues that occurred while deserializing from filesystem
     */
    issues?: Array_Type<string> | Array<string>;

    /**
     * Name of the {@link Genai.UnstructuredQuery.Engine.ModelConfig} to use
     */
    llmConfigName: string;

    /**
     * This option is used to enable or disable the follow-up suggestions feature.
     */
    enableFollowUpSuggestions?: boolean;

    /**
     * The list of planners to use.
     */
    planners?: Array_Type<Genai.Agent.Planner> | Array<IGenai.Agent.Planner>;

    /**
     * Configuration for {@link Engine.DeploySpec} for Genai Engines.
     * Any fields specified here will override the defaults.
     */
    deploySpec?: IEngine.DeploySpec;

    /**
     * The name of the {@link Genai.Agent.Toolkit} this agent has access to.
     * Either the #toolkitName or #planners must be set for the agent to be able to run.
     */
    toolkitName?: string;

    /**
     * Name of the {@link Genai.Agent.QueryOrchestrator.Prompt.Config} to use.
     */
    promptConfigName: string;

    /**
     * The id of the {@link Genai.Agent.Tool#id} to trigger a final answer.
     */
    finalAnswerToolId?: string;

    /**
     * The id of the {@link Genai.Agent.Tool#id} to recognize an impossible answer.
     */
    idkToolId?: string;

    /**
     * Skip creation of passage relations, which also relies on unstructured data.
     */
    doNotCreateRelations?: boolean;

    /**
     * Max number of actions an agent is allowed to take.
     * Set to 1 to use the multi-hop orchestrator but only allow a single hop.
     * Set to 0 to use the single-hop orchestrator.
     *
     * **NOTE**: The base application {@link Genai.Agent.QueryOrchestrator} only supports a single hop (i.e. maxSteps=0).
     */
    maxSteps?: number;

    /**
     * Whether to use the original user query as the input to all tools.
     *
     * This will force all tool actions to share the same user input.
     * This essentially enables an agent's subsequent steps to recover from earlier incorrect actions, but not take follow-up actions
     * based on prior action outputs.
     */
    freezeActionInputs?: boolean;

    /**
     * Name of the tool to use by default if the agent fails to choose a correct tool name.
     */
    defaultToolName?: string;

    /**
     * Boolean flag indicating if logit biases should be enabled for the orchestrator. This does not propagate to the remainder of the tools.
     */
    disableLogitBias?: boolean;

    /**
     * An optional list of tools to present as options in the UI drop-down menu. All tools specified must be tools in
     * the toolkit referred to by {@link Genai.Agent.Config#toolkitName}. The first tool in the list will be the default.
     * The {@link Genai.Agent.Tool.Config.UiOptions} for each tool will be used to configure its menu item.
     *
     *
     * If not set, then there will be no UI drop-down and the agent (using an llm) will select the appropriate tool.
     */
    uiSelectableTools?: Array_Type<string> | Array<string>;

    /**
     * Default tool used to answer questions when running queries from Model Configuration. This MUST be an {@link Genai.Agent.Tool.UnstructuredDataQuery}
     * If not set, the agent will pick the tool selected by the llm from the toolkit even when the model configuration page is being used.
     */
    defaultUnstructuredToolName?: string;

    /**
     * The name of the toolkit to use for the agent. {@link Genai.SuggestedFollowUpQueriesConfig}
     */
    suggestedFollowUpQueriesConfigName?: string;

    /**
     * Configuration for {@link Engine.DeploySpec#threadPool} for {@link Genai.Agent.QueryOrchestrator}.
     * Any fields specified here will override the defaults.
     */
    engineThreadPoolSpec?: IApp.Node.ThreadPool.Spec;

    /**
     * The spec to pass to {@link Genai.Embedder#getEmbedder} to create a {@link GenaiCore.Embedder} for embedding
     * text such as {@link Genai.FewShotExample}s.
     *
     * This will override any default embedder spec used, which may require stored embeddings (for types
     * like {@link Genai.FewShotExample}) to be re-calculated.
     */
    embedderSpec: IGenai.Embedder.Spec;
  }
}

/**
 * Configuration for an agent.
 *
 * @remarks this represents a made instance of Genai.Agent.Config
 */
declare namespace Genai.Agent {
  export class Config extends Obj  {

    /**
     * The unique and required name of this instance.
     */
    readonly name: string;
    withName(name: string): Genai.Agent.Config;

    /**
     * The unique and required name of this instance.
     */
    static readonly name: string;

    readonly configOverride?: string;
    withConfigOverride(configOverride: string | null): Genai.Agent.Config;

    static readonly configOverride?: string;

    readonly secretOverride?: string;
    withSecretOverride(secretOverride: string | null): Genai.Agent.Config;

    static readonly secretOverride?: string;

    /**
     * Captures any issues that occurred while deserializing from filesystem
     */
    readonly issues?: Array_Type<string>;
    withIssues(issues: Array_Type<string> | Array<string> | null): Genai.Agent.Config;

    /**
     * Captures any issues that occurred while deserializing from filesystem
     */
    static readonly issues?: Array_Type<string>;

    /**
     * Name of the {@link Genai.UnstructuredQuery.Engine.ModelConfig} to use
     */
    readonly llmConfigName: string;
    withLlmConfigName(llmConfigName: string): Genai.Agent.Config;

    /**
     * Name of the {@link Genai.UnstructuredQuery.Engine.ModelConfig} to use
     */
    static readonly llmConfigName: string;

    /**
     * This option is used to enable or disable the follow-up suggestions feature.
     */
    readonly enableFollowUpSuggestions?: boolean;
    withEnableFollowUpSuggestions(enableFollowUpSuggestions: boolean): Genai.Agent.Config;

    /**
     * This option is used to enable or disable the follow-up suggestions feature.
     */
    static readonly enableFollowUpSuggestions?: boolean;

    /**
     * The list of planners to use.
     */
    readonly planners?: Array_Type<Genai.Agent.Planner>;
    withPlanners(planners: Array_Type<Genai.Agent.Planner> | Array<IGenai.Agent.Planner> | null): Genai.Agent.Config;

    /**
     * The list of planners to use.
     */
    static readonly planners?: Array_Type<Genai.Agent.Planner>;

    /**
     * Configuration for {@link Engine.DeploySpec} for Genai Engines.
     * Any fields specified here will override the defaults.
     */
    readonly deploySpec?: Engine.DeploySpec;
    withDeploySpec(deploySpec: IEngine.DeploySpec | null): Genai.Agent.Config;

    /**
     * Configuration for {@link Engine.DeploySpec} for Genai Engines.
     * Any fields specified here will override the defaults.
     */
    static readonly deploySpec?: Engine.DeploySpec;

    /**
     * The name of the {@link Genai.Agent.Toolkit} this agent has access to.
     * Either the #toolkitName or #planners must be set for the agent to be able to run.
     */
    readonly toolkitName?: string;
    withToolkitName(toolkitName: string | null): Genai.Agent.Config;

    /**
     * The name of the {@link Genai.Agent.Toolkit} this agent has access to.
     * Either the #toolkitName or #planners must be set for the agent to be able to run.
     */
    static readonly toolkitName?: string;

    /**
     * Name of the {@link Genai.Agent.QueryOrchestrator.Prompt.Config} to use.
     */
    readonly promptConfigName: string;
    withPromptConfigName(promptConfigName: string): Genai.Agent.Config;

    /**
     * Name of the {@link Genai.Agent.QueryOrchestrator.Prompt.Config} to use.
     */
    static readonly promptConfigName: string;

    /**
     * The id of the {@link Genai.Agent.Tool#id} to trigger a final answer.
     */
    readonly finalAnswerToolId?: string;
    withFinalAnswerToolId(finalAnswerToolId: string | null): Genai.Agent.Config;

    /**
     * The id of the {@link Genai.Agent.Tool#id} to trigger a final answer.
     */
    static readonly finalAnswerToolId?: string;

    /**
     * The id of the {@link Genai.Agent.Tool#id} to recognize an impossible answer.
     */
    readonly idkToolId?: string;
    withIdkToolId(idkToolId: string | null): Genai.Agent.Config;

    /**
     * The id of the {@link Genai.Agent.Tool#id} to recognize an impossible answer.
     */
    static readonly idkToolId?: string;

    /**
     * Skip creation of passage relations, which also relies on unstructured data.
     */
    readonly doNotCreateRelations?: boolean;
    withDoNotCreateRelations(doNotCreateRelations: boolean): Genai.Agent.Config;

    /**
     * Skip creation of passage relations, which also relies on unstructured data.
     */
    static readonly doNotCreateRelations?: boolean;

    /**
     * Max number of actions an agent is allowed to take.
     * Set to 1 to use the multi-hop orchestrator but only allow a single hop.
     * Set to 0 to use the single-hop orchestrator.
     *
     * **NOTE**: The base application {@link Genai.Agent.QueryOrchestrator} only supports a single hop (i.e. maxSteps=0).
     */
    readonly maxSteps?: number;
    withMaxSteps(maxSteps: number | null): Genai.Agent.Config;

    /**
     * Max number of actions an agent is allowed to take.
     * Set to 1 to use the multi-hop orchestrator but only allow a single hop.
     * Set to 0 to use the single-hop orchestrator.
     *
     * **NOTE**: The base application {@link Genai.Agent.QueryOrchestrator} only supports a single hop (i.e. maxSteps=0).
     */
    static readonly maxSteps?: number;

    /**
     * Whether to use the original user query as the input to all tools.
     *
     * This will force all tool actions to share the same user input.
     * This essentially enables an agent's subsequent steps to recover from earlier incorrect actions, but not take follow-up actions
     * based on prior action outputs.
     */
    readonly freezeActionInputs?: boolean;
    withFreezeActionInputs(freezeActionInputs: boolean): Genai.Agent.Config;

    /**
     * Whether to use the original user query as the input to all tools.
     *
     * This will force all tool actions to share the same user input.
     * This essentially enables an agent's subsequent steps to recover from earlier incorrect actions, but not take follow-up actions
     * based on prior action outputs.
     */
    static readonly freezeActionInputs?: boolean;

    /**
     * Name of the tool to use by default if the agent fails to choose a correct tool name.
     */
    readonly defaultToolName?: string;
    withDefaultToolName(defaultToolName: string | null): Genai.Agent.Config;

    /**
     * Name of the tool to use by default if the agent fails to choose a correct tool name.
     */
    static readonly defaultToolName?: string;

    /**
     * Boolean flag indicating if logit biases should be enabled for the orchestrator. This does not propagate to the remainder of the tools.
     */
    readonly disableLogitBias?: boolean;
    withDisableLogitBias(disableLogitBias: boolean): Genai.Agent.Config;

    /**
     * Boolean flag indicating if logit biases should be enabled for the orchestrator. This does not propagate to the remainder of the tools.
     */
    static readonly disableLogitBias?: boolean;

    /**
     * An optional list of tools to present as options in the UI drop-down menu. All tools specified must be tools in
     * the toolkit referred to by {@link Genai.Agent.Config#toolkitName}. The first tool in the list will be the default.
     * The {@link Genai.Agent.Tool.Config.UiOptions} for each tool will be used to configure its menu item.
     *
     *
     * If not set, then there will be no UI drop-down and the agent (using an llm) will select the appropriate tool.
     */
    readonly uiSelectableTools?: Array_Type<string>;
    withUiSelectableTools(uiSelectableTools: Array_Type<string> | Array<string> | null): Genai.Agent.Config;

    /**
     * An optional list of tools to present as options in the UI drop-down menu. All tools specified must be tools in
     * the toolkit referred to by {@link Genai.Agent.Config#toolkitName}. The first tool in the list will be the default.
     * The {@link Genai.Agent.Tool.Config.UiOptions} for each tool will be used to configure its menu item.
     *
     *
     * If not set, then there will be no UI drop-down and the agent (using an llm) will select the appropriate tool.
     */
    static readonly uiSelectableTools?: Array_Type<string>;

    /**
     * Default tool used to answer questions when running queries from Model Configuration. This MUST be an {@link Genai.Agent.Tool.UnstructuredDataQuery}
     * If not set, the agent will pick the tool selected by the llm from the toolkit even when the model configuration page is being used.
     */
    readonly defaultUnstructuredToolName?: string;
    withDefaultUnstructuredToolName(defaultUnstructuredToolName: string | null): Genai.Agent.Config;

    /**
     * Default tool used to answer questions when running queries from Model Configuration. This MUST be an {@link Genai.Agent.Tool.UnstructuredDataQuery}
     * If not set, the agent will pick the tool selected by the llm from the toolkit even when the model configuration page is being used.
     */
    static readonly defaultUnstructuredToolName?: string;

    /**
     * The name of the toolkit to use for the agent. {@link Genai.SuggestedFollowUpQueriesConfig}
     */
    readonly suggestedFollowUpQueriesConfigName?: string;
    withSuggestedFollowUpQueriesConfigName(suggestedFollowUpQueriesConfigName: string | null): Genai.Agent.Config;

    /**
     * The name of the toolkit to use for the agent. {@link Genai.SuggestedFollowUpQueriesConfig}
     */
    static readonly suggestedFollowUpQueriesConfigName?: string;

    /**
     * Configuration for {@link Engine.DeploySpec#threadPool} for {@link Genai.Agent.QueryOrchestrator}.
     * Any fields specified here will override the defaults.
     */
    readonly engineThreadPoolSpec?: App.Node.ThreadPool.Spec;
    withEngineThreadPoolSpec(engineThreadPoolSpec: IApp.Node.ThreadPool.Spec | null): Genai.Agent.Config;

    /**
     * Configuration for {@link Engine.DeploySpec#threadPool} for {@link Genai.Agent.QueryOrchestrator}.
     * Any fields specified here will override the defaults.
     */
    static readonly engineThreadPoolSpec?: App.Node.ThreadPool.Spec;

    /**
     * The spec to pass to {@link Genai.Embedder#getEmbedder} to create a {@link GenaiCore.Embedder} for embedding
     * text such as {@link Genai.FewShotExample}s.
     *
     * This will override any default embedder spec used, which may require stored embeddings (for types
     * like {@link Genai.FewShotExample}) to be re-calculated.
     */
    readonly embedderSpec: Genai.Embedder.Spec;
    withEmbedderSpec(embedderSpec: IGenai.Embedder.Spec): Genai.Agent.Config;

    /**
     * The spec to pass to {@link Genai.Embedder#getEmbedder} to create a {@link GenaiCore.Embedder} for embedding
     * text such as {@link Genai.FewShotExample}s.
     *
     * This will override any default embedder spec used, which may require stored embeddings (for types
     * like {@link Genai.FewShotExample}) to be re-calculated.
     */
    static readonly embedderSpec: Genai.Embedder.Spec;

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
    static fromJson(json: any): Genai.Agent.Config | null;

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
    static fromJsonString(json: string): Genai.Agent.Config | null;

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
    static fromXmlString(xml: string): Genai.Agent.Config | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string, contentType: string): Genai.Agent.Config | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Genai.Agent.Config;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    static replaceType(old: Type, new_: Type): Genai.Agent.Config;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.Agent.Config;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    static mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.Agent.Config;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.Agent.Config;

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
    static mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): Genai.Agent.Config;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.Agent.Config>;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    static mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.Agent.Config>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.Agent.Config>;

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
    static mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<Genai.Agent.Config>;

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
    mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): Genai.Agent.Config;

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
    static mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): Genai.Agent.Config;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.Agent.Config;

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
    static mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.Agent.Config;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.Agent.Config;

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
    static mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Genai.Agent.Config;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Genai.Agent.Config;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    static validateObj(): Genai.Agent.Config;

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
    withField(field: string, value: any, doNotConvert?: boolean): Genai.Agent.Config;

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
    static withField(field: string, value: any, doNotConvert?: boolean): Genai.Agent.Config;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Genai.Agent.Config;

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
    static withField(field: FieldType, value: any, doNotConvert?: boolean): Genai.Agent.Config;

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
    withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): Genai.Agent.Config;

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
    static withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): Genai.Agent.Config;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Genai.Agent.Config;

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
    static withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Genai.Agent.Config;

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
    withoutFieldAtPath(path: string): Genai.Agent.Config;

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
    static withoutFieldAtPath(path: string): Genai.Agent.Config;

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
    withoutField(field: string): Genai.Agent.Config;

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
    static withoutField(field: string): Genai.Agent.Config;

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
    withoutField(field: FieldType): Genai.Agent.Config;

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
    static withoutField(field: FieldType): Genai.Agent.Config;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: Array_Type<string>): Genai.Agent.Config;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    static withoutFields(fields: Array_Type<string>): Genai.Agent.Config;

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
    withoutFieldsByType(fields: Array_Type<FieldType>): Genai.Agent.Config;

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
    static withoutFieldsByType(fields: Array_Type<FieldType>): Genai.Agent.Config;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Genai.Agent.Config;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    static withoutSecretFields(): Genai.Agent.Config;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): Genai.Agent.Config;

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
    static withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): Genai.Agent.Config;

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
    defaultField(field: string): Genai.Agent.Config;

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
    static defaultField(field: string): Genai.Agent.Config;

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
    defaultField(field: FieldType): Genai.Agent.Config;

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
    static defaultField(field: FieldType): Genai.Agent.Config;

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
    unsetField(field: string): Genai.Agent.Config;

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
    static unsetField(field: string): Genai.Agent.Config;

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
    unsetField(field: FieldType): Genai.Agent.Config;

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
    static unsetField(field: FieldType): Genai.Agent.Config;

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
    removeField(field: string): Genai.Agent.Config;

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
    static removeField(field: string): Genai.Agent.Config;

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
    removeField(field: FieldType): Genai.Agent.Config;

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
    static removeField(field: FieldType): Genai.Agent.Config;

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
    mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): Genai.Agent.Config;

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
    static mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): Genai.Agent.Config;

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
    mergeObj(other: Obj, otherFieldsFilter: Type): Genai.Agent.Config;

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
    static mergeObj(other: Obj, otherFieldsFilter: Type): Genai.Agent.Config;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): Genai.Agent.Config;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    static mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): Genai.Agent.Config;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): Genai.Agent.Config;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    static mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): Genai.Agent.Config;

    mergeJson(json: any): Genai.Agent.Config;

    static mergeJson(json: any): Genai.Agent.Config;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): Genai.Agent.Config;

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
    static mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): Genai.Agent.Config;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj, deep?: boolean): Genai.Agent.Config;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    static sumObj(other: Obj, deep?: boolean): Genai.Agent.Config;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): Array_Type<Genai.Agent.Config>;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    static singletonArray(): Array_Type<Genai.Agent.Config>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: Array_Type<any>[]): Array_Type<Genai.Agent.Config> | null;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Genai.Agent.Config> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): Set_Type<Genai.Agent.Config>;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    static singletonSet(): Set_Type<Genai.Agent.Config>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Genai.Agent.Config> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string, Genai.Agent.Config> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Genai.Agent.Config> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Genai.Agent.Config>;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    static toBuilder(): ObjBuilder<Genai.Agent.Config>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Genai.Agent.Config>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): Genai.Agent.Config;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): Genai.Agent.Config;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): Genai.Agent.Config;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Genai.Agent.Config;

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
    static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): Genai.Agent.Config;

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
    static make(fields: any, withDefaults?: boolean): Genai.Agent.Config;

    /**
     * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
     * when the argument is a known string.
     *
     * @see #fromString
     */
    static make(s: string): Genai.Agent.Config | null;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): Genai.Agent.Config;

    /**
     * Optional override that will be called every time instance of this type is created.
     *
     *
     * Note that it introduces additional overhead so should only be implemented for low volume data.
     */
    static beforeMake(fields: Map_Type<FieldType, any>): Map_Type<FieldType, any> | null;

    /**
     * Optional override that will be called after every instance creation.
     *
     * Note that it introduces additional overhead so should only be implemented for low volume data.
     */
    afterMake(): Genai.Agent.Config;

    /**
     * Optional override that will be called after every instance creation.
     *
     * Note that it introduces additional overhead so should only be implemented for low volume data.
     */
    static afterMake(): Genai.Agent.Config;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Genai.Agent.Config;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec): Stream<Genai.Agent.Config> | null;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec): Genai.Agent.Config;

    /**
     * @return key field type.
     */
    static keyFieldType(): FieldType;

    /**
     * @return key field value.
     */
    keyFieldValue(): string | null;

    /**
     * @return key field value.
     */
    static keyFieldValue(): string | null;

    /**
     * Build a map of the correct type with a single element which is this instance and key field value as key.
     */
    singletonMap(): Map_Type<string, WithKey>;

    /**
     * Build a map of the correct type with a single element which is this instance and key field value as key.
     */
    static singletonMap(): Map_Type<string, WithKey>;

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
     * Build the canonical string representation of this instance. This must be implemented to provide serialization.
     *
     * If the object has no content, and fromString would properly reproduce it from a null value, toString may return
     * null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
     *
     * @see #fromString
     */
    static toString(): string | null;

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
    static fromString(s: string): Genai.Agent.Config | null;

    /**
     * @return single instance of this Nameable type by name. Note that if this type is also Cached then it will
     * retrieve instance from cache.
     */
    static forName(name: string, failIfMissing?: boolean): Genai.Agent.Config | null;

    /**
     * @return whether the cache already contains this instance
     */
    isCached(): boolean;

    /**
     * @return whether the cache already contains this instance
     */
    static isCached(): boolean;

    /**
     * @return stream of all available Cached instances.
     */
    static allCached(): Stream<Genai.Agent.Config> | null;

    /**
     * @return existing instances of this type that satisfy filter from data cache. Will call `produceAll`
     *         if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
     *         Otherwise no population will be performed.
     */
    static find(filter?: string): Stream<Genai.Agent.Config> | null;

    /**
     * @return existing instances of this type that satisfy filter from data cache. Will call `produceAll`
     *         if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
     *         Otherwise no population will be performed.
     */
    static findBy(field: string, value: any): Stream<Genai.Agent.Config> | null;

    /**
     * @return cached instance.
     */
    getCached(): Genai.Agent.Config | null;

    /**
     * @return cached instance.
     */
    static getCached(): Genai.Agent.Config | null;

    /**
     * Returns cached instance by key, with secrets removed.
     */
    static forCacheKey(key: string): Genai.Agent.Config | null;

    /**
     * @return cache key for this instance.
     */
    cacheKey(): string;

    /**
     * @return cache key for this instance.
     */
    static cacheKey(): string;

    /**
     * Should produce an entry for the cache key. This method should not be called directly.
     */
    static produce(key: string): Genai.Agent.Config | null;

    /**
     * Should produces the entire content for the cached data. Will populate the cache with the produced data.
     */
    static produceAll(): Map_Type<string, Genai.Agent.Config> | null;

    /**
     * Evicts this instance from cache on all nodes of this application.
     */
    evictFromCache(): void;

    /**
     * Evicts this instance from cache on all nodes of this application.
     */
    static evictFromCache(): void;

    /**
     * Evicts this instance from cache of the current node.
     */
    evictFromCacheLocalOnly(): void;

    /**
     * Evicts this instance from cache of the current node.
     */
    static evictFromCacheLocalOnly(): void;

    /**
     * Evicts this instance from cache on all local apps (c3-c3, env-c3, env-app) that live in the current node.
     * Will not trigger any cache invalidation broadcast.
     * see {@link Server#evictFromLocalAppsCaches}
     */
    evictFromCacheLocalOnlyAllApps(): void;

    /**
     * Evicts this instance from cache on all local apps (c3-c3, env-c3, env-app) that live in the current node.
     * Will not trigger any cache invalidation broadcast.
     * see {@link Server#evictFromLocalAppsCaches}
     */
    static evictFromCacheLocalOnlyAllApps(): void;

    /**
     * Clears the data cache for this type on all nodes of this application.
     */
    static clearCache(): void;

    /**
     * Clears the data cache for this type on the current node. Will not trigger any cache invalidation broadcast.
     */
    static clearCacheLocalOnly(): void;

    /**
     * Clears the data cache for this type on the current node for all local apps (c3-c3, env-c3, env-app) that live in the current node.
     * Will not trigger any cache invalidation broadcast.
     * see {@link Server#clearLocalAppsCaches}
     */
    static clearCacheLocalOnlyAllApps(): void;

    /**
     * Returns count of cached instances.
     */
    static cacheSize(): number | null;

    /**
     * Returns instance of the cache for this type.
     */
    static nativeCache(): any | null;

    /**
     * Return cached instance of configuration. For Identifiable configurations `id` field is required. For Nameable
     * configurations `name` field is required.
     *
     * Note that typical pattern is to use Configurable#config instead of this method.
     */
    getConfig(): Genai.Agent.Config;

    /**
     * Return cached instance of configuration. For Identifiable configurations `id` field is required. For Nameable
     * configurations `name` field is required.
     *
     * Note that typical pattern is to use Configurable#config instead of this method.
     */
    static getConfig(): Genai.Agent.Config;

    /**
     * @return cached config value for the provided field path if set or `null` or error otherwise depending on
     *         `failIfMissing`; note that will not return secret value.
     */
    configValue(path: string, failIfMissing?: boolean): any | null;

    /**
     * @return cached config value for the provided field path if set or `null` or error otherwise depending on
     *         `failIfMissing`; note that will not return secret value.
     */
    static configValue(path: string, failIfMissing?: boolean): any | null;

    /**
     * Return cached instance of configuration containing only secret values. For Identifiable configuration, `id` field
     * is required. For Nameable configurations `name` field is required.
     *
     * Note that typical pattern is to use Configurable#configWithSecrets instead of this method.
     */
    getSecret(): Genai.Agent.Config;

    /**
     * Return cached instance of configuration containing only secret values. For Identifiable configuration, `id` field
     * is required. For Nameable configurations `name` field is required.
     *
     * Note that typical pattern is to use Configurable#configWithSecrets instead of this method.
     */
    static getSecret(): Genai.Agent.Config;

    /**
     * @return cached secret value for the provided field path in this Config object or `null` if not set or error
     *         depending on `failIfMissing`.
     */
    secretValue(path: string, failIfMissing?: boolean): any | null;

    /**
     * @return cached secret value for the provided field path in this Config object or `null` if not set or error
     *         depending on `failIfMissing`.
     */
    static secretValue(path: string, failIfMissing?: boolean): any | null;

    /**
     * Reads and url decodes the content at the path.
     * Path must represent a string value.
     */
    decodedValue(path: string, failIfMissing?: boolean): string | null;

    /**
     * Reads and url decodes the content at the path.
     * Path must represent a string value.
     */
    static decodedValue(path: string, failIfMissing?: boolean): string | null;

    /**
     * @return `true` if this configuration instance was set at ConfigOverride.USER level.
     */
    isUserOverride(): boolean;

    /**
     * @return `true` if this configuration instance was set at ConfigOverride.USER level.
     */
    static isUserOverride(): boolean;

    /**
     * @return `true` if this configuration instance was set at ConfigOverride.APP level.
     */
    isAppOverride(): boolean;

    /**
     * @return `true` if this configuration instance was set at ConfigOverride.APP level.
     */
    static isAppOverride(): boolean;

    /**
     * @return `true` if this configuration instance was set at ConfigOverride.CLUSTER level.
     */
    isClusterOverride(): boolean;

    /**
     * @return `true` if this configuration instance was set at ConfigOverride.CLUSTER level.
     */
    static isClusterOverride(): boolean;

    /**
     * @return `true` if this configuration instance was set at ConfigOverride.ENV level.
     */
    isEnvOverride(): boolean;

    /**
     * @return `true` if this configuration instance was set at ConfigOverride.ENV level.
     */
    static isEnvOverride(): boolean;

    /**
     * @return `true` if this configuration instance was set at ConfigOverride.ROOT level.
     */
    isRootOverride(): boolean;

    /**
     * @return `true` if this configuration instance was set at ConfigOverride.ROOT level.
     */
    static isRootOverride(): boolean;

    /**
     * @return `true` if this configuration has not been set and comes from seed / defaults.
     */
    isSeed(): boolean;

    /**
     * @return `true` if this configuration has not been set and comes from seed / defaults.
     */
    static isSeed(): boolean;

    /**
     * @return `true` if provided path is a secret.
     */
    static isSecret(path: string): boolean;

    /**
     *  @return config key for this instance. The config key is a unique identifier for an instance of a config type.
     *  The config key varies based on whether the config is defined with:
     *     1. {@link Ann.Config#subfolder}
     *         In this case, the name of the subfolder will be included.
     *     2. {@link Ann.Config#minOverride} set to {@link ConfigOverride#USER}
     *         In this case, the ID of the {@link User} will be included.
     *     3. mixes in {@link Named} or {@link Identified}
     * In this case, the name or id of the config will be included. If the config does not mix Named or Identified,
     * the name of the config subtype will be used.
     *
     *  The config key includes the above three fields delimited by '/':
     *     {subfolder name if applicable}/{user ID if applicable}/{id or name or type name}
     *  ```
     *  | USER min Override | Identified or Named | Subfolder defined |      Example Config Key     |
     *  |-------------------|---------------------|-------------------|-----------------------------|
     *  |       no          |         no          |        no         |           MyConfType        |
     *  |       yes         |         no          |        no         |       myUserId/MyConfType   |
     *  |       no          |         yes         |        no         |             abc             |
     *  |       no          |         no          |        yes        |      folder1/MyConfType     |
     *  |       no          |         yes         |        yes        |          folder1/abc        |
     *  |       yes         |         yes         |        no         |          myUserId/abc       |
     *  |       yes         |         no          |        yes        | folder1/myUserId/MyConfType |
     *  |       yes         |         yes         |        yes        |     folder1/myUserId/abc    |
     *  ```
     *  Note that the config key is a computed value and is not set-able.
     *  For config subtypes that mixin both {@link Identifiable} and {@link Nameable}, the ID will be used as part of the key.
     */
    configKey(): string | null;

    /**
     *  @return config key for this instance. The config key is a unique identifier for an instance of a config type.
     *  The config key varies based on whether the config is defined with:
     *     1. {@link Ann.Config#subfolder}
     *         In this case, the name of the subfolder will be included.
     *     2. {@link Ann.Config#minOverride} set to {@link ConfigOverride#USER}
     *         In this case, the ID of the {@link User} will be included.
     *     3. mixes in {@link Named} or {@link Identified}
     * In this case, the name or id of the config will be included. If the config does not mix Named or Identified,
     * the name of the config subtype will be used.
     *
     *  The config key includes the above three fields delimited by '/':
     *     {subfolder name if applicable}/{user ID if applicable}/{id or name or type name}
     *  ```
     *  | USER min Override | Identified or Named | Subfolder defined |      Example Config Key     |
     *  |-------------------|---------------------|-------------------|-----------------------------|
     *  |       no          |         no          |        no         |           MyConfType        |
     *  |       yes         |         no          |        no         |       myUserId/MyConfType   |
     *  |       no          |         yes         |        no         |             abc             |
     *  |       no          |         no          |        yes        |      folder1/MyConfType     |
     *  |       no          |         yes         |        yes        |          folder1/abc        |
     *  |       yes         |         yes         |        no         |          myUserId/abc       |
     *  |       yes         |         no          |        yes        | folder1/myUserId/MyConfType |
     *  |       yes         |         yes         |        yes        |     folder1/myUserId/abc    |
     *  ```
     *  Note that the config key is a computed value and is not set-able.
     *  For config subtypes that mixin both {@link Identifiable} and {@link Nameable}, the ID will be used as part of the key.
     */
    static configKey(): string | null;

    /**
     * @return copy of the config with updated `id` if {@link Indentifiable} or `name` if {@link Nameable}, hence changing
     * the computed {@link Config#configKey}.
     * Note that configs set at USER level will still have user's Id as part of the config key. Config types with
     * @{link Ann.Config#subfolder} will also have the subfolder name as part of the config key.
     * ex. confType has @config(minOverride=ConfigOverride.USER)
     *     config = confType.withConfigKey("abc")
     *     config.configKey() => "myUserId/abc"
     * ex. confType has @config(subfolder="folder1")
     *     config = confType.withConfigKey("abc")
     *     config.configKey() => "folder1/abc"
     */
    withConfigKey(configKey: string): Genai.Agent.Config;

    /**
     * @return copy of the config with updated `id` if {@link Indentifiable} or `name` if {@link Nameable}, hence changing
     * the computed {@link Config#configKey}.
     * Note that configs set at USER level will still have user's Id as part of the config key. Config types with
     * @{link Ann.Config#subfolder} will also have the subfolder name as part of the config key.
     * ex. confType has @config(minOverride=ConfigOverride.USER)
     *     config = confType.withConfigKey("abc")
     *     config.configKey() => "myUserId/abc"
     * ex. confType has @config(subfolder="folder1")
     *     config = confType.withConfigKey("abc")
     *     config.configKey() => "folder1/abc"
     */
    static withConfigKey(configKey: string): Genai.Agent.Config;

    /**
     * @return copy without config key.
     */
    withoutConfigKey(): Genai.Agent.Config;

    /**
     * @return copy without config key.
     */
    static withoutConfigKey(): Genai.Agent.Config;

    /**
     * @return return cached config instance for provided config key.
     */
    static forConfigKey(configKey: string): Genai.Agent.Config | null;

    /**
     * @return stream of all available Config keys for this type; #forConfigKey can be used to look up Config instance.
     */
    static listConfigKeys(): Stream<string> | null;

    /**
     * @param
     *
     * @return stream of all available Config instances for this type.
     */
    static listConfigs(parallel?: boolean, filter?: λPredicate<string>): Stream<Genai.Agent.Config> | null;

    /**
     * @return all config template values by override.
     */
    allConfigValueOverrides(path: string): Map_Type<string, any> | null;

    /**
     * @return all config template values by override.
     */
    static allConfigValueOverrides(path: string): Map_Type<string, any> | null;

    /**
     * @return all config template jsons by override.
     */
    allConfigOverrides(): Map_Type<string, any> | null;

    /**
     * @return all config template jsons by override.
     */
    static allConfigOverrides(): Map_Type<string, any> | null;

    /**
     * @return all secret template values by override.
     */
    allSecretValueOverrides(path: string): Map_Type<string, any> | null;

    /**
     * @return all secret template values by override.
     */
    static allSecretValueOverrides(path: string): Map_Type<string, any> | null;

    /**
     * @return all secret templates by override.
     */
    allSecretOverrides(): Map_Type<string, any> | null;

    /**
     * @return all secret templates by override.
     */
    static allSecretOverrides(): Map_Type<string, any> | null;

    /**
     * Sets configuration field value at provided path in this Config object. Note will not set secret value.
     * If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
     * @see clearConfigValue
     */
    setConfigValue(path: string, value: any, override?: string, embeddedFileName?: string): void;

    /**
     * Sets configuration field value at provided path in this Config object. Note will not set secret value.
     * If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
     * @see clearConfigValue
     */
    static setConfigValue(path: string, value: any, override?: string, embeddedFileName?: string): void;

    /**
     * Sets multiple field values to those specified in the map. The map keys are the paths.
     *
     * @see setConfigValue
     */
    setConfigValues(from?: Map_Type<string, any>, override?: string): void;

    /**
     * Sets multiple field values to those specified in the map. The map keys are the paths.
     *
     * @see setConfigValue
     */
    static setConfigValues(from?: Map_Type<string, any>, override?: string): void;

    /**
     * Sets multiple field values to the be the same as the passed instance.
     *
     * @see setConfigValue
     */
    setConfigValues(from: Genai.Agent.Config, override?: string): void;

    /**
     * Sets multiple field values to the be the same as the passed instance.
     *
     * @see setConfigValue
     */
    static setConfigValues(from: Genai.Agent.Config, override?: string): void;

    /**
     * Sets configuration field value template at provided path in this Config object. Note will not set secret value.
     * If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
     * @see clearConfigValue
     */
    setConfigValueTemplate(path: string, valueTemplate: string, override?: string): void;

    /**
     * Sets configuration field value template at provided path in this Config object. Note will not set secret value.
     * If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
     * @see clearConfigValue
     */
    static setConfigValueTemplate(path: string, valueTemplate: string, override?: string): void;

    /**
     * Adds a single value at the specified index in a collection at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    insertConfigElementAt(pathToCollectionField: string, index: number, value: any, override?: string): void;

    /**
     * Adds a single value at the specified index in a collection at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    static insertConfigElementAt(pathToCollectionField: string, index: number, value: any, override?: string): void;

    /**
     * Sets a single value at the specified index in a collection at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    setConfigElementAt(pathToCollectionField: string, index: number, value: any, override?: string): void;

    /**
     * Sets a single value at the specified index in a collection at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    static setConfigElementAt(pathToCollectionField: string, index: number, value: any, override?: string): void;

    /**
     * Adds a single value to a collection at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    addConfigElement(pathToCollectionField: string, value: any, override?: string): void;

    /**
     * Adds a single value to a collection at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    static addConfigElement(pathToCollectionField: string, value: any, override?: string): void;

    /**
     * Sets a key-value pair in specified map at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    setConfigMapValue(pathToMapField: string, key: any, value: any, override?: string): void;

    /**
     * Sets a key-value pair in specified map at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    static setConfigMapValue(pathToMapField: string, key: any, value: any, override?: string): void;

    /**
     * Removes a single value at the specified index in a collection at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    removeConfigElementAt(pathToCollectionField: string, index: number, override?: string): void;

    /**
     * Removes a single value at the specified index in a collection at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    static removeConfigElementAt(pathToCollectionField: string, index: number, override?: string): void;

    /**
     * Removes a single value in a collection at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    removeConfigElement(pathToCollectionField: string, value: any, override?: string): void;

    /**
     * Removes a single value in a collection at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    static removeConfigElement(pathToCollectionField: string, value: any, override?: string): void;

    /**
     * Removes a single key in a map at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    removeConfigMapKey(pathToMapField: string, key: any, override?: string): void;

    /**
     * Removes a single key in a map at provided path in this Config object.
     * Note this will merge based on the {@link Ann.Merge} collection value for the field.
     */
    static removeConfigMapKey(pathToMapField: string, key: any, override?: string): void;

    /**
     * Url encodes the content at the path and returns new config object with the encoded value.
     * Path must represent a string value.
     */
    setEncodedValue(path: string, value: string, override: string): void;

    /**
     * Url encodes the content at the path and returns new config object with the encoded value.
     * Path must represent a string value.
     */
    static setEncodedValue(path: string, value: string, override: string): void;

    /**
     * Sets secret field value or secrets within value at provided path in this Config object.
     * @see clearSecretValue
     */
    setSecretValue(path: string, value: any, override?: string): void;

    /**
     * Sets secret field value or secrets within value at provided path in this Config object.
     * @see clearSecretValue
     */
    static setSecretValue(path: string, value: any, override?: string): void;

    /**
     * Sets secret field value template at provided path in this Config object.
     * @see clearSecretValue
     */
    setSecretValueTemplate(path: string, value: string, override?: string): void;

    /**
     * Sets secret field value template at provided path in this Config object.
     * @see clearSecretValue
     */
    static setSecretValueTemplate(path: string, value: string, override?: string): void;

    /**
     * Clears configuration field value at provided path in this Config object at provided override level. Note will not
     * clear secret value.
     */
    clearConfigValue(path: string, override?: string): void;

    /**
     * Clears configuration field value at provided path in this Config object at provided override level. Note will not
     * clear secret value.
     */
    static clearConfigValue(path: string, override?: string): void;

    /**
     * Clears secret field value at provided path in this Config object at provided override level.
     */
    clearSecretValue(path: string, override?: string): void;

    /**
     * Clears secret field value at provided path in this Config object at provided override level.
     */
    static clearSecretValue(path: string, override?: string): void;

    /**
     * Clears configuration field value at provided path in this Config object at all override levels. Note will not
     * clear secret value.
     */
    clearConfigValueAllOverrides(path: string): void;

    /**
     * Clears configuration field value at provided path in this Config object at all override levels. Note will not
     * clear secret value.
     */
    static clearConfigValueAllOverrides(path: string): void;

    /**
     * Clears secret field value at provided path in this Config object at all override levels.
     */
    clearSecretValueAllOverrides(path: string): void;

    /**
     * Clears secret field value at provided path in this Config object at all override levels.
     */
    static clearSecretValueAllOverrides(path: string): void;

    /**
     * @return cached config or secret value for the provided config key, field path and override if set or `null` or error
     *         otherwise depending on `failIfMissing`
     */
    static rawConfigOrSecretValue(configKey: string, path: string, override?: string, failIfMissing?: boolean): any | null;

    /**
     * Sets config or secret value for the provided config key, field path and override.
     */
    static setConfigOrSecretValue(configKey: string, path: string, value?: any, override?: string): void;

    /**
     * Sets config and secret value for the provided config key, field path and override. Equivalent to calling both
     * setConfigValue and setSecretValue
     */
    static setConfigAndSecretValue(configKey: string, path: string, value?: any, override?: string): void;

    /**
     * Sets config or secret value template for the provided config key, field path and override.
     */
    static setConfigOrSecretValueTemplate(configKey: string, path: string, valueTemplate?: string, override?: string): void;

    /**
     * @return `true` if this Config type has other sub types.
     */
    static hasSubTypes(): boolean;

    /**
     * @return true if this Config type has Ann.Config#secret annotation on the Config type of child config types
     */
    static hasSecretField(): boolean;

    /**
     * @return `true` if this Config type has only one instance.
     */
    static isSingleInstance(): boolean;

    /**
     * @returns `true` if this Config is user override-able.
     */
    static isUserOverridable(): boolean;

    /**
     * @return default configuration override level
     */
    static dfltOverride(override?: string): string;

    /**
     *  Loads config and secret by key if exists, default config, or `null` if `doNotDefaultIfMissing` config annotation is
     * true and config does not exist.
     *  Note that this skips caching and directly fetches config from the config store, and secret from vault.
     */
    static loadConfigAndSecret(configKey: string): Genai.Agent.Config | null;

    /**
     * Loads config override template json if exists or `null`. Will not include secrets.
     * Note that this skips caching and directly fetches config from the config store.
     */
    loadConfigOverride(override: string): any | null;

    /**
     * Loads config override template json if exists or `null`. Will not include secrets.
     * Note that this skips caching and directly fetches config from the config store.
     */
    static loadConfigOverride(override: string): any | null;

    /**
     * Loads secret override template json if exists or `null`. Will not include non secrets.
     * Note that this skips caching and directly fetches secret from the vault.
     */
    loadSecretOverride(override: string): any | null;

    /**
     * Loads secret override template json if exists or `null`. Will not include non secrets.
     * Note that this skips caching and directly fetches secret from the vault.
     */
    static loadSecretOverride(override: string): any | null;

    /**
     * @return file for an embedded config value.
     */
    embeddedFile(embeddedFileName: string, override?: string): File;

    /**
     * @return file for an embedded config value.
     */
    static embeddedFile(embeddedFileName: string, override?: string): File;

    /**
     * @return config folder name
     */
    static configFolder(): string;

    /**
     * @return config sub folder name for this type
     */
    static configSubFolder(): string;

    /**
     * @return config file encoded path for a given key and potentially user under the config dir for this type.
     */
    static configFileEncodedPath(configKey: string, userOverride?: boolean): string;

    /**
     * @return pair of config and secret files for a given override; note that will always return instance of
     *         File even if physical file doesn't exist.
     */
    configAndSecretFiles(override: string): Pair<File, File> | null;

    /**
     * @return pair of config and secret files for a given override; note that will always return instance of
     *         File even if physical file doesn't exist.
     */
    static configAndSecretFiles(override: string): Pair<File, File> | null;

    /**
     * @return the config file path for a config instance at a given override;
     */
    configFilePath(override: string): string | null;

    /**
     * @return the config file path for a config instance at a given override;
     */
    static configFilePath(override: string): string | null;

    /**
     * @return the secret file path for a config instance at a given override;
     */
    secretFilePath(override: string): string | null;

    /**
     * @return the secret file path for a config instance at a given override;
     */
    static secretFilePath(override: string): string | null;

    /**
     * @return pair of config and secret files for provided override / appId; note that will always return pair
     *         of Files even if physical file doesn't exist.
     */
    configAndSecretFilePair(override: string, appId: string): Pair<File, File> | null;

    /**
     * @return pair of config and secret files for provided override / appId; note that will always return pair
     *         of Files even if physical file doesn't exist.
     */
    static configAndSecretFilePair(override: string, appId: string): Pair<File, File> | null;

    /**
     * @return map of pair of config and secret files by override; note that will always return instance of
     *         File even if physical file doesn't exist.
     */
    allConfigAndSecretFiles(): Map_Type<string, Pair<File, File>> | null;

    /**
     * @return map of pair of config and secret files by override; note that will always return instance of
     *         File even if physical file doesn't exist.
     */
    static allConfigAndSecretFiles(): Map_Type<string, Pair<File, File>> | null;

    /**
     * @return pair of config and secret template directories for override
     */
    static configAndSecretDirs(override?: string): Pair<File, File> | null;

    /**
     * @return map of pair of config and secret template directories by override; note that will always return instance of
     *         File even if physical folder doesn't exist.
     */
    static allConfigAndSecretDirs(): Map_Type<string, Pair<File, File>> | null;

    /**
     * @return pair of config and secret Base directories for the given override
     */
    static configAndSecretOverrideBaseDirs(override?: string): Pair<File, File> | null;

    /**
     * @return config key for a given config or secret file. If file is not a valid config or secret then will return
     *         `null` or fail based on `failIfInvalid`
     */
    static configKeyForFile(file: File, failIfInvalid?: boolean): string | null;

    /**
     * @return config key for a given config or secret file url. If file is not a valid config or secret then will return
     *         `null` or fail based on `failIfInvalid`
     */
    static configKeyForFileUrl(fileUrl: string): string | null;

    /**
     * @return Config sub-type for a config directory name.
     */
    static configTypeForDir(dir: string, failIdInvalid?: boolean): Type | null;

    /**
     * Sets configuration. For Identifiable configurations `id` field is required. Does not set secret values. Use
     * #setSecret or #setSecretValue for that.
     */
    setConfig(override?: string): void;

    /**
     * Sets configuration. For Identifiable configurations `id` field is required. Does not set secret values. Use
     * #setSecret or #setSecretValue for that.
     */
    static setConfig(override?: string): void;

    /**
     * Sets configuration. For Identifiable configurations `id` field is required. Does not set non secret values. Use
     * #setConfigValue or #setConfig for that.
     */
    setSecret(override?: string): void;

    /**
     * Sets configuration. For Identifiable configurations `id` field is required. Does not set non secret values. Use
     * #setConfigValue or #setConfig for that.
     */
    static setSecret(override?: string): void;

    /**
     * Executes actions on all config override levels (within a valid range) for a particular instance of config.
     */
    eachOverride(action?: λBiConsumer<Config, string>): void;

    /**
     * Executes actions on all config override levels (within a valid range) for a particular instance of config.
     */
    static eachOverride(action?: λBiConsumer<Config, string>): void;

    /**
     * Executes actions on all config override levels (within a valid range) for the Type itself (not instance).
     */
    static eachOverrideOnType(action?: λConsumer<string>): void;

    /**
     * @return minimum override for config - default is ConfigOverride#APP.
     */
    static minOverride(): string;

    /**
     * @return maximum override for config - default is ConfigOverride#ROOT
     */
    static maxOverride(): string;

    /**
     * Clears specified configuration override including secrets for this instance.
     *
     * @param override
     *        Specifies the {@link ConfigOverride} level, of this config to clear.
     */
    clearConfigAndSecretOverride(override: string): void;

    /**
     * Clears specified configuration override including secrets for this instance.
     *
     * @param override
     *        Specifies the {@link ConfigOverride} level, of this config to clear.
     */
    static clearConfigAndSecretOverride(override: string): void;

    /**
     * Clears specified configuration including secrets for this instance on all override levels.
     */
    clearConfigAndSecretAllOverrides(): void;

    /**
     * Clears specified configuration including secrets for this instance on all override levels.
     */
    static clearConfigAndSecretAllOverrides(): void;

    /**
     * Clears every config and secret instance for this type and subtypes on all overrides lower than the specified
     * override (that is, Config#clearAllConfigAndSecretOverrides with App override parameter will clear all configs on
     * {@link ConfigOverride#APP} and {@link ConfigOverride#USER} level).
     *
     * @param override
     *        Specifies the {@link ConfigOverride} level of this config to clear. All overrides lower than this override
     *        will also be cleared.
     * @param confirm
     *        Confirmation from user that they understand and confirm deletion of this configuration.
     */
    static clearAllConfigAndSecretOverrides(override: string, confirm?: boolean): void;

    /**
     * @return this config without any secret values.
     */
    removeSecrets(): Genai.Agent.Config | null;

    /**
     * @return this config without any secret values.
     */
    static removeSecrets(): Genai.Agent.Config | null;

    /**
     * @return this config with only secret values.
     */
    removeNonSecrets(): Genai.Agent.Config | null;

    /**
     * @return this config with only secret values.
     */
    static removeNonSecrets(): Genai.Agent.Config | null;

    /**
     * Validates and alters fields in the configuration to fit specific requirements. sub-types can override to add custom
     * validation and setup.
     */
    validate(): Genai.Agent.Config;

    /**
     * Validates and alters fields in the configuration to fit specific requirements. sub-types can override to add custom
     * validation and setup.
     */
    static validate(): Genai.Agent.Config;

    /**
     * @return merged Json of all defined configuration templates for this instance including secrets.
     */
    static rawJson(configKey: string): any | null;

    /**
     * @return sets Json template for a specified override.
     */
    static setJson(configKey: string, json: any, secret?: boolean, override?: string): File;

    /**
     * @return sets Json template field for a specified override.
     */
    static setJsonValue(configKey: string, field: string, json: any, override?: string): File;

    /**
     * @return sets Json template field for a specified override.
     */
    static setJsonField(configKey: string, field: string, json: any, secret?: boolean, override?: string): File;

    /**
     * Returns json containing configuration template bindings for a provided config key. Override this method to provide your
     * own list of template bindings
     */
    static templateBindings(configKey: string): any | null;

    /**
     * Evaluate a given template by applying the default config bindings.
     * Default config bindings are:
     * 1. owner - owner of the config
     * 2. region - abbreviated region in which the cluster is
     * 3. cluster - current cluster id
     * 4. env - current env id
     * 5. app - current app id
     * 7. user - current user
     * 8. type - type on which this api is called
     * For example, "${owner}--${cluster}-${env}-${app}"
     *
     * @param template
     *            Template string that needs to be evaluated. For example, "${owner}--${cluster}-${env}-${app}-${schemaName}"
     * @param extraBindings
     *            Any additional binding params not included in the default config bindings
     * @return evaluated template
     */
    static evalTemplate(template: string, extraBindings?: Map_Type<string, string>): string;

    /**
     * Returns count of cached raw Json.
     */
    static rawJsonCacheSize(): number | null;

    /**
     * Returns instance of the cache for this type for raw Json.
     */
    static rawJsonNativeCache(): any | null;

    /**
     * @return the default instance to be used when member functions are called on this type. E.g.
     *         FileSystem.inst() should return a default file system. It is up to implementation to decide if default
     *         instance is a singleton or not.
     */
    static inst(): Genai.Agent.Config;

    /**
     * Returns the Config instance on which it is called along with all its child configs, recursively.
     * In the returned json, the complete child configs will be put on the same field name which is only a
     * reference to the child config in the original config.
     */
    getRecursive(): any;

    /**
     * Returns the Config instance on which it is called along with all its child configs, recursively.
     * In the returned json, the complete child configs will be put on the same field name which is only a
     * reference to the child config in the original config.
     */
    static getRecursive(): any;

    /**
     * Sets the config instance on which it is called along with all its child configs, recursively.
     * @param configJson
     *      The json object that contains the complete config data, including the parent and child configs.
     *      For keys corresponding to one of #childConfigFields, if the value is a string, then only that
     *      string will be set on this config; if the value is an object, the child config will be recursively
     *      set accordingly.
     * @param useSetConfigValues
     *      If true, this function will use {@link Config#setConfigValues} meaning that only provided keys will be set.
     *      If false, this function will use {@link Config#setConfig} meaning that all configs (parent
     *      and child) must be complete.
     * @param override
     *      The override to be passed to `setConfig` or `setConfigValues`.
     *
     * @return the updated parent config. Note that it will not be recursively populated.
     */
    static setRecursive(configJson: any, useSetConfigValues?: boolean, override?: string): Genai.Agent.Config;

    /**
     * Each Genai.ParentConfig type must implement this function to return a map of <field name, child config type>
     * for all fields on the parent config that are references to child configs. All values for these fields should
     * be {@link Config#configKey}s for the corresponding child type.
     *
     * e.g.
     * type MyParentConfig mixes Genai.ParentConfig {
     *     foo: int
     *     bar: string
     *     // the name of a MyChildConfig instance
     *     childConfigName: string
     *     // the name of a MyChildConfigType2 instance
     *     childConfigType2Name: string
     * }
     * Then the return value of this function should be:
     * { childConfigName: MyChildConfig, childConfigType2Name: MyChildConfigType2 }
     */
    static childConfigFields(): Map_Type<string, Type>;

    /**
     * Abstract function for returning all the tools associated with this config
     */
    allTools(): Array_Type<Genai.Agent.Tool<any> | Genai.Agent.Tool.FunctionCalling>;

    /**
     * Abstract function for returning all the tools associated with this config
     */
    static allTools(): Array_Type<Genai.Agent.Tool<any> | Genai.Agent.Tool.FunctionCalling>;

    /**
     * A helper function to return the menu options corresponding to #uiSelectableTools.
     */
    uiMenuToolOptions(): Array_Type<Genai.Agent.Tool.Config.UiOptions> | null;

    /**
     * A helper function to return the menu options corresponding to #uiSelectableTools.
     */
    static uiMenuToolOptions(): Array_Type<Genai.Agent.Tool.Config.UiOptions> | null;
  }
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

interface λBiConsumer<T, U> {
  (t: T, u: U): void
}

interface λPredicate<T> {
  (t: T): boolean
}
