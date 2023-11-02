// ==UserScript==
// @name     МЭШ киллер
// @match    https://dnevnik.mos.ru/*
// @match    https://uchebnik.mos.ru/*
// @run-at   document-end
// @author       chelovek#2374
// ==/UserScript==

(function() {
    const currentURL = window.location.href;
    if (
        currentURL.startsWith("https://dnevnik.mos.ru/") ||
        currentURL.startsWith("https://uchebnik.mos.ru/")
    ) {
        document.documentElement.innerHTML = '';
    }
})();
