function queryDecector() {
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
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

        localStorage.setItem("type", "Business");
        // console.log(localStorage.getItem("type"));

    } else if (urlParams.has('personal')) {
        document.getElementById("firstButton").innerText = "Babysit";
        document.getElementById("firstIcon").innerText = "child_friendly";

        document.getElementById("secondButton").innerText = "Date";
        document.getElementById("secondIcon").innerText = "favorite";

        document.getElementById("thirdButton").innerText = "Family";
        document.getElementById("thirdIcon").innerText = "family_restroom";

        document.getElementById("fourthButton").innerText = "Hangout";
        document.getElementById("fourthIcon").innerText = "group_add";

        document.getElementById("fifthButton").innerText = "Self Invite";
        document.getElementById("fifthIcon").innerText = "mail";

        document.getElementById("sixthButton").innerText = "Work Event";
        document.getElementById("sixthIcon").innerText = "favorite";

        document.getElementById("CategoryHeading").innerText = "Personal";
        // console.log("personal works");

        changeHREF("personal");

        localStorage.setItem("type", "Personal");
        // console.log(localStorage.getItem("type"));
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
    } else if (param == "personal") {
        document.getElementById("first").setAttribute("href", "thirdPageTest.html?Babysit");
        document.getElementById("second").setAttribute("href", "thirdPageTest.html?Date");
        document.getElementById("third").setAttribute("href", "thirdPageTest.html?Family");
        document.getElementById("fourth").setAttribute("href", "thirdPageTest.html?Hangout");
        document.getElementById("fifth").setAttribute("href", "thirdPageTest.html?SelfInvitation");
    }
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
