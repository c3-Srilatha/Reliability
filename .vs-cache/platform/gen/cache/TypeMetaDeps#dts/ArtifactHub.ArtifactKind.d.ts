// TypeScript definitions for the C3 type ArtifactHub.ArtifactKind

/**
 * An enum used to make code more readable when working with {@link ArtifactHub.Artifact#kind}.
 *
 * @remarks this represents a value passed to a method that expects an instance of ArtifactHub.ArtifactKind
 */
declare namespace ArtifactHub {
  export interface IArtifactKind {

    /**
     * Set when calling {@link ArtifactHub#exportArtifacts}
     */
    readonly EXPORT: "EXPORT";

    /**
     * Set when migrating {@link ArtifactHub.Artifact}s that existed prior to the introduction of
     * {@link ArtifactHub#importUpstreamArtifacts}.
     */
    readonly LEGACY_PKG: "LEGACY_PKG";

    /**
     * Set when calling {@link Pkg#zipArtifact} with dependencies
     */
    readonly PKG: "PKG";

    /**
     * Set when calling {@link Pkg#zipArtifact} for a single package
     */
    readonly ROOT_SOURCE: "ROOT_SOURCE";

    /**
     * Set when importing artifacts from the conda repository
     */
    readonly CONDA_PKG: "CONDA_PKG";

    /**
     * Set when importing artifacts from the python package index
     */
    readonly PY_PACKAGE_INDEX_PKG: "PY_PACKAGE_INDEX_PKG";

    /**
     * Set when importing artifacts from the python package index
     */
    readonly PY_PACKAGE_INDEX_SIMPLE: "PY_PACKAGE_INDEX_SIMPLE";

    /**
     * Set when importing artifacts from the npm repository
     */
    readonly NPM_PKG: "NPM_PKG";

    /**
     * Set when importing artifacts from the npm repository
     */
    readonly NPM_PKG_METADATA: "NPM_PKG_METADATA";

    /**
     * Set when calling {@link Microservice.DeployedService#start} for {@link Pkg pkgs}
     * {@link Microservice.PkgConfiguration#createPkgFromConfiguration configured} to run one or more
     * {@link Microservice.Service microservice}.
     */
    readonly CONFIGURED_MICROSERVICE_PKG: "CONFIGURED_MICROSERVICE_PKG";

    /**
     * Set for Jupyter notebooks and similar features in Console and VSCode.
     */
    readonly NOTEBOOK: "NOTEBOOK";

    /**
     * An application package refers to a package that is used directly as an application.
     */
    readonly APPLICATION_CARD: 'Application';

    /**
     * A plugin package refers to a package that is mainly used as a dependency.
     */
    readonly PLUGIN_CARD: 'Plugin';

    /**
     * A quickstart package is an instructional package, which users can modify and play around with.
     */
    readonly QUICKSTART_CARD: 'Quickstart';

    /**
     * An artifact that serves as a supporting document (like documentation) for another artifact
     */
    readonly RESOURCE: "RESOURCE";

    /**
     * An artifact that serves as a documentation for another artifact
     */
    readonly DOC_SITE: "DOC_SITE";

    /**
     * An artifact that serves as a documentation for another artifact (legacy)
     */
    readonly DOCUMENTATION: "DOCUMENTATION";
  }
}

/**
 * An enum used to make code more readable when working with {@link ArtifactHub.Artifact#kind}.
 *
 * @remarks this represents a made instance of ArtifactHub.ArtifactKind
 */
declare namespace ArtifactHub {
  export class ArtifactKind {

    /**
     * Set when calling {@link ArtifactHub#exportArtifacts}
     */
    static readonly EXPORT: "EXPORT";

    /**
     * Set when migrating {@link ArtifactHub.Artifact}s that existed prior to the introduction of
     * {@link ArtifactHub#importUpstreamArtifacts}.
     */
    static readonly LEGACY_PKG: "LEGACY_PKG";

    /**
     * Set when calling {@link Pkg#zipArtifact} with dependencies
     */
    static readonly PKG: "PKG";

    /**
     * Set when calling {@link Pkg#zipArtifact} for a single package
     */
    static readonly ROOT_SOURCE: "ROOT_SOURCE";

    /**
     * Set when importing artifacts from the conda repository
     */
    static readonly CONDA_PKG: "CONDA_PKG";

    /**
     * Set when importing artifacts from the python package index
     */
    static readonly PY_PACKAGE_INDEX_PKG: "PY_PACKAGE_INDEX_PKG";

    /**
     * Set when importing artifacts from the python package index
     */
    static readonly PY_PACKAGE_INDEX_SIMPLE: "PY_PACKAGE_INDEX_SIMPLE";

    /**
     * Set when importing artifacts from the npm repository
     */
    static readonly NPM_PKG: "NPM_PKG";

    /**
     * Set when importing artifacts from the npm repository
     */
    static readonly NPM_PKG_METADATA: "NPM_PKG_METADATA";

    /**
     * Set when calling {@link Microservice.DeployedService#start} for {@link Pkg pkgs}
     * {@link Microservice.PkgConfiguration#createPkgFromConfiguration configured} to run one or more
     * {@link Microservice.Service microservice}.
     */
    static readonly CONFIGURED_MICROSERVICE_PKG: "CONFIGURED_MICROSERVICE_PKG";

    /**
     * Set for Jupyter notebooks and similar features in Console and VSCode.
     */
    static readonly NOTEBOOK: "NOTEBOOK";

    /**
     * An application package refers to a package that is used directly as an application.
     */
    static readonly APPLICATION_CARD: 'Application';

    /**
     * A plugin package refers to a package that is mainly used as a dependency.
     */
    static readonly PLUGIN_CARD: 'Plugin';

    /**
     * A quickstart package is an instructional package, which users can modify and play around with.
     */
    static readonly QUICKSTART_CARD: 'Quickstart';

    /**
     * An artifact that serves as a supporting document (like documentation) for another artifact
     */
    static readonly RESOURCE: "RESOURCE";

    /**
     * An artifact that serves as a documentation for another artifact
     */
    static readonly DOC_SITE: "DOC_SITE";

    /**
     * An artifact that serves as a documentation for another artifact (legacy)
     */
    static readonly DOCUMENTATION: "DOCUMENTATION";

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
}


interface λConsumer<T> {
  (t: T): void
}
