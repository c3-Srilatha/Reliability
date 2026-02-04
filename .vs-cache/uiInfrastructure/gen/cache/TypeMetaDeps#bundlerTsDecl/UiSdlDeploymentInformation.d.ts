export interface UiSdlDeploymentInformation {

  readonly envUrl?: string | null;
  withEnvUrl(envUrl: string | null): UiSdlDeploymentInformation;

  readonly serverVersion?: string | null;
  withServerVersion(serverVersion: string | null): UiSdlDeploymentInformation;

  readonly rootPkgName?: string | null;
  withRootPkgName(rootPkgName: string | null): UiSdlDeploymentInformation;

  readonly rootPkgVersion?: string | null;
  withRootPkgVersion(rootPkgVersion: string | null): UiSdlDeploymentInformation;

  readonly dependencyPkgsVersion?: C3.Map<string | null, any>;
  withDependencyPkgsVersion(dependencyPkgsVersion: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDeploymentInformation;

  readonly artifactVersions?: C3.Map<string | null, SemanticVersion | null>;
  withArtifactVersions(artifactVersions: C3.Map<string | null, SemanticVersion | null> | {[key: string | null]: ISemanticVersion | null}): UiSdlDeploymentInformation;

  readonly artifactVersionsAsStrings?: C3.Map<string | null, string | null>;
  withArtifactVersionsAsStrings(artifactVersionsAsStrings: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): UiSdlDeploymentInformation;
}

