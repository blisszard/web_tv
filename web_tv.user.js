// ==UserScript==
// @name           Web TV
// @author         Steve Chand <chat.chand@outlook.com> https://github.com/blisszard
// @homepageURL    https://github.com/blisszard/web_tv#readme
// @supportURL     https://github.com/anka-213/web_tv/issues
// @updateURL      https://raw.githubusercontent.com/blisszard/web_tv/master/web_tv.user.js
// @namespace       %namespace%
// @description    Post render web TV pages
// @include        http://ondemandkorea.com/*
// @include        https://ondemandkorea.com/*
// @include        https://www.ondemandkorea.com/*
// @exclude     %exclude%
// @version         1
// @noframes
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_deleteValue
// @grant          GM_xmlhttpRequest
// @grant          GM_registerMenuCommand
// @grant          GM_openInTab
// @run-at         document-end
// ==/UserScript==

(main => {
    var script = document.createElement('script');
    script.textContent = `try {(${main})();} catch (e) {console.log(e);}`;
    document.body.appendChild(script).parentNode.removeChild(script);
})(() => {
    (function() { 
        //object constructor
        function example() { 
            // modify the stylesheet
            this.append_stylesheet('body,div { border: 1px solid red; }'); 
        }; 
        //create a stylesheet
        example.prototype.append_stylesheet = function(css) { 
            var styletag = document.createElement("style");
            styletag.setAttribute('type', 'text/css');
            styletag.setAttribute('media', 'screen');
            styletag.appendChild(document.createTextNode(css)); 
            document.getElementsByTagName('head')[0].appendChild(styletag); 
        }; 
        //instantiate and run 
        var example = new example();  
    })();
    var nodelist = document.getElementsByTagName('div');
    var exclude = ["content", "playerMasthed", "mainContainer", "player", "play_button_div"]
    Array.prototype.map.call(nodelist, function(n) {
        if (n.id === undefined || exclude.indexOf(n.id) < 0) {
            n.style.display = 'none';
        } else {
            // n.style.display = 'block';
            console.log("ID", n.id);
        }
    });
});