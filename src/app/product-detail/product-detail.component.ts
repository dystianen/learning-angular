import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  dataDetail: any;

  constructor(
    private route: ActivatedRoute,
    private _apiService: ProductsService
  ) {}

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));

    console.log({ productIdFromRoute });

    this._apiService.getDetailData(productIdFromRoute).subscribe((res) => {
      console.log({res})
      this.dataDetail = res;
    });
  }
}
