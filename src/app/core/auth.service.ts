import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User, UserManager } from "oidc-client";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private userManager: UserManager;
  private user: User;

  private loginChangedSubject = new Subject<boolean>();
  loginChanged = this.loginChangedSubject.asObservable();

  constructor() {
    const settings = {
        authority: 'https://localhost:44381/',
        client_id: 'socialnetworkclientimplicit',
        redirect_uri: 'http://localhost:4200/search-shows',
        scope: 'socialnetworkscope',
        response_type: 'token',
        post_logout_redirect_url: 'http://localhost:4200',
      };
      this.userManager = new UserManager(settings);
  }

  login() {
    return this.userManager.signinRedirect();
  }

  isLoggedIn() {
    return this.userManager.getUser().then(user => {
      const currentUser = !!user && !user.expired;

      if(this.user !== user) {
        this.loginChangedSubject.next(currentUser);
      }

      this.user = user;
      return currentUser;
    })
  }

  completeLogin() {
    return this.userManager.signinRedirectCallback().then(user => {
      this.user = user;
      this.loginChangedSubject.next(!!user && !user.expired);
      return user;
    })
  }

  
  public setAuthorizationHeader(httpHeaders: HttpHeaders): HttpHeaders {
    let headers = httpHeaders;
    const tokenValue = `Bearer ${this.user.access_token}`;
    headers = headers.append('Authorization', tokenValue);

    return headers;
}
}
