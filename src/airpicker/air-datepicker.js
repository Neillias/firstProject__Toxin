import { NPN_ENABLED } from "constants";
import { updateExpression } from "babel-types";

$('.datepick').datepicker({
    range: true,
    toggleSelected: false,
    multipleDatesSeparator: ' - ',
    navTitles: {
        days: 'MM <i>yyyy</i>'
    },
    
    prevHtml: ' ',
    nextHtml: ' ',
    dateFormat: 'dd M'
});



$('.datepicker-here').datepicker({
    range: true,
    multipleDatesSeparator: ' - ',
    navTitles: {
        days: 'MM <i>yyyy</i>'
    },    
    prevHtml: ' ',
    nextHtml: ' ',
    dateFormat: 'dd M',
    altField: '.thisfield',
    altFieldDateFormat: 'dd M',
    inline: true,
    clearButton: true
});

$('.datepicker_split').datepicker({
    range: true,
    toggleSelected: false,
    multipleDatesSeparator: ' - ',
    navTitles: {
        days: 'MM <i>yyyy</i>'
    },    
    prevHtml: ' ',
    nextHtml: ' ',
    dateFormat: 'dd.mm.yyyy',
    inline: true,
    clearButton: true,
    onSelect: function (fd, d, picker) { 
        $(".start").val(fd.split("-")[0]);
        $(".end").val(fd.split("-")[1]);
      }
});

$('.datepicker_uiKit').datepicker({
    range: true,
    toggleSelected: false,
    multipleDatesSeparator: ' - ',
    navTitles: {
        days: 'MM <i>yyyy</i>'
    },    
    prevHtml: ' ',
    nextHtml: ' ',
    dateFormat: 'dd.mm.yyyy',
    inline: true,
    clearButton: true,
    onSelect: function (fd, d, picker) { 
        $(".start2").val(fd.split("-")[0]);
        $(".end2").val(fd.split("-")[1]);
      }
});

