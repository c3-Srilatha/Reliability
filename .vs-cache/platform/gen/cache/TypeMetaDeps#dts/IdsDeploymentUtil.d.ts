// TypeScript definitions for the C3 type IdsDeploymentUtil

/**
 * Utility for deploying IDS to an environment
 *
 * @remarks this represents a value passed to a method that expects an instance of IdsDeploymentUtil
 */
declare interface IIdsDeploymentUtil {
}

/**
 * Utility for deploying IDS to an environment
 *
 * @remarks this represents a made instance of IdsDeploymentUtil
 */
declare class IdsDeploymentUtil {

  /**
   * Will create the {@link Tenant} and {@link Tag} for {@link IdsDevClusterSetupSpec.idsControlTenant} and
   * {@link IdsDevClusterSetupSpec.idsControlTag} if they do not exist.
   *
   * Utilizes the following spec fields:
   * - {@link IdsDevClusterSetupSpec.idsControlTenant}
   * - {@link IdsDevClusterSetupSpec.idsControlTag}
   */
  static createControlTenantTag(spec: IdsDevClusterSetupSpec, tracker: IdsDevClusterSetupResult): IdsDevClusterSetupResult;

  /**
   * Deploys the developerAdmin package to {@link IdsDevClusterSetupSpec.idsControlTenant} and
   * {@link IdsDevClusterSetupSpec.idsControlTag} specified in the spec. Deployment happens through {@link Tag.deploy}.
   * Any errors during provisioning will be surfaced.
   *
   * Utilizes the following spec fields:
   * - {@link IdsDevClusterSetupSpec.idsControlTenant}
   * - {@link IdsDevClusterSetupSpec.idsControlTag}
   */
  static deployIdsControlTag(spec: IdsDevClusterSetupSpec, tracker: IdsDevClusterSetupResult): IdsDevClusterSetupResult;

  /**
   * Creates a VanityUrl for the tag deployed to in {@link #deployIdsControlTag}.
   *
   * Utilizes the following spec fields:
   * - {@link IdsDevClusterSetupSpec.idsControlTenant}
   * - {@link IdsDevClusterSetupSpec.idsControlTag}
   * - {@link IdsDevClusterSetupSpec.controlVanityUrl}
   */
  static createIdsControlVanityUrl(spec: IdsDevClusterSetupSpec, tracker: IdsDevClusterSetupResult): IdsDevClusterSetupResult;

  /**
   * Creates a 'doc' tag in {@link IdsDevClusterSetupSpec.idsControlTenant} to support the documentation feature in IDS.
   *
   * Utilizes the following spec fields:
   * - {@link IdsDevClusterSetupSpec.idsControlTenant}
   * - {@link IdsDevClusterSetupSpec.idsControlTag}
   */
  static setUpIdsDocumentationTag(spec: IdsDevClusterSetupSpec, tracker: IdsDevClusterSetupResult): IdsDevClusterSetupResult;

  /**
   * Enables all of the Acls that are required for IDS to function correctly.
   *
   * Utilizes the following spec fields:
   * - {@link IdsDevClusterSetupSpec.idsControlTenant}
   * - {@link IdsDevClusterSetupSpec.idsControlTag}
   */
  static setUpIdsControlAclPrivileges(spec: IdsDevClusterSetupSpec, tracker: IdsDevClusterSetupResult): IdsDevClusterSetupResult;

  /**
   * Sets the {@link PackageManager.config} for the {@link IdsDevClusterSetupSpec.idsControlTag}.
   * NOTE: The user used for this config should be the same one that is created in {@link #registerPmUserInMarketplace}.
   *
   * Utilizes the following spec fields:
   * - {@link IdsDevClusterSetupSpec.idsControlTenant}
   * - {@link IdsDevClusterSetupSpec.idsControlTag}
   * - {@link IdsDevClusterSetupSpec.marketplaceVanityUrl}
   * - {@link IdsDevClusterSetupSpec.idsPmUserId}
   * - {@link IdsDevClusterSetupSpec.idsPmUserPass}
   *
   * Configs set:
   * - {@link PackageManager}
   *   - paths: url, auth
   *   - override: {@link ConfigOverride.APP}
   */
  static configureIdsControlPackageManager(spec: IdsDevClusterSetupSpec, tracker: IdsDevClusterSetupResult): IdsDevClusterSetupResult;

  /**
   * Creates the same {@link Pod} created by {@link #registerDevelopmentPodInMarketplace} in
   * {@link IdsDevClusterSetupSpec.idsControlTag} so that IDS has access to the {@link Pod} information for where it
   * exists.
   *
   * Utilizes the following spec fields:
   * - {@link IdsDevClusterSetupSpec.idsControlTenant}
   * - {@link IdsDevClusterSetupSpec.idsControlTag}
   * - {@link IdsDevClusterSetupSpec.idsControlCanonicalUrl}
   */
  static registerDevelopmentPodInIdsControl(spec: IdsDevClusterSetupSpec, tracker: IdsDevClusterSetupResult): IdsDevClusterSetupResult;

  /**
   * Creates the same {@link PlatformOrganization} created by {@link #registerPlatformOrganizationInMarketplace} in
   * {@link IdsDevClusterSetupSpec.idsControlTag} so that IDS has access to its own {@link PlatformOrganization}
   * information.
   *
   * Utilizes the following spec fields:
   * - {@link IdsDevClusterSetupSpec.idsControlTenant}
   * - {@link IdsDevClusterSetupSpec.idsControlTag}
   * - {@link IdsDevClusterSetupSpec.idsOrgName}
   * - {@link IdsDevClusterSetupSpec.idsPmUserId}
   * - {@link IdsDevClusterSetupSpec.idsControlCanonicalUrl}
   */
  static registerPlatformOrganizationInIdsControl(spec: IdsDevClusterSetupSpec, tracker: IdsDevClusterSetupResult): IdsDevClusterSetupResult;

  /**
   * Creates the IDS deployment's 'c3euser' who is in charge of managing the dev environment and deployment environment
   * tenants. The user has C3.Group.ClusterAdmin permissions in the c3/c3 tag of
   * {@link IdsDevClusterSetupSpec.idsControlCanonicalUrl} so that it can manage all of its tenants.
   *
   * Utilizes the following spec fields:
   * - {@link IdsDevClusterSetupSpec.idsControlTenant}
   * - {@link IdsDevClusterSetupSpec.idsControlTag}
   * - {@link IdsDevClusterSetupSpec.idsC3euserEmail}
   * - {@link IdsDevClusterSetupSpec.idsC3euserId}
   * - {@link IdsDevClusterSetupSpec.idsC3euserPass}
   */
  static registerC3euser(spec: IdsDevClusterSetupSpec, tracker: IdsDevClusterSetupResult): IdsDevClusterSetupResult;

  /**
   * Properly configures {@link AllEnvRemote} so that IDS can find information about its own {@link Pod} and
   * {@link PlatformOrganization}.
   *
   * Utilizes the following spec fields:
   * - {@link IdsDevClusterSetupSpec.idsControlTenant}
   * - {@link IdsDevClusterSetupSpec.idsControlTag}
   * - {@link IdsDevClusterSetupSpec.controlVanityUrl}
   * - {@link IdsDevClusterSetupSpec.idsC3euserId}
   * - {@link IdsDevClusterSetupSpec.idsC3euserPass}
   *
   * Configs set:
   * - {@link AllEnvRemote}
   *   - paths: url, auth
   *   - override: {@link ConfigOverride.APP}
   */
  static configureAllEnvRemote(spec: IdsDevClusterSetupSpec, tracker: IdsDevClusterSetupResult): IdsDevClusterSetupResult;

  /**
   * Properly configures {@link C3AllEnvRemote} so that IDS can make deployments using a {@link DeploymentPipeline} and
   * manage its own cluster's tenants.
   *
   * Utilizes the following spec fields:
   * - {@link IdsDevClusterSetupSpec.idsControlTenant}
   * - {@link IdsDevClusterSetupSpec.idsControlTag}
   * - {@link IdsDevClusterSetupSpec.idsC3euserId}
   * - {@link IdsDevClusterSetupSpec.idsC3euserPass}
   *
   * Configs set:
   * - {@link C3AllEnvRemote}
   *   - paths: url, auth
   *   - override: {@link ConfigOverride.APP}
   */
  static configureC3AllEnvRemote(spec: IdsDevClusterSetupSpec, tracker: IdsDevClusterSetupResult): IdsDevClusterSetupResult;

  /**
   * Properly configures {@link DevEnvironmentConfig} so that IDS enables both space and Marketplace UIs and sets the
   * desired VanityUrl domain.
   * NOTE: The configured VanityUrl domain will fall back on {@link IdsDevClusterSetupSpec.controlVanityUrl} if
   * {@link IdsDevClusterSetupSpec.idsDesiredVanityUrlDomain} is not supplied.
   *
   * Utilizes the following spec fields:
   * - {@link IdsDevClusterSetupSpec.idsControlTenant}
   * - {@link IdsDevClusterSetupSpec.idsControlTag}
   * - {@link IdsDevClusterSetupSpec.idsDesiredVanityUrlDomain}
   * - {@link IdsDevClusterSetupSpec.controlVanityUrl}
   *
   * Configs set:
   * - {@link DevEnvironmentConfig}
   *   - paths: spaceEnabled, marketplaceEnabled, devTagDomain
   *   - override: {@link ConfigOverride.APP}
   */
  static setDevEnvironmentConfig(spec: IdsDevClusterSetupSpec, tracker: IdsDevClusterSetupResult): IdsDevClusterSetupResult;

  /**
   * Configures whether or not IDS will be reading artifacts through {@link MarketplacePackage}s or
   * {@link MetadataRepositoryBuild}s. See {@link IdsDevClusterSetupSpecs.useMarketplace}.
   *
   * Utilizes the following spec fields:
   * - {@link IdsDevClusterSetupSpec.idsControlTenant}
   * - {@link IdsDevClusterSetupSpec.idsControlTag}
   * - {@link IdsDevClusterSetupSpec.useMarketplace}
   *
   * Configs set:
   * - {@link MarketplaceConfig}
   *   - paths: readArtifactsEnabled
   *   - override: {@link ConfigOverride.CLUSTER}
   */
  static configureIdsDeploymentMode(spec: IdsDevClusterSetupSpec, tracker: IdsDevClusterSetupResult): IdsDevClusterSetupResult;

  /**
   * If {@link IdsDevClusterSetupSpec.useJenkins} is true, then this will create the {@link TenantConfig}s and
   * {@link FileSystem#mounts} needed for the {@link AppsPipelineTrigger} to run correctly.
   * See {@link IdsDevClusterSetupSpec.idsCloudStorageBuildArtifactFsScheme} and
   * {@link IdsDevClusterSetupSpec.idsCloudStorageBuildArtifactMount}.
   *
   * Utilizes the following spec fields:
   * - {@link IdsDevClusterSetupSpec.idsControlTenant}
   * - {@link IdsDevClusterSetupSpec.idsControlTag}
   * - {@link IdsDevClusterSetupSpec.useJenkins}
   * - {@link IdsDevClusterSetupSpec.idsCloudStorageBuildArtifactFsScheme}
   * - {@link IdsDevClusterSetupSpec.idsCloudStorageBuildArtifactMount}
   * - {@link IdsDevClusterSetupSpec.jenkinsInstance}
   * - {@link IdsDevClusterSetupSpec.jenkinsUrl}
   * - {@link IdsDevClusterSetupSpec.jenkinsAuth}
   *
   * Configs set:
   * - `Jenkins.make({ name: spec.jenkinsInstance }).config(true)`
   *   - paths: url, auth
   *   - override: {@link ConfigOverride.ROOT}
   */
  static configureIdsJenkins(spec: IdsDevClusterSetupSpec, tracker: IdsDevClusterSetupResult): IdsDevClusterSetupResult;

  /**
   * Configures whether or not {@link DeploymentStateMachine}s should use presigned urls when accessing artifacts.
   * See {@link IdsDevClusterSetupSpec.usePresignedUrlInRemoteDeployments}.
   *
   * Utilizes the following spec fields:
   * - {@link IdsDevClusterSetupSpec.idsControlTenant}
   * - {@link IdsDevClusterSetupSpec.idsControlTag}
   * - {@link IdsDevClusterSetupSpec.usePresignedUrlInRemoteDeployments}
   *
   * Configs set:
   * - {@link DeploymentPipelineConfig}
   *   - paths: deployWithPresignedUrl
   *   - override: {@link ConfigOverride.APP}
   */
  static configureDeploymentPipelines(spec: IdsDevClusterSetupSpec, tracker: IdsDevClusterSetupResult): IdsDevClusterSetupResult;

  /**
   * Calls {@link HttpTunnelConfig.addToWhiteList} for the {@link IdsSetupSpec.idsControlCanonicalUrl}, so that tunneled
   * requests for development tools will not be blocked.
   *
   * Utilizes the following spec fields:
   * - {@link IdsDevClusterSetupSpec.idsControlTenant}
   * - {@link IdsDevClusterSetupSpec.idsControlTag}
   * - {@link IdsDevClusterSetupSpec.idsControlCanonicalUrl}
   *
   * Configs set:
   * - {@link HttpTunnelConfig}
   *   - paths: whitelist
   *   - override: {@link ConfigOverride.CLUSTER}
   */
  static configureHttpTunnelConfig(spec: IdsDevClusterSetupSpec, tracker: IdsDevClusterSetupResult): IdsDevClusterSetupResult;

  /**
   * IMPORTANT: This function should be run in the c3/c3 tag of the IDS cluster. Invoker must be a C3.Group.ClusterAdmin
   *
   * Runs the following functions in order in the proper contexts:
   * {@link #createControlTenantTag}
   * {@link #deployIdsControlTag}
   * {@link #createIdsControlVanityUrl}
   * {@link #setUpIdsDocumentationTag}
   * {@link #setUpIdsControlAclPrivileges}
   * {@link #configureIdsControlPackageManager}
   * {@link #registerDevelopmentPodInIdsControl}
   * {@link #registerPlatformOrganizationInIdsControl}
   * {@link #registerC3euser}
   * {@link #configureAllEnvRemote}
   * {@link #configureC3AllEnvRemote}
   * {@link #setDevEnvironmentConfig}
   * {@link #configureIdsDeploymentMode}
   * {@link #configureIdsJenkins}
   * {@link #configureDeploymentPipelines}
   * {@link #configureHttpTunnelConfig}
   *
   * @param spec
   *    The spec that will be used in all of the functions being executed.
   * @return
   *    The result of the setup. Each step has a flag that corresponds to whether or not the step ran correctly.
   *    If there were any errors, they will be available in {@link IdsDevClusterSetupResult.errors}.
   *    This function should never fail, and should always return a {@link IdsDevClusterSetupResult}.
   */
  static setUpDevCluster(spec: IdsDevClusterSetupSpec): IdsDevClusterSetupResult;

  /**
   * Registers the IDS control {@link Pod} in Marketplace ({@link IdsDevClusterSetupSpec.marketplaceVanityUrl}).
   *
   * Utilizes the following spec fields:
   * - {@link IdsDevClusterSetupSpec.idsControlCanonicalUrl}
   */
  static registerDevelopmentPodInMarketplace(spec: IdsDevClusterSetupSpec, tracker: IdsMarketplaceRegistrationResult): IdsMarketplaceRegistrationResult;

  /**
   * Creates a {@link User} to represent the IDS control's PackageManager and Marketplace admin.
   * {@link User} is created using {@link IdsDevClusterSetupSpec.idsPmUserId},
   * {@link IdsDevClusterSetupSpec.idsPmUserPass}, and {@link IdsDevClusterSetupSpec.idsPmUserEmail}. The user is
   * assigned to Group.AppsAdmin.
   *
   * Utilizes the following spec fields:
   * - {@link IdsDevClusterSetupSpec.idsPmUserEmail}
   * - {@link IdsDevClusterSetupSpec.idsPmUserId}
   * - {@link IdsDevClusterSetupSpec.idsPmUserPass}
   */
  static registerPmUserInMarketplace(spec: IdsDevClusterSetupSpec, tracker: IdsMarketplaceRegistrationResult): IdsMarketplaceRegistrationResult;

  /**
   * Creates a {@link PlatformOrganization} representing the IDS control tag in Marketplace
   * ({@link IdsDevClusterSetupSpec.marketplaceVanityUrl}).
   * See {@link IdsDevClusterSetupSpec.idsOrgName}.
   *
   * Utilizes the following spec fields:
   * - {@link IdsDevClusterSetupSpec.idsOrgName}
   * - {@link IdsDevClusterSetupSpec.idsPmUserId}
   * - {@link IdsDevClusterSetupSpec.idsControlCanonicalUrl}
   */
  static registerPlatformOrganizationInMarketplace(spec: IdsDevClusterSetupSpec, tracker: IdsMarketplaceRegistrationResult): IdsMarketplaceRegistrationResult;

  /**
   * IMPORTANT: This function should be run in Marketplace;s static console
   * ({@link IdsDevClusterSetupSpec.marketplaceVanityUrl}).
   *
   * Runs the following functions in order in the proper contexts:
   * {@link #registerDevelopmentPodInMarketplace}
   * {@link #registerPmUserInMarketplace}
   * {@link #registerPlatformOrganizationInMarketplace}
   *
   * @param spec
   *    The spec that will be used in all of the functions being executed.
   * @return
   *    The result of the setup. Each step has a flag that corresponds to whether or not the step ran correctly.
   *    If there were any errors, they will be available in {@link IdsMarketplaceRegistrationResult.errors}.
   *    This function should never fail, and should always return a {@link IdsMarketplaceRegistrationResult}.
   */
  static registerIdsInMarketplace(spec: IdsDevClusterSetupSpec): IdsMarketplaceRegistrationResult;

  /**
   * Creates the IDS control c3euser as a C3.Group.ClusterAdmin in the new environment so that IDS can manage this
   * cluster.
   *
   * Utilizes the following spec fields:
   * - {@link IdsDeploymentEnvironmentSetupSpec.idsC3euserEmail}
   * - {@link IdsDeploymentEnvironmentSetupSpec.idsC3euserId}
   * - {@link IdsDeploymentEnvironmentSetupSpec.idsC3euserPass}
   */
  static setUpC3euserInDeploymentEnvironment(spec: IdsDeploymentEnvironmentSetupSpec, tracker: IdsDeploymentEnvironmentSetupResult): IdsDeploymentEnvironmentSetupResult;

  /**
   * IMPORTANT: This function should be run in the c3/c3 tag of the deployment environment (QA, Prod, etc).
   * NOTE: Currently this function does not have the ability to create a Cluster, it must be brought up manually.
   *
   * Runs the following functions in order in the proper contexts:
   * {@link #setUpC3euserInDeploymentEnvironment}
   *
   * @param spec
   *    The spec that will be used in all of the functions being executed.
   * @return
   *    The result of the setup. Each step has a flag that corresponds to whether or not the step ran correctly.
   *    If there were any errors, they will be available in {@link IdsDeploymentEnvironmentSetupResult.errors}.
   *    This function should never fail, and should always return a {@link IdsDeploymentEnvironmentSetupResult}.
   */
  static setUpDeploymentEnvironment(spec: IdsDeploymentEnvironmentSetupSpec): IdsDeploymentEnvironmentSetupResult;

  /**
   * Upserts a {@Link Pod} representing the deployment environment in the IDS control tag.
   *
   * Utilizes the following spec fields:
   * - {@link IdsDeploymentEnvironmentSetupSpec.idsControlTenant}
   * - {@link IdsDeploymentEnvironmentSetupSpec.idsControlTag}
   * - {@link IdsDeploymentEnvironmentSetupSpec.deploymentEnvironmentCanonicalUrl}
   * - {@link IdsDeploymentEnvironmentSetupSpec.deploymentEnvironmentPodName}
   */
  static registerDeploymentEnvironmentPod(spec: IdsDeploymentEnvironmentSetupSpec, tracker: IdsDeploymentEnvironmentRegistrationResult): IdsDeploymentEnvironmentRegistrationResult;

  /**
   * Creates a {@Link DeploymentEnvironment} using the {@Link Pod} created in {@link #registerDeploymentEnvironmentPod}.
   *
   * Utilizes the following spec fields:
   * - {@link IdsDeploymentEnvironmentSetupSpec.idsControlTenant}
   * - {@link IdsDeploymentEnvironmentSetupSpec.idsControlTag}
   * - {@link IdsDeploymentEnvironmentSetupSpec.targetSpace}
   * - {@link IdsDeploymentEnvironmentSetupSpec.deploymentEnvironmentCanonicalUrl}
   * - {@link IdsDeploymentEnvironmentSetupSpec.deploymentEnvironmentName}
   */
  static registerDeploymentEnvironment(spec: IdsDeploymentEnvironmentSetupSpec, tracker: IdsDeploymentEnvironmentRegistrationResult): IdsDeploymentEnvironmentRegistrationResult;

  /**
   * IMPORTANT: This function should be run in the c3/c3 tag of the IDS cluster.
   *
   * Runs the following functions in order in the proper contexts:
   * {@link #registerDeploymentEnvironmentPod}
   * {@link #registerDeploymentEnvironment}
   *
   * @param spec
   *    The spec that will be used in all of the functions being executed.
   * @return
   *    The result of the setup. Each step has a flag that corresponds to whether or not the step ran correctly.
   *    If there were any errors, they will be available in {@link IdsDeploymentEnvironmentRegistrationResult.errors}.
   *    This function should never fail, and should always return a {@link IdsDeploymentEnvironmentRegistrationResult}.
   */
  static registerDeploymentEnvironmentInIdsControl(spec: IdsDeploymentEnvironmentSetupSpec): IdsDeploymentEnvironmentRegistrationResult;

  /**
   * Sets the account information for sending messages via Twilio. This is required for alerts.
   * All the fields mentioned below need to be specified, or nothing will be configured for Twilio
   *
   * Utilizes the following spec fields:
   * - {@link IdsDevClusterSetupSpec.idsControlTenant}
   * - {@link IdsDevClusterSetupSpec.idsControlTag}
   * - {@link IdsDevClusterSetupSpec.twilioSid}
   * - {@link IdsDevClusterSetupSpec.twilioFrom}
   * - {@link IdsDevClusterSetupSpec.twilioToken}
   * - {@link IdsDevClusterSetupSpec.twilioUrl}
   *
   * Configs set:
   * - {@link Twilio}
   *   - paths: url, auth, sid, from
   *   - override: {@link ConfigOverride.CLUSTER}
   */
  static configureTwilioAccount(spec: IdsDevClusterSetupSpec, tracker: IdsDevClusterSetupResult): IdsDevClusterSetupResult;
}

