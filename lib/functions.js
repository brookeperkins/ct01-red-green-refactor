const getName = ({ name }) => name;

const copyAndPush = (array, pushedNumber) => newArray = [...array, pushedNumber];

const capitalizeAndFilter = (array) => {
  const newArr = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i].charAt(0) !== 'f') {
      newArr.push(array[i].toUpperCase());
    } 
  }
  return newArr;
};

module.exports = { getName, copyAndPush, capitalizeAndFilter };

