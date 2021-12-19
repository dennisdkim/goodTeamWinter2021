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
      document.getElementById("newFilterButtons").innerHTML = "";
      quotesToCheck.forEach((item) => {
        if (item.includes("#stern") == true) {
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

          document.getElementById("newFilterButtons").style.display =
            "inline-block";
          var newFilterBtnChild =
            document.getElementById("newFilterButtons").children;
          for (var i4 = 0; i4 < newFilterBtnChild.length; i4++) {
            newFilterBtnChild[i4].style.display = "inline-block";
            newFilterBtnChild[i4].setAttribute("id", i4);
          }
        } else {
        }
      });
    } else if (filterOptions[1].checked == true) {
      document.getElementById("newFilterButtons").innerHTML = "";
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

          document.getElementById("newFilterButtons").style.display =
            "inline-block";
          var newFilterBtnChild =
            document.getElementById("newFilterButtons").children;
          for (var i4 = 0; i4 < newFilterBtnChild.length; i4++) {
            newFilterBtnChild[i4].style.display = "inline-block";
            newFilterBtnChild[i4].setAttribute("id", i4);
          }
        } else {
        }
      });
    } else if (filterOptions[2].checked == true) {
      document.getElementById("newFilterButtons").innerHTML = "";
      quotesToCheck.forEach((item) => {
        if (item.includes("#nice") == true) {
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

          document.getElementById("newFilterButtons").style.display =
            "inline-block";
          var newFilterBtnChild =
            document.getElementById("newFilterButtons").children;
          for (var i4 = 0; i4 < newFilterBtnChild.length; i4++) {
            newFilterBtnChild[i4].style.display = "inline-block";
            newFilterBtnChild[i4].setAttribute("id", i4);
          }
        } else {
        }
      });
    }
  });
}

function clearFilters(){
  var filterBtns = document.getElementsByName("filterBtns");
  for (var i = 0; i < filterBtns.length; i++){
    filterBtns[i].checked = false;
    document.getElementById("newFilterButtons").style.display = "none";
    document.getElementById("newButtons").style.display = "inline-block";
  }
}

function queryDetector() {
  var urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams);

  if (urlParams.has('Babysit')) {
    document.getElementById("SubCategoryHeading").innerText = "Babysitting";
  } else if (urlParams.has('Date')) {
    document.getElementById("SubCategoryHeading").innerText = "Dating";
  } else if (urlParams.has('Family')) {
    document.getElementById("SubCategoryHeading").innerText = "Family";
  } else if (urlParams.has('Hangout')) {
    document.getElementById("SubCategoryHeading").innerText = "Hangout";
  } else if (urlParams.has('SelfInvitation')) {
    document.getElementById("SubCategoryHeading").innerText = "Self Invite";
  } else if (urlParams.has('CoffeeChat')) {
    document.getElementById("SubCategoryHeading").innerText = "Coffee Chat";
  } else if (urlParams.has('JobOffer')) {
    document.getElementById("SubCategoryHeading").innerText = "Job Offer";
  } else if (urlParams.has('Shift')) {
    document.getElementById("SubCategoryHeading").innerText = "Shift";
  } else if (urlParams.has('Sick')) {
    document.getElementById("SubCategoryHeading").innerText = "Sick";
  } else if (urlParams.has('WorkEvent')) {
    document.getElementById("SubCategoryHeading").innerText = "Work Event";
  } else {
    console.log("error has occured");
  }


}

function categoryChange() {
  console.log(localStorage.getItem('type'));
  var typeOfEvent = localStorage.getItem('type');
  if (localStorage.getItem("type") === "Personal") {
    document.getElementById("CategoryHeading").innerText = "Personal";
  } else if (localStorage.getItem("type") === "Business") {
    document.getElementById("CategoryHeading").innerText = "Business";
  } else {
    console.log("error has occured");
  }
}
categoryChange();
queryDetector();

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
