import { Component } from '@angular/core';
import {RequestService} from "./service/request.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'translate-app';
  result$: BehaviorSubject<any>= new BehaviorSubject<any>(null);
  textForTranslate = '';

  constructor(private requestService:RequestService) {
  }

  translateText(){
    this.requestService.translate(this.textForTranslate).subscribe({
      next: result => {
        // @ts-ignore
        this.result$.next(result.responseData.translatedText)
      }
    });
  }

  textStorage(text: string){
    this.textForTranslate = text;
    console.log(text);
  }

}
