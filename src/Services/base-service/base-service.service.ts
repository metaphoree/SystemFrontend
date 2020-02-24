import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { AppConstant } from '../../AppUtils/AppConstant/app-constant';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
      // 'Authorization': 'my-auth-token'
    })
  };
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // 'Access-Control-Allow-Origin' : '*'
        // 'Authorization': 'my-auth-token'
      })
    };
  }

  // GET
  public get<T>(url) {
    return this.http.get<T>(AppConstant.BASE_URL + url).pipe(catchError(this.handleError));
  }
  // POST
  public set<T>(url, postBody: any) {
    return this.http.post<T>(AppConstant.BASE_URL + url, postBody)
      .pipe(
        // retry(3), // retry a failed request up to 3 times
        // catchError(this.handleError)
      );
  }
  // GET
  public getNo(url) {
    return this.http.get(AppConstant.BASE_URL + url).pipe(catchError(this.handleError));
  }
  // POST
  public setNo(url, postBody: any) {

    return this.http.post(AppConstant.BASE_URL + url, postBody)
      .pipe(
        // retry(3), // retry a failed request up to 3 times
        // catchError(this.handleError)
      );
  }
  formUrlParam(url, data) {
    let queryString = ' ';
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (!queryString) {
          queryString = `?${key}=${data[key]}`;
        } else {
          queryString += `&${key}=${data[key]}`;
        }
      }
    }
    return url + queryString;
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
