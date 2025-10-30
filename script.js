const sideMENU = document.querySelector("aside"); 
const menuBtn = document.querySelector("#menu-btn"); 
const CloseBtn = document.querySelector("#close-btn"); 
const themeToggler=document.querySelector(".theme-Toggler")

menuBtn.addEventListener('click', () => {
    sidemenu.style.display='block';
})
CloseBtn.addEventListener('click',() => {
    sideMenu.style.display='none'; 

} )
themeToggler.addEventListener('click',() => {
    document.body.classList.toggle('dark-theme-variables'); 
})
themeToggler.querySelector('span').classList.toggle('active'); 
