import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, BehaviorSubject } from 'rxjs';
import { AppConstant } from '../../AppUtils/AppConstant/app-constant';
import { catchError, retry } from 'rxjs/operators';
import { SessionService } from '../session-service/session.service';
import { MessageService } from 'primeng/api';
import { LoginResponseVM } from 'src/Modules/primary/domainModels/auth/LoginResponseVM';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { RoleVM } from 'src/Modules/primary/domainModels/role/RoleVM';
import { FactoryVM } from 'src/Modules/primary/domainModels/factory/FactoryVM';
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
  constructor(private http: HttpClient,
    private sessionService: SessionService,
    private messageService: MessageService) {
    let log = new LoginResponseVM();
    log = sessionService.getLoginData();
    if (!this.isValidString(log.AuthToken)) {
      log.AuthToken = null;
    }

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin' : '*'
        'Authorization': 'Bearer ' + log.AuthToken
      })
    };
  }

  private messageSource = new BehaviorSubject('SHOW_LOADER');
  currentMessage = this.messageSource.asObservable();

  // GET
  public get<T>(url) {
    let log = new LoginResponseVM();
    log = this.sessionService.getLoginData();
    if (!this.isValidString(log.AuthToken)) {
      log.AuthToken = null;
    }
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin' : '*'
        'Authorization': 'Bearer ' + log.AuthToken
      })
    };

    return this.http.get<T>(AppConstant.BASE_URL + url, this.httpOptions).pipe(catchError(this.handleError));
  }
  // POST
  public set<T>(url, postBody: any) {
    let log = new LoginResponseVM();
    log = this.sessionService.getLoginData();
    if (!this.isValidString(log.AuthToken)) {
      log.AuthToken = null;
    }
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin' : '*'
        'Authorization': 'Bearer ' + log.AuthToken
      })
    };

    this.LoaderOn();
    postBody["FactoryId"] = this.sessionService.getFactoryId();
    return this.http.post<T>(AppConstant.BASE_URL + url, postBody, this.httpOptions)
      .pipe(
        // retry(3), // retry a failed request up to 3 times
        catchError(this.handleError)
      );
  }
  // GET
  public getNo(url) {
    let log = new LoginResponseVM();
    log = this.sessionService.getLoginData();
    if (!this.isValidString(log.AuthToken)) {
      log.AuthToken = null;
    }
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin' : '*'
        'Authorization': 'Bearer ' + log.AuthToken
      })
    };

    return this.http.get(AppConstant.BASE_URL + url, this.httpOptions).pipe(catchError(this.handleError));
  }
  // POST
  public setNo(url, postBody: any) {
    let log = new LoginResponseVM();
    log = this.sessionService.getLoginData();
    if (!this.isValidString(log.AuthToken)) {
      log.AuthToken = null;
    }
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin' : '*'
        'Authorization': 'Bearer ' + log.AuthToken
      })
    };
   
    postBody["FactoryId"] = this.sessionService.getFactoryId();
    return this.http.post(AppConstant.BASE_URL + url, postBody, this.httpOptions)
      .pipe(
        // retry(3), // retry a failed request up to 3 times
        catchError(this.handleError)
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
    //  this.messageService.add({severity:'success', summary: 'Error', detail:'Something Wrong'});
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);

      if (error.status == 403 || error.status == 404 || error.status == 417) {
        window.location.href = '';
      }
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  setLoginData(login: LoginResponseVM): void {
    this.sessionService.setLoginData(login);
  }
  getLoginData(): LoginResponseVM {
    return this.sessionService.getLoginData();
  }





  LoaderOff(): void {
    this.changeMessage('DONOT_SHOW_LOADER');

  }
  LoaderOn(): void {
    this.changeMessage('SHOW_LOADER');

  }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  Logout(): void {
    this.sessionService.Logout();
  }

  isValidString(val: string): boolean {
    if (val != null && val != undefined && val != '') {
      return true;
    }
    return false;
  }

  setRoleProfile(roleVm: RoleVM): void {
    this.sessionService.setRoleProfile(roleVm);
  }
  setFactory(factoryVm: FactoryVM): void {
    this.sessionService.setFactory(factoryVm);
  }

}
