"use strict"

const htmlEl = document.getElementsByTagName('html')[0];

const toggleTheme = (theme) => {
    if(htmlEl.dataset.theme == 'dark'){
        htmlEl.dataset.theme = 'light';
    }else{
        htmlEl.dataset.theme = theme;
    }
}

