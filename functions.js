export const stringLength = (str) => {
  if(str.length < 1) {
    throw 'Too short string';
  }

  if(str.length > 10) {
    throw 'Too long string';
  }

  return str.length;
};

export const reverseString = (str) => {
  return str.split('').reverse().join('');
};

export const capitalize = (str) => {
  let cap = str.split('');
  cap[0] = cap[0].toUpperCase();
  
  return cap.join('');
};
