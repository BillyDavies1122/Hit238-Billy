
document.getElementById('addButton').addEventListener('click',
  function(event) {
    event.preventDefault();
    var value = {
      "date":document.getElementById('inputDate').value,
      "name":document.getElementById('inputName').value,
      "sets":document.getElementById('inputSets').value,
      "reps":document.getElementById('inputReps').value
    };

  var key = keyGenerator()
    console.log('test')
    sessionStorage.setItem(key, value);
  })


function listOfDb(){

}

//key generator function obtained from https://gist.github.com/gordonbrander/2230317
//created by user gordon brander
var keyGenerator = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};
