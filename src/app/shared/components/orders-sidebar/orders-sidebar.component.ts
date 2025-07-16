import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { IProduct } from '../../../features/interfaces/iproduct';
import { IResponseCart } from '../../../features/interfaces/iResponseCart';

@Component({
  selector: 'app-orders-sidebar',
  standalone: true,
  imports: [SidebarModule, CurrencyPipe],
  templateUrl: './orders-sidebar.component.html',
  styleUrl: './orders-sidebar.component.scss'
})
export class OrdersSidebarComponent implements OnInit {
  @Input() sidebarVisible: boolean = false;
  @Output() sidebarVisibleChange = new EventEmitter<boolean>();

  cartItems: IProduct[] = [];

  constructor(public cartService: CartService) {}

  ngOnInit() {
    // this.cartService.getAllCartItems().subscribe({
    //   next: (res: IResponseCart) => {
    //     console.log('Cart API response:', res);
    //     this.cartItems = res.cart.cartItems.map((item) => ({
    //       ...item.product,
    //       quantity: item.quantity
    //     }));
    //   },
    //   error: (err) => console.error(err)
    // });
  
    this.cartItems = [
      {
        _id: '1',
        title: 'Test Product 1',
        price: 100,
        // add other IProduct fields as needed
      },
      {
        _id: '2',
        title: 'Test Product 2',
        price: 200,
        // add other IProduct fields as needed
      }
    ] as any; // Use 'as any' if you don't want to fill all fields
  }


  get total(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  removeItem(productId: string) {
    this.cartItems = this.cartItems.filter(item => item._id !== productId);
  }
}
