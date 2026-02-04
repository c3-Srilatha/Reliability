export interface WithConnector {

  readonly kind?: string | null;
  withKind(kind: string | null): WithConnector;
}

