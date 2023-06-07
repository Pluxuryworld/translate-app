import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RequestService} from "../../service/request.service";

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent {
  constructor(private requestService: RequestService) {}

  translateText(textToTranslate: string): void {this.requestService.translate(textToTranslate).subscribe(
    (response) => {
      // обработка ответа от API перевода
    },
    (error) => {
      // обработка ошибки при запросе перевода
    }
  );
  }
}
