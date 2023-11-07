import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {


  public baseUrl = "http://localhost:8080/mrating/api/v1/";

  constructor(private httpClient: HttpClient) { }

  public getSpaces(): Observable<any> {
    return this.httpClient.get(this.baseUrl+"spaces");
  }

  public addSpaces(spaces: any): Observable<any> {
    return this.httpClient.post(this.baseUrl+"spaces", spaces);
  }

  // public addSpace(): Observable<any> {
  //   return this.httpClient.get(this.baseUrl+"spaces");
  // }
  // public addUser(new_user: any): Observable<any>{
  //   return this.httpClient.post(this.baseUrl+"user", new_user);
  // }
}
