import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  public products: Array<Product>;
  public imgUrl = "https://via.placeholder.com/320x150/FF0000";
  constructor() {}

  ngOnInit(): void {
    this.products = [
      new Product(1, "华为p40", 6799, 1, "这是第一个商品的商品描述", [
        "电子产品",
        "硬件设备"
      ]),
      new Product(2, "华为p30", 6799, 3.5, "这是第二个商品的商品描述", [
        "电子产品"
      ]),
      new Product(3, "华为mate 30", 6799, 4.5, "这是第三个商品的商品描述", [
        "电子产品",
        "硬件设备"
      ]),
      new Product(4, "华为mate 30 pro", 6799, 5, "这是第四个商品的商品描述", [
        "电子产品"
      ]),
      new Product(
        5,
        "华为mate 30 pro 5G",
        6799,
        4,
        "这是第五个商品的商品描述",
        ["电子产品"]
      ),
      new Product(6, "华为mate 30 5G", 6799, 1, "这是第六个商品的商品描述", [
        "电子产品",
        "硬件设备"
      ])
    ];
    this.products.push(
      new Product(2, "华为p30", 6799, 3.5, "这是第二个商品的商品描述", [
        "电子产品"
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
