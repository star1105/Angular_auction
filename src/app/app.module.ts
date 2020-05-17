import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { SearchComponent } from "./search/search.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { ProductComponent } from "./product/product.component";
import { StarsComponent } from "./stars/stars.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule } from "@angular/router";
import { ProductService } from "./shared/product.service";
import { FilterPipe } from './pipe/filter.pipe';

const routeConfig: Routes = [
  { path: "", component: HomeComponent },
  { path: "product/:productId", component: ProductDetailComponent },
];
@NgModule({
  // ! 组件，指令，管道
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent,
    FilterPipe,
  ],
  //! 引入的angular模块
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule, // 响应式编程模块
  ],
  // ! 服务
  providers: [ProductService],
  //! 主组件
  bootstrap: [AppComponent],
})
export class AppModule {}
