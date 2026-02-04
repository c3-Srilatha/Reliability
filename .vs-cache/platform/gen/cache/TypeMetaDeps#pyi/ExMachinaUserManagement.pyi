#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.FetchSpec import FetchSpec
from c3.platform.UserFields import UserFields
from c3.platform.ExMachinaMemorySize import ExMachinaMemorySize
from c3.platform.FetchResult import FetchResult
from c3.platform.Config import Config
from c3.platform.ExMachinaApprovalValidationResponse import ExMachinaApprovalValidationResponse
from c3.platform.FetchResult import FetchResult
from c3.platform.Mail import Mail

# Python definitions for the C3 type ExMachinaUserManagement


class ExMachinaUserManagement(Value):
    """
    APIs to help perform UI actions related to member management
    
    @remarks this represents a made instance of ExMachinaUserManagement
    """
    def __init__(self) -> None: ...

    @classmethod
    def updateUserMaxWorkspaceSize(cls, targetUserId: str, maxSize: ExMachinaMemorySize) -> Union[any]:
    """
    Called when an {@link ExMachinaUser}'s Max Workspace Size is updated in static console
    @param targetUserId
             The id of the user record {@link ExMachinaUser.id}
    @param maxSize
             The new max memory size {@link ExMachinaMemorySize}
    """
        ...
    @classmethod
    def updateApprovalRequest(cls, requestId: str, approved: bool=None) -> Union[ExMachinaApprovalValidationResponse]:
    """
    Updates an approval request by either approving it or declining it
    @param requestId
             The request to update
    @param approved
             Whether the request is being approved
    """
        ...
    @classmethod
    def fetchPendingApprovalRequests(cls, spec: FetchSpec=None, extendedTypeName: str=None) -> Union[FetchResult[ExMachinaApprovalRequest]]:
    """
    Takes the fetch spec passed from the grid and adds a filter to ensure only the current team's pending approval
    requests are fetched
    @param spec
             The fetch spec passed from actions taken in the grid (pagination, filter, etc.)
    @param extendedTypeName
             Despite the spec.include, the FetchResult will only include fields that are defined within the base type
             {@link ExMachinaApprovalRequest}. Provide the extendedTypeName (e.g. "ExMachinaInvitationApprovalRequest")
             to include extended type fields in the response
    @return the FetchResult<ExMachinaApprovalRequest> or FetchResult<extendedTypeName>
    """
        ...
    @classmethod
    def fetchPastApprovalRequests(cls, spec: FetchSpec=None, extendedTypeName: str=None) -> Union[FetchResult[ExMachinaApprovalRequest]]:
    """
    Takes the fetch spec passed from the grid and adds a filter to ensure only the current team's past approval
    requests are fetched
    @param spec
             The fetch spec passed from actions taken in the grid (pagination, filter, etc.)
    @param extendedTypeName
             Despite the spec.include, the FetchResult will only include fields that are defined within the base type
             {@link ExMachinaApprovalRequest}. Provide the extendedTypeName (e.g. "ExMachinaInvitationApprovalRequest")
             to include extended type fields in the response
    @return the FetchResult<ExMachinaApprovalRequest> or FetchResult<extendedTypeName>
    """
        ...
    @classmethod
    def fetchApprovalRequestsHelper(cls, spec: FetchSpec=None, pending: bool=None, extendedTypeName: str=None) -> Union[FetchResult[ExMachinaApprovalRequest]]:
    """
    Helper function used by {@link fetchPendingApprovalRequests} and {@link fetchPastApprovalRequests}.
    """
        ...
    @classmethod
    def availableMemorySizes(cls) -> Union[FetchResult[ExMachinaMemorySize]]:
    """
    Fetches the memory size options that are available for users
    @see ExMachinaUser.size
    """
        ...
    @classmethod
    def getDetails(cls, id: str=None) -> Union[any]:
    """
    Fetches info for {@link ExMachinaApprovalRequest}s
    """
        ...
    @classmethod
    def sendEmail(cls, userFields: UserFields=None, bindings: any=None, emailConfig: Config=None, templateName: str=None) -> Union[Mail]:
    """
    Generates and send the user the email
    @param userFields
             User information including given name, family name and email address
    @param bindings
             Bindings to include in the email
    @param emailConfig
             The email configuration
    @param templateName
             The email template name
    """
        ...

