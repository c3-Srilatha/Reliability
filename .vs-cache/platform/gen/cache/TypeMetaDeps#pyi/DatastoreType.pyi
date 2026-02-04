#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type DatastoreType


class DatastoreType():
    """
    Enum for different datastore
    
    @remarks this represents a made instance of DatastoreType
    """
    
    ACTON: Optional[str]=None

    ACUMATICA: Optional[str]=None

    ADOBEANALYTICS: Optional[str]=None

    ADOBECOMMERCE: Optional[str]=None

    ADP: Optional[str]=None

    AIRTABLE: Optional[str]=None

    ALLOYDB: Optional[str]=None

    APACHECOUCHDB: Optional[str]=None

    APACHEHBASE: Optional[str]=None

    APACHEHIVE: Optional[str]=None

    APACHEIMPALA: Optional[str]=None

    APACHEPHOENIX: Optional[str]=None

    ASANA: Optional[str]=None

    ATHENA: Optional[str]=None

    AUTHORIZENET: Optional[str]=None

    AVALARA: Optional[str]=None

    AZUREAD: Optional[str]=None

    AZUREDATACATALOG: Optional[str]=None

    AZUREDEVOPS: Optional[str]=None

    BASECAMP: Optional[str]=None

    BIGCOMMERCE: Optional[str]=None

    BIGSQL: Optional[str]=None

    BING: Optional[str]=None

    BINGADS: Optional[str]=None

    BOX: Optional[str]=None

    BULLHORNCRM: Optional[str]=None

    CASSANDRA: Optional[str]=None

    CLOUDANT: Optional[str]=None

    COCKROACHDB: Optional[str]=None

    CONFLUENCE: Optional[str]=None

    COSMOSDB: Optional[str]=None

    COUCHBASE: Optional[str]=None

    DATABRICKS: Optional[str]=None

    DOCUSIGN: Optional[str]=None

    DROPBOX: Optional[str]=None

    DYNAMICSCRM: Optional[str]=None

    DYNAMICSGP: Optional[str]=None

    DYNAMICSNAV: Optional[str]=None

    EBAY: Optional[str]=None

    EBAYANALYTICS: Optional[str]=None

    ELASTICSEARCH: Optional[str]=None

    EPICORERP: Optional[str]=None

    EXACTONLINE: Optional[str]=None

    EXCHANGE: Optional[str]=None

    FRESHDESK: Optional[str]=None

    GITHUB: Optional[str]=None

    GOOGLEADS: Optional[str]=None

    GOOGLEADSMANAGER: Optional[str]=None

    GOOGLEANALYTICS: Optional[str]=None

    GOOGLEBIGQUERY: Optional[str]=None

    GOOGLEDRIVE: Optional[str]=None

    GOOGLESEARCH: Optional[str]=None

    GOOGLESHEETS: Optional[str]=None

    GOOGLESPANNER: Optional[str]=None

    GRAPHQL: Optional[str]=None

    GREENPLUM: Optional[str]=None

    H2: Optional[str]=None

    HANA: Optional[str]=None

    HIGHRISE: Optional[str]=None

    HIVE: Optional[str]=None

    HUBSPOT: Optional[str]=None

    IBMCLOUDOBJECTSTORAGE: Optional[str]=None

    IBMCLOUDSQLQUERY: Optional[str]=None

    IMPALA: Optional[str]=None

    INFORMIX: Optional[str]=None

    INSTAGRAM: Optional[str]=None

    JIRA: Optional[str]=None

    JIRASERVICEDESK: Optional[str]=None

    KINTONE: Optional[str]=None

    LINKEDIN: Optional[str]=None

    LINKEDINADS: Optional[str]=None

    MAILCHIMP: Optional[str]=None

    MARIADB: Optional[str]=None

    MARKETO: Optional[str]=None

    MARKLOGIC: Optional[str]=None

    MICROSOFTPLANNER: Optional[str]=None

    MICROSOFTPROJECT: Optional[str]=None

    MONDAY: Optional[str]=None

    MONGODB: Optional[str]=None

    MSSQL: Optional[str]=None

    MSTEAMS: Optional[str]=None

    MYOB: Optional[str]=None

    MYSQL: Optional[str]=None

    NETSUITE: Optional[str]=None

    ODATA: Optional[str]=None

    ODOO: Optional[str]=None

    ONEDRIVE: Optional[str]=None

    ONENOTE: Optional[str]=None

    ORACLEELOQUA: Optional[str]=None

    ORACLEERP: Optional[str]=None

    ORACLEHCM: Optional[str]=None

    ORACLESALESCLOUD: Optional[str]=None

    ORACLESE: Optional[str]=None

    ORACLESERVICECLOUD: Optional[str]=None

    OUTREACH: Optional[str]=None

    PAYLOCITY: Optional[str]=None

    PAYPAL: Optional[str]=None

    PINTEREST: Optional[str]=None

    PIPEDRIVE: Optional[str]=None

    POSTGRES: Optional[str]=None

    POWERBIXMLA: Optional[str]=None

    PRESTO: Optional[str]=None

    QUICKBASE: Optional[str]=None

    QUICKBOOKS: Optional[str]=None

    QUICKBOOKSONLINE: Optional[str]=None

    RECKON: Optional[str]=None

    RECKONACCOUNTSHOSTED: Optional[str]=None

    REDIS: Optional[str]=None

    REDSHIFT: Optional[str]=None

    SAGEINTACCT: Optional[str]=None

    SALESFORCE: Optional[str]=None

    SALESFORCEPARDOT: Optional[str]=None

    SALESLOFT: Optional[str]=None

    SAPARIBAPROCUREMENT: Optional[str]=None

    SAPSUCCESSFACTORS: Optional[str]=None

    SASDATASETS: Optional[str]=None

    SASXPT: Optional[str]=None

    SENDGRID: Optional[str]=None

    SERVICENOW: Optional[str]=None

    SHIPSTATION: Optional[str]=None

    SHOPIFY: Optional[str]=None

    SINGLESTORE: Optional[str]=None

    SLACK: Optional[str]=None

    SMARTSHEET: Optional[str]=None

    SNOWFLAKE: Optional[str]=None

    SPARK: Optional[str]=None

    SPLUNK: Optional[str]=None

    SQUARE: Optional[str]=None

    STRIPE: Optional[str]=None

    SUGARCRM: Optional[str]=None

    SUITECRM: Optional[str]=None

    SURVEYMONKEY: Optional[str]=None

    SYBASE: Optional[str]=None

    SYBASEIQ: Optional[str]=None

    TABLEAUCRM: Optional[str]=None

    TALLY: Optional[str]=None

    TAXJAR: Optional[str]=None

    TERADATA: Optional[str]=None

    TRELLO: Optional[str]=None

    TWILIO: Optional[str]=None

    TWITTERADS: Optional[str]=None

    VEEVAVAULT: Optional[str]=None

    WAVEFINANCIAL: Optional[str]=None

    WOOCOMMERCE: Optional[str]=None

    WORDPRESS: Optional[str]=None

    WORKDAY: Optional[str]=None

    XBASE: Optional[str]=None

    XERO: Optional[str]=None

    YOUTUBEANALYTICS: Optional[str]=None

    ZENDESK: Optional[str]=None

    ZOHOBOOKS: Optional[str]=None

    ZOHOCREATOR: Optional[str]=None

    ZOHOCRM: Optional[str]=None

    ZOHOINVENTORY: Optional[str]=None

    ZOHOPROJECTS: Optional[str]=None

    ZUORA: Optional[str]=None
    def __init__(self, ACTON: Optional[str]=None, ACUMATICA: Optional[str]=None, ADOBEANALYTICS: Optional[str]=None, ADOBECOMMERCE: Optional[str]=None, ADP: Optional[str]=None, AIRTABLE: Optional[str]=None, ALLOYDB: Optional[str]=None, APACHECOUCHDB: Optional[str]=None, APACHEHBASE: Optional[str]=None, APACHEHIVE: Optional[str]=None, APACHEIMPALA: Optional[str]=None, APACHEPHOENIX: Optional[str]=None, ASANA: Optional[str]=None, ATHENA: Optional[str]=None, AUTHORIZENET: Optional[str]=None, AVALARA: Optional[str]=None, AZUREAD: Optional[str]=None, AZUREDATACATALOG: Optional[str]=None, AZUREDEVOPS: Optional[str]=None, BASECAMP: Optional[str]=None, BIGCOMMERCE: Optional[str]=None, BIGSQL: Optional[str]=None, BING: Optional[str]=None, BINGADS: Optional[str]=None, BOX: Optional[str]=None, BULLHORNCRM: Optional[str]=None, CASSANDRA: Optional[str]=None, CLOUDANT: Optional[str]=None, COCKROACHDB: Optional[str]=None, CONFLUENCE: Optional[str]=None, COSMOSDB: Optional[str]=None, COUCHBASE: Optional[str]=None, DATABRICKS: Optional[str]=None, DOCUSIGN: Optional[str]=None, DROPBOX: Optional[str]=None, DYNAMICSCRM: Optional[str]=None, DYNAMICSGP: Optional[str]=None, DYNAMICSNAV: Optional[str]=None, EBAY: Optional[str]=None, EBAYANALYTICS: Optional[str]=None, ELASTICSEARCH: Optional[str]=None, EPICORERP: Optional[str]=None, EXACTONLINE: Optional[str]=None, EXCHANGE: Optional[str]=None, FRESHDESK: Optional[str]=None, GITHUB: Optional[str]=None, GOOGLEADS: Optional[str]=None, GOOGLEADSMANAGER: Optional[str]=None, GOOGLEANALYTICS: Optional[str]=None, GOOGLEBIGQUERY: Optional[str]=None, GOOGLEDRIVE: Optional[str]=None, GOOGLESEARCH: Optional[str]=None, GOOGLESHEETS: Optional[str]=None, GOOGLESPANNER: Optional[str]=None, GRAPHQL: Optional[str]=None, GREENPLUM: Optional[str]=None, H2: Optional[str]=None, HANA: Optional[str]=None, HIGHRISE: Optional[str]=None, HIVE: Optional[str]=None, HUBSPOT: Optional[str]=None, IBMCLOUDOBJECTSTORAGE: Optional[str]=None, IBMCLOUDSQLQUERY: Optional[str]=None, IMPALA: Optional[str]=None, INFORMIX: Optional[str]=None, INSTAGRAM: Optional[str]=None, JIRA: Optional[str]=None, JIRASERVICEDESK: Optional[str]=None, KINTONE: Optional[str]=None, LINKEDIN: Optional[str]=None, LINKEDINADS: Optional[str]=None, MAILCHIMP: Optional[str]=None, MARIADB: Optional[str]=None, MARKETO: Optional[str]=None, MARKLOGIC: Optional[str]=None, MICROSOFTPLANNER: Optional[str]=None, MICROSOFTPROJECT: Optional[str]=None, MONDAY: Optional[str]=None, MONGODB: Optional[str]=None, MSSQL: Optional[str]=None, MSTEAMS: Optional[str]=None, MYOB: Optional[str]=None, MYSQL: Optional[str]=None, NETSUITE: Optional[str]=None, ODATA: Optional[str]=None, ODOO: Optional[str]=None, ONEDRIVE: Optional[str]=None, ONENOTE: Optional[str]=None, ORACLEELOQUA: Optional[str]=None, ORACLEERP: Optional[str]=None, ORACLEHCM: Optional[str]=None, ORACLESALESCLOUD: Optional[str]=None, ORACLESE: Optional[str]=None, ORACLESERVICECLOUD: Optional[str]=None, OUTREACH: Optional[str]=None, PAYLOCITY: Optional[str]=None, PAYPAL: Optional[str]=None, PINTEREST: Optional[str]=None, PIPEDRIVE: Optional[str]=None, POSTGRES: Optional[str]=None, POWERBIXMLA: Optional[str]=None, PRESTO: Optional[str]=None, QUICKBASE: Optional[str]=None, QUICKBOOKS: Optional[str]=None, QUICKBOOKSONLINE: Optional[str]=None, RECKON: Optional[str]=None, RECKONACCOUNTSHOSTED: Optional[str]=None, REDIS: Optional[str]=None, REDSHIFT: Optional[str]=None, SAGEINTACCT: Optional[str]=None, SALESFORCE: Optional[str]=None, SALESFORCEPARDOT: Optional[str]=None, SALESLOFT: Optional[str]=None, SAPARIBAPROCUREMENT: Optional[str]=None, SAPSUCCESSFACTORS: Optional[str]=None, SASDATASETS: Optional[str]=None, SASXPT: Optional[str]=None, SENDGRID: Optional[str]=None, SERVICENOW: Optional[str]=None, SHIPSTATION: Optional[str]=None, SHOPIFY: Optional[str]=None, SINGLESTORE: Optional[str]=None, SLACK: Optional[str]=None, SMARTSHEET: Optional[str]=None, SNOWFLAKE: Optional[str]=None, SPARK: Optional[str]=None, SPLUNK: Optional[str]=None, SQUARE: Optional[str]=None, STRIPE: Optional[str]=None, SUGARCRM: Optional[str]=None, SUITECRM: Optional[str]=None, SURVEYMONKEY: Optional[str]=None, SYBASE: Optional[str]=None, SYBASEIQ: Optional[str]=None, TABLEAUCRM: Optional[str]=None, TALLY: Optional[str]=None, TAXJAR: Optional[str]=None, TERADATA: Optional[str]=None, TRELLO: Optional[str]=None, TWILIO: Optional[str]=None, TWITTERADS: Optional[str]=None, VEEVAVAULT: Optional[str]=None, WAVEFINANCIAL: Optional[str]=None, WOOCOMMERCE: Optional[str]=None, WORDPRESS: Optional[str]=None, WORKDAY: Optional[str]=None, XBASE: Optional[str]=None, XERO: Optional[str]=None, YOUTUBEANALYTICS: Optional[str]=None, ZENDESK: Optional[str]=None, ZOHOBOOKS: Optional[str]=None, ZOHOCREATOR: Optional[str]=None, ZOHOCRM: Optional[str]=None, ZOHOINVENTORY: Optional[str]=None, ZOHOPROJECTS: Optional[str]=None, ZUORA: Optional[str]=None) -> None: ...

    @classmethod
    def toValue(cls, label: str, failIfInvalid: bool=None) -> Union[str]:
    """
    Translate the enum label (field name) to the value.
    For simple enums (that don't define explicit values), the value is a string
    that matches the label.
    @param label the enum label
    @return the associated value
    """
        ...
    @classmethod
    def toLabel(cls, value: str, failIfInvalid: bool=None) -> Union[str]:
    """
    Translate the enum value to the label (field name).
    @param value the enum value
    @return the enum label
    """
        ...
    @classmethod
    def labelIndex(cls, label: str, failIfInvalid: bool=None) -> int:
    """
    Get the index of the label in the enum.
    @param label the enum label (field name)
    @return index or -1 if not found
    """
        ...
    @classmethod
    def valueIndex(cls, value: str, failIfInvalid: bool=None) -> int:
    """
    Get the index of the value in the enum.
    @param value the enum value
    @return index or -1 if not found
    """
        ...
    @classmethod
    def valueType(cls) -> ValueType:
    """
    @return value type of values in this enum
    """
        ...
    @classmethod
    def values(cls) -> Union[Array[str]]:
    """
    Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
    the field name (same as the labels).
    """
        ...
    @classmethod
    def labels(cls) -> Union[Array[str]]:
    """
    Return an array of all enumeration labels. These are the same as the field names of the enum type.
    """
        ...
    @classmethod
    def valueToLabels(cls) -> Union[Map[str, str]]:
    """
    Return a map of all enumeration values to their labels.
    """
        ...
    @classmethod
    def labelToValues(cls) -> Union[Map[str, str]]:
    """
    Return a map of all enumeration labels to their values.
    """
        ...
    @classmethod
    def containsValue(cls, value: str) -> bool:
    """
    Is value a valid value for this enum type?
    @param value the enum value
    """
        ...
    @classmethod
    def eachLabel(cls, action: Callable[[str]]=None) -> None:
    """
    Calls provided action for each enum label.
    """
        ...
    @classmethod
    def eachValue(cls, action: Callable[[str]]=None) -> None:
    """
    Calls provided action for each enum value.
    """
        ...

