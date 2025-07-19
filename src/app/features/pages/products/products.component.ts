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
        this.products = data.map(product => ({
          ...product,
          img: this.getImageForProduct(product)
        }));
        this.loading = false;
      },
      error: (err) => {
        this.products = [];
        this.error = 'Failed to load products';
        this.loading = false;
      }
    });
  }

  getImageForProduct(product: IProduct): string {
    const imageMap: { [key: string]: string } = {
      'Tea': 'tea.jpg',
      'Milk': 'milk.jpg',
      'Coffee': 'coffee.jpg',
      'Peppermint': 'peppermint.jpg',
      'Hisbiscus': 'hisbiscus.jpg',
      'Nescafe': 'nescafe.jpg',
      'Cinnamon': 'cinnamon.webp',
      'Cardamom': 'cardamom.webp',
      'Anise': 'anise.webp',
      'Ginger': 'ginger.jpg',
      'Sahlab': 'sahlab.avif',
      'Sobia': 'sobia.jpeg',
      'Kharob': 'kharob.webp',
      'Amar El-dien': 'amar-el-dien.jpeg',
      'Lemon': 'lemon.jpg',
      'Lemonade': 'lemonade.jpg',
      'Water': 'water.jpg',
      'Magic Juice': 'magic-juice.jpg',
      'Magic Juice V2': 'magic-juice-v2.jpg'
      // Add more mappings as needed
    };
    return `assets/images/${imageMap[product.name] || 'placeholder.jpg'}`;
  }
}