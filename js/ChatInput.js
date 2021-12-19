function fillText(){
  var inputArea = document.getElementById("myInput");
  var event = localStorage.getItem("event");
  var eventType = localStorage.getItem("type");
  var quotePosition = localStorage.getItem("quotePosition");
  var dbCollection = db.collection(eventType).doc(event);
  dbCollection.get().then((doc) => {
    var quoteToInsertArr = doc.data().Responses[quotePosition].split("#");
    var quoteToInsert = quoteToInsertArr[0];
    inputArea.innerHTML = quoteToInsert;
  });
}

var counter = 0;

function showDropdown() {
    if (counter % 2 == 0) {
        document.getElementById("profileDropDown").style.display = "block";
        document.getElementById("new").style.opacity = "1";
        counter++;
        
    } else {
        document.getElementById("profileDropDown").style.display = "none";
        counter++;
        document.getElementById("new").style.opacity = "0.75";
    }
}



// function fillText(){
//   var inputArea = document.getElementById("myInput");
//   var event = localStorage.getItem("event");
//   var eventType = localStorage.getItem("type");
//   var quotePosition = localStorage.getItem("quotePosition");
//   var dbCollection = db.collection(eventType).doc(event);
//   dbCollection.get().then((doc) => {
//     var quoteToInsert = doc.data().Responses[quotePosition];
//     inputArea.innerHTML = quoteToInsert;
//   });
// }