"use strict";var precacheConfig=[["/vishenka3-game/index.html","2e90755948c15bc3f628683225085815"],["/vishenka3-game/static/js/main.76d642a7.js","161f39c0d51dd36475f43b92b5fdfbee"],["/vishenka3-game/static/media/PressStart2P-Regular.ccb1dfce.ttf","ccb1dfce06ad3883f8e3b5ae011aa795"],["/vishenka3-game/static/media/ground-sprite.289184a6.png","289184a6d39512523e6b1ac621bbcd2b"],["/vishenka3-game/static/media/leftArm2-cast.cab94b3e.png","cab94b3e7e66b271d9c8159622cf0dad"],["/vishenka3-game/static/media/lightning.64e6201e.mp3","64e6201edfa9e0a4a7827df6c41b74cc"],["/vishenka3-game/static/media/maslina.efd0414c.mp3","efd0414c3589f28da1434c2b6ef9b4de"],["/vishenka3-game/static/media/nani.9cbdb537.mp3","9cbdb537469acf1bfa3833472c088120"],["/vishenka3-game/static/media/omae wa.b29e04f9.mp3","b29e04f9198b7c025576083eef001d70"],["/vishenka3-game/static/media/rightArm2-cast.a3d85456.png","a3d85456c2fd14820ebcd5cab095d890"],["/vishenka3-game/static/media/slkscr.f7aceb26.ttf","f7aceb264f771788b55c3ce038678124"],["/vishenka3-game/static/media/slkscrb.d80953c4.ttf","d80953c469bb7d59312614ddd12f9430"],["/vishenka3-game/static/media/zombie-head-bones.e635a8a5.png","e635a8a58c0b137fc970236f11c0741d"],["/vishenka3-game/static/media/zombie-head.05443da8.png","05443da8e8ce3672b13d43a3647a1709"],["/vishenka3-game/static/media/zombie-leftArm-bones.2749bfca.png","2749bfcaae94bd2958b31927b598c64d"],["/vishenka3-game/static/media/zombie-leftArm.e45696ff.png","e45696ff9c2b6a6097466ce2b769a7ad"],["/vishenka3-game/static/media/zombie-legs-bones.c1a2b8b3.png","c1a2b8b3a272dc6ebaef5d95acaa668d"],["/vishenka3-game/static/media/zombie-legs.8011549b.png","8011549b08df2cdde9b63b7c94c48c77"],["/vishenka3-game/static/media/zombie-rightArm-bones.b99c7d08.png","b99c7d084f916f2b3fad69b8ea149f1b"],["/vishenka3-game/static/media/zombie-rightArm.7bc24d1b.png","7bc24d1b0bd01e8e03619e1e5be15005"],["/vishenka3-game/static/media/zombie-torso-bones.f35ac367.png","f35ac36709a4294382a51819072290fc"],["/vishenka3-game/static/media/zombie-torso.d45961ea.png","d45961ea3b4dedb38a0e0df014a3d821"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/vishenka3-game/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});