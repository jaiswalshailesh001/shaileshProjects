import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const STORE_KEY = "token";
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private myRoute: Router) {

    }

    public setToken(token: string) {
        localStorage.setItem(STORE_KEY, token.toString());
    }

    public getToken() {
        return localStorage.getItem(STORE_KEY) != null ? parseInt(localStorage.getItem(STORE_KEY)) : 0;
    }

    isLoggednIn() {
        return this.getToken() !== 0;
    }

    logout() {

        this.clearStorage();
        this.myRoute.navigate(['/']);

    }

    clearStorage() {
        localStorage.clear();
    }

}
