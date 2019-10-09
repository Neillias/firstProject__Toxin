export default function navToggle () {
    document.addEventListener('click', function(e) {
        if (e.target && e.target.className == 'header-main__nav-toggle'){
            var navCont = e.target.parentNode;                

            for(let i = 0; i < navCont.children.length; i++){
                if (navCont.children[i].classList.contains('header-main__nav')){
                    navCont.children[i].style.display = (navCont.children[i].style.display == 'block') ? 'none' : 'block'
                }
            }        
        }
    });
}