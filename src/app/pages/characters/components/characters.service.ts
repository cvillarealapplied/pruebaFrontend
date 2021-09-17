import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class CharacterService {
    constructor(
        private _httpClient: HttpClient
    ) {

    }

    getCharactersByPage(url):Observable<any> {
        return this._httpClient.get(url);
    }
}