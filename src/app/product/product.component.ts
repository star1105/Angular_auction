import { Component, OnInit } from "@angular/core";
import { ProductService } from "../shared/product.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  public products: Array<Product>;
  public imgUrl = "https://via.placeholder.com/320x150/FF0000";
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.products.push(
      new Product(2, "华为p30", 6799, 3.5, "这是第二个商品的商品描述", [
        "电子产品",
      ])
    );
  }
}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {}
}
