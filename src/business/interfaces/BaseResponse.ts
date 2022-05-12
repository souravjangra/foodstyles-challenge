export interface BaseResponse<T> {
  errors?: Error[];
  data?: T;
}

export interface Error {
  message: string;
  locations: Location[];
  path: string[];
  extensions: Extensions;
}

export interface Extensions {
  code: string;
  exception: Exception;
}

export interface Exception {
  stacktrace: string[];
}

export interface Location {
  line: number;
  column: number;
}
