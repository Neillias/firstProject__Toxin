export default function headerDropdown () {
    
    document.addEventListener('click', function(e) {
        if (e.target && e.target.parentNode.className == 'header-main__dropdown'){                       
            var btn = e.target.parentNode,
                rotated;

            for(let i = 0; i < btn.children.length; i++){
                if (btn.children[i].style.transform == 'rotate(180deg)'){
                    rotated = true;
                } else if (btn.children[i].style.transform == 'rotate(0deg)'){
                    rotated = false;
                }
            }
                
            var deg = rotated ? 0 : 180;            
    
            for(let i = 0; i < btn.children.length; i++){
                if (btn.children[i].classList.contains('header-main__dropdown-content')){
                    btn.children[i].classList.toggle('hidden')
                }                                

                if (btn.children[i].classList.contains('material-icons')){
                    btn.children[i].style.transform = 'rotate('+deg+'deg)';
                }
            }        
        }
    });
}