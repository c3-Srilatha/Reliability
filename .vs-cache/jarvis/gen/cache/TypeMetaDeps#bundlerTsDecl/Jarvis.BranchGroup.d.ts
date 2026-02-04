declare namespace Jarvis {
  export interface BranchGroup {

    readonly id: string;
    withId(id: string): Jarvis.BranchGroup;

    readonly name: string;
    withName(name: string): Jarvis.BranchGroup;

    readonly repository: Jarvis.GitRepository;
    withRepository(repository: IJarvis.GitRepository): Jarvis.BranchGroup;

    readonly regex: string;
    withRegex(regex: string): Jarvis.BranchGroup;

    readonly baseBranch?: string | null;
    withBaseBranch(baseBranch: string | null): Jarvis.BranchGroup;

    readonly triggerOptions: Jarvis.BranchGroup.TriggerOptions;
    withTriggerOptions(triggerOptions: IJarvis.BranchGroup.TriggerOptions): Jarvis.BranchGroup;

    readonly packagesPath?: string | null;
    withPackagesPath(packagesPath: string | null): Jarvis.BranchGroup;

    readonly jarvisFilePath?: string | null;
    withJarvisFilePath(jarvisFilePath: string | null): Jarvis.BranchGroup;
  }
}

