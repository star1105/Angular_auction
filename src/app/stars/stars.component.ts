import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-stars",
  templateUrl: "./stars.component.html",
  styleUrls: ["./stars.component.css"]
})
export class StarsComponent implements OnInit {
  //! 参数传递，由父级输入
  @Input()
  public rating: number = 0;

  public stars: boolean[];

  constructor() {}

  ngOnInit(): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
    // this.stars = [false, false, true, true, true];
  }
}
