export default function filtersToggle () {
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('button')){
            if(e.target.parentNode.className == 'searchRoom-main__filters-toggle'){
                if(e.target.parentNode.nextSibling.className == 'searchRoom-main__filters'){
                    e.target.parentNode.nextSibling.style.display = (e.target.parentNode.nextSibling.style.display == 'flex') ? 'none' : 'flex'
                }
            }        
        }
    });
}