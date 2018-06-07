// The second argument/parameter is expected to be a function
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