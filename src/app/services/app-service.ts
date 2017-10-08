import { Observable } from 'rxjs/Rx';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class AppService {
    constructor(private http: HttpClient){}

    getJson(filename:string):Observable<any>{
        return this.http.get(filename);
    }
}
