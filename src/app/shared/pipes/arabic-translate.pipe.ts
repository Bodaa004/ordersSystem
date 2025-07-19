import { Pipe, PipeTransform, inject } from '@angular/core';
import ar from './ar.json';
import { LanguageService } from '../services/language.service';

@Pipe({
  name: 'arabicTranslate',
  standalone: true
})
export class ArabicTranslatePipe implements PipeTransform {
  private translations: Record<string, string> = ar;
  private langService = inject(LanguageService);

  transform(value: string): string {
    const lang = this.langService.currentLang;
    if (lang === 'ar') {
      return this.translations[value] || value;
    }
    return value;
  }
} 