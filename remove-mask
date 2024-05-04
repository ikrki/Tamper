// ==UserScript==
// @name         Remove the live streaming screen mask of bilibili
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  f**k u bili
// @author       none
// @match        *://live.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    var id = setInterval(function() {
        var element = document.getElementById('web-player-module-area-mask-panel');
        if (element) element.remove();
        else clearInterval(id);
    }, 1000);
})();
