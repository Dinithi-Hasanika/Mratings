import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl = "http://localhost:8080/mrating/api/v1/";

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.httpClient.get(this.baseUrl+"users");
  }

  public addUser(new_user: any): Observable<any>{
    return this.httpClient.post(this.baseUrl+"user", new_user);
  }
 
}
