window.addEventListener('load', function(){
    var wapl_detected = false;
    var observer = new MutationObserver(function (ms){
        console.log(ms);
        ms.forEach(m=>{
            if (m.addedNodes.length === 0){return;}
            m.addedNodes.forEach(t=>{
                if (t.tagName === "SCRIPT"){
                    if (t.src.startsWith("chrome-extension://") && (t.src.endsWith("/js/js.js") || t.src.endsWith("/js/dom.js"))){
                        if (!wapl_detected && window["on_wapl_detected"]!==undefined){
                            window["on_wapl_detected"]();
                        }
                        wapl_detected = true;
                    }
                }
            });
        });
    });
    observer.observe(document.body, {childList: true});
});
