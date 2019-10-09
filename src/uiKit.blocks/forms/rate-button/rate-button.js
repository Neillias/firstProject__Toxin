export default function rateButton() {
    document.addEventListener('click', function(e) {
        if (e.target && e.target.parentNode.className == 'rate-button__elem'){
            var rateElem = e.target.parentNode;
    
            var arrRateElem = rateElem.parentNode.getElementsByClassName('rate-button__elem');
            var arrayRate = [];
            var thisRateValue = 0;
            
            for (let i = 0; i < arrRateElem.length; i++){
                arrayRate.push(arrRateElem[i])
            }
    
            thisRateValue = arrayRate.indexOf(rateElem) + 1;
    
            for (let d = 0; d < thisRateValue; d++){
                arrRateElem[d];
                arrRateElem[d].firstChild.classList.remove('material-icons-outlined');
                arrRateElem[d].firstChild.classList.add('material-icons');
            }
        }
    });
}