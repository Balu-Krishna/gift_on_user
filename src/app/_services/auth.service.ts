import { Injectable, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, of, Subscription } from 'rxjs';
import { UserModel } from '../_models/user.model';
import { AuthHttpService } from './auth-http.service';
import { map, catchError, switchMap, finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService implements OnDestroy{

    currentUser$: Observable<UserModel | undefined>;
    currentUserSubject: BehaviorSubject<UserModel | undefined>;
    isLoading$: Observable<boolean>;
    isLoadingSubject: BehaviorSubject<boolean>;
    storageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;
    private unsubscribe: Subscription[] = [];

    get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    set currentUserValue(user: UserModel) {
        this.currentUserSubject.next(user);
    }

    constructor(private authHttpService: AuthHttpService, private router: Router) {
        this.isLoadingSubject = new BehaviorSubject<boolean>(false);
        this.currentUserSubject = new BehaviorSubject<UserModel | undefined>(undefined);
        this.currentUser$ = this.currentUserSubject.asObservable();
        this.isLoading$ = this.isLoadingSubject.asObservable();
        // const subscr = this.getDataByToken().subscribe();
        // this.unsubscribe.push(subscr);
    }

    login(email: string, password: string): Observable<UserModel | undefined> {
        this.isLoadingSubject.next(true);
        return this.authHttpService.signin(email, password).pipe(
            map((auth: any) => {
                const result = this.setAuth(auth);
                return result;
            }),
            switchMap(() => this.getDataByToken()),
            catchError((x) => {
                return of(undefined);
            }),
            finalize(() => this.isLoadingSubject.next(false))
        );
    }

    signup(user: UserModel): Observable<any> {
        this.isLoadingSubject.next(true);
        return this.authHttpService.signup(user).pipe(
            map(() => {
                this.isLoadingSubject.next(false);
            }),
            switchMap(() => this.login(user.email!, user.password!)),
            catchError((err) => {
                console.error('err', err);
                return of(undefined);
            }),
            finalize(() => this.isLoadingSubject.next(false))
        );
    }

    logout() {
        localStorage.removeItem(this.storageToken);
        this.currentUserSubject.next(undefined);
        this.router.navigate(['login']);
    }

    getDataByToken(): Observable<UserModel | undefined> {
        const auth = this.getAuth();
        if (!auth || !auth.token) {
            return of(undefined);
        }
        return this.authHttpService.getUserByToken(auth.token).pipe(
            map((user: any) => {
                if (user) {
                    this.currentUserSubject = new BehaviorSubject<UserModel | undefined>(user.result);
                } else {
                    this.logout();
                }
                return (user)?user.result:undefined;
            }),
            finalize(() => this.isLoadingSubject.next(false))
        );
    }



    private setAuth(data: any): boolean {
        if (data && data.token.token) {
            localStorage.setItem(this.storageToken, JSON.stringify(data.token));
            return true;
        }
        return false;
    }

    private getAuth() {
        try {
            const authData = JSON.parse(
                localStorage.getItem(this.storageToken) || '{}'
            );
            return authData;
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }

    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
    }
}
