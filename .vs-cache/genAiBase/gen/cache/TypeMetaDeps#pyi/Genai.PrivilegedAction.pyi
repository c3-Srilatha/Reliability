#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.genAiBase.Genai.Llm.VllmHostedModel.Config import Genai.Llm.VllmHostedModel.Config
from c3.platform.CloudResource import CloudResource
from c3.genAiBase.Genai.Llm.AwsBedrock.Config import Genai.Llm.AwsBedrock.Config
from c3.genAiBase.Genai.UnstructuredQuery.Engine.REA.ModelInferenceConfig import Genai.UnstructuredQuery.Engine.REA.ModelInferenceConfig
from c3.genAiBase.Genai.Llm.OpenAI.Config import Genai.Llm.OpenAI.Config
from c3.platform.CloudCredentials import CloudCredentials
from c3.genAiBase.Genai.Llm.Gcp.Config import Genai.Llm.Gcp.Config

# Python definitions for the C3 type Genai.PrivilegedAction


class PrivilegedAction(Value):
    """
    IMPORTANT
    
    Any changes to this file or the JavaScript file must be accompanied by a c3server commit in `PrivilegedAction.java`
    to update the fingerprint and the security team must be added as reviewers for the PR. For this reason, try to
    avoid any updates to this type and keep as much application logic as possible in other types. That being said, in
    order for PrivilegedAction to work correctly, the API called by the user must be set to `authz='always'` and the
    user must have explicit permissions, so also create as much abstraction as possible so a user cannot do anything
    malicious with the API.
    
    If changes are required, the fingerprint can be retrieved from static/console from genAiBase app with:
    
    ```js
    var fingerprint = Pkg.Store.inst().fingerprintEncodedContent(C3.pkg().content('src/privilegedActions/Genai.PrivilegedAction.js').readEncoded());
    ```
    
    @remarks this represents a made instance of Genai.PrivilegedAction
    """
    def __init__(self) -> None: ...

    @classmethod
    def setFileSystemMount(cls, rootUrl: str, mountName: str) -> None:
    """
    Invoke {@link FileSystem#setMount} to set mount URL on file system
    
    @param rootUrl
         The root URL of the mount
    @param mountName
         The name of the mount in {@link FileSystem#mounts} for the {@link Genai.SourceSystem}
    """
        ...
    @classmethod
    def removeFileSystemMount(cls, rootUrl: str, mountName: str) -> None:
    """
    Invoke {@link FileSystem#removeMount} to remove mount from file system
    
    @param rootUrl
         The root URL of the mount
    @param mountName
         The name of the mount in {@link FileSystem#mounts} for the {@link Genai.SourceSystem}
    """
        ...
    @classmethod
    def setCredentialsForResource(cls, rootUrl: str, bucketName: str, credentials: CloudCredentials) -> None:
    """
    Set credentials for a given Cloud Resource Name.
    
    @param rootUrl
         The root URL of the mount
    @param bucketName
         The name of the bucket for the {@link Genai.SourceSystem}
    @param credentials
         The credentials to set for the given source system
    """
        ...
    @classmethod
    def getDefaultCredentials(cls, rootUrl: str) -> CloudCredentials:
    """
    Get default credentials for a given Cloud Resource Name.
    
    @param rootUrl
         The root URL of the mount
    @return CloudCredentials
         The default cloud credentials
    """
        ...
    @classmethod
    def getCloudResource(cls, rootUrl: str, bucketName: str) -> CloudResource:
    """
    Get the cloud resource for a given Cloud Resource Name.
    
    @param rootUrl
         The root URL of the mount
    @param bucketName
         The name of the bucket for the {@link Genai.SourceSystem}
    @return CloudResource
         The default cloud resource
    """
        ...
    @classmethod
    def clearAwsBucketCache(cls) -> None:
    """
    Clears the cache for {@link AwsS3Bucket}
    """
        ...
    @classmethod
    def enableS3FileSystem(cls) -> None:
    """
    Enables the {@link S3FileSystem}
    """
        ...
    @classmethod
    def getOpenAiConfigSecret(cls, config: Genai.Llm.OpenAI.Config) -> Genai.Llm.OpenAI.Config:
    """
    Returns the {@link Genai.Llm.OpenAI.Config#apiKey}
    """
        ...
    @classmethod
    def getAwsBedrockConfigSecret(cls, config: Genai.Llm.AwsBedrock.Config) -> Genai.Llm.AwsBedrock.Config:
    """
    Returns the {@link Genai.Llm.AwsBedrock.Config#secretAccessKey}
    """
        ...
    @classmethod
    def getGcpPalmConfigSecret(cls, config: Genai.Llm.Gcp.Config) -> Genai.Llm.Gcp.Config:
    """
    Returns the {@link Genai.Llm.Gcp.Config#serviceAccountInfo}
    """
        ...
    @classmethod
    def getVllmHostedModelConfigSecret(cls, config: Genai.Llm.VllmHostedModel.Config) -> Genai.Llm.VllmHostedModel.Config:
    """
    Returns the {@link Genai.Llm.VllmHostedModel.Config#endpoint}
    """
        ...
    @classmethod
    def getModelInferenceConfigSecret(cls, config: Genai.UnstructuredQuery.Engine.REA.ModelInferenceConfig) -> Genai.UnstructuredQuery.Engine.REA.ModelInferenceConfig:
    """
    Returns the {@link Genai.UnstructuredQuery.Engine.REA.ModelInferenceConfig#vllmEndpoint}
    """
        ...

