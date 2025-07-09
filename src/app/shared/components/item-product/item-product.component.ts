import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-product',
  imports: [],
  templateUrl: './item-product.component.html',
  styleUrl: './item-product.component.scss',
})
export class ItemProductComponent {
  @Input() popularItem: {
    id: number;
    title: string;
    image: string;
  } = {
    id: 0,
    title: 'Title of the Product',
    image: 'https://images.unsplash.com/photo-1606787360230-2f',
  };
}
