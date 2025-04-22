import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { SessionStorageService } from './session-storage.service';

const API_URL = 'http://localhost:4000/api';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isAuthorized$$ = new BehaviorSubject<boolean>(false);
    public isAuthorized$ = this.isAuthorized$$.asObservable();

    constructor(
        private http: HttpClient,
        private router: Router,
        private sessionStorage: SessionStorageService
    ) {
        this.isAuthorized$$.next(!!this.sessionStorage.getToken());
    }

    get isAuthorized(): boolean {
        return this.isAuthorized$$.value;
    }

    login(email: string, password: string): Observable<any> {
        return this.http.post<{ token: string }>(`${API_URL}/login`, { email, password }).pipe(
            tap((response) => {
                this.sessionStorage.setToken(response.token);
                this.isAuthorized$$.next(true);
            })
        );
    }

    register(name: string, email: string, password: string): Observable<any> {
        return this.http.post(`${API_URL}/register`, { name, email, password });
    }

    logout(): void {
        this.sessionStorage.deleteToken();
        this.isAuthorized$$.next(false);
        this.router.navigate(['/login']);
    }
}
