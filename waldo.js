// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      indexNum = i;
      found(indexNum);   // execute callback
    }
  }
}

function actionWhenFound(indexNum) {
  console.log("Found Waldo at index " + indexNum);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



// updated to include the forEach function
function findWaldo(array, found) {
  array.forEach(function(person, index) {
    if (person === "Waldo") {
      found(index);
    }
  });
}


function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
