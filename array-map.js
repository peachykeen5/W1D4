var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function callback(val) {
  var newArray = [];
  var z =  Math.sqrt(val.x**2 + val.y**2);
    newArray = z;
    return newArray;

});
console.log(result);
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
