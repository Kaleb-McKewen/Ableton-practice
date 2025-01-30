const menu_toggle = document.getElementById('menu-toggle');
const mobile_menu = document.getElementById('mobile-menu');
const main_menu = document.querySelector('.nav-container')
const menu_icon = document.querySelector('.menu-icon')


menu_toggle.addEventListener("click", showMenu);


function showMenu(){
    if (mobile_menu.style.display=="block"){
        mobile_menu.style.display="none";
        main_menu.classList.remove('mobile-styling')
        menu_icon.classList.add('bx-caret-down')
        menu_icon.classList.remove('bx-caret-up')
        main_menu.classList.remove('white')
        console.log('here')    
    } else{ 
        mobile_menu.style.display="block";
        main_menu.classList.add('mobile-styling')
        menu_icon.classList.remove('bx-caret-down')
        menu_icon.classList.add('bx-caret-up')
        main_menu.classList.add('white')
    }       
}
