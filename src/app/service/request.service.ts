import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  translateFrom = '';
  translateTo = '';
  constructor(private  http: HttpClient) {}

  translate(text: string):Observable<Object>{

    const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${this.translateFrom}|${this.translateTo}`

    return this.http.get(url);
  }

}
