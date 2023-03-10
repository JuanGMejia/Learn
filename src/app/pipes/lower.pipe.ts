import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lower'
})
export class LowerPipe implements PipeTransform {

  transform(value: string): string {
    //console.log('pipe executed')
    return value.toLowerCase();
  }

}
