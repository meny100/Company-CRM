import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name:'nameSuffix'
})
export class NameSuffixPipe implements PipeTransform {
  transform(value: any, isGuy: boolean): any {
    const guy: string = "(guy)";
    
    const girl: string = "(girl)";
    return isGuy? `${value} ${guy}` : `${value} ${girl}`
  }
}
