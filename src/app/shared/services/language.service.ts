import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private langSignal: WritableSignal<string> = signal(localStorage.getItem('lang') || 'en');

  get currentLang() {
    return this.langSignal();
  }

  setLang(lang: string) {
    this.langSignal.set(lang);
    localStorage.setItem('lang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
} 