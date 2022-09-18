import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pkname',
  pure: true
})
export class PknamePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    var str: string = '';

    for ( let s of value.split('-')) {
      str+=s + ' '
    }
    return str;
  }

}
