
document.getElementById('addButton').addEventListener('click',
  function(event) {
    event.preventDefault();
    var entryData = {
      "date":document.getElementById('inputDate').value,
      "name":document.getElementById('inputName').value,
      "sets":document.getElementById('inputSets').value,
      "reps":document.getElementById('inputReps').value,
      "weight":document.getElementById('inputWeight').value
    };
    var value = JSON.stringify(entryData)
    var key = keyGenerator()
    sessionStorage.setItem(key, value);
  })

//key generator function obtained from https://gist.github.com/gordonbrander/2230317
//created by user gordon brander
var keyGenerator = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};


function listOfDb(){
  //Iterates through storage
  for(var i = 0; i < sessionStorage.length; i++) {
    var key = sessionStorage.key(i);
    var value = sessionStorage.getItem(key);
    //Parses the stringied json so I can use it
    var parsedJson = JSON.parse(value)
    var table = document.getElementById('tableBody')
    //insert new row in table
    var row = table.insertRow(i+1)
    //create new cells in the row and insert the data from the json into the cells.
    var date = row.insertCell(0)
    date.innerHTML = parsedJson['date']

    var name = row.insertCell(1)
    name.innerHTML = parsedJson['name']

    var sets = row.insertCell(2)
    sets.innerHTML = parsedJson['sets']

    var reps = row.insertCell(3)
    reps.innerHTML = parsedJson['reps']

    var weight = row.insertCell(4)
    weight.innerHTML = parsedJson['weight']
  }
}
