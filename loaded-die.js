////////// Exercise 1 ////////////

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  // your code here //

  var newList = [];
  list.map(function (values) {
    return newList;
  });

var index = -1;

  return function() {
    index += 1;
    return list[index];
    /* your code here */
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

console.log('****Exercise 2****');
////////// Exercise 2 ////////////

var countdownGenerator = function(x) {
  for (var i = x; i > -1; i --) {
    if (x > 0) {
      console.log('T-minus ' + x + "...")
      x = x - 1;
    }
    if (x === 0) {
      console.log('Blast off!')
      x = x - 1;
    };
    if (x < 0) {
      console.log('Rockets already gone, bub!')
    }
  }
  return
};

countdownGenerator(5);


//var countdown = countdownGenerator(3);
//countdown(); // T-minus 3...
//countdown(); // T-minus 2...
//countdown(); // T-minus 1...
//countdown(); // Blast Off!
//countdown(); // Rockets already gone, bub!
//countdown(); // Rockets already gone, bub!