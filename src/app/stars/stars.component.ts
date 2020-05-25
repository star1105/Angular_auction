import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-stars",
  templateUrl: "./stars.component.html",
  styleUrls: ["./stars.component.css"],
})
export class StarsComponent implements OnInit, OnChanges {
  //! 参数传递，由父级输入
  @Input()
  public rating: number = 0;

  @Output()
  public ratingChange: EventEmitter<number> = new EventEmitter();

  public stars: boolean[];

  @Input()
  public readonly: boolean = true;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

  ngOnInit(): void {
    // this.stars = [];
    // for (let i = 1; i <= 5; i++) {
    //   this.stars.push(i > this.rating);
    // }
    // this.stars = [false, false, true, true, true];
  }

  clickStar(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
      // this.ngOnInit();
      this.ratingChange.emit(this.rating);
    }
  }
}
