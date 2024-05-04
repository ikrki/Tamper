// ==UserScript==
// @name         Remove cn redirect for leetcode
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       ikrki
// @match        *://leetcode.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    var id=setInterval(function(){
        var elements=document.getElementsByClassName("border-border-tertiary dark:border-border-tertiary  items-center justify-center border-b-[1px] border-solid ");
        if(elements.length>0)elements[0].remove();
        else clearInterval(id);
     },1000);
})();
