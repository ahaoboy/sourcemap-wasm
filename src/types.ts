/**
 * A position for a source mapping. 1-indexed.
 */
export type MappingPosition = {
  line: number;
  column: number;
};

/**
 * An indexed source mapping block
 */
export type IndexedMapping<T> = {
  generated: MappingPosition;
  original?: MappingPosition;
  source?: T;
  name?: T;
};

/**
 * A source map in VLQ format
 */
export type VLQMap = Readonly<{
  sources: ReadonlyArray<string>;
  sourcesContent?: ReadonlyArray<string | null>;
  names: ReadonlyArray<string>;
  mappings: string;
  version?: number;
  file?: string;
  sourceRoot?: string;
}>;

/**
 * A parsed source map
 */
export type ParsedMap = {
  sources: string[];
  names: string[];
  mappings: Array<IndexedMapping<number>>;
  sourcesContent: Array<string | null>;
};

/**
 * Options for stringifying a source map
 */
export type SourceMapStringifyOptions = {
  file?: string;
  sourceRoot?: string;
  rootDir?: string;
  inlineSources?: boolean;
  fs?: {
    readFile(path: string, encoding: string): Promise<string>;
  };
  format?: "inline" | "string" | "object";
};

/**
 * Options for creating an empty source map
 */
export type GenerateEmptyMapOptions = {
  projectRoot: string;
  sourceName: string;
  sourceContent: string;
  lineOffset?: number;
};
