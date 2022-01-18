const StringManipulations = require('./atividade1');

let stringM = {};

describe("String Manipulations class", () => {

  beforeAll(() => {
    stringM = new StringManipulations('The lazy fox jumped');
  });

  it("should return the first substring occurency if present in string", () => {
    const output = 'fox';
    const actual = stringM.findFirstMatch('fox');

    expect(actual).toEqual(output);
  });

  it("should return an empty string if substring is not present in string (findFirstMatch)", () => {
    const output = '';
    const actual = stringM.findFirstMatch('foxes');

    expect(actual).toEqual(output);
  });

  it("should return the last substring occurency if present in string", () => {
    const output = 'fox';
    const actual = stringM.findLastMatch('fox');

    expect(actual).toEqual(output);
  });

  it("should return an empty string if substring is not present in string (findLastMatch)", () => {
    const output = '';
    const actual = stringM.findLastMatch('foxes');

    expect(actual).toEqual(output);
  });

  it('should return the substring that appears between two given substrings', () => {
    const output = ' fox ';
    const actual = stringM.substringBetweenMatches('lazy', 'jumped');

    expect(actual).toEqual(output);
  });

  it('should return an empty string if first substring is not present in string', () => {
    const output = '';
    const actual = stringM.substringBetweenMatches('happy', 'jumped');

    expect(actual).toEqual(output);
  });

  it('should return an empty string if second substring is not present in string', () => {
    const output = '';
    const actual = stringM.substringBetweenMatches('lazy', 'run');

    expect(actual).toEqual(output);
  });

  it('should return an empty string if second substring occurs before the first substring', () => {
    const output = '';
    const actual = stringM.substringBetweenMatches('jumped', 'lazy');

    expect(actual).toEqual(output);
  });

  it('should return a substring that contains the beginning and end of the string', () => {
    const output = 'Thed';
    const actual = stringM.both_ends();

    expect(actual).toEqual(output);
  });

  it('should return an empty string if string length is lesser than 2', () => {
    const stringM2 = new StringManipulations('T');

    const output = '';
    const actual = stringM2.both_ends();

    expect(actual).toEqual(output);
  });

  it('should return the string with the substring replaced by asteriscs', () => {
    const output = 'The lazy *** jumped';
    const actual = stringM.fix_start('fox');

    expect(actual).toEqual(output);
  });

  it('should return the string unaltered when substring is not present in string', () => {
    const output = 'The lazy fox jumped';
    const actual = stringM.fix_start('foxes');

    expect(actual).toEqual(output);
  });
});
