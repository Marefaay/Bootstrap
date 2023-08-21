let heading=document.querySelector(".thanks h1");
let rocket= document.querySelector("i")
console.log(heading)
console.log(rocket)
setInterval(()=>{
    rocket.style.display="none"
    heading.style.display="block" 
},1000)