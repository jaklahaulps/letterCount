function countLetters(string){
  var stringToArray = string.split(' ').join('').split('');
  var output = {};
  for (var i = 0; i < stringToArray.length; i++){
    output[stringToArray[i]] = output[stringToArray[i]]  ? output[stringToArray[i]] + 1 : 1;
  }
  return output;
}

var output = (countLetters('lighthouse in the house'));
console.log(output);