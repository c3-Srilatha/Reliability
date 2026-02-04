#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ExMachinaTemplateTutorialUiConfig import ExMachinaTemplateTutorialUiConfig
from c3.platform.ExMachinaTemplateTutorialUiSubmitSpec import ExMachinaTemplateTutorialUiSubmitSpec

# Python definitions for the C3 type ExMachinaTemplateTutorialUi


class ExMachinaTemplateTutorialUi(Value):
    """
    Type for Template Tutorial Modal. It will be open when a project is created from template
    
    @remarks this represents a made instance of ExMachinaTemplateTutorialUi
    """
    def __init__(self) -> None: ...

    @classmethod
    def getByProjectId(cls, projectId: str) -> Union[ExMachinaTemplateTutorialUiConfig]:
    """
    Get the template tutorial content for the selected project if it's created from a template.
    @param projectId
             The id of the project that's created by the template
    """
        ...
    @classmethod
    def showTemplateModalByProjectId(cls, projectId: str) -> bool:
    """
    Determine whether to show the template tutorial modal for the selected project.
    The user can opt out not to view the same template tutorial again
    by clicking on the checkbox in the modal.
    @param projectId
             The id of the project that's created by the template
    """
        ...
    @classmethod
    def submit(cls, spec: ExMachinaTemplateTutorialUiSubmitSpec=None) -> bool:
    """
    Set the user preference so that the user can submit not to see the same same template tutorial again
    @param spec
             The spec that contains the doNowShowAgain field
    """
        ...
    @classmethod
    def userAlreadyOptedOutForTemplate(cls, templateId: str) -> bool:
    """
    Determine whether to show the template tutorial modal for the selected template.
    
    @param projectId
             The id of the project that's created by the template
    """
        ...

