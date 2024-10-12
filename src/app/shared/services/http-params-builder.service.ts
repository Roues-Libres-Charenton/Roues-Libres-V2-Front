import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpParamsBuilderService {
  /**
   * Build an HttpParams object from an object of parameters
   *
   * @param params
   * @returns HttpParams
   */
  public buildHttpParams(params: { [param: string]: string }): HttpParams {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((key) => {
      if (params[key] !== null) {
        httpParams = httpParams.append(key, params[key]);
      }
    });
    return httpParams;
  }
}
