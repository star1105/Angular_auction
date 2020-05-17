import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(list: any[], filterField: string, keyworld: string): any {
    if (!filterField || !keyworld) {
      return list;
    }
    return list.filter((item) => {
      let fieldValue = item[filterField];
      return fieldValue.indexOf(keyworld) >= 0;
    });
  }
}
