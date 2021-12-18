function queryDecector() {
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('business')) {
        document.getElementById("firstButton").innerText = "Coffee Chat";
        document.getElementById("firstIcon").innerText = "person";

        document.getElementById("secondButton").innerText = "Job Offer";
        document.getElementById("secondIcon").innerText = "work";

        document.getElementById("thirdButton").innerText = "Shift";
        document.getElementById("thirdIcon").innerText = "schedule";
        
        document.getElementById("fourthButton").innerText = "Sick";
        document.getElementById("fourthIcon").innerText = "sick";

        document.getElementById("fifthButton").innerText = "Work Event";
        document.getElementById("fifthIcon").innerText = "event";
        
        document.getElementById("sixthButton").innerText = "Work Event";
        document.getElementById("sixthIcon").innerText = "event";

        document.getElementById("CategoryHeading").innerText = "Business";
        // console.log("business works");

        changeHREF("business");

    } else if (urlParams.has('personal')) {
        document.getElementById("firstButton").innerText = "Babysit";
        document.getElementById("firstIcon").innerText = "child_friendly";

        document.getElementById("secondButton").innerText = "Date";
        document.getElementById("secondIcon").innerText = "favorite";

        document.getElementById("thirdButton").innerText = "Family";
        document.getElementById("thirdIcon").innerText = "family_restroom";

        document.getElementById("fourthButton").innerText = "Self Invitation";
        document.getElementById("fourthIcon").innerText = "mail";

        document.getElementById("fifthButton").innerText = "Hangout";
        document.getElementById("fifthIcon").innerText = "group_add";

        document.getElementById("sixthButton").innerText = "Work Event";
        document.getElementById("sixthIcon").innerText = "favorite";

        document.getElementById("CategoryHeading").innerText = "Personal";
        // console.log("personal works");

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
    } else if (param == "personal") {
        document.getElementById("first").setAttribute("href", "thirdPageTest.html?Hangout");
        document.getElementById("second").setAttribute("href", "thirdPageTest.html?Date");
        document.getElementById("third").setAttribute("href", "thirdPageTest.html?Babysit");
        document.getElementById("fourth").setAttribute("href", "thirdPageTest.html?FamilyDinners");
        document.getElementById("fifth").setAttribute("href", "thirdPageTest.html?HelpRequest");
    }
}