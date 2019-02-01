import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
    })
};

const httpFormOptions = {
    headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
    })
};

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    public postCall(url, data): Observable<any> {
        return this.http.post(url, data, httpOptions)
            .pipe(map((response: any) => {
                return response;
            }));
    }

    public postFormCall(url, data): Observable<any> {
        return this.http.post(url, data, httpFormOptions)
            .pipe(map((response: any) => {
                return response;
            }));
    }
}
