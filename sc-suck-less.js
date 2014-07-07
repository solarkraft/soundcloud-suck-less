// ==UserScript==
// @name        Soundcloud suck-less
// @namespace   sc-suck-less
// @description Super hacky and temporary fixes until soundclound finally get their shit together
// @include     *//soundcloud.com/*
// @version     0.1
// @grant       none
// ==/UserScript==
// Made by Paul Hendrix; GPL
function injectStyles(rule) {
  var div = $("<div />", {
    html: '&shy;<style>' + rule + '</style>'
  }).appendTo("body");    
}
injectStyles("header, div.userNav.sc-clearfix, a.userNav__item.userNav__button { background: #333 !important; box-shadow: none; border: none; }"); //remove gradients, shadows and borders
injectStyles("header { height: 45px !important; padding: 2px 0; }"); //fix visual glitch

injectStyles(".playControls { position: fixed; top: -7px; right: 28px; }");
injectStyles('.header__link:not(.uploadButton) { display: none; }'); //hide "go pro" ad
injectStyles("div.header__userNav { margin-right: 320px; }"); 
injectStyles("div.userNav__username.sc-truncate { displplayConay: none !important; }");
injectStyles("div.userNav__item { display: none; }"); 
injectStyles(".playControls__wrapper { border-radius: 0; background: none; }");
injectStyles(".playControls__controls { background: none; }");
injectStyles("h1.header__logo { padding: 2px 0; border: none; box-shadow: none; position: relative; top: -2px; }");
injectStyles("h1.header__logo a { border: none; box-shadow: none; }");
injectStyles(".playbackTitle__progress { bottom: -2px; }");
injectStyles("a.userNav__item.userNav__button, a.userNav__button.userNav__usernameButton {padding: 0 8px;}");
injectStyles(".volumeVertical .volumeVertical__wrapper { transition: 0.1s; }");
injectStyles(".volumeVertical.expanded .volumeVertical__wrapper { border-radius: 0; bottom: -79px; }");
injectStyles(".sc-button { background-image: none !important; }"); 
injectStyles(".loading { background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgaWQ9ImxvYWRlciI+PGNpcmNsZSBjeD0iNTAlIiBjeT0iNTAlIiByPSI1MCUiIGZpbGw9IiMzMzMiIC8+PGNpcmNsZSBjeD0iNTAlIiBjeT0iNTAlIiByPSIzNSUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxMCUiIHN0cm9rZS1sZW5ndGg9IjEiIHN0cm9rZS1kYXNob2Zmc2V0PSI1MCUiIHN0cm9rZS1kYXNoYXJyYXk9IjIyMCUiIGlkPSJzcGlubmVyIiAvPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBmcm9tPSIwIDMyIDMyIiB0bz0iMzYwIDMyIDMyIiBkdXI9IjEwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L2c+PHN0eWxlPiNzcGlubmVye2FuaW1hdGlvbjogMnMgc3BpbiBpbmZpbml0ZSBjdWJpYy1iZXppZXIoLjc1LDAsLjI1LDEpO31Aa2V5ZnJhbWVzIHNwaW57MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6IDIyMCU7fTUwJSB7c3Ryb2tlLWRhc2hvZmZzZXQ6MCU7fTEwMCV7c3Ryb2tlLWRhc2hvZmZzZXQ6LTIyMCU7fX08L3N0eWxlPjwvc3ZnPgo=)}");
injectStyles(".userNav__avatar { border-radius: 0;}"); 
injectStyles("playControls g-z-index-header visible { border-radius: 0;}");
injectStyles(".sc-button:hover, .sc-button:focus, .sc-button-focus { box-shadow: none; text-shadow: none; }");
