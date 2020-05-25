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

  newRating: number = 5;
  newComment: string = "";
  isCommentHidden = true;

  constructor(
    public routerInfo: ActivatedRoute,
    public productService: ProductService
  ) {}

  ngOnInit(): void {
    let productId: number = this.routerInfo.snapshot.params["productId"];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductId(productId);
  }

  addComment() {
    let comment = new Comment(
      0,
      this.product.id,
      new Date().toISOString(),
      "someone",
      this.newRating,
      this.newComment
    );
    this.comments.unshift(comment);
    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;
    this.newComment = "";
    this.newRating = 5;
    this.isCommentHidden = true;
  }
}
