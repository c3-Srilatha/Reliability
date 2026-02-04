declare namespace Jarvis {
  export interface Content {

    readonly id: string;
    withId(id: string): Jarvis.Content;

    readonly contentEncoding?: string | null;
    withContentEncoding(contentEncoding: string | null): Jarvis.Content;

    readonly contentLanguage?: string | null;
    withContentLanguage(contentLanguage: string | null): Jarvis.Content;

    readonly contentLength?: number | null;
    withContentLength(contentLength: number | null): Jarvis.Content;

    readonly contentLocation?: string | null;
    withContentLocation(contentLocation: string | null): Jarvis.Content;

    readonly contentType?: string | null;
    withContentType(contentType: string | null): Jarvis.Content;

    readonly contentDisposition?: string | null;
    withContentDisposition(contentDisposition: string | null): Jarvis.Content;

    readonly eTag?: string | null;
    withETag(eTag: string | null): Jarvis.Content;

    readonly lastModified?: DateTime | null;
    withLastModified(lastModified: DateTime | Date | string | null): Jarvis.Content;

    readonly lastModifiedBy?: string | null;
    withLastModifiedBy(lastModifiedBy: string | null): Jarvis.Content;

    readonly contentMD5?: string | null;
    withContentMD5(contentMD5: string | null): Jarvis.Content;

    readonly contentSHA1?: string | null;
    withContentSHA1(contentSHA1: string | null): Jarvis.Content;

    readonly hasMetadata?: boolean;
    withHasMetadata(hasMetadata: boolean): Jarvis.Content;

    readonly name?: string | null;
    withName(name: string | null): Jarvis.Content;

    readonly serviceName?: string | null;
    withServiceName(serviceName: string | null): Jarvis.Content;

    readonly expiresWithBuildEntity?: boolean;
    withExpiresWithBuildEntity(expiresWithBuildEntity: boolean): Jarvis.Content;

    readonly kind?: string | null;
    withKind(kind: string | null): Jarvis.Content;
  }
}

