const runLength = (str) => {
  const strArr = str.split('').sort();
  const strHash = {};
  for (let i=0; i < strArr.length; i++) {  
    strHash[strArr[i]] = strHash[strArr[i]] ? strHash[strArr[i]] + 1 : 1;
  }
  
  let result = '';
  let keys = Object.keys(strHash);

  for (let i = 0; i < keys.length; i++) {
    const key =  keys[i];

    if (strHash[key] <= 9) {
      result = `${result}${strHash[key]}${key}`;
    } else {
      do {
        const count = strHash[key] > 9 ? 9 : strHash[key];
        strHash[key] -= 9;
        result = `${result}${count}${key}`;
      } while (strHash[key] > 0);
    }
  }

  return result;
}

console.log(runLength('AAAAAAAAAAAAABBCCCCDD'));