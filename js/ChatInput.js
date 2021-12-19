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