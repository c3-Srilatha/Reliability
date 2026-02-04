export interface UnstructuredDINodeHeader {

  readonly icon?: string | null;
  withIcon(icon: string | null): UnstructuredDINodeHeader;

  readonly imagePath?: string | null;
  withImagePath(imagePath: string | null): UnstructuredDINodeHeader;

  readonly headerText?: string | null;
  withHeaderText(headerText: string | null): UnstructuredDINodeHeader;

  readonly truncateStyle?: string | null;
  withTruncateStyle(truncateStyle: string | null): UnstructuredDINodeHeader;

  readonly size: string;
  withSize(size: string): UnstructuredDINodeHeader;
}

