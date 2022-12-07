import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient) { }

  getData() {
    return this._http.get('https://dummyjson.com/products?limit=10')
  }

  getDetailData(id:any) {
    return this._http.get('https://dummyjson.com/products/' + id)
  }

  deleteData(id:any) {
    return this._http.delete('https://dummyjson.com/products/' + id)
  }
}
