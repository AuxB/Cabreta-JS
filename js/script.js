//MESSAGE

// function littleMessage(){
//     let name = window.prompt(`Bonjour toi, alors tu as repéré les différents modules JS que j'ai implémenté ?\n
//     Un indice : #darkmode, #trierLaGallerie, #modalInGallery\n
//     Au fait, c'est quoi ton prénom ?`);
    
//     window.alert(`Bonne naviguation ${name}, et amuses toi!`);
// }

// littleMessage();
// ---- LIKE BUTTON -----
console.log(document.body.scrollTop)
const likeBtn = document.querySelectorAll(".like-btn");
const dislikeBtn = document.querySelectorAll(".dislike-btn");

function eventDisOrLikeBtn(buttonType){
    for(let i = 0; i < buttonType.length; i++){
        buttonType[i].addEventListener('click', function(e){
            if(e.target.className === "like-btn" || e.target.className === "dislike-btn"){
                console.log(e.target.className);
                let nbDisOrLike = e.target.children[1];
                let convertNbDisOrLike = Number(nbDisOrLike.innerHTML);
                convertNbDisOrLike === 9 ? convertNbDisOrLike = 9 : convertNbDisOrLike += 1;
                nbDisOrLike.innerHTML = String(convertNbDisOrLike);
            }
        });
    }

}

eventDisOrLikeBtn(likeBtn);
eventDisOrLikeBtn(dislikeBtn);

// ---- DARKMODE ----
const darkMod = document.getElementById("darkMode");
const logoCabreta = document.getElementById("logo");
const rootElt = document.documentElement;


darkMod.onclick = function(){
    
    if(rootElt.getAttribute('data-theme') === 'dark'){  // White mode
        rootElt.setAttribute('data-theme', 'light');
        logoCabreta.src = "images/logo/CabretaLogoBlack1.png";
    }else { // Black mode
        rootElt.setAttribute('data-theme', 'dark');
        logoCabreta.src = "images/logo/CabretaLogoWhite.png";
    }
    sessionStorage.setItem("logo", logoCabreta.src);
    sessionStorage.setItem("colorMod", rootElt.getAttribute('data-theme'));

};

rootElt.setAttribute('data-theme', sessionStorage.getItem("colorMod"));
logoCabreta.src = sessionStorage.getItem("logo");

// SORT PICTURES
const sortBtn = document.getElementById("boutonContainer");

const showAll = document.getElementById("showAll");
const sport = document.getElementById("sport");
const cooking = document.getElementById("cooking");
const technology = document.getElementById("technology");


function resetSort(){
    showAll.style.display = "none";
    sport.style.display = "none";
    cooking.style.display = "none";
    technology.style.display = "none";
}

function filterSelection(filter){
    resetSort();
    switch (filter) {
        case 'all':
            showAll.style.display = 'grid';
            break;
        case 'sport':
            sport.style.display = 'grid';
            break;
        case 'cooking':
            cooking.style.display = 'grid';
            break;
        case 'technology':
            technology.style.display = 'grid';
            break;
        default:
            break;
    }
}

sortBtn.addEventListener('click', function(e){
    let currentActive = document.querySelector(".active");
    currentActive.classList.remove("active");
    if(e.target != undefined)
        e.target.classList.add("active");
})

// MODAL
const modal = document.getElementById("modalImg");
const span = document.getElementsByClassName("close")[0];
const imgInModal = document.getElementById("imageInModal");

document.querySelector("body").addEventListener('click', function(e){
    console.log(e.target.parentNode.parentNode.id);
    if(e.target.src != undefined && e.target.parentNode.parentNode.id != "showAll"){
        //wee screen the modal if we do not be in the the 'Show all' section
        modal.style.display = "block";
        imgInModal.src = e.target.src;
    }
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

