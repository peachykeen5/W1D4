var wrapLog = function (callback, name) {
  /* your code here */
  return function parameters() {
    var result = callback(...arguments);
      var argsS = ''
        for (var i = 0; i < arguments.length; i ++) {
          argsS += arguments[i] + ",";
        }
      argsS = argsS.substring(0, argsS.length - 1)
      console.log(name + '(' + argsS + ') => ' + result);
      return result;

    }

  }

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24
//
/////////
//function map(array, callback) {
//  var newArray = [];
//  for (var i = 0; i < array.length; i++) {
//
//    newArray.push(callback(array[i]));
//  }
//  return newArray;
//};//