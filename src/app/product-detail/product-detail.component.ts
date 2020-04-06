import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../product/product.component";
import { ProductService, Comment } from "../shared/product.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  comments: Comment[];

  constructor(
    public routerInfo: ActivatedRoute,
    public productService: ProductService
  ) {}

  ngOnInit(): void {
    let productId: number = this.routerInfo.snapshot.params["productId"];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductId(productId);
  }
}
