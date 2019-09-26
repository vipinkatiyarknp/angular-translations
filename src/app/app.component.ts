import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    // sessionStorage.setItem('locale', navigator.language);

    const supported = ['de', 'en', 'fr'];
    const isAvailable = supported.includes(navigator.language);
    const locale = sessionStorage.getItem('locale');
    locale ? this.translate.setDefaultLang(locale) : this.translate.setDefaultLang(isAvailable ? navigator.language : 'en');
  }
  useLanguage(language: string) {
    sessionStorage.setItem('locale', language);
    this.translate.use(language);
  }
}
