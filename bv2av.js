// ==UserScript==
// @icon            http://bilibili.com/favicon.ico
// @name            av还原助手
// @namespace       [url=mailto:zzy0302@vip.qq.com]zzy0302@vip.qq.com[/url]
// @author          zzy0302
// @description     av还原助手,还原所有bv至av
// @match           *://*.bilibili.com/video*
// @version         0.0.3
// @grant           none
// @license         MIT License
// @homepage        https://github.com/zzy0302/bv2av/tree/master/
// @homepageURL     https://github.com/zzy0302/bv2av/tree/master/
// @downloadURL     https://github.com/zzy0302/bv2av/tree/master/bv2av.js
// @updateURL       https://github.com/zzy0302/bv2av/tree/master/bv2av.js
// @supportURL      https://github.com/zzy0302/bv2av/issues
// ==/UserScript==
(function () {
    'use strict';
    let elem = document.querySelector('#video-page-app');
    if (!elem) return;
    function bv2av(x) {
        var bvs = x.match(/[bB][vV][fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF]{10}/g);
        if (bvs) {
            console.log(bvs)
            x = x.replace(bvs, 'av' + window.aid);
        }
        return x;
    }

    var url = window.location.href;
    var newUrl = bv2av(url);
    if (url != newUrl) {
        window.history.pushState(null, null, newUrl);
    }

    setInterval(function () {
        var nodes = document.querySelectorAll('a');
        for (var o of nodes) {
            if (o.href) {
                o.href = bv2av(o.href);
            }
        }
        nodes = document.querySelectorAll('div');
        for (o of nodes) {
            if (o.title) {
                o.title = bv2av(o.title);
            }
        }
    }, 1000);
})();