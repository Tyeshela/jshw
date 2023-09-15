function unicodeToString(unicodeArray) {
    let resultString = '';
    for (let i = 0; i < unicodeArray.length; i++) {
      resultString += String.fromCharCode(unicodeArray[i]);
    }
    return resultString;
  }
  
  const sampleUnicodeArray = [72, 101, 108, 108, 111];
  const resultString = unicodeToString(sampleUnicodeArray);
  
  console.log(resultString);
  
  function stringToUnicode(inputString) {
    const unicodeArray = [];
    for (let i = 0; i < inputString.length; i++) {
      unicodeArray.push(inputString.charCodeAt(i));
    }
    return unicodeArray;
  }
  
  const sampleString = "Hello";
  const resultUnicodeArray = stringToUnicode(sampleString);
  
  console.log(resultUnicodeArray);
  