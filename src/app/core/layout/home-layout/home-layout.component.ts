import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { OrdersSidebarComponent } from '../../../shared/components/orders-sidebar/orders-sidebar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-layout',
  imports: [FooterComponent, RouterModule, HeaderComponent, OrdersSidebarComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent {
  sidebarVisible = false; // Set to true for testing

  openSidebar() {
    this.sidebarVisible = true;
    console.log('Sidebar opened!', this.sidebarVisible);
  }

  closeSidebar() {
    this.sidebarVisible = true;
  }
}
