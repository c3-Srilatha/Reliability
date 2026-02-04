#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.FetchSpec import FetchSpec
from c3.platform.GitHubResponse import GitHubResponse
from c3.platform.GitHubContent import GitHubContent
from c3.platform.GitHubReference import GitHubReference
from c3.platform.SourceControlRepositoryDiff import SourceControlRepositoryDiff
from c3.platform.GitHubUser import GitHubUser
from c3.platform.GitHubPullRequest import GitHubPullRequest
from c3.platform.GitHubBranch import GitHubBranch
from c3.platform.GitHubCompareResult import GitHubCompareResult
from c3.platform.GitHubCommit import GitHubCommit
from c3.platform.GitHub import GitHub
from c3.platform.GitHubFileSystem import GitHubFileSystem
from c3.platform.SourceControlFileDiff import SourceControlFileDiff
from c3.platform.File import File
from c3.platform.GitHubContentChange import GitHubContentChange
from c3.platform.GitHubRepoCommit import GitHubRepoCommit

# Python definitions for the C3 type GitHubAPI


class GitHubAPI(SourceControlApi, Value):
    """
    This type is the wrapper API for the (REST) GitHub API
    
    @remarks this represents a made instance of GitHubAPI
    """
    def __init__(self) -> None: ...

    @classmethod
    def allSourceControlPackages(cls, pathToLocalC3Repo: str) -> Union[any]:
    """
    Given a local file system source control repo path and a path to a C3 repository, returns all package names and
    all .c3pkg.json {@link File}s for the packages.
    
    @param pathToLocalC3Repo
               The full file system path to the source control C3 local repository (e.g. `/home/jenkins/workspace/mybranch/c3server/repo/server`)
    @return json with `packageNames: [string]` and `packageJsons: [File]`
    """
        ...
    @classmethod
    def packageUpstreamDependencies(cls, downstreamPackages: Array[str]=None, packageJsons: Array[File]=None, depth: int='-1') -> Union[Array[str]]:
    """
    Traverses the upstream dependencies from `downstreamPackages` as specified in all package `package.json`s.
    Traverses until the specified `depth`.
    @param downstreamPackages
               The array of downstream packages to start the upstream traversal from
    @param packageJsons
               The {@link File} to all package's `package.json`
    @param depth
              The depth (number of tiers) to traverse. If not specified, or <= -1, all tiers will be traversed
    @return the list of dependent package names for the root packages until the depth specified
    """
        ...
    @classmethod
    def packagesAffectedFromRepositoryDiff(cls, pathToLocalRepo: str, repoDir: str, repoDiff: SourceControlRepositoryDiff=None, depth: int='-1', maxFilesCount: int='300') -> Union[Array[str]]:
    """
    Given a map of packages to changed files, generate a list of all the packages that have changed and
    any other packages that depend on those packages, directly or indirectly.
    If a repository.json or a java file changes, all packages will be included as affected.
    
    @param repoDiff
               A representation of file changes in the repository
    @param pathToLocalRepo
               The file system path to the already-cloned repo. (e.g. `/home/jenkins/workspace/mybranch/c3server`)
    @param repoDir
               The directory of the C3 repository within the source control repository, e.g. `'base'`.
               If there are multiple C3 repositories within the same source control, this should be run
               individually on each.
    @param depth
              The depth (number of tiers) to traverse. If not specified, or <= -1, all tiers will be traversed
    @param maxFilesCount
              Returns all packages if the number of affected files in diff is >= maxFilesCount.
              This is because there is a limit on the number of files returned by compare API (300 for GitHub).
    @return the names of the affected packages.
    """
        ...
    @classmethod
    def parseDiff(cls, diff: str) -> Union[SourceControlFileDiff]:
    """
    Parse file patches with the diff file format.
    
    @param diff
       The file diff string
    @return
       A @see SourceControlFileDiff} containing the changes on the file
    """
        ...
    @classmethod
    def checkGit(cls, repo: str) -> Union[GitHub]:
    """
    Utility function to check common git errors:
    - Checks GitHub.config() to make sure REST type is configured correctly
    - Checks that the user is valid (has valid token)
    - Checks that the user has access to the passed repository
    
    @param repoName
       The name of the repository to check against
    @return
       If everything is OK, returns a {@link GitHub} configured with the current {@link User}'s token.
       Else it will throw an error.
    """
        ...
    @classmethod
    def token(cls) -> Union[str]:
    """
    Get the GitHub token from the MetadataRepositoryStore
    """
        ...
    @classmethod
    def setToken(cls, token: str=None, skipValidation: bool=None) -> bool:
    """
    Set the GitHub token from the MetadataRepositoryStore
    
    @param token
            The token string
    @param skipValidation
            Whether to skip token validation
    """
        ...
    @classmethod
    def tokenExists(cls) -> bool:
    """
    Check whether the current user has a GitHub access token
    """
        ...
    @classmethod
    def clearToken(cls) -> bool:
    """
    Clear the GitHub token from the MetadataRepositoryStore
    """
        ...
    @classmethod
    def currentUser(cls) -> Union[GitHubUser]:
    """
    Returns the current github user
    """
        ...
    @classmethod
    def getCommits(cls, branch: str=None, path: str=None, onlyCurrentUser: bool='false') -> Union[Array[GitHubCommit]]:
    """
    This function returns commits of a branch
    
    @param branch
                The branch to fetch commits from
    @param path
                The file path to limit fetched commits to
    @param onlyCurrentUser
                If set to true will only return GitHub commits authored by the current user
    """
        ...
    @classmethod
    def getCommitDetails(cls, commit: GitHubCommit=None, spec: FetchSpec=None) -> Union[GitHubRepoCommit]:
    """
    Returns requested detailed information pertaining to a particular git commit
    """
        ...
    @classmethod
    def gitRepo(cls) -> Union[str]:
    """
    This function construct the repository name based on the tenant
    """
        ...
    @classmethod
    def resetGitBranch(cls, sha: str, branch: str) -> Union[GitHubResponse]:
    """
    This function resets the HEAD of a branch to the target commit
    Be careful, this is equivalent to do a `git reset --hard <SHA>` and followed by a `git push -f`
    """
        ...
    @classmethod
    def createReference(cls, ref: GitHubReference, commit: GitHubCommit) -> Union[GitHubResponse]:
    """
    Creates a reference given a commit
    
    @param ref
              The name of reference to be crated
    @param commit
              The SHA1 value to set this reference to
    """
        ...
    @classmethod
    def compare(cls, head: str, base: str=None) -> Union[GitHubCompareResult]:
    """
    This function compares the HEAD of the head branch against the base branch, or compares two SHAs.
    
    @param head
                The head branch name or SHA
    
    @param base
                The base branch name or SHA to be compared with. Base will be `master` if left empty.
    """
        ...
    @classmethod
    def merge(cls, base: str, head: str, message: str=None, isReleaseNote: bool=None) -> Union[GitHubResponse]:
    """
    This function performs a merge of one branch into another without creating a pull request.
    
    @param base
                The name of the base branch that the head will be merged into.
    
    @param head
                The head to merge. It can be a branch name or a SHA
    
    @param message
                The commit message to use for the merge commit. If omitted, a default message will be used
    
    @param isReleaseNote
                Whether this commit message should be appended to release note
    """
        ...
    @classmethod
    def createPullRequest(cls, head: str, base: str, title: str, body: str=None, isReleaseNote: bool=None) -> Union[GitHubPullRequest]:
    """
    This function will create a pull request.
    
    
    @param head
                The head to merge. It can be a branch name of a SHA
    
    @param base
                The name of the base branch that the head will be merged into.
    
    @param title
                The title of the pull request.
    
    @param body
                The body (description) of the pull request blank
    
    @param isReleaseNote
                Whether this commit message should be appended to release note
    
    @return GitHubPullRequest
    """
        ...
    @classmethod
    def pullRequest(cls, number: str) -> Union[GitHubPullRequest]:
    """
    Checks the status of a pull request
    
    
    @param number
                The pull request number
    
    @return GitHubPullRequest
    """
        ...
    @classmethod
    def createContent(cls, path: str, message: str, content: str, branch: str='\'master\'') -> Union[GitHubContentChange]:
    """
    This function creates content on a branch
    
    @param path
              The full path of the file
    @param message
              The commit message
    @param content
              The content, Base64 encoded
    @param branch
              The branch
    @return GitHub content change result
    """
        ...
    @classmethod
    def updateContent(cls, path: str, message: str, content: str, sha: str, branch: str='\'master\'') -> Union[GitHubContentChange]:
    """
    This function updates content on a branch
    
    @param path
              The full path of the file
    @param message
              The commit message
    @param content
              The new content, Base64 encoded
    @param sha
              The blob SHA of the file being replaced
    @param branch
              The branch. Default to the repository’s default branch (usually `master`)
    @return GitHub content change result
    """
        ...
    @classmethod
    def readContent(cls, path: str, branch: str=None) -> Union[GitHubContent]:
    """
    This function reads content
    
    @param path
                   The full path of the file
    
    @param branch
                   The branch
    
    @return        GitHub content
    """
        ...
    @classmethod
    def branch(cls, gitHubBranch: GitHubBranch) -> Union[GitHubBranch]:
    """
    Returns the branch information
    
    @param  branch
               The name of the branch. (e.g. `master`)
    @return GitHubBranch
    """
        ...
    @classmethod
    def deleteBranch(cls, gitHubBranch: GitHubBranch) -> Union[GitHubResponse]:
    """
    Deletes a branch
    
    @param  branchName
               The branch name
    @return GitHubResponse
    """
        ...
    @classmethod
    def createBranch(cls, newBranch: str, srcBranch: str) -> Union[GitHubReference]:
    """
    Create a branch
    
    @param  newBranch
               The branch name to be created
    @param  srcBranch
               The source branch which the new branch will be created from
    @return GitHubReference
    """
        ...
    @classmethod
    def createBranchFromSha(cls, branchName: str, sha: str) -> Union[GitHubReference]:
    """
    Creates a branch given a sha
    
    @param branchName
              The branch name to be created
    @param sha
              The SHA1 value to set this branch to
    """
        ...
    @classmethod
    def createBranchFromGitHubFileSystem(cls, branchName: str, fs: GitHubFileSystem, msg: str=None) -> None:
    """
    Creates a branch from the current state of a GitHubFileSystem.
    
    @param branchName
              The branch name to be created
    @param fs
              The GitHubFileSystem.
    @param str
              Optional commit message. If none is given, branchName will be used.
    """
        ...
    @classmethod
    def packagesAffected(cls, pathToLocalRepo: str, fullRepositoryName: str, branch: str, repoDir: str, ref: str, depth: int='-1') -> Union[Array[str]]:
    """
    Given a branch and a commit on that branch, generate a list of all the packages
    that have been changed between a commit and the current head, and
    any other packages that depend on those packages directly or indirectly.
    
    This may also be used to check the packages affected by the changes between
    two branches.
    
    @param pathToLocalRepo
                The file system path to the already-cloned repo. (e.g. `/home/jenkins/workspace/mybranch/c3server`)
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param branch
              Name of branch. The logic must start from a branch, not a commit or tag, because
              the GitHubFileSystem operates only on branches, starting from the current commit
              on the branch.
    @param repoDir
              The directory of the C3 repository within the GitHub repository, e.g. `'base'`.
              If there are multiple C3 repositories within the same GitHub, this should be run
              individually on each.
    @param ref
              The name of the commit/branch/tag from which to calculate the changes;
              if given the SHA of a commit, the files changed will start from the following commit.
    @param depth
              The depth (number of tiers) to traverse. If not specified, or <= -1, all tiers will be traversed
    @return the names of the affected packages.
    """
        ...
    @classmethod
    def repoPackagesCompare(cls, fullRepositoryName: str, branch: str, repoDir: str, ref: str) -> Union[SourceControlRepositoryDiff]:
    """
    Given a branch and a commit on that branch, generate a list of {@link SourceControlFileDiff}s that are split by
    the package that the files reside in.
    
    @param fullRepositoryName
                GitHub's full repository path. (e.g. `c3-e/c3server`)
    @param branch
              Name of branch. The logic must start from a branch, not a commit or tag, because
              the GitHubFileSystem operates only on branches, starting from the current commit
              on the branch.
    @param repoDir
              The directory of the C3 repository within the GitHub repository, e.g. `'base'`.
              If there are multiple C3 repositories within the same GitHub, this should be run
              individually on each.
    @param ref
              The name of the commit/branch/tag from which to calculate the changes;
              if given the SHA of a commit, the files changed will start from the following commit.
    @return a {@link SourceControlRepositoryDiff} that splits the file level diffs by package.
    """
        ...
    @classmethod
    def parseFilePatches(cls, compareResult: GitHubCompareResult) -> Union[Array[SourceControlFileDiff]]:
    """
    Generate a list of {@see SourceControlFileDiff} for the GitHubCompareResult.
    
    @param compareResult
                The compare results obtained from {@see GitHubAPI.compare}
    
    @param return
                An array of {@see SourceControlFileDiff} representing the file changes.
    """
        ...

