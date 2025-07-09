import { Component, signal } from '@angular/core';
import { ItemProductComponent } from '../../../shared/components/item-product/item-product.component';

@Component({
  selector: 'app-products',
  imports: [ItemProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  productsItems = signal([
    { id: 1, title: 'Product 1', image: 'assets/images/banner.png' },
    { id: 2, title: 'Product 2', image: 'assets/images/banner1.png' },
    { id: 3, title: 'Product 3', image: 'assets/images/banner2.png' },
    { id: 4, title: 'Product 4', image: 'assets/images/banner3.png' },
    { id: 5, title: 'Product 5', image: 'assets/images/banner4.png' },
    { id: 6, title: 'Product 6', image: 'assets/images/banner5.png' },
    { id: 7, title: 'Product 7', image: 'assets/images/banner6.png' },
    { id: 8, title: 'Product 8', image: 'assets/images/banner7.png' },
    { id: 9, title: 'Product 9', image: 'assets/images/banner8.png' },
    { id: 10, title: 'Product 10', image: 'assets/images/banner9.png' },
    { id: 11, title: 'Product 11', image: 'assets/images/banner10.png' },
    { id: 12, title: 'Product 12', image: 'assets/images/banner11.png' },
    { id: 13, title: 'Product 13', image: 'assets/images/banner12.png' }
  ]);
}
