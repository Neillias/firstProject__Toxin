export default function dateDropdown () {    
    document.addEventListener('click', function(e) {      
        if (e.target && e.target.parentNode.className == 'date-dropdown__toggle'){                       
            var dateContainer = e.target.parentNode.parentNode.parentNode,
                rotated;
            
            if (e.target.style.transform == 'rotate(180deg)'){
                rotated = true;
            } else if (e.target.style.transform == 'rotate(0deg)'){
                rotated = false;
            }            
                
            var deg = rotated ? 0 : 180;                                  
            e.target.style.transform = 'rotate('+deg+'deg)';
            
            for(let i = 0; i < dateContainer.children.length; i++){
                if (dateContainer.children[i].classList.contains('date-dropdown__datepick-container')){
                    dateContainer.children[i].style.display = (dateContainer.children[i].style.display == 'block') ? 'none' : 'block'
                }
            }            
        }
    });
}