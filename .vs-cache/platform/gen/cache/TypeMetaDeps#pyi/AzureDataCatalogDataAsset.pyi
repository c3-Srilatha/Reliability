#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.AzureDataCatalogRegistrationStats import AzureDataCatalogRegistrationStats
from c3.platform.AzureDataCatalogSearchResults import AzureDataCatalogSearchResults

# Python definitions for the C3 type AzureDataCatalogDataAsset


class AzureDataCatalogDataAsset(Value):
    """
    Azure Data Catalog REST API proxy and C3 IoT helper methods
    
    @remarks this represents a made instance of AzureDataCatalogDataAsset
    """
    def __init__(self) -> None: ...

    @classmethod
    def searchCatalog(cls, searchTerms: str, facets: str=None, startPage: int=None, returnItemCount: int=None) -> Union[AzureDataCatalogSearchResults]:
    """
    Searches over data assets based on the search terms provided.  Uses ADC configuration to populate some parameters.  Checks and
    renews OAuth token if necessary.
    Example: AzureDataCatalog.searchCatalog("*", null, 1, 10)
    @param searchTerms - Terms to search on
    @param facets - A comma separated field names to facet the results on.
    @param startPage - Start Page of the results used for pagination. Must be a value greater than 0.
    @param returnItemCount - Optional. Number of results wanted in one page (Paging).
    @return AzureDataCatalogSearchResults
    """
        ...
    @classmethod
    def createAssetFromType(cls, typeName: Array[str], catalog: str) -> Union[AzureDataCatalogRegistrationStats]:
    """
    Create an Azure Data Catalog asset for each type specified.
    @param typeName - Array of types to be published to Azure Data Catalog
    @param catalog - Azure Data Catalog to publish to
    @param azureAPIVersion - Azure Data Catalog API version
    """
        ...
    @classmethod
    def deleteAsset(cls, catalogName: str, viewName: str, viewItemId: str) -> bool:
    """
    Deletes an asset from the specified Azure Data Catalog.  Invokes the Azure Data Catalog REST API.
    @param catalogName - Array of types to be published to Azure Data Catalog
    @param viewName - Name of the data asset view
    @param viewItemId - id of a view item
    @param api-version - Azure Data Catalog API version
    @returns HttpResponse
    """
        ...

