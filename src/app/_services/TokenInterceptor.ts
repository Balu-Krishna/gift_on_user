import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable()
export class TokenInterceptor implements HttpInterceptor{

    private StorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;
    constructor(
        public router: Router
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authData = JSON.parse(
            localStorage.getItem(this.StorageToken)
        );
        if (!authData) {
            return next.handle(request);
        }
        request = request.clone({
            setHeaders: {
                'Authorization': `Bearer ${authData.accessToken}`
            }
        });
        request = request.clone({
            headers: request.headers.set('Accept', 'application/json')
        });
        return next.handle(request)
        .pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    if (error.error.success === false) {
                    } else {
                        this.router.navigate(['login']);
                    }
                }
                return throwError(error);
            }));
    }
    
}