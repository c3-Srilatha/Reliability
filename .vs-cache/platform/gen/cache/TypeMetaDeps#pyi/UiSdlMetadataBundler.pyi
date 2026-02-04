#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.TypeMeta import TypeMeta
from c3.platform.File import File
from c3.platform.Pkg.File import Pkg.File

# Python definitions for the C3 type UiSdlMetadataBundler


class UiSdlMetadataBundler(Value):
    """
    The type provides methods to handle metadata such as collect metadata, return a list of components given the metadata id or categorizing metadata into components and pages.
    
    @remarks this represents a made instance of UiSdlMetadataBundler
    """
    def __init__(self) -> None: ...

    @classmethod
    def partitionUiMetadata(cls, partitionBy: str='\'COMPONENT\'', deep: bool='false') -> Union[Map[str, Map[str, any]]]:
    """
    Partitions all UI component metadata by the given partition key.
    
    @param partitionBy
              The attribute to use as a partition key.
    @param deep
              Whether each partition should include transitive dependencies,
              i.e. components that are grandchildren, great-grandchildren, etc.
    
    @example
    Partition by `'PAGE'`, with `deep` set to `true`
    ```json
    {
      "MyApp.MyPage1": {
        "MyApp.MyPage1": { ... },
        "MyApp.MyComponent1": { ... },
        "MyApp.MyComponent2": { ... },
      },
      "MyApp.MyPage2": {
        "MyApp.MyPage2": { ... },
        "MyApp.MyComponent3": { ... },
      }
    }
    ```
    
    @example
    Partition by `'COMPONENT'`, with `deep` set to `false`
    ```json
    {
      "MyApp.MyPage1": {
        "MyApp.MyPage1": { ... },
        "MyApp.MyComponent1": { ... }
      },
      "MyApp.MyPage2": {
        "MyApp.MyPage2": { ... },
        "MyApp.MyComponent3": { ... }
      },
      "MyApp.Component1": {
        "MyApp.MyComponent1": { ... },
        "MyApp.MyComponent2": { ... }
      },
      "MyApp.MyComponent2": {
        "MyApp.MyComponent2": { ... }
      },
      "MyApp.MyComponent3": {
        "MyApp.MyComponent3": { ... }
      }
    }
    ```
    """
        ...
    @classmethod
    def getUiMetadata(cls) -> Union[Array[Pkg.File]]:
    """
    Generates a list of UI metadata files in the current tag in reverse remix
    order (i.e., overrides last).
    
    @return a list of UI metadata files.
    """
        ...
    @classmethod
    def uiMetadataById(cls, metadataFiles: Array[Pkg.File]=None) -> Union[Map[str, any]]:
    """
    Converts the given list of UI metadata files into a flat map where the key
    is the component id and the value is the component metadata.
    
    @params metadataFiles
               The list of UI metadata files to map.
    @return a map of UI component id to component metadata.
    """
        ...
    @classmethod
    def uiMetadataByPageId(cls, deep: bool=None, metadataFiles: Array[Pkg.File]=None, metadataById: Map[str, any]=None) -> Union[Map[str, Map[str, any]]]:
    """
    Converts the given list of UI metadata files into a two-level map where the
    top-level key is the page id and the value is another map containing all
    all the components that appear on the page (recursively if `deep` is
    `true`). For the nested maps, the keys are component ids and the values are
    component metadata. The nested map always includes the parent component.
    
    @param metadataFiles
               The source list of metadata files. If not provided, metadata
               files are retrieved from the metadata store.
    @param metadataById
               A map of component id to component metadata. If not provided,
               this map will be derived from `metadataFiles`.
    @return a map of UI page id to a map of components on the page.
    """
        ...
    @classmethod
    def uiMetadataByComponentId(cls, deep: bool=None, metadataFiles: Array[Pkg.File]=None, metadataById: Map[str, any]=None) -> Union[Map[str, Map[str, any]]]:
    """
    Converts the given list of UI metadata files into a two-level map where the
    top-level key is a component id and the value is another map containing all
    all the components that are descendants of the component (recursively if
    `deep` is `true`). For the nested maps, the keys are component ids and the
    values are component metadata. The nested map always includes the parent
    component.
    
    @param metadataFiles
               The source list of metadata files. If not provided, metadata
               files are retrieved from the metadata store.
    @param metadataById
               A map of component id to component metadata. If not provided,
               this map will be derived from `metadataFiles`.
    @return a map of UI component id to a map of nested components.
    """
        ...
    @classmethod
    def pageIdsFromUiApplications(cls, metadataFiles: Array[Pkg.File]=None) -> Union[Array[str]]:
    """
    Returns a list of UI page ids from the given list of metadata files.
    
    @param metadataFiles
              The source list of metadata files. If not provided, metadata
              files are retrieved from the metadata store.
    @return a list of UI page ids.
    """
        ...
    @classmethod
    def uiMetadataForChunkId(cls, id: str, deep: bool=None, metadataFiles: Array[Pkg.File]=None, metadataById: Map[str, any]=None) -> Union[Map[str, any]]:
    """
    Generates a map of components that appear on the given page or within the
    given component. The keys are component ids and the values are component
    metadata. The page itself will be included in the result.
    
    @param id
              The metadata id of a UI page or component, a.k.a. "chunk".
    @param deep
              Whether to include transitive descendants, i.e. components that
              are grandchildren, great-grandchildren, etc.
    @param metadataFiles
              The source list of metadata files. If not provided, metadata
              files are retrieved from the metadata store.
    @param metadataById
               A map of component id to component metadata. If not provided,
               this map will be derived from `metadataFiles`.
    @return a collection of UI components that appear on the page.
    """
        ...
    @classmethod
    def reduceUiMetadataById(cls, metadataFiles: Array[File]) -> Union[Map[str, any]]:
    """
    Helper function to reduce a list of UI metadata files to a map whose keys
    are component ids (which are equivalent to the file name without the
    extension) and whose values are the component metadata (i.e. contents of
    the metadata file). The component id will be added to the component
    metadata.
    
    @param metadataFiles
              The source list of metadata files.
    @return a map of UI component id to component metadata.
    """
        ...
    @classmethod
    def referencedComponentsForId(cls, id: str, metadataById: Map[str, any]=None, deep: bool='false') -> Union[Array[str]]:
    """
    Returns the list of components referenced by the given component.
    
    @param id
              The metadata id of the given UI component.
    @param metadataById
              Map of metadata objects by their metadata ids.
    @param deep
              If `true`, perform a recursive search.
    """
        ...
    @classmethod
    def componentRefFieldNames(cls, typeMeta: TypeMeta=None) -> Union[Array[str]]:
    """
    For the given type, returns a list of names of fields whose value type is {@link UiSdlComponentRef}.
    @return A list of names of fields.
    """
        ...
    @classmethod
    def componentRefArrayFieldNames(cls, typeMeta: TypeMeta=None) -> Union[Array[str]]:
    """
    For the given type, returns a list of names of fields whose value type is an array of {@link UiSdlComponentRef}.
    @return A list of names of fields.
    """
        ...

