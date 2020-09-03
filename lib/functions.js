const getName = ({ name }) => name;

const copyAndPush = (array, pushedNumber) => {
  const newArray = [...array];
  newArray.push(pushedNumber);
  return newArray;
};

module.exports = { getName, copyAndPush };
