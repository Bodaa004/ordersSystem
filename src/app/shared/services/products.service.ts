import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Api_End_Point } from '../../../environments/Api_End_Point';
import { IResponseProduct } from '../../features/interfaces/IResponseProducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient) { }

getAllProducts(): Observable<IResponseProduct> {
    return this._http.get<IResponseProduct>(`${environment.apiUrl}${Api_End_Point.PRODUCTS}`);
  }
}
