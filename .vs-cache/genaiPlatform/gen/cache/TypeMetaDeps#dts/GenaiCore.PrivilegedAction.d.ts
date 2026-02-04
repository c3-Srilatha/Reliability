// TypeScript definitions for the C3 type GenaiCore.PrivilegedAction

/**
 * IMPORTANT
 *
 * Any changes to this file or the Python implementation file must be accompanied by a c3server commit in `PrivilegedAction.java`
 * to update the fingerprint and the security team must be added as reviewers for the PR. For this reason, try to
 * avoid any updates to this type and keep as much application logic as possible in other types. That being said, in
 * order for PrivilegedAction to work correctly, the API called by the user must be set to `authz='always'` and the
 * user must have explicit permissions, so also create as much abstraction as possible so a user cannot do anything
 * malicious with the API.
 *
 * If changes are required, the fingerprint can be retrieved from static/console with:
 *
 * ```js
 * var fingerprint = Pkg.Store.inst().fingerprintEncodedContent(C3.pkg().content('src/util/GenaiCore.PrivilegedAction.py').readEncoded());
 * ```
 *
 * @remarks this represents a value passed to a method that expects an instance of GenaiCore.PrivilegedAction
 */
declare namespace GenaiCore {
  export interface IPrivilegedAction {
  }
}

/**
 * IMPORTANT
 *
 * Any changes to this file or the Python implementation file must be accompanied by a c3server commit in `PrivilegedAction.java`
 * to update the fingerprint and the security team must be added as reviewers for the PR. For this reason, try to
 * avoid any updates to this type and keep as much application logic as possible in other types. That being said, in
 * order for PrivilegedAction to work correctly, the API called by the user must be set to `authz='always'` and the
 * user must have explicit permissions, so also create as much abstraction as possible so a user cannot do anything
 * malicious with the API.
 *
 * If changes are required, the fingerprint can be retrieved from static/console with:
 *
 * ```js
 * var fingerprint = Pkg.Store.inst().fingerprintEncodedContent(C3.pkg().content('src/util/GenaiCore.PrivilegedAction.py').readEncoded());
 * ```
 *
 * @remarks this represents a made instance of GenaiCore.PrivilegedAction
 */
declare namespace GenaiCore {
  export class PrivilegedAction {

    /**
     * Given a model, LLM auth configuration, task, and kwargs for the task, retrieve the secret values for the LLM auth
     * configuration and invoke `taskWithAuth` (e.g. `completionWithAuth`) on the model
     * with `**kwargs` as the function arguments.
     *
     * @param model
     *          the model to use for the task.
     * @param auth
     *          the auth configuration to use for the task.
     * @param taskWithAuth
     *          the task to perform.
     * @param kwargs
     *          keyword args for the task.
     * @return the result of the task, in native form.
     */
    static getSecretInvokeTaskWithAuth(model: GenaiCore.Llm.Model, auth: GenaiCore.Llm.Auth, taskWithAuth: string, kwargs?: any): any;
  }
}

