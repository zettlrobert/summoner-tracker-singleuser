// Create Array with Names of Backgroundpictures
function createArray(count) {
  let i = 1;
  let array = []
  for (i; i < count + 1; i++) {
    // console.log(i)
    let currentNumber = '' + i;

    let polyfilledNumber = currentNumber.padStart(3, '0');

    let filename = `bg-${polyfilledNumber}.jpg`
    console.log(filename);

    array.push(filename);
  }
  console.log(array);

}













createArray(77)