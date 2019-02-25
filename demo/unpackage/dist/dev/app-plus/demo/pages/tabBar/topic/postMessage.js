
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"status_bar { height: var(--status-bar-height); width: 100%; }\n.",[1],"top_view { height: var(--status-bar-height); width: 100%; position: fixed; top: 0; }\n.",[1],"navigation { width: 100%; height: ",[0,80],"; margin-top: ",[0,20],"; border-bottom: 1px solid lightgray; }\n.",[1],"navigationCancel { position: fixed; left: ",[0,20],"; font-size: ",[0,37],"; }\n.",[1],"navigationTopic { text-align: center; display: block; margin: 0 auto; }\n.",[1],"navigationBtn { position: fixed; top: ",[0,70],"; left: ",[0,620],"; font-size: ",[0,26],"; background: #007AFF; color: white; }\n.",[1],"invitation { width: 95%; margin: 0 auto; }\n.",[1],"invitationTitle { height: ",[0,60],"; font-weight: 600; }\n.",[1],"invitationContent { width: 95%; margin-top: ",[0,20],"; }\n.",[1],"chooseImg { width: ",[0,200],"; height: ",[0,200],"; position: relative; left: ",[0,20],"; top: ",[0,20],"; }\n.",[1],"showPicture { width: ",[0,200],"; height: ",[0,200],"; float: left; margin-left: ",[0,20],"; margin-top: ",[0,20],"; }\n",],undefined,{path:"./pages/tabBar/topic/postMessage.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/tabBar/topic/postMessage.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      