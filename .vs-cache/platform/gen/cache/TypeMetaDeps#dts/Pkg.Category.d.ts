// TypeScript definitions for the C3 type Pkg.Category

/**
 * Enumeration of Pkg path category.
 *
 * @remarks this represents a value passed to a method that expects an instance of Pkg.Category
 */
declare namespace Pkg {
  export interface ICategory {

    /**
     * Source code of the C3 application. Includes c3 type files, js, py, R and metadata (such as Metrics).
     */
    readonly SRC: 'src';

    /**
     * Metadata of the C3 application. E.g. Metric.
     */
    readonly METADATA: 'metadata';

    /**
     * Seed data of the C3 application. E.g. CronJob.
     */
    readonly SEED: 'seed';

    /**
     * Seed config of the C3 application. E.g. MailConfig.
     */
    readonly CONFIG: 'config';

    /**
     * C3 Notebook / .c3nb and Jupyter Notebook files.
     */
    readonly NOTEBOOK: 'notebook';

    /**
     * UI code, metadata and resources for C3 application.
     */
    readonly UI: 'ui';

    /**
     * Generic resource for C3 application.
     */
    readonly RESOURCE: 'resource';

    /**
     * Sample data for a C3 Application. This includes entity types that are intended to be stateless E.g. demo data
     */
    readonly DATA: 'data';

    /**
     * Migration scripts for the C3 application packages to be run when bumping dependency to a specific version of this
     * package. E.g. when application developer uses C3 VS Code IDE to bump the version of `platform` package dependency
     * from v8.4 to v8.5 then all the migration scripts from `/platform/migration/8.5/` will be run.
     *
     * Migration scripts can be a `.js` or `.py` source code or `.json` serialized version of a `lambda(pkg: !Pkg)`.
     * The lambda will be called with the writable application package and expectation is that script will migrate
     * package artifacts that are declared in the provided package as needed. Artifacts declared in the depending packages
     * will be read only.
     *
     * Migration scripts are run in the order of their names. E.g. `001-format-c3typ.js` will be run before
     * `002-migrate-py-runtimes.py`.
     *
     * Migration script names can contain action requirement as a secondary file extension. E.g.
     * `003-migrate-ui.node.js`.
     *
     * A given migration script has to complete without errors before next migration script is run. If a migration script
     * fails the migration process will be aborted and the package will be left in the partially migrated state.
     *
     * Status of each migration script is stored in the `migration/status/<pkg>.<version>.json` files. E.g. every
     * application package that has been upgraded to v8.5 platform will have a `migration/status/platform.8.5.json` file.
     * This file is instance of {@link Pkg.MigrationStatus.c3typ} and contains the status of each migration script from
     * `/platform/migration/8.5/`.
     *
     * @see {@link Pkg.Store#migratePkg}
     */
    readonly MIGRATION: 'migration';

    /**
     * Category for API Version compatibility transforms.
     */
    readonly COMPAT: 'compat';

    /**
     * These types of file define a package (*.c3pkg.json file).
     */
    readonly PACKAGE: '*.c3pkg.json';

    /**
     * These types of file define a partial dependency lock for a set of packages.
     * During dependency resolution, this file can fix dependencies to exact versions.
     * Extension is (*.c3pkg.lock.json)
     */
    readonly PACKAGE_LOCK: '*.c3pkg.lock.json';

    /**
     * Catch all category
     */
    readonly OTHER: 'other';

    /**
     * See {@link TestRunnerKind} Server side jasmine test files.
     */
    readonly JASMINE: 'jasmine';

    /**
     * See {@link TestRunnerKind} Server side pytest test files.
     */
    readonly PYTEST: 'pytest';

    /**
     * See {@link TestRunnerKind} Client side (browser) jasmine test resources.
     */
    readonly BROWSER: 'browser';

    /**
     * See {@link /zoo/test/poly/doc/poly-test.c3doc.md} poly test files.
     */
    readonly POLY: 'poly';

    /**
     * See {@link TestRunnerKind} Canonical data integration test files.
     */
    readonly CANONICAL: 'canonical';

    /**
     * See {@link TestRunnerKind} Performance test files.
     */
    readonly PERF: 'perf';

    /**
     * See {@link TypeMetaDeps} Cached files for TypeMeta dependencies.
     */
    readonly CACHE: 'cache';
  }
}

/**
 * Enumeration of Pkg path category.
 *
 * @remarks this represents a made instance of Pkg.Category
 */
declare namespace Pkg {
  export class Category {

    /**
     * Source code of the C3 application. Includes c3 type files, js, py, R and metadata (such as Metrics).
     */
    static readonly SRC: 'src';

    /**
     * Metadata of the C3 application. E.g. Metric.
     */
    static readonly METADATA: 'metadata';

    /**
     * Seed data of the C3 application. E.g. CronJob.
     */
    static readonly SEED: 'seed';

    /**
     * Seed config of the C3 application. E.g. MailConfig.
     */
    static readonly CONFIG: 'config';

    /**
     * C3 Notebook / .c3nb and Jupyter Notebook files.
     */
    static readonly NOTEBOOK: 'notebook';

    /**
     * UI code, metadata and resources for C3 application.
     */
    static readonly UI: 'ui';

    /**
     * Generic resource for C3 application.
     */
    static readonly RESOURCE: 'resource';

    /**
     * Sample data for a C3 Application. This includes entity types that are intended to be stateless E.g. demo data
     */
    static readonly DATA: 'data';

    /**
     * Migration scripts for the C3 application packages to be run when bumping dependency to a specific version of this
     * package. E.g. when application developer uses C3 VS Code IDE to bump the version of `platform` package dependency
     * from v8.4 to v8.5 then all the migration scripts from `/platform/migration/8.5/` will be run.
     *
     * Migration scripts can be a `.js` or `.py` source code or `.json` serialized version of a `lambda(pkg: !Pkg)`.
     * The lambda will be called with the writable application package and expectation is that script will migrate
     * package artifacts that are declared in the provided package as needed. Artifacts declared in the depending packages
     * will be read only.
     *
     * Migration scripts are run in the order of their names. E.g. `001-format-c3typ.js` will be run before
     * `002-migrate-py-runtimes.py`.
     *
     * Migration script names can contain action requirement as a secondary file extension. E.g.
     * `003-migrate-ui.node.js`.
     *
     * A given migration script has to complete without errors before next migration script is run. If a migration script
     * fails the migration process will be aborted and the package will be left in the partially migrated state.
     *
     * Status of each migration script is stored in the `migration/status/<pkg>.<version>.json` files. E.g. every
     * application package that has been upgraded to v8.5 platform will have a `migration/status/platform.8.5.json` file.
     * This file is instance of {@link Pkg.MigrationStatus.c3typ} and contains the status of each migration script from
     * `/platform/migration/8.5/`.
     *
     * @see {@link Pkg.Store#migratePkg}
     */
    static readonly MIGRATION: 'migration';

    /**
     * Category for API Version compatibility transforms.
     */
    static readonly COMPAT: 'compat';

    /**
     * These types of file define a package (*.c3pkg.json file).
     */
    static readonly PACKAGE: '*.c3pkg.json';

    /**
     * These types of file define a partial dependency lock for a set of packages.
     * During dependency resolution, this file can fix dependencies to exact versions.
     * Extension is (*.c3pkg.lock.json)
     */
    static readonly PACKAGE_LOCK: '*.c3pkg.lock.json';

    /**
     * Catch all category
     */
    static readonly OTHER: 'other';

    /**
     * See {@link TestRunnerKind} Server side jasmine test files.
     */
    static readonly JASMINE: 'jasmine';

    /**
     * See {@link TestRunnerKind} Server side pytest test files.
     */
    static readonly PYTEST: 'pytest';

    /**
     * See {@link TestRunnerKind} Client side (browser) jasmine test resources.
     */
    static readonly BROWSER: 'browser';

    /**
     * See {@link /zoo/test/poly/doc/poly-test.c3doc.md} poly test files.
     */
    static readonly POLY: 'poly';

    /**
     * See {@link TestRunnerKind} Canonical data integration test files.
     */
    static readonly CANONICAL: 'canonical';

    /**
     * See {@link TestRunnerKind} Performance test files.
     */
    static readonly PERF: 'perf';

    /**
     * See {@link TypeMetaDeps} Cached files for TypeMeta dependencies.
     */
    static readonly CACHE: 'cache';

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

    /**
     * @return true if given category is used for testing; e.g. UNIT_TEST or FUNCTIONAL_TEST
     */
    static isTest(value: string): boolean;
  }
}


interface λConsumer<T> {
  (t: T): void
}
