import { Component } from '@angular/core';
import { BannerComponent } from "../../../shared/components/banner/banner.component";
import { ItemProductComponent } from "../../../shared/components/item-product/item-product.component";
import { ProductsComponent } from "../products/products.component";

@Component({
  selector: 'app-home-page',
  imports: [BannerComponent, ProductsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
