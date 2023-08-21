let nav = document.querySelector(".navbar");
let logo = document.querySelector(".navbar-brand");
let links = document.querySelectorAll(".navbar-nav li a");
let lis = document.querySelectorAll(".navbar-nav li");
let arrowTop = document.querySelector(".arr");
let feedBack=document.querySelector(".feedback p");
console.log(feedBack);

// Change header Background On Scroll
window.onscroll = () => {
  if (window.scrollY >= 619) {
    nav.style = "     background-color: rgb(118 118 118);    ";
    // logo.style = "color:#fff;";
    links.forEach((link) => {
      link.style.color = "#fff";
      feedBack.style.left="-300px"
      
    });
    arrowTop.style = "right:0";//Show top arrow
  } else {
    nav.style = " box-shadow: 0 0 2px -1px #000; background-color:#fff";
    logo.style = "color:#03a8f5;";
    links.forEach((link) => {
      link.style.color = "#000";
          arrowTop.style = "right:-50px";//hide top arrow
          feedBack.style.left="50px"


    });
  }
};

// window.onscroll=()=>{
//   if(window.scrollY>=107){
//    
    
//   }
//   else{
//     
//   }
// }

arrowTop.addEventListener("click",function(){
window.scrollTo({
  top:0,
  behavior:"smooth"
  
})

})
let other=document.querySelector("#other")
let menu=document.querySelector(".menu")
let close=document.querySelector("#close");
console.log(other)
console.log(menu)
other.addEventListener("click",()=>{
  menu.style.top="68px"
})
close.addEventListener("click",()=>{
  menu.style.top="-150%"
})
