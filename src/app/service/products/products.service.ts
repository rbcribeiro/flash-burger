import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = 'https://flash-burger-api.vercel.app';

  private productsSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {}

  cadastrarProduto(produto: { name: string; price: string; image: string; type: string }): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post<Product>(`${this.baseUrl}/products`, produto, httpOptions);
  }

  getAllProducts(): Observable<Product[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.get<Product[]>(`${this.baseUrl}/products`, httpOptions);
  }

  getProductById(productID: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.get<any>(`${this.baseUrl}/products/${productID}`);
  }

  updateProductStatus(productID: number, newStatus: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.patch<any>(`${this.baseUrl}/products/${productID}`, { status: newStatus });
  }

  deleteUserById(productID: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.delete<any>(`${this.baseUrl}/products/${productID}`);
  }

  addProduct(product: Product): void {
    const currentProducts = this.productsSubject.value;
    currentProducts.push(product);
    this.productsSubject.next(currentProducts);
  }
}
