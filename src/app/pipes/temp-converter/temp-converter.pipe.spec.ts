import {TempConverterPipe} from './temp-converter.pipe';

describe('TempConverterPipe', () => {
  it('create an instance', () => {
    const pipe = new TempConverterPipe();
    expect(pipe).toBeTruthy();
  });

  it('Expects to convert Kelvin to Celsius', () => {
    const pipe = new TempConverterPipe();
    expect(pipe.transform(273.15, 'C')).toBe('0.00°C');
  });

  it('Expects to convert Kelvin to Farenheit', () => {
    const pipe = new TempConverterPipe();
    expect(pipe.transform(273.15, 'F')).toBe('32.00°F');
  });
});
