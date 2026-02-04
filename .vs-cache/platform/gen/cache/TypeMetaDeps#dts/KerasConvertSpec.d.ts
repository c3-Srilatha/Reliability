// TypeScript definitions for the C3 type KerasConvertSpec

/**
 * Customizations for {@link KerasPipe#convert}.
 *
 * @remarks this represents a value passed to a method that expects an instance of KerasConvertSpec
 */
declare interface IKerasConvertSpec {

  /**
   * Specify a name for the converted pipe.
   */
  name?: string | null;

  /**
   * An alternative to specifying {@link #xType} when all 'x' inputs are of type {@link Data}. If provided,
   * {@link #xType} will be ignored.
   */
  xNames?: C3.Array<string | null> | Array<string | null> | null;

  /**
   * An alternative to specifying {@link #yType} when all 'y' inputs are of type {@link Data}. If provided,
   * {@link #yType} will be ignored.
   */
  yNames?: C3.Array<string | null> | Array<string | null> | null;

  /**
   * An alternative to specifying {@link #outType} when all outputs are of type {@link Data}. If provided,
   * {@link #outType} will be ignored.
   */
  outNames?: C3.Array<string | null> | Array<string | null> | null;

  /**
   * Manually specify the DX binding for {@link MlTrainable}. A multi-input pipe can be specified by providing a map
   * specifying all the input names and types. A default value type of {@link Data} is assumed if value types are not
   * provided for an input. Note that a map with a single element represents a single-input pipe.
   *
   * Examples:
   * ```py
   * xType = c3.Data.meta().referenceType() # represents a single input for 'x'
   * xType = "{x1: Data, x2: int}" # represents multiple inputs for 'x'
   *
   * # To specify uniform ValueTypes for multiple inputs, use c3.MapType
   * xType = c3.MapType.ofStrTo(c3.PrimitiveType.ofDbl())
   * xType = c3.MapType.ofStrTo(c3.Data.meta().referenceType())
   * xType = c3.MapType.ofStrToAny()  # the broadest multiple input ValueType specification
   * ```
   */
  xType?: string | null;

  /**
   * Manually specify the DY binding for {@link MlTrainable}. A multi-input pipe can be specified by providing a map
   * specifying all the input names and types. A default value type of {@link Data} is assumed if types are not
   * provided for an input. Note that a map with a single element represents a single-input pipe.
   */
  yType?: string | null;

  /**
   * Manually specify the DO binding for {@link MlProcessable}. A multi-output pipe can be specified by providing a map
   * specifying all the output names and types. A default value type of {@link Data} is assumed if types are not
   * provided for an output. Note that a map with a single element represents a single-output pipe.
   */
  outType?: string | null;

  /**
   * Override the process function for {@link MlAtomicPipe#processFunc}.
   */
  processFunc?: string | null;

  /**
   * Manually specify if the model is trained. This is used for pipes that does not have a mechanism to detect if the
   * model is already trained or not like {@link KerasPipe}.
   */
  trained?: boolean | null;

  /**
   * Manually specify if the model is frozen. If true, then the model shall not be retrained
   */
  frozen?: boolean | null;

  /**
   * If the model class is custom written (i.e. written in a Jupyter cell or an external `.py` file) and the class
   * definition spans multiple Python files, then use `sourceFilePaths` to specify the relative file paths to the
   * additional files required to run the custom model properly. It is not necessary to specify the path to the Python
   * file that contains the parent class (i.e. type(model)) as that shall be automatically inferred. If the class
   * definition is contained in only one file or a single Jupyter cell, it is not necessary and not recommended to
   * populate `sourceFilePaths`.
   * Example usage:
   * ```py
   * # ./helper.py
   * from sklearn.preprocessing import Normalizer
   * class Helper:
   *
   *   def transform(self, x):
   *     return Normalizer().transform(x)
   * ```
   *
   * ```py
   * # ./model.py
   * from helper import Helper
   * from sklearn.base import BaseEstimator
   * class MyNormalizer(BaseEstimator):
   *
   *   def __init__(self):
   *     self.helper = Helper()
   *
   *   def fit(self, x, y):
   *      return self
   *
   *   def predict(self, x):
   *     return self.helper.transform(x)
   * ```
   *
   * ```py
   * >>> from model import MyNormalizer
   * >>> my_custom_normalizer = MyNormalizer()
   * >>> my_custom_pipe = c3.MlPipe.convert(my_custom_normalizer, spec=c3.MlConvertSpec(sourceFilePaths=["helper.py"]))
   * ```
   */
  sourceFilePaths?: C3.Array<string | null> | Array<string | null> | null;

  /**
   * Manually specify if the model accepts only flattened input. This will force the {@link MlAtomicPipe#convertPipeInputsToNative}
   *  to return a NumPy object.
   */
  flattenInput?: boolean | null;

  /**
   * Maps which (if any) y inputs should be taken from an x input when calling `keras_pipe.train(x, y)`. This is useful
   * in cases where the keras model architecture includes autoencoders.
   *
   * For example, let's say we have an architecture with a single input and 2 outputs in which the first output is the
   * reconstruction of an autoencoder. Setting `yFromX = {'y2': 'x1'}` and calling:
   * `pipe.train(x={'x1': X_train}, y={'y1': y_train})` is semantically equivalent to
   * `pipe.train(x={'x1': X_train}, y={'y1': y_train, 'y2': X_train})`.
   */
  yFromX?: C3.Map<string | null, string | null> | {[key: string | null]: string | null};

  /**
   *  Native python class representing the Keras Generator built via inheriting {@link https://www.tensorflow.org/api_docs/python/tf/keras/utils/Sequence}.
   *  Used for creating an instance of {@link KerasCustomGenerator}.
   *
   *  Requirements;
   *  - Every native Keras generator must inherit from `tf.keras.utils.Sequence`.
   *  - The class must have the following `__init__` method signature
   *  `__init__(self, x, y=None, batch_size=..., shuffle=..., ...)`
   *  The constructor must require an `x` input, and have explicit optional keyword arguments for the target `y` input,
   *  the `batch_size`, and a `shuffle` argument. Even if it will not be used, the `batch_size` and `shuffle` keyword
   *  arguments must have default values; they can be changed by specifying a {@link KerasConvertSpec#trainArgs}. You can
   *  add additional arguments or keyword arguments at your discretion, and all custom constructor arguments can be
   *  specified as hyperparameters through {@link MlPipe#withHyperparams} (ensure you use the `generator/` prefix to
   *  address nested hyperparameters).
   *  - The generator must implement the following abstract methods:
   *  `__len__(self): -> int`
   *   - Return the number of batches that will be returned by this generator.
   *  `__getitem__(self, index) -> numpy.ndarray`
   *  - Return the batch that corresponds to the index in Numpy format.
   *
   *  Note: User is responsible for converting the `x` from `Data` to required
   *  format in `__init__` of custom generator, if needed. For data that fits in memory, it is recommended to convert
   *  data to `numpy` or `pandas` for better train/process performance.
   *
   *  The `Sequence` class has an optional method `on_epoch_end(self)` that can be implemented and it will be used as a
   *  callback at the end of every epoch.
   *
   *  Example:
   *  ```py
   *  class SelfSupervisedWordGenerator(tf.keras.utils.Sequence):
   *      def __init__(self, x, y=None, batch_size=32, shuffle=False, window_size=16, sentence_len=100):
   *          import numpy as np
   *          self.batch_size = batch_size
   *          self.shuffle = shuffle
   *          self.x = x.to_numpy() # Assumption : x fits in memory
   *
   *          self.window_size = window_size
   *          self.sentence_len = sentence_len
   *          self.roll_expand = lambda arr, roll: np.expand_dims(np.roll(arr, -roll, axis=1), axis=1)
   *
   *      def __len__(self):
   *          import numpy as np
   *          return np.ceil(len(self.x) / self.batch_size)
   *
   *      def __getitem__(self, index):
   *          import numpy as np
   *          # X is shape (N, sentence_len)
   *          batch = self.x[index * self.batch_size:(index + 1) * self.batch_size]
   *          inputs, targets = [], []
   *
   *          for window in range(self.sentence_len - self.window_size):
   *             roll_expand_batch = self.roll_expand(batch, window)
   *             inputs.append(roll_expand_batch[:, :, :window])
   *             targets.append(roll_expand_batch[:, :, window])
   *
   *         # Inputs are shape (N, Sentence - Window, Window)
   *         # Targets are shape (N, Sentence - Window)
   *         inputs, targets = np.concatenate(inputs, axis=1), np.concatenate(targets, axis=-1)
   *
   *         return inputs.reshape(-1, self.window_size), targets.reshape(-1)
   *
   *      def on_epoch_end(self):
   *          print('Epoch Finished')
   *          pass
   *
   *  keras_spec = c3.MlKerasConvertSpec(nativeGenerator=SelfSupervisedWordGenerator, batch_size=16, shuffle=True)
   *  keras_pipe = c3.MlPipe.convert(model, spec=keras_spec)
   *  keras_pipe = keras_pipe.withHyperparams({'generator/window_size': 8})
   * ```
   */
  nativeGenerator?: any;

  /**
   * Arguments passed to Keras's [fit](https://keras.io/api/models/model_training_apis/) method. Note that
   * {@link KerasFitArgs#batch_size} and {@link KerasFitArgs#shuffle} specified here are used to create an instance of
   * {@link KerasGenerator} that populates the {@link KerasPipe#generator} field.
   */
  trainArgs?: IKerasFitArgs | null;

  /**
   * Arguments passed to Keras's [predict](https://keras.io/api/models/model_training_apis/) method. Note that
   * {@link KerasFitArgs#batch_size} and {@link KerasPredictArgs#shuffle} specified here are used to create an instance
   * of {@link KerasGenerator} that populates the {@link KerasPipe#processGenerator} field.
   */
  processArgs?: IKerasPredictArgs | null;
}

/**
 * Customizations for {@link KerasPipe#convert}.
 *
 * @remarks this represents a made instance of KerasConvertSpec
 */
declare class KerasConvertSpec extends Obj {

  /**
   * Specify a name for the converted pipe.
   */
  readonly name?: string | null;
  withName(name: string | null): KerasConvertSpec;

  /**
   * An alternative to specifying {@link #xType} when all 'x' inputs are of type {@link Data}. If provided,
   * {@link #xType} will be ignored.
   */
  readonly xNames?: C3.Array<string | null> | null;
  withXNames(xNames: C3.Array<string | null> | Array<string | null> | null): KerasConvertSpec;

  /**
   * An alternative to specifying {@link #yType} when all 'y' inputs are of type {@link Data}. If provided,
   * {@link #yType} will be ignored.
   */
  readonly yNames?: C3.Array<string | null> | null;
  withYNames(yNames: C3.Array<string | null> | Array<string | null> | null): KerasConvertSpec;

  /**
   * An alternative to specifying {@link #outType} when all outputs are of type {@link Data}. If provided,
   * {@link #outType} will be ignored.
   */
  readonly outNames?: C3.Array<string | null> | null;
  withOutNames(outNames: C3.Array<string | null> | Array<string | null> | null): KerasConvertSpec;

  /**
   * Manually specify the DX binding for {@link MlTrainable}. A multi-input pipe can be specified by providing a map
   * specifying all the input names and types. A default value type of {@link Data} is assumed if value types are not
   * provided for an input. Note that a map with a single element represents a single-input pipe.
   *
   * Examples:
   * ```py
   * xType = c3.Data.meta().referenceType() # represents a single input for 'x'
   * xType = "{x1: Data, x2: int}" # represents multiple inputs for 'x'
   *
   * # To specify uniform ValueTypes for multiple inputs, use c3.MapType
   * xType = c3.MapType.ofStrTo(c3.PrimitiveType.ofDbl())
   * xType = c3.MapType.ofStrTo(c3.Data.meta().referenceType())
   * xType = c3.MapType.ofStrToAny()  # the broadest multiple input ValueType specification
   * ```
   */
  readonly xType?: string | null;
  withXType(xType: string | null): KerasConvertSpec;

  /**
   * Manually specify the DY binding for {@link MlTrainable}. A multi-input pipe can be specified by providing a map
   * specifying all the input names and types. A default value type of {@link Data} is assumed if types are not
   * provided for an input. Note that a map with a single element represents a single-input pipe.
   */
  readonly yType?: string | null;
  withYType(yType: string | null): KerasConvertSpec;

  /**
   * Manually specify the DO binding for {@link MlProcessable}. A multi-output pipe can be specified by providing a map
   * specifying all the output names and types. A default value type of {@link Data} is assumed if types are not
   * provided for an output. Note that a map with a single element represents a single-output pipe.
   */
  readonly outType?: string | null;
  withOutType(outType: string | null): KerasConvertSpec;

  /**
   * Override the process function for {@link MlAtomicPipe#processFunc}.
   */
  readonly processFunc?: string | null;
  withProcessFunc(processFunc: string | null): KerasConvertSpec;

  /**
   * Manually specify if the model is trained. This is used for pipes that does not have a mechanism to detect if the
   * model is already trained or not like {@link KerasPipe}.
   */
  readonly trained?: boolean | null;
  withTrained(trained: boolean | null): KerasConvertSpec;

  /**
   * Manually specify if the model is frozen. If true, then the model shall not be retrained
   */
  readonly frozen?: boolean | null;
  withFrozen(frozen: boolean | null): KerasConvertSpec;

  /**
   * If the model class is custom written (i.e. written in a Jupyter cell or an external `.py` file) and the class
   * definition spans multiple Python files, then use `sourceFilePaths` to specify the relative file paths to the
   * additional files required to run the custom model properly. It is not necessary to specify the path to the Python
   * file that contains the parent class (i.e. type(model)) as that shall be automatically inferred. If the class
   * definition is contained in only one file or a single Jupyter cell, it is not necessary and not recommended to
   * populate `sourceFilePaths`.
   * Example usage:
   * ```py
   * # ./helper.py
   * from sklearn.preprocessing import Normalizer
   * class Helper:
   *
   *   def transform(self, x):
   *     return Normalizer().transform(x)
   * ```
   *
   * ```py
   * # ./model.py
   * from helper import Helper
   * from sklearn.base import BaseEstimator
   * class MyNormalizer(BaseEstimator):
   *
   *   def __init__(self):
   *     self.helper = Helper()
   *
   *   def fit(self, x, y):
   *      return self
   *
   *   def predict(self, x):
   *     return self.helper.transform(x)
   * ```
   *
   * ```py
   * >>> from model import MyNormalizer
   * >>> my_custom_normalizer = MyNormalizer()
   * >>> my_custom_pipe = c3.MlPipe.convert(my_custom_normalizer, spec=c3.MlConvertSpec(sourceFilePaths=["helper.py"]))
   * ```
   */
  readonly sourceFilePaths?: C3.Array<string | null> | null;
  withSourceFilePaths(sourceFilePaths: C3.Array<string | null> | Array<string | null> | null): KerasConvertSpec;

  /**
   * Manually specify if the model accepts only flattened input. This will force the {@link MlAtomicPipe#convertPipeInputsToNative}
   *  to return a NumPy object.
   */
  readonly flattenInput?: boolean | null;
  withFlattenInput(flattenInput: boolean | null): KerasConvertSpec;

  /**
   * Maps which (if any) y inputs should be taken from an x input when calling `keras_pipe.train(x, y)`. This is useful
   * in cases where the keras model architecture includes autoencoders.
   *
   * For example, let's say we have an architecture with a single input and 2 outputs in which the first output is the
   * reconstruction of an autoencoder. Setting `yFromX = {'y2': 'x1'}` and calling:
   * `pipe.train(x={'x1': X_train}, y={'y1': y_train})` is semantically equivalent to
   * `pipe.train(x={'x1': X_train}, y={'y1': y_train, 'y2': X_train})`.
   */
  readonly yFromX?: C3.Map<string | null, string | null>;
  withYFromX(yFromX: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): KerasConvertSpec;

  /**
   *  Native python class representing the Keras Generator built via inheriting {@link https://www.tensorflow.org/api_docs/python/tf/keras/utils/Sequence}.
   *  Used for creating an instance of {@link KerasCustomGenerator}.
   *
   *  Requirements;
   *  - Every native Keras generator must inherit from `tf.keras.utils.Sequence`.
   *  - The class must have the following `__init__` method signature
   *  `__init__(self, x, y=None, batch_size=..., shuffle=..., ...)`
   *  The constructor must require an `x` input, and have explicit optional keyword arguments for the target `y` input,
   *  the `batch_size`, and a `shuffle` argument. Even if it will not be used, the `batch_size` and `shuffle` keyword
   *  arguments must have default values; they can be changed by specifying a {@link KerasConvertSpec#trainArgs}. You can
   *  add additional arguments or keyword arguments at your discretion, and all custom constructor arguments can be
   *  specified as hyperparameters through {@link MlPipe#withHyperparams} (ensure you use the `generator/` prefix to
   *  address nested hyperparameters).
   *  - The generator must implement the following abstract methods:
   *  `__len__(self): -> int`
   *   - Return the number of batches that will be returned by this generator.
   *  `__getitem__(self, index) -> numpy.ndarray`
   *  - Return the batch that corresponds to the index in Numpy format.
   *
   *  Note: User is responsible for converting the `x` from `Data` to required
   *  format in `__init__` of custom generator, if needed. For data that fits in memory, it is recommended to convert
   *  data to `numpy` or `pandas` for better train/process performance.
   *
   *  The `Sequence` class has an optional method `on_epoch_end(self)` that can be implemented and it will be used as a
   *  callback at the end of every epoch.
   *
   *  Example:
   *  ```py
   *  class SelfSupervisedWordGenerator(tf.keras.utils.Sequence):
   *      def __init__(self, x, y=None, batch_size=32, shuffle=False, window_size=16, sentence_len=100):
   *          import numpy as np
   *          self.batch_size = batch_size
   *          self.shuffle = shuffle
   *          self.x = x.to_numpy() # Assumption : x fits in memory
   *
   *          self.window_size = window_size
   *          self.sentence_len = sentence_len
   *          self.roll_expand = lambda arr, roll: np.expand_dims(np.roll(arr, -roll, axis=1), axis=1)
   *
   *      def __len__(self):
   *          import numpy as np
   *          return np.ceil(len(self.x) / self.batch_size)
   *
   *      def __getitem__(self, index):
   *          import numpy as np
   *          # X is shape (N, sentence_len)
   *          batch = self.x[index * self.batch_size:(index + 1) * self.batch_size]
   *          inputs, targets = [], []
   *
   *          for window in range(self.sentence_len - self.window_size):
   *             roll_expand_batch = self.roll_expand(batch, window)
   *             inputs.append(roll_expand_batch[:, :, :window])
   *             targets.append(roll_expand_batch[:, :, window])
   *
   *         # Inputs are shape (N, Sentence - Window, Window)
   *         # Targets are shape (N, Sentence - Window)
   *         inputs, targets = np.concatenate(inputs, axis=1), np.concatenate(targets, axis=-1)
   *
   *         return inputs.reshape(-1, self.window_size), targets.reshape(-1)
   *
   *      def on_epoch_end(self):
   *          print('Epoch Finished')
   *          pass
   *
   *  keras_spec = c3.MlKerasConvertSpec(nativeGenerator=SelfSupervisedWordGenerator, batch_size=16, shuffle=True)
   *  keras_pipe = c3.MlPipe.convert(model, spec=keras_spec)
   *  keras_pipe = keras_pipe.withHyperparams({'generator/window_size': 8})
   * ```
   */
  readonly nativeGenerator?: any;
  withNativeGenerator(nativeGenerator: any): KerasConvertSpec;

  /**
   * Arguments passed to Keras's [fit](https://keras.io/api/models/model_training_apis/) method. Note that
   * {@link KerasFitArgs#batch_size} and {@link KerasFitArgs#shuffle} specified here are used to create an instance of
   * {@link KerasGenerator} that populates the {@link KerasPipe#generator} field.
   */
  readonly trainArgs?: KerasFitArgs | null;
  withTrainArgs(trainArgs: IKerasFitArgs | null): KerasConvertSpec;

  /**
   * Arguments passed to Keras's [predict](https://keras.io/api/models/model_training_apis/) method. Note that
   * {@link KerasFitArgs#batch_size} and {@link KerasPredictArgs#shuffle} specified here are used to create an instance
   * of {@link KerasGenerator} that populates the {@link KerasPipe#processGenerator} field.
   */
  readonly processArgs?: KerasPredictArgs | null;
  withProcessArgs(processArgs: IKerasPredictArgs | null): KerasConvertSpec;

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
  static fromJson(json: any | null): KerasConvertSpec | null;

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
  static fromJsonString(json: string | null): KerasConvertSpec | null;

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
  static fromXmlString(xml: string | null): KerasConvertSpec | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string | null, contentType: string): KerasConvertSpec | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): KerasConvertSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): KerasConvertSpec;

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
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): KerasConvertSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<KerasConvertSpec | null>;

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
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<KerasConvertSpec | null>;

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
  mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): KerasConvertSpec;

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
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): KerasConvertSpec;

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
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): KerasConvertSpec;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): KerasConvertSpec;

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
  withField(field: string, value: any, doNotConvert?: boolean): KerasConvertSpec;

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
  withField(field: FieldType, value: any, doNotConvert?: boolean): KerasConvertSpec;

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
  withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): KerasConvertSpec;

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
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): KerasConvertSpec;

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
  withoutFieldAtPath(path: string): KerasConvertSpec;

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
  withoutField(field: string | null): KerasConvertSpec;

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
  withoutField(field: FieldType | null): KerasConvertSpec;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: C3.Array<string | null> | null): KerasConvertSpec;

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
  withoutFieldsByType(fields: C3.Array<FieldType | null> | null): KerasConvertSpec;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): KerasConvertSpec;

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
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): KerasConvertSpec;

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
  defaultField(field: string): KerasConvertSpec;

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
  defaultField(field: FieldType): KerasConvertSpec;

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
  unsetField(field: string): KerasConvertSpec;

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
  unsetField(field: FieldType): KerasConvertSpec;

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
  removeField(field: string): KerasConvertSpec;

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
  removeField(field: FieldType): KerasConvertSpec;

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
  mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): KerasConvertSpec;

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
  mergeObj(other: Obj | null, otherFieldsFilter: Type): KerasConvertSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): KerasConvertSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): KerasConvertSpec;

  mergeJson(json: any | null): KerasConvertSpec;

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
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): KerasConvertSpec;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj | null, deep?: boolean): KerasConvertSpec;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): C3.Array<KerasConvertSpec | null>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: any[]): C3.Array<KerasConvertSpec | null>;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<KerasConvertSpec | null> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): C3.Set<KerasConvertSpec | null>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<KerasConvertSpec | null> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string | null, KerasConvertSpec | null> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, KerasConvertSpec | null> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<KerasConvertSpec | null>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<KerasConvertSpec | null>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): KerasConvertSpec;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): KerasConvertSpec;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): KerasConvertSpec;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): KerasConvertSpec;

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
  static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): KerasConvertSpec;

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
  static make(fields: any, withDefaults?: boolean): KerasConvertSpec;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): KerasConvertSpec;

  /**
   * Optional override that will be called every time instance of this type is created.
   *
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static beforeMake(fields: C3.Map<FieldType | null, any> | null): C3.Map<FieldType | null, any>;

  /**
   * Validates that {@link AnyType} is not used as an input or output field on the spec.
   */
  afterMake(): KerasConvertSpec;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): KerasConvertSpec;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec | null): Stream<KerasConvertSpec>;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec | null): KerasConvertSpec;

  /**
   * Gets a field if it exists in the spec. Otherwise, returns the default value.
   */
  static getOrDefault(spec: MlConvertSpec, fieldName: string, defaultValue: any): any;
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
