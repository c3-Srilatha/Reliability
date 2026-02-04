// TypeScript definitions for the C3 type DatastoreType

/**
 * Enum for different datastore
 *
 * @remarks this represents a value passed to a method that expects an instance of DatastoreType
 */
declare interface IDatastoreType {

  readonly ACTON: 'acton';

  readonly ACUMATICA: 'acumatica';

  readonly ADOBEANALYTICS: 'adobeanalytics';

  readonly ADOBECOMMERCE: 'adobecommerce';

  readonly ADP: 'adp';

  readonly AIRTABLE: 'airtable';

  readonly ALLOYDB: 'alloydb';

  readonly APACHECOUCHDB: 'apachecouchdb';

  readonly APACHEHBASE: 'apachehbase';

  readonly APACHEHIVE: 'apachehive';

  readonly APACHEIMPALA: 'apacheimpala';

  readonly APACHEPHOENIX: 'apachephoenix';

  readonly ASANA: 'asana';

  readonly ATHENA: 'athena';

  readonly AUTHORIZENET: 'authorizenet';

  readonly AVALARA: 'avalara';

  readonly AZUREAD: 'azuread';

  readonly AZUREDATACATALOG: 'azuredatacatalog';

  readonly AZUREDEVOPS: 'azuredevops';

  readonly BASECAMP: 'basecamp';

  readonly BIGCOMMERCE: 'bigcommerce';

  readonly BIGSQL: 'bigsql';

  readonly BING: 'bing';

  readonly BINGADS: 'bingads';

  readonly BOX: 'box';

  readonly BULLHORNCRM: 'bullhorncrm';

  readonly CASSANDRA: 'cassandra';

  readonly CLOUDANT: 'cloudant';

  readonly COCKROACHDB: 'cockroachdb';

  readonly CONFLUENCE: 'confluence';

  readonly COSMOSDB: 'cosmosdb';

  readonly COUCHBASE: 'couchbase';

  readonly DATABRICKS: 'databricks';

  readonly DOCUSIGN: 'docusign';

  readonly DROPBOX: 'dropbox';

  readonly DYNAMICSCRM: 'dynamicscrm';

  readonly DYNAMICSGP: 'dynamicsgp';

  readonly DYNAMICSNAV: 'dynamicsnav';

  readonly EBAY: 'ebay';

  readonly EBAYANALYTICS: 'ebayanalytics';

  readonly ELASTICSEARCH: 'elasticsearch';

  readonly EPICORERP: 'epicorerp';

  readonly EXACTONLINE: 'exactonline';

  readonly EXCHANGE: 'exchange';

  readonly FRESHDESK: 'freshdesk';

  readonly GITHUB: 'github';

  readonly GOOGLEADS: 'googleads';

  readonly GOOGLEADSMANAGER: 'googleadsmanager';

  readonly GOOGLEANALYTICS: 'googleanalytics';

  readonly GOOGLEBIGQUERY: 'googlebigquery';

  readonly GOOGLEDRIVE: 'googledrive';

  readonly GOOGLESEARCH: 'googlesearch';

  readonly GOOGLESHEETS: 'googlesheets';

  readonly GOOGLESPANNER: 'googlespanner';

  readonly GRAPHQL: 'graphql';

  readonly GREENPLUM: 'greenplum';

  readonly H2: 'h2';

  readonly HANA: 'hana';

  readonly HIGHRISE: 'highrise';

  readonly HIVE: 'hive';

  readonly HUBSPOT: 'hubspot';

  readonly IBMCLOUDOBJECTSTORAGE: 'ibmcloudobjectstorage';

  readonly IBMCLOUDSQLQUERY: 'ibmcloudsqlquery';

  readonly IMPALA: 'impala';

  readonly INFORMIX: 'informix';

  readonly INSTAGRAM: 'instagram';

  readonly JIRA: 'jira';

  readonly JIRASERVICEDESK: 'jiraservicedesk';

  readonly KINTONE: 'kintone';

  readonly LINKEDIN: 'linkedin';

  readonly LINKEDINADS: 'linkedinads';

  readonly MAILCHIMP: 'mailchimp';

  readonly MARIADB: 'mariadb';

  readonly MARKETO: 'marketo';

  readonly MARKLOGIC: 'marklogic';

  readonly MICROSOFTPLANNER: 'microsoftplanner';

  readonly MICROSOFTPROJECT: 'microsoftproject';

  readonly MONDAY: 'monday';

  readonly MONGODB: 'mongodb';

  readonly MSSQL: 'mssql';

  readonly MSTEAMS: 'msteams';

  readonly MYOB: 'myob';

  readonly MYSQL: 'mysql';

  readonly NETSUITE: 'netsuite';

  readonly ODATA: 'odata';

  readonly ODOO: 'odoo';

  readonly ONEDRIVE: 'onedrive';

  readonly ONENOTE: 'onenote';

  readonly ORACLEELOQUA: 'oracleeloqua';

  readonly ORACLEERP: 'oracleerp';

  readonly ORACLEHCM: 'oraclehcm';

  readonly ORACLESALESCLOUD: 'oraclesalescloud';

  readonly ORACLESE: 'oracle';

  readonly ORACLESERVICECLOUD: 'oracleservicecloud';

  readonly OUTREACH: 'outreach';

  readonly PAYLOCITY: 'paylocity';

  readonly PAYPAL: 'paypal';

  readonly PINTEREST: 'pinterest';

  readonly PIPEDRIVE: 'pipedrive';

  readonly POSTGRES: 'postgres';

  readonly POWERBIXMLA: 'powerbixmla';

  readonly PRESTO: 'presto';

  readonly QUICKBASE: 'quickbase';

  readonly QUICKBOOKS: 'quickbooks';

  readonly QUICKBOOKSONLINE: 'quickbooksonline';

  readonly RECKON: 'reckon';

  readonly RECKONACCOUNTSHOSTED: 'reckonaccountshosted';

  readonly REDIS: 'redis';

  readonly REDSHIFT: 'redshift';

  readonly SAGEINTACCT: 'sageintacct';

  readonly SALESFORCE: 'salesforce';

  readonly SALESFORCEPARDOT: 'salesforcepardot';

  readonly SALESLOFT: 'salesloft';

  readonly SAPARIBAPROCUREMENT: 'saparibaprocurement';

  readonly SAPSUCCESSFACTORS: 'sapsuccessfactors';

  readonly SASDATASETS: 'sasdatasets';

  readonly SASXPT: 'sasxpt';

  readonly SENDGRID: 'sendgrid';

  readonly SERVICENOW: 'servicenow';

  readonly SHIPSTATION: 'shipstation';

  readonly SHOPIFY: 'shopify';

  readonly SINGLESTORE: 'singlestore';

  readonly SLACK: 'slack';

  readonly SMARTSHEET: 'smartsheet';

  readonly SNOWFLAKE: 'snowflake';

  readonly SPARK: 'spark';

  readonly SPLUNK: 'splunk';

  readonly SQUARE: 'square';

  readonly STRIPE: 'stripe';

  readonly SUGARCRM: 'sugarcrm';

  readonly SUITECRM: 'suitecrm';

  readonly SURVEYMONKEY: 'surveymonkey';

  readonly SYBASE: 'sybase';

  readonly SYBASEIQ: 'sybaseiq';

  readonly TABLEAUCRM: 'tableaucrm';

  readonly TALLY: 'tally';

  readonly TAXJAR: 'taxjar';

  readonly TERADATA: 'teradata';

  readonly TRELLO: 'trello';

  readonly TWILIO: 'twilio';

  readonly TWITTERADS: 'twitterads';

  readonly VEEVAVAULT: 'veevavault';

  readonly WAVEFINANCIAL: 'wavefinancial';

  readonly WOOCOMMERCE: 'woocommerce';

  readonly WORDPRESS: 'wordpress';

  readonly WORKDAY: 'workday';

  readonly XBASE: 'xbase';

  readonly XERO: 'xero';

  readonly YOUTUBEANALYTICS: 'youtubeanalytics';

  readonly ZENDESK: 'zendesk';

  readonly ZOHOBOOKS: 'zohobooks';

  readonly ZOHOCREATOR: 'zohocreator';

  readonly ZOHOCRM: 'zohocrm';

  readonly ZOHOINVENTORY: 'zohoinventory';

  readonly ZOHOPROJECTS: 'zohoprojects';

  readonly ZUORA: 'zuora';
}

/**
 * Enum for different datastore
 *
 * @remarks this represents a made instance of DatastoreType
 */
declare class DatastoreType {

  static readonly ACTON: 'acton';

  static readonly ACUMATICA: 'acumatica';

  static readonly ADOBEANALYTICS: 'adobeanalytics';

  static readonly ADOBECOMMERCE: 'adobecommerce';

  static readonly ADP: 'adp';

  static readonly AIRTABLE: 'airtable';

  static readonly ALLOYDB: 'alloydb';

  static readonly APACHECOUCHDB: 'apachecouchdb';

  static readonly APACHEHBASE: 'apachehbase';

  static readonly APACHEHIVE: 'apachehive';

  static readonly APACHEIMPALA: 'apacheimpala';

  static readonly APACHEPHOENIX: 'apachephoenix';

  static readonly ASANA: 'asana';

  static readonly ATHENA: 'athena';

  static readonly AUTHORIZENET: 'authorizenet';

  static readonly AVALARA: 'avalara';

  static readonly AZUREAD: 'azuread';

  static readonly AZUREDATACATALOG: 'azuredatacatalog';

  static readonly AZUREDEVOPS: 'azuredevops';

  static readonly BASECAMP: 'basecamp';

  static readonly BIGCOMMERCE: 'bigcommerce';

  static readonly BIGSQL: 'bigsql';

  static readonly BING: 'bing';

  static readonly BINGADS: 'bingads';

  static readonly BOX: 'box';

  static readonly BULLHORNCRM: 'bullhorncrm';

  static readonly CASSANDRA: 'cassandra';

  static readonly CLOUDANT: 'cloudant';

  static readonly COCKROACHDB: 'cockroachdb';

  static readonly CONFLUENCE: 'confluence';

  static readonly COSMOSDB: 'cosmosdb';

  static readonly COUCHBASE: 'couchbase';

  static readonly DATABRICKS: 'databricks';

  static readonly DOCUSIGN: 'docusign';

  static readonly DROPBOX: 'dropbox';

  static readonly DYNAMICSCRM: 'dynamicscrm';

  static readonly DYNAMICSGP: 'dynamicsgp';

  static readonly DYNAMICSNAV: 'dynamicsnav';

  static readonly EBAY: 'ebay';

  static readonly EBAYANALYTICS: 'ebayanalytics';

  static readonly ELASTICSEARCH: 'elasticsearch';

  static readonly EPICORERP: 'epicorerp';

  static readonly EXACTONLINE: 'exactonline';

  static readonly EXCHANGE: 'exchange';

  static readonly FRESHDESK: 'freshdesk';

  static readonly GITHUB: 'github';

  static readonly GOOGLEADS: 'googleads';

  static readonly GOOGLEADSMANAGER: 'googleadsmanager';

  static readonly GOOGLEANALYTICS: 'googleanalytics';

  static readonly GOOGLEBIGQUERY: 'googlebigquery';

  static readonly GOOGLEDRIVE: 'googledrive';

  static readonly GOOGLESEARCH: 'googlesearch';

  static readonly GOOGLESHEETS: 'googlesheets';

  static readonly GOOGLESPANNER: 'googlespanner';

  static readonly GRAPHQL: 'graphql';

  static readonly GREENPLUM: 'greenplum';

  static readonly H2: 'h2';

  static readonly HANA: 'hana';

  static readonly HIGHRISE: 'highrise';

  static readonly HIVE: 'hive';

  static readonly HUBSPOT: 'hubspot';

  static readonly IBMCLOUDOBJECTSTORAGE: 'ibmcloudobjectstorage';

  static readonly IBMCLOUDSQLQUERY: 'ibmcloudsqlquery';

  static readonly IMPALA: 'impala';

  static readonly INFORMIX: 'informix';

  static readonly INSTAGRAM: 'instagram';

  static readonly JIRA: 'jira';

  static readonly JIRASERVICEDESK: 'jiraservicedesk';

  static readonly KINTONE: 'kintone';

  static readonly LINKEDIN: 'linkedin';

  static readonly LINKEDINADS: 'linkedinads';

  static readonly MAILCHIMP: 'mailchimp';

  static readonly MARIADB: 'mariadb';

  static readonly MARKETO: 'marketo';

  static readonly MARKLOGIC: 'marklogic';

  static readonly MICROSOFTPLANNER: 'microsoftplanner';

  static readonly MICROSOFTPROJECT: 'microsoftproject';

  static readonly MONDAY: 'monday';

  static readonly MONGODB: 'mongodb';

  static readonly MSSQL: 'mssql';

  static readonly MSTEAMS: 'msteams';

  static readonly MYOB: 'myob';

  static readonly MYSQL: 'mysql';

  static readonly NETSUITE: 'netsuite';

  static readonly ODATA: 'odata';

  static readonly ODOO: 'odoo';

  static readonly ONEDRIVE: 'onedrive';

  static readonly ONENOTE: 'onenote';

  static readonly ORACLEELOQUA: 'oracleeloqua';

  static readonly ORACLEERP: 'oracleerp';

  static readonly ORACLEHCM: 'oraclehcm';

  static readonly ORACLESALESCLOUD: 'oraclesalescloud';

  static readonly ORACLESE: 'oracle';

  static readonly ORACLESERVICECLOUD: 'oracleservicecloud';

  static readonly OUTREACH: 'outreach';

  static readonly PAYLOCITY: 'paylocity';

  static readonly PAYPAL: 'paypal';

  static readonly PINTEREST: 'pinterest';

  static readonly PIPEDRIVE: 'pipedrive';

  static readonly POSTGRES: 'postgres';

  static readonly POWERBIXMLA: 'powerbixmla';

  static readonly PRESTO: 'presto';

  static readonly QUICKBASE: 'quickbase';

  static readonly QUICKBOOKS: 'quickbooks';

  static readonly QUICKBOOKSONLINE: 'quickbooksonline';

  static readonly RECKON: 'reckon';

  static readonly RECKONACCOUNTSHOSTED: 'reckonaccountshosted';

  static readonly REDIS: 'redis';

  static readonly REDSHIFT: 'redshift';

  static readonly SAGEINTACCT: 'sageintacct';

  static readonly SALESFORCE: 'salesforce';

  static readonly SALESFORCEPARDOT: 'salesforcepardot';

  static readonly SALESLOFT: 'salesloft';

  static readonly SAPARIBAPROCUREMENT: 'saparibaprocurement';

  static readonly SAPSUCCESSFACTORS: 'sapsuccessfactors';

  static readonly SASDATASETS: 'sasdatasets';

  static readonly SASXPT: 'sasxpt';

  static readonly SENDGRID: 'sendgrid';

  static readonly SERVICENOW: 'servicenow';

  static readonly SHIPSTATION: 'shipstation';

  static readonly SHOPIFY: 'shopify';

  static readonly SINGLESTORE: 'singlestore';

  static readonly SLACK: 'slack';

  static readonly SMARTSHEET: 'smartsheet';

  static readonly SNOWFLAKE: 'snowflake';

  static readonly SPARK: 'spark';

  static readonly SPLUNK: 'splunk';

  static readonly SQUARE: 'square';

  static readonly STRIPE: 'stripe';

  static readonly SUGARCRM: 'sugarcrm';

  static readonly SUITECRM: 'suitecrm';

  static readonly SURVEYMONKEY: 'surveymonkey';

  static readonly SYBASE: 'sybase';

  static readonly SYBASEIQ: 'sybaseiq';

  static readonly TABLEAUCRM: 'tableaucrm';

  static readonly TALLY: 'tally';

  static readonly TAXJAR: 'taxjar';

  static readonly TERADATA: 'teradata';

  static readonly TRELLO: 'trello';

  static readonly TWILIO: 'twilio';

  static readonly TWITTERADS: 'twitterads';

  static readonly VEEVAVAULT: 'veevavault';

  static readonly WAVEFINANCIAL: 'wavefinancial';

  static readonly WOOCOMMERCE: 'woocommerce';

  static readonly WORDPRESS: 'wordpress';

  static readonly WORKDAY: 'workday';

  static readonly XBASE: 'xbase';

  static readonly XERO: 'xero';

  static readonly YOUTUBEANALYTICS: 'youtubeanalytics';

  static readonly ZENDESK: 'zendesk';

  static readonly ZOHOBOOKS: 'zohobooks';

  static readonly ZOHOCREATOR: 'zohocreator';

  static readonly ZOHOCRM: 'zohocrm';

  static readonly ZOHOINVENTORY: 'zohoinventory';

  static readonly ZOHOPROJECTS: 'zohoprojects';

  static readonly ZUORA: 'zuora';

  /**
   * Translate the enum label (field name) to the value.
   * For simple enums (that don't define explicit values), the value is a string
   * that matches the label.
   * @param label the enum label
   * @return the associated value
   */
  static toValue(label: string | null, failIfInvalid?: boolean): string | null;

  /**
   * Translate the enum value to the label (field name).
   * @param value the enum value
   * @return the enum label
   */
  static toLabel(value: string | null, failIfInvalid?: boolean): string | null;

  /**
   * Get the index of the label in the enum.
   * @param label the enum label (field name)
   * @return index or -1 if not found
   */
  static labelIndex(label: string | null, failIfInvalid?: boolean): number;

  /**
   * Get the index of the value in the enum.
   * @param value the enum value
   * @return index or -1 if not found
   */
  static valueIndex(value: string | null, failIfInvalid?: boolean): number;

  /**
   * @return value type of values in this enum
   */
  static valueType(): ValueType;

  /**
   * Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
   * the field name (same as the labels).
   */
  static values(): C3.Array<string | null>;

  /**
   * Return an array of all enumeration labels. These are the same as the field names of the enum type.
   */
  static labels(): C3.Array<string | null>;

  /**
   * Return a map of all enumeration values to their labels.
   */
  static valueToLabels(): C3.Map<string | null, string | null>;

  /**
   * Return a map of all enumeration labels to their values.
   */
  static labelToValues(): C3.Map<string | null, string | null>;

  /**
   * Is value a valid value for this enum type?
   * @param value the enum value
   */
  static containsValue(value: string): boolean;

  /**
   * Calls provided action for each enum label.
   */
  static eachLabel(action?: λConsumer<string> | null): void;

  /**
   * Calls provided action for each enum value.
   */
  static eachValue(action?: λConsumer<string> | null): void;
}


interface λConsumer<T> {
  (t: T): void
}
