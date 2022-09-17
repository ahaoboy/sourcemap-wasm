/* tslint:disable */
/* eslint-disable */
/**
 */
export class SourceMap {
  free(): void;
  /**
   * @param {string} project_root
   * @param {any} buffer
   */
  constructor(project_root: string, buffer: any);
  /**
   * @returns {string}
   */
  getProjectRoot(): string;
  /**
   * @param {string} vlq_mappings
   * @param {any} sources
   * @param {any} sources_content
   * @param {any} names
   * @param {number} line_offset
   * @param {number} column_offset
   * @returns {any}
   */
  addVLQMap(
    vlq_mappings: string,
    sources: any,
    sources_content: any,
    names: any,
    line_offset: number,
    column_offset: number
  ): any;
  /**
   * @returns {any}
   */
  toVLQ(): any;
  /**
   * @returns {any}
   */
  getMappings(): any;
  /**
   * @returns {any}
   */
  getSources(): any;
  /**
   * @returns {any}
   */
  getSourcesContent(): any;
  /**
   * @returns {any}
   */
  getNames(): any;
  /**
   * @param {string} name
   * @returns {number}
   */
  addName(name: string): number;
  /**
   * @param {string} source
   * @returns {number}
   */
  addSource(source: string): number;
  /**
   * @param {number} index
   * @returns {string}
   */
  getName(index: number): string;
  /**
   * @param {number} index
   * @returns {string}
   */
  getSource(index: number): string;
  /**
   * @param {string} name
   * @returns {number}
   */
  getNameIndex(name: string): number;
  /**
   * @param {string} source
   * @returns {any}
   */
  getSourceIndex(source: string): any;
  /**
   * @param {Int32Array} mappings_arr
   */
  addIndexedMappings(mappings_arr: Int32Array): void;
  /**
   * @returns {any}
   */
  toBuffer(): any;
  /**
   * @param {SourceMap} previous_map_instance
   * @param {number} line_offset
   * @returns {any}
   */
  addSourceMap(previous_map_instance: SourceMap, line_offset: number): any;
  /**
   * @param {string} source
   * @param {string} source_content
   * @returns {any}
   */
  setSourceContentBySource(source: string, source_content: string): any;
  /**
   * @param {string} source
   * @returns {any}
   */
  getSourceContentBySource(source: string): any;
  /**
   * @param {string} source
   * @param {string} source_content
   * @param {number} line_offset
   * @returns {any}
   */
  addEmptyMap(source: string, source_content: string, line_offset: number): any;
  /**
   * @param {SourceMap} previous_map_instance
   * @returns {any}
   */
  extends(previous_map_instance: SourceMap): any;
  /**
   * @param {number} generated_line
   * @param {number} generated_column
   * @returns {any}
   */
  findClosestMapping(generated_line: number, generated_column: number): any;
  /**
   * @param {number} generated_line
   * @param {number} generated_line_offset
   * @returns {any}
   */
  offsetLines(generated_line: number, generated_line_offset: number): any;
  /**
   * @param {number} generated_line
   * @param {number} generated_column
   * @param {number} generated_column_offset
   * @returns {any}
   */
  offsetColumns(
    generated_line: number,
    generated_column: number,
    generated_column_offset: number
  ): any;
}

export type InitInput =
  | RequestInfo
  | URL
  | Response
  | BufferSource
  | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_sourcemap_free: (a: number) => void;
  readonly sourcemap_new: (a: number, b: number, c: number, d: number) => void;
  readonly sourcemap_getProjectRoot: (a: number, b: number) => void;
  readonly sourcemap_addVLQMap: (
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number,
    g: number,
    h: number,
    i: number
  ) => void;
  readonly sourcemap_toVLQ: (a: number, b: number) => void;
  readonly sourcemap_getMappings: (a: number, b: number) => void;
  readonly sourcemap_getSources: (a: number, b: number) => void;
  readonly sourcemap_getSourcesContent: (a: number, b: number) => void;
  readonly sourcemap_getNames: (a: number, b: number) => void;
  readonly sourcemap_addName: (a: number, b: number, c: number) => number;
  readonly sourcemap_addSource: (a: number, b: number, c: number) => number;
  readonly sourcemap_getName: (a: number, b: number, c: number) => void;
  readonly sourcemap_getSource: (a: number, b: number, c: number) => void;
  readonly sourcemap_getNameIndex: (a: number, b: number, c: number) => number;
  readonly sourcemap_getSourceIndex: (
    a: number,
    b: number,
    c: number,
    d: number
  ) => void;
  readonly sourcemap_addIndexedMappings: (
    a: number,
    b: number,
    c: number
  ) => void;
  readonly sourcemap_toBuffer: (a: number, b: number) => void;
  readonly sourcemap_addSourceMap: (
    a: number,
    b: number,
    c: number,
    d: number
  ) => void;
  readonly sourcemap_setSourceContentBySource: (
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number
  ) => void;
  readonly sourcemap_getSourceContentBySource: (
    a: number,
    b: number,
    c: number,
    d: number
  ) => void;
  readonly sourcemap_addEmptyMap: (
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number,
    g: number
  ) => void;
  readonly sourcemap_extends: (a: number, b: number, c: number) => void;
  readonly sourcemap_findClosestMapping: (
    a: number,
    b: number,
    c: number
  ) => number;
  readonly sourcemap_offsetLines: (
    a: number,
    b: number,
    c: number,
    d: number
  ) => void;
  readonly sourcemap_offsetColumns: (
    a: number,
    b: number,
    c: number,
    d: number,
    e: number
  ) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {SyncInitInput} module
 *
 * @returns {InitOutput}
 */
export function initSync(module: SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {InitInput | Promise<InitInput>} module_or_path
 *
 * @returns {Promise<InitOutput>}
 */
export  function init(
  module_or_path?: InitInput | Promise<InitInput>
): Promise<InitOutput>;
