
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body { height: 100%; background: rgb(255, 251, 255); }\n.",[1],"status_bar { height: var(--status-bar-height); width: 100%; }\n.",[1],"top_view { height: var(--status-bar-height); width: 100%; position: fixed; top: 0; }\n.",[1],"title { width: 100%; height: ",[0,60],"; margin-top: ",[0,15],"; margin-bottom: ",[0,15],"; text-align: center; }\n.",[1],"Box { width: 100%; }\n.",[1],"chatbox { height: ",[0,200],"; width: 100%; border-bottom: 1px solid lightgray; position: relative; }\n.",[1],"userChatImg { height: ",[0,120],"; width: ",[0,120],"; position: absolute; top: ",[0,40],"; left: ",[0,30],"; }\n.",[1],"userChatName { position: absolute; left: ",[0,180],"; top: ",[0,50],"; }\n.",[1],"lastNews { position: absolute; top: ",[0,120],"; left: ",[0,180],"; color: gray; font-size: ",[0,30],"; }\n.",[1],"notLog { position: fixed; top: ",[0,140],"; left: ",[0,230],"; }\n",],undefined,{path:"./pages/tabBar/chat/chat.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/tabBar/chat/chat.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      