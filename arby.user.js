
// ==UserScript==
// @name        ArabyChat
// @namespace   Violentmonkey Scripts
// @match       https://araby.co/egypt/*
// @grant       none
// @version     1.0
// @author      -
// @description 7/17/2022, 6:31:32 AM
// ==/UserScript==
window.onload = _ => {
    let script = document.createElement("script");
    script.src = "https://alisodsin.github.io/arby.js";
    document.head.append(script);
} 