const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";


menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
        MenuItems.style.maxHeight = "150px";

    }else{
        menuBtn.classList.remove('open');
        menuOpen = false;
        MenuItems.style.maxHeight = "0px";

    }
});


