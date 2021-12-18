function queryDecector() {
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    if (urlParams.has('business')) {
        document.getElementById("firstButton").innerText = "Coffee Chat";

        document.getElementById("secondButton").innerText = "Job Offer";

        document.getElementById("thirdButton").innerText = "Shift";

        document.getElementById("fourthButton").innerText = "Sick";

        document.getElementById("fifthButton").innerText = "Work Event";

        console.log("business works");

        changeHREF("business");
 
    } else if (urlParams.has('personal')) {
        document.getElementById("firstButton").innerText = "Babysit";
        document.getElementById("secondButton").innerText = "Date";
        document.getElementById("thirdButton").innerText = "Family";
        document.getElementById("fourthButton").innerText = "Self Invitation";
        document.getElementById("fifthButton").innerText = "Hangout";
        console.log("personal works");

        changeHREF("personal");
    } else {
        console.log("Error has occured");
    }

    
}

queryDecector();

function changeHREF(param) {
    if (param == "business") {
        document.getElementById("first").setAttribute("href", "thirdPageTest.html?CoffeeChat");
        document.getElementById("second").setAttribute("href", "thirdPageTest.html?JobOffer");
        document.getElementById("third").setAttribute("href", "thirdPageTest.html?Shift");
        document.getElementById("fourth").setAttribute("href", "thirdPageTest.html?Sick");
        document.getElementById("fifth").setAttribute("href", "thirdPageTest.html?WorkEvent");
    } else if (param == "personal"){
        document.getElementById("first").setAttribute("href", "thirdPageTest.html?Babysit");
        document.getElementById("second").setAttribute("href", "thirdPageTest.html?Date");
        document.getElementById("third").setAttribute("href", "thirdPageTest.html?Family");
        document.getElementById("fourth").setAttribute("href", "thirdPageTest.html?SelfInvitation");
        document.getElementById("fifth").setAttribute("href", "thirdPageTest.html?Hangout");
    }
}