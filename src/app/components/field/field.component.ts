import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent {
  @Output() translateQuery = new EventEmitter<string>();
  textToTranslate: string = '';
  @Input() translatedText = '';


  emitTranslateQuery(): void {
    this.translateQuery.emit(this.textToTranslate);
    if(this.textToTranslate == ''){
      this.translatedText = '';
    }
  }
}
