#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.JiraQueryBase import JiraQueryBase
from c3.platform.JiraQueryBase import JiraQueryBase
from c3.platform.JiraEpic import JiraEpic
from c3.platform.JiraBoard import JiraBoard
from c3.platform.JiraQueryBase import JiraQueryBase
from c3.platform.JiraSprint import JiraSprint

# Python definitions for the C3 type JiraSoftwareMethods


class JiraSoftwareMethods(Value):
    """
    @see https://developer.atlassian.com/cloud/jira/software/rest/ for reference
    {@link JiraSoftware} is a different api with a different endpoint from {@link Jira}.
    {@link JiraSoftware} provides flexibility to edit sprints and epics that {@link Jira} does not provide
    Updated for Jira API v3 compatibility
    
    @remarks this represents a made instance of JiraSoftwareMethods
    """
    def __init__(self) -> None: ...

    @classmethod
    def sprint(cls, sprintId: int) -> Union[JiraSprint]:
    """
    Get Sprint for given id
    Sprint will only be returned if the user can view the board that the sprint was created on or
    view at least one of the issues in the sprint
    
    @param sprintId
             id of sprint.
    @returns JiraSprint
    """
        ...
    @classmethod
    def updateIssueSprint(cls, sprintId: int, issues: Array[str]) -> None:
    """
    Move an array of issues to a sprint for a given sprint Id.
    Maximum number of issues that can be moved in one operation is 50.
    
    Use this function to assign sprints to issues
    
    @param sprintId
             the given sprint id you want to assign issues to
             https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/sprint-updateSprint
    @param issues
             Array of strings of Issue id or key
    """
        ...
    @classmethod
    def allSprints(cls, boardId: int, state: str='\'active,future\'', startAt: int='0', maxResults: int='50') -> Union[JiraQueryBase[JiraSprint]]:
    """
    Get all sprints from a board for a given board id
    
    @param boardId
             id of board
    @param state
             state of the sprint. (active, closed, future); can also define multiple states separated by commas,
             eg: state=active,closed; default is `active,future`
    @param startAt
             the starting index of returned sprints. Base index: 0
    @param maxResults
             Maximum number of sprints to return per page. Default: 50
    @returns all sprints from a board for a given board id
    """
        ...
    @classmethod
    def epic(cls, epicIdOrKey: str) -> Union[JiraEpic]:
    """
    Returns epic for a given epic id. This will only be returned if the user has permission to view it.
    
    @param epicIdOrKey
             id or key of epic
    @returns JiraEpic
    """
        ...
    @classmethod
    def updateIssueEpic(cls, epicIdOrKey: str, issues: Array[str]) -> None:
    """
    Move an array of issues to an epic for a given epic Id.
    Maximum number of issues that can be moved in one operation is 50.
    
    Use this function to assign epics to issues
    
    @param epicIdOrKey
             the given epic id or key you want to assign issues to
             https://docs.atlassian.com/jira-software/REST/cloud/#agile/1.0/epic-moveIssuesToEpic
    @param issues
             Array of strings of Issue id or key
    """
        ...
    @classmethod
    def allEpics(cls, boardId: int) -> Union[JiraQueryBase[JiraEpic]]:
    """
    Get all epics from a board for a given board id
    
    @param boardId
             id of a board
    @returns all epics from the board for a given board id
    """
        ...
    @classmethod
    def allBoards(cls, scrumKanbanType: str=None, name: str=None, projectKeyOrId: str=None, startAt: int='0', maxResults: int='50') -> Union[JiraQueryBase[JiraBoard]]:
    """
    Get all Boards. Only includes boards user has permission to view
    
    @param scrumKanbanType
             Filters results to boards of specified type. valid values: scrum, kanban
    @param name
             Filters results to boards that match or partially match the specified name
    @param projectKeyOrId
             Filters results to boards that are relevant to a project.
             Relevance means that jql filter defined in board contains a reference to a project
    @param startAt
             starting index of returned boards. base index 0
    @param maxResults
             maximum number of boards to return per page. Default: 50
    @returns JiraBoards
    """
        ...
    @classmethod
    def board(cls, boardId: int) -> Union[JiraBoard]:
    """
    Given id get information about Jira Board
    
    @param boardId
             id of board
    @returns JiraBoard
    """
        ...

