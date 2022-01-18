const AddressMatcher = require('./atividade1ClassConsumer');
const StringManipulations = require('./atividade1');

const mockFindFirstMatch = jest.fn();
const mockFixStart = jest.fn();

jest.mock('./atividade1', () => {
  return jest.fn().mockImplementation(() => {
      return {
        findFirstMatch: () => {
          return 'Wallaby Way - Mocked';
        },
        fix_start: () => {
          return '42 ***********, Sidney - Mocked';
        },
      };
  });
});

describe("String Manipulations Class Consumer class", () => {

  beforeEach(() => {
    StringManipulations.mockClear();
    mockFindFirstMatch.mockClear();
    mockFixStart.mockClear();
  });

  it('should call the StringManipulations instance in the constructor of consumer class', () => {
    new AddressMatcher();
    expect(StringManipulations).toHaveBeenCalledTimes(1);
  });

  it('should instantiate the StringManipulations and return the mock value', () => {
    const output1 = 'Wallaby Way - Mocked';
    const output2 = '42 ***********, Sidney - Mocked';

    const address = '42 Wallaby Way, Sidney';
    const addressM = new AddressMatcher(address);

    const actual1 = addressM.findStreetName('Wallaby Way');
    const actual2 = addressM.hideStreetName('Wallaby Way');

    expect(actual1).toEqual(output1);
    expect(actual2).toEqual(output2);
  });
});
