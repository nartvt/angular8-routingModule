import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

let urlApi = '';

const httpOption = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}
@Injectable({
  providedIn: 'root'
})
export class DataCommonService {

  constructor(private httpslient: HttpClient) { 
    urlApi = environment.urlApi;
  }
  public get(uri: string): Observable<any>{
    
    return this.httpslient.get(urlApi+"/"+uri).pipe(
      tap(
        () => { },
        catchError(err => {
          return this.handleErr(err);
        })
      )
    )
  }
  handleErr(err) {
    return err;
  }
}
