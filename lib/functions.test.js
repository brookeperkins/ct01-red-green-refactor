const { getName, copyAndPush, capitalizeAndFilter } = require('./functions');

describe ('getName function', () => {
  it('returns name property of object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name = getName(spot);

    expect(name).toEqual('spot');
  });
});


describe ('copyAndPush function', () => {
  it('returns a new array with all the items in the original array and a new item pushed to the end', () => {
    const numbers = [1, 2, 3];    
    const newArray = copyAndPush(numbers, 4);

    expect(newArray).toEqual([1, 2, 3, 4]);
    expect(numbers).toEqual([1, 2, 3]);
  });
});

describe ('capitalizeAndFilter function', () => {
  it('takes an array of strings capitalize all strings and filters out any string that starts with the letter f.', () => {
    const strings = ['look', 'at', 'this', 'far-out', 'fabulous', 'array', 'of', 'strings'];
    const newString = capitalizeAndFilter(strings);

    expect(newString).toEqual(['LOOK', 'AT', 'THIS', 'ARRAY', 'OF', 'STRINGS']);
  });
});
