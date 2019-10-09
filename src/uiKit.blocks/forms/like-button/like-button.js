export default function likeButton() {
    document.addEventListener('click', function(e) {
        if (e.target && e.target.className == 'like-button_input'){
            var thisLikeIcon = e.target.parentNode.querySelector('.like-button__icon');
            var thisCount = e.target.parentNode.querySelector('.like-button__count');
            var parseCount = Number(e.target.parentNode.querySelector('.like-button__count').innerHTML);
            
            if(e.target.checked){
                parseCount += 1;
                thisCount.innerHTML = parseCount;
                thisLikeIcon.innerHTML = 'favorite';
                
            } else {
                parseCount -= 1;
                thisCount.innerHTML = parseCount;
                thisLikeIcon.innerHTML = 'favorite_border';
            }
        }
    });
}

