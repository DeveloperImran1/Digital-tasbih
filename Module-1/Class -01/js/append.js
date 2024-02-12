// >>>>>>>>>>>>>>>>>>>>>       Class 8       >>>>>>>>>>>>>>>>>>>>>>>>>>>


// html element addd korar 3 steps 
// 1. where to added
const placeList = document.getElementById('place-list');

// 2. What to be added
const list =document.createElement('li');
list.innerText = "Phartoli bon";

// 3. add the child
placeList.appendChild(list)


// Same way te akta section create kore main tag er moddhe add koro
// 1. whre to add 
const mainContainer = document.getElementById("main-container");

// 2. what will be added
const section = document.createElement("section");
const h1= document.createElement("h1");
h1.innerText = "My food list";
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = "Biriani";
ul.appendChild(li1)

const secondLi= document.createElement('li');
secondLi.innerText = "Borhani";
ul.appendChild(secondLi)

const li3 = document.createElement("li");
li3.innerText = "Salad";
ul.appendChild(li3)

section.appendChild(ul)
mainContainer.appendChild(section);




// uporer niom a akta akta kore element create kore innerText set kore append child er maddhome add kora jai. Abar nicher nioma easyli set kora jai.
// set innerHTML directly
const sectionDrees = document.createElement('section');
sectionDrees.innerHTML = `
<h1>My Dress section </h1>
<li> T-shirt </li>
<li> Sendol ganzi </li>
<li> Lungi </li>
`
mainContainer.appendChild(sectionDrees)