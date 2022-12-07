import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  data: any;
  constructor(private _apiService: ProductsService) {}

  ngOnInit() {
    this._apiService.getData().subscribe((res:any) => {
      this.data = res.products;
      console.log(this.data)
    });
  }

  ngDelete(id:any) {
    this._apiService.deleteData(id).subscribe((res:any) => {
      console.log({res})
      this.data = res.products
      console.log('delete data success!');
    })
  }
}
