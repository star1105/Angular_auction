import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  public products: Product[] = [
    new Product(1, "华为p40", 6799, 1, "这是第一个商品的商品描述", [
      "电子产品",
      "硬件设备",
    ]),
    new Product(2, "华为p30", 6799, 3.5, "这是第二个商品的商品描述", ["图书"]),
    new Product(3, "华为mate 30", 6799, 4.5, "这是第三个商品的商品描述", [
      "硬件设备",
    ]),
    new Product(4, "华为mate 30 pro", 6799, 5, "这是第四个商品的商品描述", [
      "电子产品",
    ]),
    new Product(5, "华为mate 30 pro 5G", 6799, 4, "这是第五个商品的商品描述", [
      "电子产品",
    ]),
    new Product(6, "华为mate 30 5G", 6799, 1, "这是第六个商品的商品描述", [
      "电子产品",
      "硬件设备",
    ]),
  ];
  public comments: Comment[] = [
    new Comment(1, 1, "2017-02-02 22:22:22", "star1", 3, "东西不错"),
    new Comment(2, 1, "2017-02-02 22:22:22", "star2", 3, "东西不错"),
    new Comment(3, 1, "2017-02-02 22:22:22", "star3", 3, "东西不错"),
    new Comment(4, 1, "2017-02-02 22:22:22", "star4", 3, "东西不错"),
    new Comment(5, 1, "2017-02-02 22:22:22", "star5", 3, "东西不错"),
    new Comment(6, 2, "2017-02-02 22:22:22", "star6", 3, "东西不错"),
  ];
  constructor() {}

  getAllCategories(): string[] {
    return ["电子产品", "硬件设备", "图书"];
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
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

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {}
}
