function countLetters(string){
  var stringToArray = string.split(' ').join('').toLowerCase().split('');
  var output = {};
  for (var i = 0; i < stringToArray.length; i++){
    if (output[stringToArray[i]]){
      output[stringToArray[i]].push(i);
    } else {
      output[stringToArray[i]] = [i];
    }
  }
  return output;
}

var output = (countLetters('lighthouse in the house'));
console.log(output);