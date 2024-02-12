const countOfSubhanallah = document.getElementById("countOfSubhanallah");
const subhanallahIncrementButton = document.getElementById("subhanallahIncrementButton");
const subhanallahDecrementButton = document.getElementById("subhanallahDecrementButton")


const countOfAlhamdulillah = document.getElementById("countOfAlhamdulillah")
const alhamdulillahIncrementButton = document.getElementById("alhamdulillahIncrementButton")
const alhamdulillahDecrementButton = document.getElementById("alhamdulillahDecrementButton")


const countOfAllahuakbar = document.getElementById("countOfAllahuakbar")
const allahuakbarIncrementButton = document.getElementById("allahuakbarIncrementButton")
const allahuakbarDecrementButton = document.getElementById("allahuakbarDecrementButton")


const resetButton = document.getElementById("resetButton")


subhanallahIncrementButton.addEventListener('click', function(){
    if(countOfSubhanallah.innerText === "33"){
        return alert  ("Kakka 33 bar hoia gese")
    }
    countOfSubhanallah.innerText ++;
})
subhanallahDecrementButton.addEventListener('click', function(){
    if(countOfSubhanallah.innerText === '0'){
        return alert( "kaka 0 er niche ar hobena")
    }
    countOfSubhanallah.innerText --;
})




alhamdulillahIncrementButton.addEventListener('click', function(){
    if(countOfAlhamdulillah.innerText === "33"){
        return alert( "Kakka 33 bar hoia gese")
    }
    countOfAlhamdulillah.innerText ++;
})
alhamdulillahDecrementButton.addEventListener('click', function(){
    if(countOfAlhamdulillah.innerText === '0'){
        return alert("kaka 0 er niche ar hobena")
    }
    countOfAlhamdulillah.innerText --;
})




allahuakbarIncrementButton.addEventListener("click", function(){
    if(countOfAllahuakbar.innerText === "33"){
        return alert("Kaka 33 ber hoia gese")
    }
    countOfAllahuakbar.innerText ++;
})
allahuakbarDecrementButton.addEventListener("click", function(){
    if(countOfAllahuakbar.innerText === "0"){
        return alert("Kaka 0 er niche ar hobena")
    }
    countOfAllahuakbar.innerText --;
})




// Reset button part
resetButton.addEventListener('click', function(){
    countOfSubhanallah.innerText = 0;
    countOfAlhamdulillah.innerText = 0;
    countOfAllahuakbar.innerText = 0;
})