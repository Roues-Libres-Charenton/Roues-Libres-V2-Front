import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PathParamsBuilderService {
  /**
   * Build a path with parameters from an object of parameters
   *
   * @param path The base URL path
   * @param params An object containing key-value pairs for the path parameters
   * @returns string
   */
  public buildPathParams(
    path: string,
    params: { [param: string]: string }
  ): string {
    Object.keys(params).forEach((key) => {
      if (params[key] !== null) {
        path = path.replace(`:${key}`, params[key]);
      }
    });
    return path;
  }
}
