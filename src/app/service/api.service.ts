import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  public publicMessage(): Observable<any>{
    return this.httpClient.get(environment.baseUrl + '/greet', {responseType : 'text'});
  }

  public getStaffMessage(): Observable<any>{
    return this.httpClient.get(environment.baseUrl + '/staff', {responseType : 'text'});
  }

  public masterMessage(): Observable<any>{
    return this.httpClient.get(environment.baseUrl + '/master', {responseType : 'text'});
  }
}
