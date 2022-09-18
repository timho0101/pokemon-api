import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxProgressBarValue',
  pure: true
})
export class MaxProgresssBarValue implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    var num: number = 0

    num = (value/200)*100

    return num;
  }

}
