export default function dropdown () {
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('dropdown__menu-button')){
            var menu = e.target.nextElementSibling;
            var classArr = menu.classList;               
    
            if (classArr[classArr.length - 1] == 'hidden'){
                classArr.remove('hidden');
                classArr.add('dropped');
                e.target.style.transform = 'rotate('+180+'deg)';
            } else {
                classArr.remove('dropped');
                classArr.add('hidden');
                e.target.style.transform = 'rotate('+0+'deg)';
            };
        }

        if (e.target && e.target.classList.contains('dropdown__apply-btn')) {
            var dateContainer = e.target;
            
            while (!dateContainer.classList.contains('dropdown')) {
                dateContainer = dateContainer.parentNode;
                
                if (dateContainer.classList.contains('dropdown')) {
                    
                    for (let i = 0; i < dateContainer.children.length; i++) {                        
                        if (dateContainer.children[i].classList.contains('dropdown__menu-container') && dateContainer.children[i].classList.contains('dropped')){
                            dateContainer.children[i].classList.remove('dropped');
                            dateContainer.children[i].classList.add('hidden');
                        }
                        if (dateContainer.children[i].classList.contains('dropdown__menu-button')){
                            dateContainer.children[i].style.transform = 'rotate(0)';
                        }
                    }
                }
            }
        }
    });
};