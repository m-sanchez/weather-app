import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'tempConverter'
})
export class TempConverterPipe implements PipeTransform {

  transform(value: number, unit: string) {
    const celsiusConst = 273.15;
    if ( value && !isNaN(value)) {
      if (unit === 'C') {
        const temperature = value - celsiusConst;
        return temperature.toFixed(2) + '°C';
      } else if (unit === 'F') {
        const temperature = (value - celsiusConst) * (9 / 5) + 32;
        return temperature.toFixed(2) + '°F';
      }
    }
    return;
  }

}
