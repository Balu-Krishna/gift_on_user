import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthModel } from '../_models/auth.model';
import { UserModel } from '../_models/user.model';

const API_USERS_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {

  constructor(private http: HttpClient) { }

  signin(email: string, password: string): Observable<any> {
    return this.http.post<AuthModel>(`${API_USERS_URL}/purchaser/auth/login`, { email, password });
  }

  signup(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${API_USERS_URL}/purchaser/auth/register`, user);
  }

  getUserByToken(token: string): Observable<UserModel> {
    const httpHeaders = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<UserModel>(`${API_USERS_URL}/purchaser/profile/userdetails`, {
      headers: httpHeaders,
    });

  }
}
