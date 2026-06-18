let attempts = 0;

function checkPassword() {

    const pass = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (pass === "072507") {
        window.location.href = "welcome.html";
        return;
    }

    attempts++;

    if (attempts === 1) {
        error.innerHTML = "Three birthdays.";
    }
    else if (attempts === 2) {
        error.innerHTML = "Three birthdays. Three people.";
    }
    else if (attempts === 3) {
        error.innerHTML = "Think about our trio.";
    }
    else if (attempts === 4) {
        error.innerHTML = "A date. A date. A date.";
    }
    else {
        error.innerHTML = "You're making this harder than engineering.";
    }

    document.getElementById("password").animate(
        [
            { transform: "translateX(-5px)" },
            { transform: "translateX(5px)" },
            { transform: "translateX(-5px)" },
            { transform: "translateX(0px)" }
        ],
        {
            duration: 300
        }
    );
}