// ==UserScript==
// @icon            http://bilibili.com/favicon.ico
// @name            av还原助手
// @namespace       [url=mailto:zzy0302@vip.qq.com]zzy0302@vip.qq.com[/url]
// @author          zzy0302
// @description     av还原助手,还原所有bv至av
// @match           https://www.bilibili.com/video/BV*
// @version         0.0.1
// @grant           none
// ==/UserScript==
(function () {
    'use strict';
    let elem = document.querySelector('#video-page-app');
    if (!elem) return;
    history.replaceState(202, '', 'https://www.bilibili.com/video/av' + window.aid)
})();