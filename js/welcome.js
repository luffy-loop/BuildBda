const text = "Loading memories...";

const typewriter =
document.getElementById("typewriter");

let index = 0;

function typeEffect(){

    if(index < text.length){

        typewriter.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect,80);
    }

    else{

        setTimeout(()=>{

            document
            .getElementById("message")
            .classList.remove("hidden");

        },700);
    }
}

typeEffect();

function startJourney(){

    document
    .getElementById("balloons-section")
    .scrollIntoView({
        behavior:"smooth"
    });

}

function scrollToTimeline(){

    document
    .getElementById("timeline-section")
    .scrollIntoView({
        behavior:"smooth"
    });

}

function goToCharminar(){
    window.location.href = "html/charminar.html";
}