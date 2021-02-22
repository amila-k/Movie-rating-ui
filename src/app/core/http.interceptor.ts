import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable()
export class Interceptor implements HttpInterceptor {
    private errorSubject = new Subject<string>();
   
    constructor(private authService: AuthService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let headers = new HttpHeaders();
        headers = this.authService.setAuthorizationHeader(headers)
        headers = headers.append('Content-Type', 'application/json');

        const cloned = req.clone({
            headers,
        });

        return next.handle(cloned);
    
    }
}