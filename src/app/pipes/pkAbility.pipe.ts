import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pkAbility',
  pure: true
})
export class PkabilityPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    var str: string = ''
    var arr = value.split('-');

    for (var i = 0; i < arr.length; i++) {
      str += arr[i] + ' '
    }
    return str;
  }

}
