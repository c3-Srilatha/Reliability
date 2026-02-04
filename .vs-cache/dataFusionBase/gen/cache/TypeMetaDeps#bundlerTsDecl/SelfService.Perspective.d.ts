declare namespace SelfService {
  export interface Perspective {

    readonly meta?: Meta | null;
    withMeta(meta: IMeta | null): SelfService.Perspective;

    readonly name: string;
    withName(name: string): SelfService.Perspective;

    readonly priority: number;
    withPriority(priority: number): SelfService.Perspective;

    readonly hidden?: boolean;
    withHidden(hidden: boolean): SelfService.Perspective;

    readonly content?: string | null;
    withContent(content: string | null): SelfService.Perspective;

    readonly icon?: string | null;
    withIcon(icon: string | null): SelfService.Perspective;

    readonly label?: string | null | UiSdlDynamicValueSpec | null | null;
    withLabel(label: string | null | IUiSdlDynamicValueSpec | null | null): SelfService.Perspective;
  }
}

