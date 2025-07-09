import { Component } from '@angular/core';
import { BannerComponent } from "../../../shared/components/banner/banner.component";

@Component({
  selector: 'app-home-page',
  imports: [BannerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
