import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticateUserService {

  constructor(private http: Http) {

  }

  getAuthenticatesUser(payload) {
    const header = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: header});
    return this.http.post('http://localhost:1337/login', payload, options)
      .map(res => res.json());
  }

}
