// >>>>>>>>>>>>>>>>>>>>       class 6      >>>>>>>>>>>>>>>>>>>>>
// html er kono element k dhore aivabe style kora jai.

const sections = document.querySelectorAll('section');
for(const section of sections){
    // console.log(section.innerHTML)
    // console.log(section.innerText);
    section.style.border = "2px solid steelblue";
    section.style.margin = "5px";
    section.style.paddingLeft = "10px";
    section.style.borderRadius = "15px";
    section.style.backgroundColor = "lightgray"
}
const placeContainer = document.getElementById("place-container");
console.log(placeContainer.style.backgroundColor = "tomato")

// abar kono element er class add ba remove korar jonno html er element k dhore.classList.remove('className')
// css file a large-text and text-center class namer 2ta property k dhore style dewa ase. but html file a large-text namer akta class ase. akon html er large text k remove kore text-center class k add korlam js dia. fole css file a age theke likha rakha style ta kaz korbe.
placeContainer.classList.remove("large-text");
placeContainer.classList.add("text-center");
console.log(placeContainer.classList)




// >>>>>>>>>>>>>>>>>>>>>>      class 7         >>>>>>>>>>>>>>>>>>>>>>>>

// kono element k select kore .childNodes dila oi element er moddher all element show korbe. Tader child node k sellect korar jonno abar child nodes use kora jai.
console.log(placeContainer);
console.log(placeContainer.childNodes);
console.log(placeContainer.firstChild);
console.log(placeContainer.lastChild);
console.log(placeContainer.childNodes[3]);
console.log(placeContainer.childNodes[3].childNodes);
console.log(placeContainer.childNodes[3].childNodes[5].nextSibling);


// html er kono element js er maddhome create korte .createElement("tagName") use kora hoi.
console.log(document.createElement("p"));
console.log(document.createElement("div"));
console.log(document.createElement("section"))

// kono akta element js dia create kore appendChild er maddhome specific kono element a add kora jai.
const li = document.createElement('li');
li.innerText = "This is new element in JS"
console.log(li);

const placeUl = document.querySelector("#place-container ul");    // querySelectorAll dewa jabena. sudho querySelector() use korte hobe. Karon akta element k sellect kortesi.
placeUl.appendChild(li)
console.log(placeUl)

const li2 = document.createElement("li");
li2.innerText = "This is new li 2 in js";
placeUl.appendChild(li2);
console.log(placeUl);


// nodesList mane kono element er moddhe joto element ase. Abar parentNode mane , kono element er parant element  k bujhai.
console.log(placeUl.parentNode)
console.log(placeUl.parentNode.parentNode)
console.log(placeUl.parentNode.parentNode.parentNode)
console.log(placeUl.parentNode.parentNode.parentNode.parentNode)
console.log(placeUl.parentNode.parentNode.parentNode.parentNode.parentNode)   // document holo first and last node. er por ar parent element nai.
console.log(placeUl.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)