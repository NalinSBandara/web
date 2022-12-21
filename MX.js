var nav = document.getElementsByClassName('right-h');
window.addEventListener('scroll',fixNav)

function fixNav(){
    if(window.scrollT>nav.offsetHeight+20){
        nav.classList.add("active");
    }
    else{
        nav.classList.remove("active");
    }
 
}
