function every(array, test) {
    // Your code here.
    for ( let value = array;
        value.every(test);
    ) {
      return true;
    }

    if (array.some(test)) {
      return false;
    }
}+
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true