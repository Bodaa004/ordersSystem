import { Component, Input } from '@angular/core';
import { IProduct } from '../../../features/interfaces/iproduct';

@Component({
  selector: 'app-item-product',
  imports: [],
  templateUrl: './item-product.component.html',
  styleUrl: './item-product.component.scss',
})
export class ItemProductComponent {
  @Input() popularItem: IProduct = {} as IProduct

}
