const menuBtn = document.querySelector(".menu-btn")
const burger = document.querySelector(".menu-btn_burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav_item");
const homeNameFirst = document.querySelector(".home_name-first");
const homeNameLast = document.querySelector(".home_name-last");
// const aboutMenu = document.querySelector('#aboutmenu')
// const expMenu = document.querySelector('#expmenu')
// const contactMenu = document.querySelector('#contactmenu')
// const projMenu = document.querySelector('#projmenu')
//const projWork = document.querySelectorAll('.proj_work');
const projItem = document.querySelectorAll('.proj_item');
//const menuLink = document.querySelector("#aboutbtn");



menuBtn.addEventListener("click", toggleMenu);

function toggleMenu(){
    burger.classList.toggle("open");
    nav.classList.toggle("open");
    menuNav.classList.toggle("open");
    homeNameFirst.classList.toggle("open");
    homeNameLast.classList.toggle("open");
    //console.log("Fuck you");
    navItems.forEach(item => item.classList.toggle('open'));
}

navItems.forEach(item => item.addEventListener("click", toggleNav));

function toggleNav(){
    burger.classList.toggle("open");
    nav.classList.toggle("open");
    menuNav.classList.toggle("open");
    homeNameFirst.classList.toggle("open");
    homeNameLast.classList.toggle("open");
    navItems.forEach(item => item.classList.toggle('open'));
    // aboutMenu.classList.toggle("active");
    // expMenu.classList.toggle("active");
    // contactMenu.classList.toggle("active");
    // projMenu.classList.toggle("active");
    //navItems.forEach(item => item.classList.toggle('active'));
    //console.log("Fuck you");
}

//projItem.forEach(item => item.addEventListener("click", toggleProj));
projItem.forEach(selectorDiv);
function selectorDiv(proj){
    const projSelect = proj.querySelector('.proj_select');
    projSelect.addEventListener("click", toggleProj);
    function toggleProj(){
        projItem.forEach(function(item){
            if (item !== proj){
                item.classList.remove("open");
            }
        })
        proj.classList.toggle("open");
        //console.log("It fucking works")
    }
}
// function toggleProj(){
//     projItem.classList.toggle("open");
//     console.log("Fuck you");
// }
// projItem.forEach(function(question){
//     //const btn = question.querySelector(".question-btn");
    
//     projSelect.addEventListener("click", function(){
//     // questions.forEach(function(item){
//     //     if (item !== question){
//     //         item.classList.remove("show-text");
//     //     }
//     // })   
//         question.classList.toggle("open");
//         console.log("It didn't work")
//     });
// });


