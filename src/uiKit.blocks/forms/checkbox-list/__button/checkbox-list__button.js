export default function checkboxListButton (){
    document.addEventListener('click', function(e) {
        if (e.target && e.target.className == 'material-icons checkbox-list__button'){
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
    });
}