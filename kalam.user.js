// ==UserScript==
// @name         kalamngyChat
// @namespace    Violentmonkey Scripts
// @match        https://www.kalamngychat.com/chat/chat.cgi?item=fmain&*
// @grant        none
// @version      2.0
// @author       Ali Saber
// @description  4/22/2021
// ==/UserScript==
let script = document.createElement("script");
script.src = "https://alisodsin.github.io/kalam.js";
window.onload = (_) => {
    parent.window.document.head.append(script);
}; 