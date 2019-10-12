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

        if (e.target && e.target.className == 'date-dropdown__apply-btn') {
            var dateContainer = e.target,
                rotated;
            
            while (!dateContainer.classList.contains('date-dropdowns')){
                dateContainer = dateContainer.parentNode;
                
                if (dateContainer.classList.contains('date-dropdowns')){
                    for (let i = 0; i < dateContainer.children.length; i++) {
                        var thisChildren = dateContainer.children[i];                    
                        
                        if (thisChildren.classList.contains('date-dropdowns__input') || thisChildren.classList.contains('date-dropdowns__input_type_filterDate')) {
                            var thisToggle = thisChildren.querySelector('.date-dropdown__toggle').firstChild;
                            if (thisToggle.style.transform == 'rotate(180deg)'){
                                rotated = true;
                            } else if (thisToggle.style.transform == 'rotate(0deg)'){
                                rotated = false;
                            }
            
                            if (rotated) {
                                thisToggle.style.transform = 'rotate(0)';
                            }
                        }
                        
                        if (thisChildren.classList.contains('date-dropdown__datepick-container')){
                            thisChildren.style.display = (dateContainer.children[i].style.display == 'block') ? 'none' : 'block'
                        }                           
                    }
                }                
            }            
        } 
    });
}