function fillText(){
  var inputArea = document.getElementById("myInput");
  var event = localStorage.getItem("event");
  var eventType = localStorage.getItem("type");
  var quotePosition = localStorage.getItem("quotePosition");
  var dbCollection = db.collection(eventType).doc(event);
  dbCollection.get().then((doc) => {
    var quoteToInsert = doc.data().Responses[quotePosition];
    inputArea.innerHTML = quoteToInsert;
  });
}