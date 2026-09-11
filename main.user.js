// ==UserScript==
// @name         Bandcamp Release Page Reorganizer
// @namespace    https://tampermonkey.net/
// @version      1.0
// @description  Small userscript to change the order of the release page elements: player and tracklist on top, everything else below.
// @author       bbmane
// @match        *://*.bandcamp.com/album*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Elements to relocate into #trackInfo
    const TARGET_SELECTORS = [
        '.buyItem:not(.digital)',
        '.featured-video-wrapper',
        '.buy-offsite-item'
    ];

    /**
     * Moves matching elements into the #trackInfo container.
     * Ensures each element is moved only once.
     */
    function relocateElements() {
        const trackInfo = document.querySelector('#trackInfo');
        if (!trackInfo) return;

        TARGET_SELECTORS.forEach(selector => {
            const elements = document.querySelectorAll(selector);

            elements.forEach(el => {
                if (!el.dataset.moved) {
                    trackInfo.appendChild(el); // Append at the bottom
                    el.dataset.moved = 'true'; // Prevent duplicate moves
                }
            });
        });
    }

    // Run immediately on page load
    relocateElements();

    // Observe DOM changes (Bandcamp loads some elements dynamically)
    const observer = new MutationObserver(relocateElements);
    observer.observe(document.body, { childList: true, subtree: true });

})();
