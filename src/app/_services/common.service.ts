import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    protected http: HttpClient;

    private API_URL = `${environment.apiUrl}`;

    private _isLoading$ = new BehaviorSubject<boolean>(false);
    private _errorMessage = new BehaviorSubject<string>('');

    constructor(http: HttpClient) {
        this.http = http;
    }

    getData(_url: string): Observable<any> {
        this._errorMessage.next('');
        const url = `${this.API_URL}/${_url}`;
        return this.http.get<any>(url).pipe(
            catchError(err => {
                this._errorMessage.next(err);
                return of({data:[]});
            }),
            finalize(() => this._isLoading$.next(false)
            )
        );
    }

}