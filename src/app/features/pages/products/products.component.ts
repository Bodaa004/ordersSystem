import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { ItemProductComponent } from '../../../shared/components/item-product/item-product.component';
import { IProduct } from '../../interfaces/iproduct';
import { ProductsService } from '../../../shared/services/products.service';
import { ArabicTranslatePipe } from '../../../shared/pipes/arabic-translate.pipe';

@Component({
  selector: 'app-products',
  imports: [ItemProductComponent,ArabicTranslatePipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  loading = false;
  error: string | null = null;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.loading = true;
    this.productsService.getAllProducts().subscribe({
      next: (data) => {
        console.log('API response:', data);
        this.products = data.products
        this.loading = false;
      },
      error: (err) => {
        this.products = [];
        this.error = 'Failed to load products';
        this.loading = false;
      }
    });
  }
}