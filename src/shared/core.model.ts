/**
 * This file contain the base request and response type which will be extended in all the modals with generic Type.
 */
export interface IApiResponse {
  Status: boolean;
  Message: string;
}

export interface IBase<T> {
  message: string;
  statusCode: number;
  success: boolean;
  data: T;
}
