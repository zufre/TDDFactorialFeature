const Calculate = {
  factorial(num) {
  let fact = 1;
    for (let x= 1; x<= num; x++) {
      fact *= x;
    } return fact;
  }
 
}

module.exports = Calculate;


