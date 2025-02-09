let toggler = document.querySelector('#toggler');
let navlist = document.querySelector('.nav-menu');


toggler.addEventListener('click', listDisplay);
function listDisplay(){
   
    // console.log("bc")
    navlist.classList.toggle('showList');
}