export default function dropdownMenu () {
    var adultGuests = 0;
    var babies = 0;

    var bedrooms = 2;
    var beds = 2;
    var bathrooms = 0;

    document.addEventListener('click', function(e) {
        var menuValue = 0;
        // Кнопка (+) на увеличение числа в меню
        if (e.target && e.target.className == 'dropdown__add-btn'){

            var addBtn = e.target,
                thisResult = addBtn.previousElementSibling.firstChild.innerHTML,
                finalResult = addBtn.previousElementSibling.firstChild, 
                thisRemoveBtn = addBtn.previousSibling.previousSibling,
                x = Number(thisResult);

            var thisDropdown = addBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode,
                thisCategory = addBtn.parentNode.parentNode.firstChild.innerHTML,
                thisInput = thisDropdown.getElementsByTagName('input')[0],
                thisInputName = thisDropdown.getElementsByTagName('input')[0].name,
                thisClearBtn = thisDropdown.querySelector('.dropdown__clear-btn');
            
            var arrResults = addBtn.parentNode.parentNode.parentNode.parentNode.querySelectorAll('.dropdown__result');
            
            if (menuValue < 10) {
                thisResult = x + 1;

                finalResult.innerHTML = thisResult;

                thisRemoveBtn.classList.remove('dropdown__options_inactive');

                // Засчитывает общее значение из всех result в блоке dropdown__menu
                for (let i = 0; i < arrResults.length; i++){                
                    var allResults = Number(arrResults[i].firstChild.innerHTML);

                    menuValue += allResults;
                }

                // Ведет работу только с блоком по гостям
                if (thisInputName == 'Guests') {
                    //Подсчитывает количество взрослых и младенцев
                    if (thisCategory == 'Взрослые' || thisCategory == 'Дети'){
                        
                        adultGuests += 1;
                        
                    } else if (thisCategory == 'Младенцы'){
                        
                        babies += 1;
                        
                    }

                    // Выводит результат в форму
                    if (babies == 0) {
                        if (adultGuests == 1)
                            thisInput.value = adultGuests + ' гость';
                        else if (adultGuests > 1 && adultGuests < 5) {
                            thisInput.value = adultGuests + ' гостя';
                        } else if (adultGuests >= 5) {
                            thisInput.value = adultGuests + ' гостей';
                        }
                    } else if (babies == 1){
                        if (adultGuests == 1)
                            thisInput.value = adultGuests + ' гость' + ', ' + babies + ' младенец';
                        else if (adultGuests > 1 && adultGuests < 5) {
                            thisInput.value = adultGuests + ' гостя' + ', ' + babies + ' младенец';
                        } else if (adultGuests >= 5) {
                            thisInput.value = adultGuests + ' гостей' + ', ' + babies + ' младенец';
                        }
                    } else if (babies > 1 && babies < 5) {
                        if (adultGuests == 1)
                            thisInput.value = adultGuests + ' гость' + ', ' + babies + ' младенца';
                        else if (adultGuests > 1 && adultGuests < 5) {
                            thisInput.value = adultGuests + ' гостя' + ', ' + babies + ' младенца';
                        } else if (adultGuests >= 5) {
                            thisInput.value = adultGuests + ' гостей' + ', ' + babies + ' младенца';
                        }
                    } else if (babies >= 5) {
                        if (adultGuests == 1)
                            thisInput.value = adultGuests + ' гость' + ', ' + babies + ' младенцев';
                        else if (adultGuests > 1 && adultGuests < 5) {
                            thisInput.value = adultGuests + ' гостя' + ', ' + babies + ' младенцев';
                        } else if (adultGuests >= 5) {
                            thisInput.value = adultGuests + ' гостей' + ', ' + babies + ' младенцев';
                        }
                    }
                }

                // Ведёт работу только с блоком по комнатам
                if (thisInputName == 'Rooms') {
                    if (thisCategory == 'Спальни') {
                        bedrooms += 1;
                    } else if (thisCategory == 'Кровати'){
                        beds += 1;
                    } else if (thisCategory == 'Ванные комнаты'){
                        bathrooms += 1;
                    }

                    console.log(bedrooms + ' ' + beds + ' ' + bathrooms);
                    
                    // Выводит результат в форму
                    if (bedrooms == 0 && beds == 0 && bathrooms == 0){
                        thisInput.value = 'Какие удобства';
                    } else if (bedrooms > 0 || beds> 0 || bathrooms > 0){
                        thisInput.value = '';
                    }

                    if (bedrooms > 0){
                        thisInput.value += bedrooms + ' спальни';
                    } else if (beds > 0){
                        thisInput.value += beds + ' кровати';
                    } else if (bathrooms > 0){
                        thisInput.value += bathrooms + ' ванных';
                    }

                    if (bedrooms > 0 && beds > 0){
                        thisInput.value = '';
                        thisInput.value += bedrooms + ' спальни' + ', ' + beds + ' кровати';
                    } else if (bedrooms > 0 && bathrooms > 0){
                        thisInput.value = '';
                        thisInput.value += bedrooms + ' спальни' + ', ' + bathrooms + ' ванных';
                    }

                    if (beds > 0 && bathrooms > 0){
                        thisInput.value = '';
                        thisInput.value += beds + ' кровати' + ', ' + bathrooms + ' ванных';
                    }

                    if (bedrooms > 0 && beds> 0 && bathrooms > 0){
                        thisInput.value = '';
                        thisInput.value += bedrooms + ' спальни' + ', ' + beds + ' кровати' + ', ' + bathrooms + ' ванных';
                    }
                }                     

                // Устанавливает ограничение в 10 гостей. При достижении отметки кнопка (+) становится неактивной
                if (menuValue == 10) {
                    var allAddBtn = addBtn.parentNode.parentNode.parentNode.parentNode.getElementsByClassName('dropdown__add-btn');
                    
                    for (let i = 0; i < allAddBtn.length; i++){
                        allAddBtn[i].classList.add('dropdown__options_inactive');
                    }
                }
            }
            
            if (menuValue > 0) {
                thisClearBtn.style.display = 'block';
            }
        }
        // Кнопка (+) на увеличение числа в меню

        // Кнопка (-) на снижение числа в меню
        if (e.target && e.target.className == 'dropdown__remove-btn'){
            var removeBtn = e.target;
            var thisResult = removeBtn.nextElementSibling.firstChild.innerHTML;
            var finalResult = removeBtn.nextElementSibling.firstChild;
            var x = Number(thisResult);

            var thisDropdown = removeBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            var thisCategory = removeBtn.parentNode.parentNode.firstChild.innerHTML;
            var thisInput = thisDropdown.getElementsByTagName('input')[0];
            var thisInputName = thisDropdown.getElementsByTagName('input')[0].name;
            var thisClearBtn = thisDropdown.querySelector('.dropdown__clear-btn');

            var arrResults = removeBtn.parentNode.parentNode.parentNode.parentNode.querySelectorAll('.dropdown__result');

            if (x > 0) {
                var allAddBtn = removeBtn.parentNode.parentNode.parentNode.parentNode.getElementsByClassName('dropdown__add-btn');
                
                thisResult = x -1;

                finalResult.innerHTML = thisResult;

                // Засчитывает общее значение из всех result в блоке dropdown__menu
                for (let i = 0; i < arrResults.length; i++){                
                    var allResults = Number(arrResults[i].firstChild.innerHTML);

                    menuValue += allResults;
                }

                // Вновь делает кнопки (+) активными при снижении максимально допустимого числа гостей.
                if (menuValue == 9) {
                    for (let i = 0; i < allAddBtn.length; i++){
                        allAddBtn[i].classList.remove('dropdown__options_inactive');
                    }
                }            

                // Ведет работу только с блоком по гостям
                if (thisInputName == 'Guests') {
                    // Подсчитывает количество взрослых и младенцев
                    if (thisCategory == 'Взрослые' || thisCategory == 'Дети'){
                        
                        adultGuests -= 1;
                        
                    } else if (thisCategory == 'Младенцы'){
                        
                        babies -= 1;
                        
                    }

                    // Выводит результат в форму
                    if (menuValue == 0) {
                        thisInput.value = 'Сколько гостей';
                    } if (babies == 0) {
                        if (adultGuests == 1)
                            thisInput.value = adultGuests + ' гость';
                        else if (adultGuests > 1 && adultGuests < 5) {
                            thisInput.value = adultGuests + ' гостя';
                        } else if (adultGuests >= 5) {
                            thisInput.value = adultGuests + ' гостей';
                        }
                    } else if (babies == 1){
                        if (adultGuests == 1)
                            thisInput.value = adultGuests + ' гость' + ', ' + babies + ' младенец';
                        else if (adultGuests > 1 && adultGuests < 5) {
                            thisInput.value = adultGuests + ' гостя' + ', ' + babies + ' младенец';
                        } else if (adultGuests >= 5) {
                            thisInput.value = adultGuests + ' гостей' + ', ' + babies + ' младенец';
                        }
                    } else if (babies > 1 && babies < 5) {
                        if (adultGuests == 1)
                            thisInput.value = adultGuests + ' гость' + ', ' + babies + ' младенца';
                        else if (adultGuests > 1 && adultGuests < 5) {
                            thisInput.value = adultGuests + ' гостя' + ', ' + babies + ' младенца';
                        } else if (adultGuests >= 5) {
                            thisInput.value = adultGuests + ' гостей' + ', ' + babies + ' младенца';
                        }
                    } else if (babies >= 5) {
                        if (adultGuests == 1)
                            thisInput.value = adultGuests + ' гость' + ', ' + babies + ' младенцев';
                        else if (adultGuests > 1 && adultGuests < 5) {
                            thisInput.value = adultGuests + ' гостя' + ', ' + babies + ' младенцев';
                        } else if (adultGuests >= 5) {
                            thisInput.value = adultGuests + ' гостей' + ', ' + babies + ' младенцев';
                        }
                    }
                }
                
                // Ведёт работу только с блоком по комнатам
                if (thisInputName == 'Rooms') {
                    if (thisCategory == 'Спальни') {
                        bedrooms -= 1;
                    } else if (thisCategory == 'Кровати'){
                        beds -= 1;
                    } else if (thisCategory == 'Ванные комнаты'){
                        bathrooms -= 1;
                    }

                    console.log(bedrooms + ' ' + beds + ' ' + bathrooms);
                    
                    // Выводит результат в форму
                    if (bedrooms == 0 && beds == 0 && bathrooms == 0){
                        thisInput.value = 'Какие удобства';
                    } else if (bedrooms > 0 || beds> 0 || bathrooms > 0){
                        thisInput.value = '';
                    }

                    if (bedrooms > 0){
                        thisInput.value += bedrooms + ' спальни';
                    } else if (beds > 0){
                        thisInput.value += beds + ' кровати';
                    } else if (bathrooms > 0){
                        thisInput.value += bathrooms + ' ванных';
                    }

                    if (bedrooms > 0 && beds > 0){
                        thisInput.value = '';
                        thisInput.value += bedrooms + ' спальни' + ', ' + beds + ' кровати';
                    } else if (bedrooms > 0 && bathrooms > 0){
                        thisInput.value = '';
                        thisInput.value += bedrooms + ' спальни' + ', ' + bathrooms + ' ванных';
                    }

                    if (beds > 0 && bathrooms > 0){
                        thisInput.value = '';
                        thisInput.value += beds + ' кровати' + ', ' + bathrooms + ' ванных';
                    }

                    if (bedrooms > 0 && beds> 0 && bathrooms > 0){
                        thisInput.value = '';
                        thisInput.value += bedrooms + ' спальни' + ', ' + beds + ' кровати' + ', ' + bathrooms + ' ванных';
                    }
                }

                // Делает неактивной кнопку (-) при достижении нулевого значения
                if (x == 1) {
                    removeBtn.classList.add('dropdown__options_inactive');
                }
            }

            if (menuValue == 0) {
                thisClearBtn.style.display = 'none';
            }
        }
        // Кнопка (-) на снижение числа в меню

        // Кнопка (clear)
        if (e.target && e.target.className == 'dropdown__clear-btn') {
            var thisDropdown = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode,
                thisResults = thisDropdown.querySelectorAll('.dropdown__result'),
                thisInput = thisDropdown.getElementsByTagName('input')[0],
                thisAddBtns = thisDropdown.querySelectorAll('.dropdown__add-btn'),
                thisRemoveBtns = thisDropdown.querySelectorAll('.dropdown__remove-btn');

            
            for (let i = 0; i < thisResults.length; i++){ 
                
                var a = Number(thisResults[i].firstChild.innerHTML);       
                thisResults[i].firstChild.innerHTML = a * 0;
            }

            for (let i = 0; i < thisAddBtns.length; i++){
                if (thisAddBtns[i].classList.contains('dropdown__options_inactive')){
                    thisAddBtns[i].classList.remove('dropdown__options_inactive');
                }
                if (!thisRemoveBtns[i].classList.contains('dropdown__options_inactive')){
                    thisRemoveBtns[i].classList.add('dropdown__options_inactive');
                }
            }

            thisInput.value = 'Сколько гостей';
            adultGuests = 0;
            babies = 0;

            e.target.style.display = 'none';
        }
    });
}

