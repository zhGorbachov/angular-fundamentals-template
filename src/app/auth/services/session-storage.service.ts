import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SessionStorageService {
    private AUTH_TOKEN = 'SESSION_TOKEN';

    setToken(token: string): void {
        this.AUTH_TOKEN = token;
    }

    getToken(): string | null {
        return this.AUTH_TOKEN;
    }

    deleteToken(): void {
        this.AUTH_TOKEN = "";
    }
}
