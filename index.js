const menu_toggle = document.getElementById('menu-toggle');
const mobile_menu = document.getElementById('mobile-menu');
const main_menu = document.querySelector('.nav-container')
const menu_icon = document.querySelector('.menu-icon')


menu_toggle.addEventListener("click", showMenu);


function showMenu(){
    if (mobile_menu.classList=="menu-visible"){
        mobile_menu.classList.remove('menu-visible');
        mobile_menu.classList.add('menu-invisible');
        main_menu.classList.remove('mobile-styling')
        menu_icon.classList.add('bx-caret-down')
        menu_icon.classList.remove('bx-caret-up') 
    } else{
        mobile_menu.classList.add('menu-visible');
        mobile_menu.classList.remove('menu-invisible'); 
        main_menu.classList.add('mobile-styling')
        menu_icon.classList.remove('bx-caret-down')
        menu_icon.classList.add('bx-caret-up')
    }       
}
