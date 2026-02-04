#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.PlotHLinesSpec import PlotHLinesSpec
from c3.platform.PlotPColorSpec import PlotPColorSpec
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.MapBuilder import MapBuilder
from c3.platform.StreamType import StreamType
from c3.platform.PlotAngleSpectrumSpec import PlotAngleSpectrumSpec
from c3.platform.PlotPieSpec import PlotPieSpec
from c3.platform.PlotHist2dSpec import PlotHist2dSpec
from c3.platform.PlotCLabelSpec import PlotCLabelSpec
from c3.platform.PlotBarSpec import PlotBarSpec
from c3.platform.PlotContourSpec import PlotContourSpec
from c3.platform.PlotCohereSpec import PlotCohereSpec
from c3.platform.FieldType import FieldType
from c3.platform.PlotEventPlotSpec import PlotEventPlotSpec
from c3.platform.PlotPColorFastSpec import PlotPColorFastSpec
from c3.platform.PlotSemiLogYSpec import PlotSemiLogYSpec
from c3.platform.PlotFillBetweenXSpec import PlotFillBetweenXSpec
from c3.platform.PlotMagnitudeSpectrumSpec import PlotMagnitudeSpectrumSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.PlotAxhLineSpec import PlotAxhLineSpec
from c3.platform.Content import Content
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.PlotFillSpec import PlotFillSpec
from c3.platform.PlotErrorBarSpec import PlotErrorBarSpec
from c3.platform.PlotSemiLogXSpec import PlotSemiLogXSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.PlotStepSpec import PlotStepSpec
from c3.platform.PlotACorrSpec import PlotACorrSpec
from c3.platform.SetType import SetType
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.PlotMatShowSpec import PlotMatShowSpec
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.MapType import MapType
from c3.platform.PlotBxpSpec import PlotBxpSpec
from c3.platform.PlotPlotSpec import PlotPlotSpec
from c3.platform.PlotViolinPlotSpec import PlotViolinPlotSpec
from c3.platform.Exclude import Exclude
from c3.platform.PlotSpySpec import PlotSpySpec
from c3.platform.PlotAxhSpanSpec import PlotAxhSpanSpec
from c3.platform.PlotXCorrSpec import PlotXCorrSpec
from c3.platform.PlotStemSpec import PlotStemSpec
from c3.platform.PlotSpecgramSpec import PlotSpecgramSpec
from c3.platform.PlotPsdSpec import PlotPsdSpec
from c3.platform.PlotPlotDateSpec import PlotPlotDateSpec
from c3.platform.PlotAxvSpanSpec import PlotAxvSpanSpec
from c3.platform.PlotAxvLineSpec import PlotAxvLineSpec
from c3.platform.PlotBrokenBarHSpec import PlotBrokenBarHSpec
from c3.platform.PlotVLinesSpec import PlotVLinesSpec
from c3.platform.PlotBoxPlotSpec import PlotBoxPlotSpec
from c3.platform.PlotPhaseSpectrumSpec import PlotPhaseSpectrumSpec
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.PlotViolinSpec import PlotViolinSpec
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.PlotFillBetweenSpec import PlotFillBetweenSpec
from c3.platform.PlotScatterSpec import PlotScatterSpec
from c3.platform.PlotContourFSpec import PlotContourFSpec
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.PlotStackPlotSpec import PlotStackPlotSpec
from c3.platform.PlotHistSpec import PlotHistSpec
from c3.platform.Promise import Promise
from c3.platform.PlotPColorMeshSpec import PlotPColorMeshSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Obj import Obj
from c3.platform.PlotLogLogSpec import PlotLogLogSpec
from c3.platform.PlotHexBinSpec import PlotHexBinSpec
from c3.platform.PlotCsdSpec import PlotCsdSpec
from c3.platform.PlotElementSpec import PlotElementSpec
from c3.platform.Promise import Promise
from c3.platform.PlotBarHSpec import PlotBarHSpec
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.Obj.MakeSpec import Obj.MakeSpec

# Python definitions for the C3 type PlotAxes


class PlotAxes():
    """
    Single chart (set of plot axes).
    One or more of these are built into a {@link PlotFigure figure} and
    each axes must have at least one {@link PlotElementSpec element}.
    
    # Example: Single Element
    ```JavaScript
    PlotAxes.make({
      title: 'Pies'
    }).pie({
      x: [40, 30, 15, 10, 5],
      labels: ['Apple', 'Cherry', 'Berry', 'Lemon', 'Key Line'],
      autoPct: '%1.1f%%',
      shadow: true
    }).show();
    ```
    
    # Example: Multiple Elements
    ```JavaScript
    var ax = PlotAxes.make({
      axis: 'equal',
      title: 'Checkerboard'
    });
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        if (i % 2 != j % 2) {
          ax = ax.fill({
            args: [
              [ i, i + 1, i + 1, i, i ],
              [ j, j, j + 1, j + 1, j ],
              'k'
            ]
          });
        }
      }
    }
    ax.show();
    ```
    
    @see plotting.c3doc
    @see https://matplotlib.org/api/axes_api.html
    
    @remarks this represents a made instance of PlotAxes
    """
    
    axis: Optional[Union[Array[float],str]]=None
    """
    Set axis properties.
    
    Python: list of float or {'on', 'off', 'equal', 'tight', 'scaled', 'normal', 'auto', 'image', 'square'}
    
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.axis.html
    
    enum('on', 'off', 'equal', 'tight', 'scaled', 'normal', 'auto', 'image', 'square')
    """

    frameOn: Optional[bool]=None
    """
    Set whether the axes rectangle patch is drawn.
    (matplotlib Axes.set_frame_on)
    
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.set_frame_on.html
    """

    axisBelow: Optional[Union[bool,str]]=None
    """
    Set whether axis ticks and gridlines are above or below most artists.
    (matplotlib Axes.set_axisbelow)
    
    Python: bool or 'line'
    
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.set_axisbelow.html
    
    enum('line')
    """

    faceColor: Optional[str]=None
    """
    Set the Axes facecolor.
    (matplotlib Axes.set_facecolor)
    
    Python: color
    
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.set_facecolor.html
    """

    invertXAxis: Optional[bool]=None
    """
    Invert the x-axis.
    (matplotlib Axes.invert_xaxis)
    
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.invert_xaxis.html
    """

    invertYAxis: Optional[bool]=None
    """
    Invert the y-axis.
    (matplotlib Axes.invert_yaxis)
    
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.invert_yaxis.html
    """

    xLim: Optional[Any]=None
    """
    Set the data limits for the x-axis
    (matplotlib Axes.set_xlim)
    
    Python: scalar
    
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.set_xlim.html
    """

    yLim: Optional[Any]=None
    """
    Set the data limits for the y-axis
    (matplotlib Axes.set_ylim)
    
    Python: scalar
    
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.set_ylim.html
    """

    xLabel: Optional[str]=None
    """
    Set the label for the x-axis.
    (matplotlib Axes.set_xlabel)
    
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.set_xlabel.html
    """

    yLabel: Optional[str]=None
    """
    Set the label for the y-axis.
    (matplotlib Axes.set_ylabel)
    
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.set_ylabel.html
    """

    title: Optional[str]=None
    """
    Set a title for the axes.
    (matplotlib Axes.set_title)
    
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.set_title.html
    """

    legend: Optional[any]=None
    """
    Places a legend on the axes.
    
    Options object:
     - *handles* A list of Artists (lines, patches) to be added to the legend. Use this together with labels, if you need full control on what is shown in the legend and the automatic mechanism described above is not sufficient.
     - *labels* A list of labels to show next to the artists. Use this together with handles, if you need full control on what is shown in the legend and the automatic mechanism described above is not sufficient.
     - *loc* The location of the legend. Possible codes are:
     - *bboxToAnchor* Specify any arbitrary location for the legend in bbox_transform coordinates (default Axes coordinates).
     - *nCol* The number of columns that the legend has. Default is 1.
     - *prop* The font properties of the legend. If None (default), the current matplotlib.rcParams will be used.
     - *fontSize* Controls the font size of the legend. If the value is numeric the size will be the absolute font size in points. String values are relative to the current default font size. This argument is only used if prop is not specified.
     - *numPoints* The number of marker points in the legend when creating a legend entry for a Line2D (line). Default is None, which will take the value from rcParams["legend.numpoints"].
     - *scatterPoints* The number of marker points in the legend when creating a legend entry for a PathCollection (scatter plot). Default is None, which will take the value from rcParams["legend.scatterpoints"].
     - *scatterYOffsets* The vertical offset (relative to the font size) for the markers created for a scatter plot legend entry. 0.0 is at the base the legend text, and 1.0 is at the top. To draw all markers at the same height, set to [0.5]. Default is [0.375, 0.5, 0.3125].
     - *markerScale* The relative size of legend markers compared with the originally drawn ones. Default is None, which will take the value from rcParams["legend.markerscale"].
     - *markerFirst* If True, legend marker is placed to the left of the legend label. If False, legend marker is placed to the right of the legend label. Default is True.
     - *frameOn* Control whether the legend should be drawn on a patch (frame). Default is None, which will take the value from rcParams["legend.frameon"].
     - *fancyBox* Control whether round edges should be enabled around the FancyBboxPatch which makes up the legend's background. Default is None, which will take the value from rcParams["legend.fancybox"].
     - *shadow* Control whether to draw a shadow behind the legend. Default is None, which will take the value from rcParams["legend.shadow"].
     - *frameAlpha* Control the alpha transparency of the legend's background. Default is None, which will take the value from rcParams["legend.framealpha"]. If shadow is activated and framealpha is None, the default value is ignored.
     - *faceColor* Control the legend's background color. Default is None, which will take the value from rcParams["legend.facecolor"]. If "inherit", it will take rcParams["axes.facecolor"].
     - *edgeColor* Control the legend's background patch edge color. Default is None, which will take the value from rcParams["legend.edgecolor"] If "inherit", it will take rcParams["axes.edgecolor"].
     - *mode* If mode is set to "expand" the legend will be horizontally expanded to fill the axes area (or bbox_to_anchor if defines the legend's size).
     - *bboxTransform* The transform for the bounding box (bbox_to_anchor). For a value of None (default) the Axes' transAxes transform will be used.
     - *title* The legend's title. Default is no title (None).
     - *borderPad* The fractional whitespace inside the legend border. Measured in font-size units. Default is None, which will take the value from rcParams["legend.borderpad"].
     - *labelSpacing* The vertical space between the legend entries. Measured in font-size units. Default is None, which will take the value from rcParams["legend.labelspacing"].
     - *handleLength* The length of the legend handles. Measured in font-size units. Default is None, which will take the value from rcParams["legend.handlelength"].
     - *handleTextPad* The pad between the legend handle and text. Measured in font-size units. Default is None, which will take the value from rcParams["legend.handletextpad"].
     - *borderAxesPad* The pad between the axes and legend border. Measured in font-size units. Default is None, which will take the value from rcParams["legend.borderaxespad"].
     - *columnSpacing* The spacing between columns. Measured in font-size units. Default is None, which will take the value from rcParams["legend.columnspacing"].
     - *handlerMap* The custom dictionary mapping instances or types to a legend handler. This handler_map updates the default handler map found at matplotlib.legend.Legend.get_legend_handler_map().
    
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.legend.html
    """

    xScale: Optional[str]=None
    """
    Set the x-axis scale.
    (matplotlib Axes.set_xscale)
    
    Python: {"linear", "log", "symlog", "logit"}
    
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.set_xscale.html
    """

    yScale: Optional[str]=None
    """
    Set the y-axis scale.
    (matplotlib Axes.set_yscale)
    
    Python: {"linear", "log", "symlog", "logit"}
    
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.set_yscale.html
    """

    xMargin: Optional[float]=None
    """
    Set padding of X data limits prior to autoscaling.
    (matplotlib Axes.set_xmargin)
    
    Python: float greater than -0.5
    
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.set_xmargin.html
    """

    yMargin: Optional[float]=None
    """
    Set padding of Y data limits prior to autoscaling.
    (matplotlib Axes.set_ymargin)
    
    Python: float greater than -0.5
    
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.set_ymargin.html
    """

    autoScaleOn: Optional[bool]=None
    """
    Set whether autoscaling is applied on plot commands
    (matplotlib Axes.set_autoscale_on)
    
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.set_autoscale_on.html
    """

    autoScaleXOn: Optional[bool]=None
    """
    Set whether autoscaling for the x-axis is applied on plot commands
    (matplotlib Axes.set_autoscalex_on)
    
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.set_autoscalex_on.html
    """

    autoScaleYOn: Optional[bool]=None
    """
    Set whether autoscaling for the y-axis is applied on plot commands
    (matplotlib Axes.set_autoscaley_on)
    
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.set_autoscaley_on.html
    """

    aspect: Optional[Any]=None
    """
    Set the aspect of the axis scaling, i.e.
    (matplotlib Axes.set_aspect)
    
    Python: ['auto' | 'equal'] or num
    
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.set_aspect.html
    """

    adjustable: Optional[str]=None
    """
    Define which parameter the Axes will change to achieve a given aspect.
    (matplotlib Axes.set_adjustable)
    
    Python: ['box' | 'datalim']
    
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.set_adjustable.html
    """

    elements: Optional[Array[PlotElementSpec]]=None
    """
    The plot elements to appear on this chart.
    """
    def __init__(self, axis: Optional[Union[Array[float],str]]=None, frameOn: Optional[bool]=None, axisBelow: Optional[Union[bool,str]]=None, faceColor: Optional[str]=None, invertXAxis: Optional[bool]=None, invertYAxis: Optional[bool]=None, xLim: Optional[Any]=None, yLim: Optional[Any]=None, xLabel: Optional[str]=None, yLabel: Optional[str]=None, title: Optional[str]=None, legend: Optional[any]=None, xScale: Optional[str]=None, yScale: Optional[str]=None, xMargin: Optional[float]=None, yMargin: Optional[float]=None, autoScaleOn: Optional[bool]=None, autoScaleXOn: Optional[bool]=None, autoScaleYOn: Optional[bool]=None, aspect: Optional[Any]=None, adjustable: Optional[str]=None, elements: Optional[Array[PlotElementSpec]]=None) -> None: ...

    @overload
    def toJson(self) -> any:
    """
    Convert the internal object representation to a JSON object.
    
    @return JSON object representation
    
    @see #fromJson
    """
        ...
    @overload
    def toJson(self, include: str=None, exclude: str=None) -> any:
        ...
    @overload
    def toJson(self, include: Include=None, exclude: Exclude=None) -> any:
        ...
    @overload
    def toTypedJson(self, omitTopLevelType: bool=None, actionRequirement: str=None) -> any:
    """
    Convert the internal object representation to a _typed_ JSON object.
    @param omitTopLevelType
           Whether to leave out `type: {{ type of this serializable instance }}` as the **first** key-value pair in
           the outer level of the produced json.
    @param runtime
           If provided, then any special serialization logic required for the {@link ImplLanguage.Runtime} will be
           performed. **NOTE** This argument is ignored if `typed` is not `true`. @see Ann.Ser
    
    
    @return JSON object representation
    
    @see #fromJson
    @see #toJson
    @see serdeser.c3doc
    @see JsonType
    """
        ...
    @overload
    def toTypedJson(self, include: str=None, exclude: str=None) -> any:
        ...
    @overload
    def toTypedJson(self, include: Include=None, exclude: Exclude=None) -> any:
        ...
    @overload
    def toJsonString(self) -> str:
        ...
    @overload
    def toJsonString(self, pretty: bool) -> str:
    """
    Convert the internal object representation to a serialized JSON string.
    
    @return JSON object as string
    """
        ...
    @overload
    def toTypedJsonString(self) -> str:
        ...
    @overload
    def toTypedJsonString(self, pretty: bool=None, omitTopLevelType: bool=None) -> str:
        ...
    @overload
    def toJsString(self) -> str:
        ...
    @overload
    def toJsString(self, withType: bool) -> str:
    """
    Convert the internal object representation to a serialized JavaScript object literal.
    
    @return JavaScript object literal string
    """
        ...
    @overload
    def toXmlString(self) -> str:
        ...
    @overload
    def toXmlString(self, withType: bool) -> str:
    """
    Convert the internal object representation to a serialized XML string.
    
    @return XML element as string
    
    @see #fromXmlString
    """
        ...
    def serialize(self, contentType: str, toUntyped: bool=None) -> Union[str]:
    """
    Convert the internal object representation to a string serialized representation of the object.
    
    @return string serialized object representation
    """
        ...
    @classmethod
    def fromJson(cls, json: any) -> Union[PlotAxes]:
    """
    Load the JSON-based representation and reconstruct the corresponding object.
    
    fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
    a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
    called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
    an instance of the correct type.
    
    @see #toJson
    """
        ...
    @classmethod
    def fromJsonString(cls, json: str) -> Union[PlotAxes]:
    """
    Load the JSON-based representation and reconstruct the corresponding object.
    
    fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
    a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
    called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
    an instance of the correct type.
    
    @see #toJsonString
    """
        ...
    @classmethod
    def fromXmlString(cls, xml: str) -> Union[PlotAxes]:
    """
    Load the XML-based representation and reconstruct the corresponding object.
    
    fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
    may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
    isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
    will return an instance of the correct type.
    
    @see #toXmlString
    """
        ...
    @classmethod
    def deserialize(cls, contentStr: str, contentType: str) -> Union[PlotAxes]:
    """
    Load from contentType representation and reconstruct the corresponding object.
    
    fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
    (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
    will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
    type and will return an instance of the correct type.
    """
        ...
    def fingerprint(self, allIdentifiedRefFields: bool=None, trackRecursiveRefs: bool=None, traversedRefs: SetBuilder[Obj]=None) -> int:
    """
    Produce a checksum that can easily be compared to determine if two objects are definitely different. Note that
    there is a slight possibility that two objects with the same fingerprint will actually differ.
    
    The fingerprint recurses into field values, including collections and referenced Objs. The handling of nested
    {@link Identified identified} references (typically entities) differ in that _only_ the `id` field is included
    unless the allIdentifiedRefFields option is specified.
    
    If the object graph may contain recursive embedded object references, the trackRecursiveRefs option may be used.
    However, maintaining the list of visited objects is costly so this should not be done unnecessarily.
    
    @param allIdentifiedRefFields
              if `true`, fingerprint individual fields of persistable references, not just the `id`
    @param trackRecursiveRefs
              if `true`, a set of referenced objects is maintained to avoid infinite recursion
    @param traversedRefs
              only considered together with trackRecursiveRefs and if provided then all traversed references are
              checked against and added to it
    @return integer fingerprint
    
    @see https://en.wikipedia.org/wiki/Fingerprint_(computing)
    """
        ...
    def retainedMemory(self, deep: bool=None, allMeasured: SetBuilder[Any]=None) -> int:
    """
    Measures retained memory by this instance.
    
    @param deep
           if true and this instance contains references to other objects also measures memory retained by those
    @param allMeasured
           if set then will skip instances that are in the set and will add instances that where measured by this call
    @return retained memory in bytes for this instances
    """
        ...
    def type(self) -> Type:
    """
    C3 Type of this instance.
    """
        ...
    def replaceType(self, old: Type, new: Type) -> PlotAxes:
    """
    Returns new instance with all references to old type, including result of #type, replaced with new type. If new
    type does not contain fields from old or field value types are not convertable then drops the field.
    
    This method is used during live metadata update
    """
        ...
    def super(self, mixin: Type=None) -> Any:
    """
     Produce a calling proxy that represents the content of all Obj type's mixins, but not the type itself. This is
     useful for redispatching **member** methods reimplemented on this type to a parent implementation:
     ```js
     function toString() {
       return this.super().toString() + ', x=' + this.x;
     }
     ```
    
     ```py
     def toString(this):
        return this.super().toString() + ', x=' + this.x
    ```
    
     To redispatch **static** methods, see {@link Type#super}.
    
     Note that this not the same as the language-specific `super` keyword because it works through the type system and
     supports multiple mixins. It behaves like the Python `super()` function, except called on the instance rather than
     globally.
    
     If `mixin` is the implementing type in a client implementation, this will delegate the call to the server.
     This can be used to create a local implementation "around" the server implementation for additional caching or
     other local state management.
    
     @param mixin if specified, this mixin is used instead or an error is thrown
     @return "super" calling proxy for this object
    
     @see Type.super
    """
        ...
    @overload
    def instanceOf(self, typeName: str) -> bool:
    """
    Checks whether this Obj is an instance of the specified type by checking both its type and the mixin chain.
    This is the most convenient way to ask "is this type usable in a context requiring the other type?"
    
    @return true if this instance is of this type or any of its mixins
    """
        ...
    @overload
    def instanceOf(self, type: Type) -> bool:
    """
    Checks whether this instance is an instance of the specified type by checking both its type and the mixin chain.
    This is the most convenient way to ask "is this type usable in a context requiring the other type?"
    
    @return true if this instance is of this type or any of its mixins
    
    @see ValueType#isA
    """
        ...
    def isEmptyObj(self) -> bool:
    """
    Whether all the fields of this instance are empty.
    """
        ...
    def isSame(self, other: Obj) -> bool:
    """
    Whether the specified instance represents exactly the same object as this instance.
    """
        ...
    @overload
    def isFieldSet(self, field: str) -> bool:
    """
     Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
     if the field value set the its default value by the constructor. A set field is never missing.
    
    @param field the field to check
    
    @return whether the specified field is set
    """
        ...
    @overload
    def isFieldSet(self, field: FieldType) -> bool:
    """
     Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
     if the field value set the its default value by the constructor. A set field is never missing.
    
    @param field the field to check
    
    @return whether the specified field is set
    """
        ...
    @overload
    def isFieldMissing(self, field: str) -> bool:
    """
     Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
     should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
    {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
    A missing field is never set.
    
    @param field the field to check
    
    @return whether the specified field is missing
    """
        ...
    @overload
    def isFieldMissing(self, field: FieldType) -> bool:
    """
     Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
     should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
    {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
    A missing field is never set.
    
    @param field the field to check
    
    @return whether the specified field is missing
    """
        ...
    @overload
    def fieldValue(self, field: str, defaultToEmpty: bool=None) -> Union[T]:
    """
    Returns value of the given field.
    
    @param field
              Field to return the value for
           defaultToEmpty
              will return default empty value if field is missing
    """
        ...
    @overload
    def fieldValue(self, field: FieldType, defaultToEmpty: bool=None) -> Union[T]:
    """
    Returns value of the given field type. Be sure to use the FieldType instance for the exact same type as the type of
    the obj.
    
    @param field
              Field to return the value for
           defaultToEmpty
              will return default empty value if field is missing
    @return value for the given field
    """
        ...
    def fieldValues(self) -> Union[Array[FieldValue]]:
    """
    Returns all non empty field values. Note that it is recommended to use #eachFieldValue instead
    """
        ...
    def fieldValuesByOrdinal(self, skipTrailingEmpty: bool=None) -> Union[Array[Any]]:
    """
    Returns all field values including empty ones as array where value of a field is at corresponding ordinal position.
    Unless `skipTrailingEmpty` parameter is set and there are trailing empty values resulting array has same size as
    #dataFieldTypes
    """
        ...
    def fieldValuesByFieldType(self) -> Union[Map[FieldType, Any]]:
    """
    Returns all non empty field values by field type. Note that it is recommended to use #eachFieldValue instead
    """
        ...
    def fieldValuesByFieldName(self) -> Union[Map[str, Any]]:
    """
    Returns all non empty field values by field name. Note that it is recommended to use #eachFieldValue instead
    """
        ...
    def fieldNames(self) -> Union[Array[str]]:
    """
    Returns all data field names including those whose values are empty. Array is ordered by
    field ordinal.
    """
        ...
    def unsetFieldNames(self) -> Union[Array[str]]:
    """
    @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@link #isFieldSet are not set}. Array is ordered by
    field ordinal.
    """
        ...
    def missingFieldNames(self) -> Union[Array[str]]:
    """
    @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@Link isFieldMissing are missing}. Array is ordered by
    field ordinal.
    """
        ...
    @overload
    def at(self, ordinal: int) -> Union[T]:
    """
    Return value of the field at provided ordinal. Throws an error on an invalid value (out of range).
    
    @param ordinal
            Integer ordinal of the field in the parent type
    @return value of field at ordinal
    """
        ...
    @overload
    def at(self, expr: str, failIfNotValid: bool=None) -> Union[T]:
    """
    Return value for the given serialized expression
    
    @param expr
            Serialized expression to obtain the value in the given Obj
    @param failIfNotValid
            If set, fails if not a valid expression
    @return value obtained as a result of expression evaluation
    """
        ...
    def fieldValueAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[T]:
    """
    Looks up a single field value by path from this Obj. Field paths are separated by dots so an expression like
    `fieldValueAtPath("location.elevation")` is equivalent to `traverse("location").fieldValue("elevation")` except
    that it also handles `null`. If path contains any collections then only first element will be traversed,
    unless the collection index is specified in the path.
    
    If you need to traverse all elements of collection fields use #fieldValuesAtPath instead.
    
    @param fieldPath
              field names separated by dots
    @param failIfNotFound
              if true, an error will be thrown if the any of the field types aren't defined
    @param context
              if an error is thrown, the context returned by calling the lambda will be incorporated
    @return the field or null
    """
        ...
    def fieldValuesAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[Array[T]]:
    """
    Looks up all the fields by path from root Obj. If path contains any collections then result will contain all
    traversals, unless the collection index is specified in the path.
    
    @param fieldPath
              field names separated by dots
    @param failIfNotFound
              if true, an error will be thrown if the any of the field types aren't defined
    @param context
              if an error is thrown, the context returned by calling the lambda will be incorporated
    @return fields as a flat list
    
    @see #fieldValueAtPath
    """
        ...
    @overload
    def eachFieldValue(self, action: Callable[[FieldType, Any]]) -> None:
    """
    Perform an action for each non-empty field of this object.
    
    @param action
              lambda to apply
    """
        ...
    @overload
    def eachFieldValue(self, spec: ValueSpec, action: Callable[[FieldType, Any]]) -> None:
    """
    Perform an action for each non-empty field of this object. Fields are filtered based on provided `spec`.
    
    @param spec
              which fields to include
    @param action
              lambda to apply
    """
        ...
    def eachSetFieldValue(self, action: Callable[[FieldType, Union[Any]]]) -> None:
    """
    Perform an action for each {@link isFieldSet set} field of this object.
    
    @param action
              lambda to apply
    """
        ...
    def eachFieldValueWhile(self, spec: ValueSpec, action: Callable[[FieldType, Any], bool]) -> bool:
    """
    Perform an action for each field of this object while processing action returns `true`. Fields are filtered based
    on provided `spec`.
    
    @param spec
              which fields to include
    @param action
              lambda to apply; stop if this `action` returns `false
    @return `true` if iteration was not aborted by lambda i.e. it saw all field values
    """
        ...
    @overload
    def eachRef(self, action: Callable[[FieldType, Obj]]) -> None:
    """
    Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
    the field value if non-null and for collections of Obj, this means each element in the collection.
    
    @param action
              function to be executed for each pair of field type and Obj instance
    """
        ...
    @overload
    def eachRef(self, includeEmpty: bool, action: Callable[[FieldType, Obj]]) -> None:
    """
    Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
    the field value if non-null and for collections of Obj, this means each element in the collection.
    
    @param includeEmpty
              if `true` will also process references with `null` / "Empty" references
    @param action
              function to be executed for each pair of field type and Obj instance
    """
        ...
    def eachRefWhile(self, includeEmpty: bool, action: Callable[[FieldType, Obj], bool]) -> bool:
    """
    Execute the specified lambda against each referenced Obj instance in this type while processing action returns
    `true`.
    
    @param includeEmpty
              if `true` will also process references with `null` / "Empty" references
    @param action
              function to be executed for each pair of field type and Obj instance; stops processing if return `false`
    @return `true` if iteration was not aborted by lambda i.e. it saw all refs
    """
        ...
    def eachRefRecursive(self, includeEmpty: bool, action: Callable[[FieldPath, Obj]]) -> None:
    """
    Execute the specified lambda against each referenced Obj instance in this type or in any child refs.
    """
        ...
    def eachRefRecursiveWhile(self, includeEmpty: bool, action: Callable[[FieldPath, Obj], bool]) -> bool:
    """
    Execute the specified lambda against each referenced Obj instance in this type or in any child refs. Continue while
    processing action returns `true`.
    """
        ...
    @overload
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> PlotAxes:
    """
    Result of this function call is a copy of current instance with all non empty fields replaced based on results of
    the `mapper` invocation.
    
    @param action
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> PlotAxes:
    """
    Result of this function call is a copy of current instance with all fields replaced based on results of the
    `mapper` invocation.
    
    @param spec
              which fields to include
    @param mapper
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[PlotAxes]:
    """
    Result of this function call is a copy of current instance with all non empty fields replaced based on results of
    the asynchronous `mapper` invocation.
    
    @param action
              lambda to apply for every field value to produce a new value for that fields
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[PlotAxes]:
    """
    Result of this function call is a copy of current instance with all fields replaced based on results of the
    asynchronous `mapper` invocation.
    
    @param spec
              which fields to include
    @param mapper
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> PlotAxes:
    """
    Result of this function call is a copy of current instance with specified field value replaced based on result of
    the `mapper` invocation.
    @param field
              field being mapped
    @param includeEmpty
              if set, invokes mapper for fields with empty value
    @param mapper
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> PlotAxes:
    """
    Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
    lambda application.
    
    Result of this function call is a copy of current instance with all references replaced based on results of the
    `mapper` invocation.
    
    @param action
              function to be executed for each pair of field type and Obj instance
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> PlotAxes:
    """
    Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
    lambda application.
    
    Result of this function call is a copy of current instance with all references replaced based on results of the
    `mapper` invocation.
    
    @param includeEmpty
              if `true` will also process references with `null` / "Empty" references
    @param mapper
              function to be executed for each pair of field type and Obj instance for producing new reference value
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]]) -> Union[T]:
    """
    Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
    argument is a result of previous application. Initial value of `accumulator` will be `null`.
    
    This function is useful for calculating aggregate values based on all current non empty field values.
    Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
    e.g
    ```
    o = {a:1, b:2, c:0}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
    
    o = {a: {x:1, y:2}, b: {x:10, z:2}}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
    ```
    """
        ...
    @overload
    def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
    """
    Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
    argument is a result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
    
    This function is useful for calculating aggregate values based on all current non empty field values.
    Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
    e.g
    ```
    o = {a:1, b:2, c:0}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
    
    o = {a: {x:1, y:2}, b: {x:10, z:2}}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
    ```
    """
        ...
    @overload
    def foldFieldValues(self, spec: ValueSpec, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
    """
    Result of this function is application of `folder` lambda to every field value where `accumulator` argument is a
    result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
    
    This function is useful for calculating aggregate values based on all field values.
    Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
    e.g
    ```
    o = {a:1, b:2, c:0}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
    
    o = {a: {x:1, y:2}, b: {x:10, z:2}}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
    ```
    """
        ...
    @overload
    def evalProjection(self, projection: str, resultType: ValueType=None, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Any]:
    """
    Evaluates given projection expression over this instance.
    """
        ...
    @overload
    def evalProjection(self, projection: any, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[any]:
    """
    Evaluates given projection over this instance and returns results as json.
    """
        ...
    @overload
    def evalProjection(self, projection: any, resultType: Type, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Obj]:
    """
    Evaluates given projection over this instance and returns results as instance of the new Obj.
    """
        ...
    @overload
    def validateObj(self) -> PlotAxes:
    """
    Populates all missing default values and throws error if any constraint is violated.
    """
        ...
    @overload
    def validateObj(self, spec: ValidateObjSpec) -> ValidateObjResult:
    """
    Validate that the Obj fields are set according to all the required rules.
    """
        ...
    @overload
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> PlotAxes:
    """
    Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
    defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
    
    @param field
              name of the field
    @param value
              of the field
    @param doNotConvert
              if true, do not attempt to convert the value to match the field's type
    @return new Obj
    
    @see #withoutField
    @see #defaultField
    """
        ...
    @overload
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> PlotAxes:
    """
    Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
    defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
    
    @param field
              the field
    @param value
              of the field
    @param doNotConvert
              if true, do not attempt to convert the value to match the field's type
    @return new Obj
    
    @see #withoutField
    @see #defaultField
    """
        ...
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> PlotAxes:
    """
    Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
    defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
    
    @param fields
              map of field names/values
    @param doNotConvert
              if true, attempt to convert the values to match the fields' type
    @return new Obj
    """
        ...
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> PlotAxes:
    """
    Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
    If you would like to #unsetField, you should call #withoutFieldAtPath instead.
    
    Immutable objects may return the same instance if the field being set does not actually represent a
    change to the existing object.
    
    @param path
              path to set value at
    @param value
              value to set
    @param doNotConvert
              if true, attempt to convert the values to match the fields' type
    @param doNotCreateIfMissing
              true indicates that any empty reference along the path will not set the value
    @return new Obj
    """
        ...
    def withoutFieldAtPath(self, path: str) -> PlotAxes:
    """
    Builds a new Obj without the specified path field.
    
    Immutable objects may return the same instance if the field being removed does not actually represent a
    change to the existing object.
    
    @param path
              path for field to remove
    @return new Obj
    
    @see #withFieldAtPath
    @see #withoutField
    """
        ...
    @overload
    def withoutField(self, field: str) -> PlotAxes:
    """
    Builds a new Obj, removing the field with the provided name.
    
    Immutable objects may return the same instance if the field being removed is not present in the existing object.
    
    @param field
              name of the field to remove
    @return new Obj with removed field
    
    @see #unsetField
    @see #removeField
    """
        ...
    @overload
    def withoutField(self, field: FieldType) -> PlotAxes:
    """
    Builds a new Obj, removing the field with the provided field type.
    
    Immutable objects may return the same instance if the field being removed is not present in the existing object.
    
    @param field
              name of the field to remove
    @return new Obj with removed field
    
    @see #unsetField
    @see #removeField
    """
        ...
    def withoutFields(self, fields: Array[str]) -> PlotAxes:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> PlotAxes:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> PlotAxes:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> PlotAxes:
    """
    Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
    calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
    {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
    fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
    fields that have already been set.
    
    {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
    As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
    
    @param includeEmptyRefsWithDefaults
              it `true` then missing / empty child references that have fields with defaults will also be instantiated
    @param defaultFields
              If not empty, a list of default field paths to populate.  Any default fields not specified in the
              array will be ignored.
    @return new Obj
    
    @see #defaultField
    @see FieldType#defaultValueConst
    @see FieldType#defaultValue
    """
        ...
    @overload
    def defaultField(self, field: str) -> PlotAxes:
    """
    Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
    method will behave the same as {@link #unsetField}.
    
    @param field
            name of the field to default
    @return new `Obj` with the specified field set to its default value
    
    @see #withField
    @see #unsetField
    """
        ...
    @overload
    def defaultField(self, field: FieldType) -> PlotAxes:
    """
    Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
    method will behave the same as {@link #unsetField}.
    
    @param field
            field type to default
    @return new `Obj` with the specified field set to its default value
    
    @see #withField
    @see #unsetField
    """
        ...
    @overload
    def unsetField(self, field: str) -> PlotAxes:
    """
    Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
    is different from {@link removeField}
    
    @param field
            name of the field to unset
    @return new `Obj` with the specified field unset
    
    @see #withoutField
    @see #removeField
    """
        ...
    @overload
    def unsetField(self, field: FieldType) -> PlotAxes:
    """
    Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
    is different from {@link removeField}
    
    @param field
            field type to unset
    @return new `Obj` with the specified field unset
    
    @see #withoutField
    @see #removeField
    """
        ...
    @overload
    def removeField(self, field: str) -> PlotAxes:
    """
    Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
    is different from {@link #unsetField}
    
    @param field
            name of the field to remove
    @return new `Obj` with the specified field removed
    
    @see #withoutField
    @see #unsetField
    """
        ...
    @overload
    def removeField(self, field: FieldType) -> PlotAxes:
    """
    Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
    is different from {@link #unsetField}
    
    @param field
            field type to remove
    @return new `Obj` with the specified field removed
    
    @see #withoutField
    @see #unsetField
    """
        ...
    @overload
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> PlotAxes:
    """
    Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
    In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
    
    @param other
              object
    @param fieldPathMergeSpec
              mapping of fields of the object to the respective merge annotations
    @return the new merged Obj
    """
        ...
    @overload
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> PlotAxes:
    """
    Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
    In case of conflicts, fields of other instance take precedence.
    
    @param other
              object
    @param otherFieldsFilter
              only fields of otherFieldsFilter type from other are merged into this obj.
    @return the new merged Obj
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> PlotAxes:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> PlotAxes:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
    traverse child reference and collection fields.
    """
        ...
    def mergeAndExpandObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Union[R]:
    """
    Create new Obj with all non-null fields of this and other. Fields that are non null in both apply merger lambda.
    Fields that non null in only one of this and other will be in the resulting Obj without change.
    """
        ...
    def mergeJson(self, json: any) -> PlotAxes:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> PlotAxes:
    """
    Merge the obj references within the current obj
    @param deep
           If set, traverses the reference fields within the obj as well for a deep merge
    @param objKey
           lambda specifying how to obtain the key for the Obj while determining which Objs to merge
    @param filter
           Field paths that need to be filtered from this merge
    @return Obj with child references merged
    """
        ...
    def sumObj(self, other: Obj, deep: bool=None) -> PlotAxes:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[PlotAxes]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[PlotAxes]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[PlotAxes]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[PlotAxes]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[PlotAxes]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, PlotAxes]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, PlotAxes]]:
    """
    Create a map with the given key type and elements of this type.
    """
        ...
    @classmethod
    def myReferenceType(cls) -> ReferenceType:
        ...
    @classmethod
    def myMapTypeOf(cls, keyType: ValueType) -> MapType:
        ...
    @classmethod
    def myMapType(cls) -> MapType:
        ...
    @classmethod
    def myArrayType(cls) -> ArrayType:
        ...
    @classmethod
    def mySetType(cls) -> SetType:
        ...
    @classmethod
    def myStreamType(cls) -> StreamType:
        ...
    def toBuilder(self) -> ObjBuilder[PlotAxes]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[PlotAxes]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> PlotAxes:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> PlotAxes:
    """
    Construct an instance of this type from provided fields
    @param fields
               Fields to construct the instance of the obj with
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
    
    @see withDefaults
    """
        ...
    @overload
    @classmethod
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> PlotAxes:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> PlotAxes:
    """
    Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
               populated
    
    @see withDefaults
    """
        ...
    @overload
    @classmethod
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> PlotAxes:
    """
    Construct an instance from provided fields
    @param fields
               Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
               field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
               to Panda.make()
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
               -> 0) populated. Passing an empty value for a field will result in the initial value being set if
               the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
    
    
    @see fromFields
    @see beforeMake
    @see afterMake
    @see withDefaults
    """
        ...
    @overload
    @classmethod
    def make(cls, fields: Any, withDefaults: bool=None) -> PlotAxes:
    """
    Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
    
    ```js
    User.make({
      email: 'joe@smith.com',
      realName: 'Joe Smith'
    })
    
    Obj.make({
      type: 'User',
      email: 'joe@smith.com',
      realName: 'Joe Smith'
    })
    ```
    
    ```py
    c3.User.make({
      "email": 'joe@smith.com',
      "realName": 'Joe Smith'
    })
    
    c3.Obj.make({
      "type": 'User',
      "email": 'joe@smith.com',
      "realName": 'Joe Smith'
    })
    
    c3.User(email='joe@smith.com', realName='Joe Smith')
    
    c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
    ```
    
    Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
    specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
    such as {@link Ann.Ser} do not apply.
    @param fields
               Fields to construct the instance of the obj with
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
    
    @see fromFields
    @see beforeMake
    @see afterMake
    @see withDefaults
    """
        ...
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> PlotAxes:
    """
    Construct an instance of this type from provided instance of a subtype or a "duck type".
    """
        ...
    def remakeAs(self, type: Type) -> O:
    """
    Creates an obj of the new type with all fields that exist on the original obj that are defined in the new type
    converted and copied to the new obj instance. Note, that checking assignability and conversion of field values
    could be costly if types have different value types for same fields.
    
    @param type
            Type of new obj to return
    @return new obj of the requested type with all fields present in the original obj that are defined in the new type
            converted and copied to it
    """
        ...
    @classmethod
    def beforeMake(cls, fields: Map[FieldType, Any]) -> Union[Map[FieldType, Any]]:
    """
    Optional override that will be called every time instance of this type is created.
    
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    def afterMake(self) -> PlotAxes:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> PlotAxes:
    """
    Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
    every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
    Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
    
    @see ValueType#defaultEmptyValue
    """
        ...
    def toData(self) -> Union[Data]:
    """
    Represent the current obj instance as {@link Data}
    """
        ...
    @classmethod
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[PlotAxes]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> PlotAxes:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    def plot(self, spec: PlotPlotSpec) -> PlotAxes:
    """
    Plot y versus x as lines and/or markers.
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotPlotSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.plot.html
    """
        ...
    def errorBar(self, spec: PlotErrorBarSpec) -> PlotAxes:
    """
    Plot y versus x as lines and/or markers with attached errorbars.
    (matplotlib Axes.errorbar)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotErrorBarSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.errorbar.html
    """
        ...
    def scatter(self, spec: PlotScatterSpec) -> PlotAxes:
    """
    A scatter plot of y vs x with varying marker size and/or color.
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotScatterSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.scatter.html
    """
        ...
    def plotDate(self, spec: PlotPlotDateSpec) -> PlotAxes:
    """
    Plot data that contains dates.
    (matplotlib Axes.plot_date)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotPlotDateSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.plot_date.html
    """
        ...
    def step(self, spec: PlotStepSpec) -> PlotAxes:
    """
    Make a step plot.
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotStepSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.step.html
    """
        ...
    def logLog(self, spec: PlotLogLogSpec) -> PlotAxes:
    """
    Make a plot with log scaling on both the x and y axis.
    (matplotlib Axes.loglog)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotLogLogSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.loglog.html
    """
        ...
    def semiLogX(self, spec: PlotSemiLogXSpec) -> PlotAxes:
    """
    Make a plot with log scaling on the x axis.
    (matplotlib Axes.semilogx)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotSemiLogXSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.semilogx.html
    """
        ...
    def semiLogY(self, spec: PlotSemiLogYSpec) -> PlotAxes:
    """
    Make a plot with log scaling on the y axis.
    (matplotlib Axes.semilogy)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotSemiLogYSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.semilogy.html
    """
        ...
    def fillBetween(self, spec: PlotFillBetweenSpec) -> PlotAxes:
    """
    Fill the area between two horizontal curves.
    (matplotlib Axes.fill_between)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotFillBetweenSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.fill_between.html
    """
        ...
    def fillBetweenX(self, spec: PlotFillBetweenXSpec) -> PlotAxes:
    """
    Fill the area between two vertical curves.
    (matplotlib Axes.fill_betweenx)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotFillBetweenXSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.fill_betweenx.html
    """
        ...
    def bar(self, spec: PlotBarSpec) -> PlotAxes:
    """
    Make a bar plot.
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotBarSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.bar.html
    """
        ...
    def barH(self, spec: PlotBarHSpec) -> PlotAxes:
    """
    Make a horizontal bar plot.
    (matplotlib Axes.barh)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotBarHSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.barh.html
    """
        ...
    def stem(self, spec: PlotStemSpec) -> PlotAxes:
    """
    Create a stem plot.
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotStemSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.stem.html
    """
        ...
    def eventPlot(self, spec: PlotEventPlotSpec) -> PlotAxes:
    """
    Plot identical parallel lines at the given positions.
    (matplotlib Axes.eventplot)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotEventPlotSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.eventplot.html
    """
        ...
    def pie(self, spec: PlotPieSpec) -> PlotAxes:
    """
    Plot a pie chart.
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotPieSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.pie.html
    """
        ...
    def stackPlot(self, spec: PlotStackPlotSpec) -> PlotAxes:
    """
    Draws a stacked area plot.
    (matplotlib Axes.stackplot)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotStackPlotSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.stackplot.html
    """
        ...
    def brokenBarH(self, spec: PlotBrokenBarHSpec) -> PlotAxes:
    """
    Plot a horizontal sequence of rectangles.
    (matplotlib Axes.broken_barh)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotBrokenBarHSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.broken_barh.html
    """
        ...
    def vLines(self, spec: PlotVLinesSpec) -> PlotAxes:
    """
    Plot vertical lines.
    (matplotlib Axes.vlines)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotVLinesSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.vlines.html
    """
        ...
    def hLines(self, spec: PlotHLinesSpec) -> PlotAxes:
    """
    Plot horizontal lines at each y from xmin to xmax.
    (matplotlib Axes.hlines)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotHLinesSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.hlines.html
    """
        ...
    def fill(self, spec: PlotFillSpec) -> PlotAxes:
    """
    Plot filled polygons.
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotFillSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.fill.html
    """
        ...
    def axhLine(self, spec: PlotAxhLineSpec) -> PlotAxes:
    """
    Add a horizontal line across the axis.
    (matplotlib Axes.axhline)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotAxhLineSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.axhline.html
    """
        ...
    def axhSpan(self, spec: PlotAxhSpanSpec) -> PlotAxes:
    """
    Add a horizontal span (rectangle) across the axis.
    (matplotlib Axes.axhspan)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotAxhSpanSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.axhspan.html
    """
        ...
    def axvLine(self, spec: PlotAxvLineSpec) -> PlotAxes:
    """
    Add a vertical line across the axes.
    (matplotlib Axes.axvline)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotAxvLineSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.axvline.html
    """
        ...
    def axvSpan(self, spec: PlotAxvSpanSpec) -> PlotAxes:
    """
    Add a vertical span (rectangle) across the axes.
    (matplotlib Axes.axvspan)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotAxvSpanSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.axvspan.html
    """
        ...
    def aCorr(self, spec: PlotACorrSpec) -> PlotAxes:
    """
    Plot the autocorrelation of x.
    (matplotlib Axes.acorr)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotACorrSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.acorr.html
    """
        ...
    def angleSpectrum(self, spec: PlotAngleSpectrumSpec) -> PlotAxes:
    """
    Plot the angle spectrum.
    (matplotlib Axes.angle_spectrum)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotAngleSpectrumSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.angle_spectrum.html
    """
        ...
    def cohere(self, spec: PlotCohereSpec) -> PlotAxes:
    """
    Plot the coherence between x and y.
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotCohereSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.cohere.html
    """
        ...
    def csd(self, spec: PlotCsdSpec) -> PlotAxes:
    """
    Plot the cross-spectral density.
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotCsdSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.csd.html
    """
        ...
    def magnitudeSpectrum(self, spec: PlotMagnitudeSpectrumSpec) -> PlotAxes:
    """
    Plot the magnitude spectrum.
    (matplotlib Axes.magnitude_spectrum)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotMagnitudeSpectrumSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.magnitude_spectrum.html
    """
        ...
    def phaseSpectrum(self, spec: PlotPhaseSpectrumSpec) -> PlotAxes:
    """
    Plot the phase spectrum.
    (matplotlib Axes.phase_spectrum)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotPhaseSpectrumSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.phase_spectrum.html
    """
        ...
    def psd(self, spec: PlotPsdSpec) -> PlotAxes:
    """
    Plot the power spectral density.
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotPsdSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.psd.html
    """
        ...
    def specgram(self, spec: PlotSpecgramSpec) -> PlotAxes:
    """
    Plot a spectrogram.
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotSpecgramSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.specgram.html
    """
        ...
    def xCorr(self, spec: PlotXCorrSpec) -> PlotAxes:
    """
    Plot the cross correlation between x and y.
    (matplotlib Axes.xcorr)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotXCorrSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.xcorr.html
    """
        ...
    def boxPlot(self, spec: PlotBoxPlotSpec) -> PlotAxes:
    """
    Make a box and whisker plot.
    (matplotlib Axes.boxplot)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotBoxPlotSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.boxplot.html
    """
        ...
    def violinPlot(self, spec: PlotViolinPlotSpec) -> PlotAxes:
    """
    Make a violin plot.
    (matplotlib Axes.violinplot)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotViolinPlotSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.violinplot.html
    """
        ...
    def violin(self, spec: PlotViolinSpec) -> PlotAxes:
    """
    Drawing function for violin plots.
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotViolinSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.violin.html
    """
        ...
    def bxp(self, spec: PlotBxpSpec) -> PlotAxes:
    """
    Drawing function for box and whisker plots.
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotBxpSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.bxp.html
    """
        ...
    def hexBin(self, spec: PlotHexBinSpec) -> PlotAxes:
    """
    Make a hexagonal binning plot.
    (matplotlib Axes.hexbin)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotHexBinSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.hexbin.html
    """
        ...
    def hist(self, spec: PlotHistSpec) -> PlotAxes:
    """
    Plot a histogram.
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotHistSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.hist.html
    """
        ...
    def hist2d(self, spec: PlotHist2dSpec) -> PlotAxes:
    """
    Make a 2D histogram plot.
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotHist2dSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.hist2d.html
    """
        ...
    def cLabel(self, spec: PlotCLabelSpec) -> PlotAxes:
    """
    Label a contour plot.
    (matplotlib Axes.clabel)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotCLabelSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.clabel.html
    """
        ...
    def contour(self, spec: PlotContourSpec) -> PlotAxes:
    """
    Plot contours.
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotContourSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.contour.html
    """
        ...
    def contourF(self, spec: PlotContourFSpec) -> PlotAxes:
    """
    Plot contours.
    (matplotlib Axes.contourf)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotContourFSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.contourf.html
    """
        ...
    def matShow(self, spec: PlotMatShowSpec) -> PlotAxes:
    """
    Plot the values of a 2D matrix or array as color-coded image.
    (matplotlib Axes.matshow)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotMatShowSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.matshow.html
    """
        ...
    def pColor(self, spec: PlotPColorSpec) -> PlotAxes:
    """
    Create a pseudocolor plot with a non-regular rectangular grid.
    (matplotlib Axes.pcolor)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotPColorSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.pcolor.html
    """
        ...
    def pColorFast(self, spec: PlotPColorFastSpec) -> PlotAxes:
    """
    Create a pseudocolor plot with a non-regular rectangular grid.
    (matplotlib Axes.pcolorfast)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotPColorFastSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.pcolorfast.html
    """
        ...
    def pColorMesh(self, spec: PlotPColorMeshSpec) -> PlotAxes:
    """
    Create a pseudocolor plot with a non-regular rectangular grid.
    (matplotlib Axes.pcolormesh)
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotPColorMeshSpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.pcolormesh.html
    """
        ...
    def spy(self, spec: PlotSpySpec) -> PlotAxes:
    """
    Plot the sparsity pattern on a 2-D array.
    
    @param spec inputs to plot element
    @return new Axes instance with added element
    
    @see PlotSpySpec
    @see https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.spy.html
    """
        ...
    def show(self) -> None:
    """
    Create a figure around this single axes and call show on it.
    """
        ...
    def image(self) -> Content:
    """
    Create a figure around this single axes and call image on it.
    """
        ...

