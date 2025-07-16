import { Injectable, signal, WritableSignal } from '@angular/core';
import { IProduct } from '../../features/interfaces/iproduct';
import { Observable } from 'rxjs';
import { IResponseCart } from '../../features/interfaces/iResponseCart';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Api_End_Point } from '../../../environments/Api_End_Point';

@Injectable({ providedIn: 'root' })
export class CartService {

    constructor(private _http:HttpClient) { }

  cart: WritableSignal<IProduct[]> = signal([]);

//   addToCart(product: IProduct) {
//     this.cart.update(cart => [...cart, product]);
//   }

//   removeFromCart(productId: string) {
//     this.cart.update(cart => cart.filter(p => p._id !== productId));
//   }

  getAllCartItems(): Observable<IResponseCart> {
    return this._http.get<IResponseCart>(`${environment.apiUrl}${Api_End_Point.CART}`);
  }

  } 