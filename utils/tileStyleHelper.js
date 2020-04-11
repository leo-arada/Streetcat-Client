const tileStyleHelper = (array) => {
  if (array.length !== 0  && array.length % 2 !== 0) {
    array.push({ name: 'black', empty: true })
  }

  return array;
};

export default tileStyleHelper;
