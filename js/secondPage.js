function queryDecector() {
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('business')) {
        document.getElementById("firstButton").innerText = "Event";

        document.getElementById("secondButton").innerText = "Meeting";

        document.getElementById("thirdButton").innerText = "Coffee Chat";

        document.getElementById("fourthButton").innerText = "Taking Shifts";

        document.getElementById("fifthButton").innerText = "Workload addition";

        console.log("business works");

        changeHREF("business");
 
    } else if (urlParams.has('personal')) {
        document.getElementById("firstButton").innerText = "Hangout";
        document.getElementById("secondButton").innerText = "Date";
        document.getElementById("thirdButton").innerText = "Babysit";
        document.getElementById("fourthButton").innerText = "Family Dinners";
        document.getElementById("fifthButton").innerText = "Help Request";
        console.log("personal works");

        changeHREF("personal");
    } else {
        console.log("Error has occured");
    }

    
}

queryDecector();

function changeHREF(param) {
    if (param == "business") {
        document.getElementById("first").setAttribute("href", "thirdPageTest.html?Event");
        document.getElementById("second").setAttribute("href", "thirdPageTest.html?Meeting");
        document.getElementById("third").setAttribute("href", "thirdPageTest.html?CoffeeChat");
        document.getElementById("fourth").setAttribute("href", "thirdPageTest.html?TakingShifts");
        document.getElementById("fifth").setAttribute("href", "thirdPageTest.html?WorkloadAddition");
    } else if (param == "personal"){
        document.getElementById("first").setAttribute("href", "thirdPageTest.html?Hangout");
        document.getElementById("second").setAttribute("href", "thirdPageTest.html?Date");
        document.getElementById("third").setAttribute("href", "thirdPageTest.html?Babysit");
        document.getElementById("fourth").setAttribute("href", "thirdPageTest.html?FamilyDinners");
        document.getElementById("fifth").setAttribute("href", "thirdPageTest.html?HelpRequest");
    }
}