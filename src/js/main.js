window.$ = window.jQuery = jQuery;

import jQuery from 'jquery';
import mask from '../uiKit.blocks/forms/masked-text-field/jquery.mask';
import dropdown from '../uiKit.blocks/forms/dropdown/dropdown';
import dropdownMenu from '../uiKit.blocks/forms/dropdown/__menu/dropdown__menu';
import likeButton from '../uiKit.blocks/forms/like-button/like-button';
import rateButton from '../uiKit.blocks/forms/rate-button/rate-button';
import rangeSlider from '../uiKit.blocks/forms/range-slider/rangeSlider';
import checkboxListButton from '../uiKit.blocks/forms/checkbox-list/__button/checkbox-list__button';
import headerDropdown from '../uiKit.blocks/header-main/__dropdown/header-main__dropdown';
import navToggle from '../uiKit.blocks/header-main/__nav-toggle/header-main__nav-toggle';
import filtersToggle from '../common.blocks/searchRoom-main/__filters-toggle/searchRoom-main__filters-toggle';
import dateDropdown from '../uiKit.blocks/forms/date-dropdowns/date-dropdown';

$('.date').mask('00.00.0000');

dropdown();
dropdownMenu();
dateDropdown();
likeButton();
rateButton();
checkboxListButton();
headerDropdown();
navToggle();
filtersToggle();
rangeSlider();
