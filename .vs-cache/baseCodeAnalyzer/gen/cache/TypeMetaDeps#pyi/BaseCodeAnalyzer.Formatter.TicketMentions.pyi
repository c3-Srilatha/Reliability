#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.baseCodeAnalyzer.BaseCodeAnalysis.Result.Processed import BaseCodeAnalysis.Result.Processed
from c3.baseCodeAnalyzer.BaseCodeAnalyzer.GitHubGadget import BaseCodeAnalyzer.GitHubGadget
from c3.baseCodeAnalyzer.BaseCodeAnalyzer.Formatter.SummarySection import BaseCodeAnalyzer.Formatter.SummarySection

# Python definitions for the C3 type BaseCodeAnalyzer.Formatter.TicketMentions


class TicketMentions(Value):
    """
    Formatter to get the components of the ticket mentions summary section.
    
    @remarks this represents a made instance of BaseCodeAnalyzer.Formatter.TicketMentions
    """
    def __init__(self) -> None: ...

    @classmethod
    def summarizeResults(cls, processedResults: Array[BaseCodeAnalysis.Result.Processed]=None, gadget: BaseCodeAnalyzer.GitHubGadget=None) -> Union[BaseCodeAnalyzer.Formatter.SummarySection]:
    """
    Helper to get the ticket mentions section of the summary message.
    
    @param processedResults
              The processed code analysis metric results to show in the summary message.
    @param gadget
              The source control gadget to get the file- and line- anchors from.
    @returns the components for the ticket mentions summary section.
    """
        ...

