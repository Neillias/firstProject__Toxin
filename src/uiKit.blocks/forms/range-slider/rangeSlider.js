import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

export default function rangeSlider(){
    var slider = document.getElementById('rangeSlider');
    var nonLinearStepSliderValueElement = document.getElementById('slider-non-linear-step-value');

    noUiSlider.create(slider, {
        start: [5000, 10000],
        connect: true,
        range: {
            'min': 0,
            'max': 15000
        },
        format: wNumb({
            decimals: 0,
            thousand: ' ',
            suffix: ' ₽'
        })
    });

    slider.noUiSlider.on('update', function (values) {
        nonLinearStepSliderValueElement.innerHTML = values.join(' - ');
    });
}