function loadButtons(){
  var params = new URLSearchParams(window.location.search);
  var event;
  for (const param of params) {
    event = param[0];
  }
  var eventList = db.collection("Personal").doc(event);

  eventList.get().then((doc) => {
    var quoteList = doc.data().Responses;
    for (var i = 0; i < quoteList.length; i++){
      var quoteButton = document.getElementById("quoteButton");
      var reply = document.getElementById("reply");
      reply.innerHTML = quoteList[i];
      var newQuoteButton = quoteButton.cloneNode(true);
      
      document.getElementById("newButtons").appendChild(newQuoteButton);
      var btnChild = document.getElementById("newButtons").children;
      for (var i2 = 0; i2 < btnChild.length; i2++){
        btnChild[i2].style.display = "block";
      }
      // console.log(quoteList[i]);
    }
  });
}
