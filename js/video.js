function openEnvelope(){

    document
    .getElementById("envelope")
    .style.transform = "rotateX(180deg)";

    setTimeout(() => {

        document
        .querySelector(".envelope-section")
        .style.display = "none";

        document
        .getElementById("videosSection")
        .classList.remove("hidden");

    },700);
}

function nextMemory(index){

    const cards =
    document.querySelectorAll(".memory-card");

    cards[index - 1]
    .classList.add("hidden");

    cards[index]
    .classList.remove("hidden-memory");
}

function goToLetter(){

    window.location.href =
    "letter.html";
}