import { Injectable, Inject } from '@angular/core';
import { Jsonp, URLSearchParams, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import { get } from "http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {

  // Classe contrutora
  constructor(public _http: Http) { }

  // URL base da API do github
  private url = 'https://api.github.com';


  buscarTodosPage(ultimoId : number): Observable<any> {
    return this._http.get(this.url+"/users?since="+ultimoId)
      .map(res => res.json());
  }

  buscarPorLogin(login : string): Observable<any> {
    return this._http.get(this.url+"/users/"+login)
      .map(res => res.json());
  }

  buscarRepoPorLogin(login : string): Observable<any> {
    return this._http.get(this.url+"/users/"+login+"/repos")
      .map(res => res.json());
  }


}