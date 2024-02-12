// >>>>>>>>>>>>>>>>>>      Class 9       >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const allLi = document.getElementsByTagName("li");
console.log(allLi);

const allTitles = document.getElementsByClassName("section-title");
console.log(allTitles);

const secondSection = document.getElementById("second-section");
console.log(secondSection);
secondSection.style.color = "white";
secondSection.style.backgroundColor = "tomato";

// document.querySelectorAll
// document.querySelector 

// 1. where add
const secondList = document.querySelector("#second-list");

// 2. what add
const newLi = document.createElement("li");
newLi.innerHTML = "My dynamic item";

// 3. element added
secondList.appendChild(newLi)


// Dynamically add
// const mainContainer= document.getElementsByClassName("main-container"); className dia element k selection kora jabena. karon aita oi element er nodes ba all element dei. tai id dia ba querySelector dia dhorte hobe.
const mainContainer= document.getElementById("main-container");
console.log(mainContainer)
const newSection = document.createElement("section");
newSection.innerHTML = `

    <h1> My dynamic section </h1>
    <p>Extra text added </p>
    <ul>    
        <li> first item </li>
        <li> first item </li>
        <li> first item </li>
        <li> first item </li>
    </ul>
`
mainContainer.appendChild(newSection)