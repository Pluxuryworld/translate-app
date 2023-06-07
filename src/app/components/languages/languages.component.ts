import { Component } from '@angular/core';
import { LanguagesService} from "../../service/languages.service";
import { RequestService} from "../../service/request.service";

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {
  countries = this.languagesService.getLanguages()
  selectedFromLanguage = "ru-RU";
  selectedToLanguage = "en-GB";


  constructor(private languagesService: LanguagesService,
              private requestService: RequestService) {
   this.applyLanguages();
  }

  applyLanguages(){
     this.requestService.translateFrom = this.selectedFromLanguage;
     this.requestService.translateTo = this.selectedToLanguage;
  }

  onChangeFrom(newValue:string){
    this.selectedFromLanguage = newValue;
    this.applyLanguages();
  }

  onChangeTo(newValue:string){
    this.selectedToLanguage = newValue;
    this.applyLanguages();

  }

  exchangeLanguage(){
    let temp = this.selectedFromLanguage;
    this.selectedFromLanguage = this.selectedToLanguage;
    this.selectedToLanguage = temp;
    this.applyLanguages()
  }

}
