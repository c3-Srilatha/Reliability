#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.AssumeRoleRequest import AssumeRoleRequest
from c3.platform.VmReservation import VmReservation
from c3.platform.CloudTag import CloudTag
from c3.platform.RunInstancesRequest import RunInstancesRequest
from c3.platform.AssumedRoleCredentials import AssumedRoleCredentials
from c3.platform.ReservedInstance import ReservedInstance

# Python definitions for the C3 type AwsEc2Client


class AwsEc2Client(Value):
    """
    @remarks this represents a made instance of AwsEc2Client
    """
    def __init__(self) -> None: ...

    @classmethod
    def assumeDev(cls, durationInSecs: int=None) -> None:
    """
    Temporarily assume Dev account's role for the current user.
    """
        ...
    @classmethod
    def assumeProd(cls, durationInSecs: int=None) -> None:
    """
    Temporarily assume Prod account's role for the current user.
    """
        ...
    @classmethod
    def assumeStage(cls, durationInSecs: int=None) -> None:
    """
    Temporarily assume Stage account's role for the current user.
    """
        ...
    @classmethod
    def assumeTest(cls, durationInSecs: int=None) -> None:
    """
    Temporarily assume Test account's role for the current user.
    """
        ...
    @classmethod
    def forgetRole(cls) -> None:
    """
    Forget previously assumed role for the current user.
    """
        ...
    @classmethod
    def describeInstances(cls, filter: str=None, region: str=None, cred: AssumedRoleCredentials=None) -> Union[Array[VmReservation]]:
    """
    Describes all running EC2 instances.
    
    @param filter
               Filters so that the response includes information for only certain instances.
               The response includes information for an instance only if it matches at least
               one of the filter values that you specified. Multiple filters can be separated with a comma
               e.g tag:hostname=*-app-m-*,architecture=x86_64
    @param region
               AWS region associated with this resource.
    @param cred
               This optional parameter should be provided along if you want the ec2 client to assume a different role.
    
    @return List of matched EC2 instances
    """
        ...
    @classmethod
    def describeReservedInstances(cls, filter: str=None, region: str=None, cred: AssumedRoleCredentials=None) -> Union[Array[ReservedInstance]]:
    """
    Describes all reserved instances.
    
    @param filter
               Filters so that the response includes information for only certain instances.
               The response includes information for an instance only if it matches at least
               one of the filter values that you specified. Multiple filters can be separated with a comma
               e.g tag:hostname=*-app-m-*,architecture=x86_64
    @param region
               AWS region associated with this resource.
    @param cred
               This optional parameter should be provided along if you want the ec2 client to assume a different role.
    
    @return List of reservations
    """
        ...
    @classmethod
    def assumeRole(cls, req: AssumeRoleRequest=None, accessId: str=None, secretAccessKey: str=None) -> Union[AssumedRoleCredentials]:
    """
    AssumeRole is used for cross-account access or federation.
    
    @param req
              AssumeRoleRequest input.
    
    @param accessId
               The access key ID that identifies the temporary security credentials.
               The EC2 instance assumes its IAM role by default. This optional parameter should be provided
               along with  secretAccessKey if you want the ec2 client to assume a different role.
    
    @param secretAccessKey
               The secret access key that can be used to sign requests.
               The EC2 instance assumes its IAM role by default. This optional parameter should be provided
               along with accessId if you want the ec2 client to assume a different role.
    
    @return  A set of temporary security credentials
             (consisting of an access key ID, a secret access key, and a security token) that you can use to access
             AWS resources that you might not normally have access to. Typically, you use AssumeRole for cross-account
             access or federation.
    """
        ...
    @classmethod
    def runInstances(cls, runInstancesRequest: RunInstancesRequest, region: str=None, cred: AssumedRoleCredentials=None) -> Union[VmReservation]:
    """
    Launches the specified number of instances using an AMI for which you have permissions.
    
    @param runInstancesRequest
               Container for the parameters to the RunInstances operation.
    @param region
               AWS region associated with this resource.
    @param cred
               This optional parameter should be provided along if you want the ec2 client to assume a different role.
    
    @return List of created EC2 instances
    """
        ...
    @classmethod
    def terminateInstances(cls, instanceIds: Array[str], region: str=None, cred: AssumedRoleCredentials=None) -> None:
    """
    Shuts down one or more instances. This operation is idempotent; if you terminate an instance more than once, each call succeeds.
    
    @param instanceIds
               One or more instance IDs.
    @param region
               AWS region associated with this resource.
    @param cred
               This optional parameter should be provided along if you want the ec2 client to assume a different role.
    """
        ...
    @classmethod
    def deleteTags(cls, resources: Array[str], tags: Array[CloudTag], region: str=None, cred: AssumedRoleCredentials=None) -> None:
    """
    Deletes the specified set of tags from the specified set of resources.
    
    @param resources
               The IDs of one or more resources to un-tag.
    @param tags
               One or more tags.
    @param region
               AWS region associated with this resource.
    @param cred
               This optional parameter should be provided along if you want the ec2 client to assume a different role.
    
    @return List of created EC2 instances
    """
        ...
    @classmethod
    def createTags(cls, resources: Array[str], tags: Array[CloudTag], region: str=None, cred: AssumedRoleCredentials=None) -> None:
    """
    Adds or overwrites one or more tags for the specified Amazon EC2 resource or resources.
    Each resource can have a maximum of 10 tags. Each tag consists of a key and optional value.
    Tag keys must be unique per resource.
    
    @param resources
               The IDs of one or more resources to tag.
    @param tags
               One or more tags.
    @param region
               AWS region associated with this resource.
    @param cred
               This optional parameter should be provided along if you want the ec2 client to assume a different role.
    
    @return List of created EC2 instances
    """
        ...

