import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showLangDropdown: boolean = false;
  currentLang: string = 'English';
  showMobileMenu: boolean = false;
  @Output() cartClick = new EventEmitter<void>();

  toggleLangDropdown(): void {
    this.showLangDropdown = !this.showLangDropdown;
  }

  changeLanguage(lang: string): void {
    this.currentLang = lang;
    this.showLangDropdown = false;
    console.log(`Language changed to: ${lang}`);
  }

  onCartClick() {
    console.log('Cart clicked!');
    this.cartClick.emit();
  }
}

