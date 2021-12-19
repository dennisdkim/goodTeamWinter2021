function loadButtons() {
  var params = new URLSearchParams(window.location.search);
  var event;
  for (const param of params) {
    event = param[0];
  }
  localStorage.setItem("event", event);
  var eventType = localStorage.getItem("type");
  var eventList = db.collection(eventType).doc(event);

  eventList.get().then((doc) => {
    var quoteList = doc.data().Responses;
    for (var i = 0; i < quoteList.length; i++) {
      var quoteButton = document.getElementById("quoteButton");
      var reply = document.getElementById("reply");
      var splitHash = quoteList[i].split("#");
      reply.innerHTML = splitHash[0];
      var newQuoteButton = quoteButton.cloneNode(true);

      document.getElementById("newButtons").appendChild(newQuoteButton);
      var btnChild = document.getElementById("newButtons").children;
      for (var i2 = 0; i2 < btnChild.length; i2++) {
        btnChild[i2].style.display = "inline-block";
        btnChild[i2].setAttribute("id", i2);
      }
    }
  });
}

function storeQuote(btn) {
  var quotePosition = btn.id;
  localStorage.setItem("quotePosition", quotePosition);
  console.log(quotePosition);
  nextPage();
}

function nextPage() {
  window.location.replace("ChatInput.html");
}

function toggleFilter() {
  var checkBox = document.getElementById("filterButton");
  var filters = document.getElementById("filterContainer");
  if (checkBox.checked == true) {
    filters.style.display = "inline-block";
  } else {
    filters.style.display = "none";
  }
}

function findFilter() {
  var filterOptions = document.getElementsByName("filterBtns");
  var event = localStorage.getItem("event");
  var eventType = localStorage.getItem("type");
  var dbResponses = db.collection(eventType).doc(event);
  dbResponses.get().then((doc) => {
    var quotesToCheck = doc.data().Responses;
    console.log(quotesToCheck);

    if (filterOptions[0].checked == true) {
    } else if (filterOptions[1].checked == true) {
      quotesToCheck.forEach((item) => {
        if (item.includes("#neutral") == true) {
          document.getElementById("newButtons").style.display = "none";
          console.log(item);
          var arrIndex = quotesToCheck.indexOf(item);
          var quoteButton = document.getElementById("quoteButton");
          var reply = document.getElementById("reply");
          var splitHash = item.split("#");
          reply.innerHTML = splitHash[0];
          var newQuoteButton = quoteButton.cloneNode(true);

          document
            .getElementById("newFilterButtons")
            .appendChild(newQuoteButton);

            document.getElementById("newFilterButtons").style.display = "inline-block";
            var newFilterBtnChild = document.getElementById("newFilterButtons").children;
            console.log(newFilterBtnChild);
            for (var i4 = 0; i4 < newFilterBtnChild.length; i4++){
              newFilterBtnChild[i4].style.display = "inline-block";
              newFilterBtnChild[i4].setAttribute("id", i4);
            }

            
        } else {
        }
      });
    } else if (filterOptions[2].checked == true) {
    }
  });
}
