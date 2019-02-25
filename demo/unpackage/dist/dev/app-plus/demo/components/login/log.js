
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"status_bar { height: var(--status-bar-height); width: 100%; }\n.",[1],"top_view { height: var(--status-bar-height); width: 100%; position: fixed; top: 0; }\n.",[1],"srcImg { width: 100%; height: ",[0,400],"; }\n.",[1],"fhImg { width: ",[0,30],"; height: ",[0,60],"; position: fixed; top: ",[0,80],"; left: ",[0,30],"; }\n.",[1],"zhanghao { width: 80%; height: ",[0,100],"; margin: 0 auto; margin-top: ",[0,30],"; border-bottom: 3px solid lightgray; }\n.",[1],"zhImg { width: ",[0,60],"; height: ",[0,60],"; position: relative; top: ",[0,10],"; }\n.",[1],"zhText { margin-top: ",[0,10],"; width: 80%; height: ",[0,70],"; line-height: ",[0,70],"; float: right; margin-right: ",[0,30],"; left: ",[0,100],"; }\n.",[1],"password { width: 80%; height: ",[0,100],"; margin: 0 auto; margin-top: ",[0,70],"; border-bottom: 3px solid lightgray; }\n.",[1],"forgetPwd { position: fixed; top: ",[0,780],"; left: ",[0,525],"; color: rgb(86,202,251); font-size: ",[0,35],"; }\n.",[1],"btn { margin: 0 auto; width: 70%; margin-top: ",[0,110],"; border-radius: ",[0,30],"; }\n.",[1],"btn1 { background: #149EFF; color: #ffffff; }\n.",[1],"reg { margin: 0 auto; width: 58%; margin-top: ",[0,60],"; }\n.",[1],"regText { color: #23BEFA; font-size: ",[0,40],"; }\n.",[1],"reg wx-image { width: ",[0,30],"; height: ",[0,30],"; }\n.",[1],"otherReg { margin-top: ",[0,100],"; }\n.",[1],"otherRegText { text-align: center; display: block; color: lightgray; font-size: ",[0,35],"; font-weight: 500; }\n.",[1],"QQRegImg { width: ",[0,140],"; height: ",[0,140],"; display: block; margin: 0 auto; margin-top: ",[0,30],"; }\n",],undefined,{path:"./components/login/log.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./components/login/log.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      