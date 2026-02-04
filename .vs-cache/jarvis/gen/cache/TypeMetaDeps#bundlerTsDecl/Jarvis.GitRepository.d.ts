declare namespace Jarvis {
  export interface GitRepository {

    readonly id: string;
    withId(id: string): Jarvis.GitRepository;

    readonly name?: string | null;
    withName(name: string | null): Jarvis.GitRepository;

    readonly url: string;
    withUrl(url: string): Jarvis.GitRepository;

    readonly restUrl: string;
    withRestUrl(restUrl: string): Jarvis.GitRepository;

    readonly sourceControlType: string;
    withSourceControlType(sourceControlType: string): Jarvis.GitRepository;
  }
}

