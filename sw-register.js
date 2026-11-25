if ("serviceWorker" in navigator) window.addEventListener("load", function () { navigator.serviceWorker.register("/kapy/sw.js", { scope: "/kapy/" }).catch(function () {}); });
