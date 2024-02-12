// Event handaler er koikti system ase:

// option 1: directly button ba element a even set kora.
{/* <button onclick="console.log(7)">Click me</button> */}

// option 2: add onclick function : IMPORTANT We will use it.
{/* <button onclick="yellow()">make yellow</button> */}
function yellow(){
    document.body.style.backgroundColor = "yellow"
}


// option 3: 
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = "blue"
}

// option: 3 another
const makePurpleButton = document.getElementById("make-purple");
makePurpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple'
}

// option: 4
const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener("click", makePink);     // aikhane 1st perameter a event name and second perameter a fnction er name ba oikhaneii function likhlew hobe. Tobe event er name sudho click dita hoi.

function makePink(){
    document.body.style.backgroundColor = "pink";
}

// option 4: another
const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener("click", function makeGreen(){
  document.body.style.backgroundColor = "green"
})

// option 4 : another : Final option : IMPORTANT we use it
document.getElementById("make-goldenRod").addEventListener("click", function (){
    document.body.style.backgroundColor = "goldenrod"
  })