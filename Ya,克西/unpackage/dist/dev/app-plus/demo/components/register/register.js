
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"status_bar { height: var(--status-bar-height); width: 100%; }\n.",[1],"top_view { height: var(--status-bar-height); width: 100%; position: fixed; top: 0; }\n.",[1],"srcImg { width: 100%; height: ",[0,400],"; }\n.",[1],"fhImg { width: ",[0,30],"; height: ",[0,60],"; position: fixed; top: ",[0,80],"; left: ",[0,30],"; }\n.",[1],"fhImg { width: ",[0,30],"; height: ",[0,60],"; position: fixed; left: ",[0,30],"; }\n.",[1],"regText { text-align: center; display: block; margin: 0 auto; margin-top: ",[0,30],"; line-height: ",[0,60],"; }\n.",[1],"phone { width: 80%; height: ",[0,80],"; margin: 0 auto; margin-top: ",[0,40],"; border-bottom: 2px solid lightgray; }\n.",[1],"phoneText { position: fixed; left: ",[0,180],"; top: ",[0,190],"; width: ",[0,400],"; display: inline-block; }\n.",[1],"btn { width: ",[0,220],"; height: ",[0,80],"; line-height: ",[0,80],"; position: fixed; top: ",[0,300],"; left: ",[0,450],"; font-size: ",[0,25],"; disabled: true; }\n.",[1],"nicknameBox { width: 80%; margin: 0 auto; margin-top: ",[0,80],"; border-bottom: 2px solid lightgray; }\n.",[1],"nickname { margin-top: ",[0,40],"; margin-bottom: ",[0,10],"; }\n.",[1],"password { width: 80%; margin: 0 auto; margin-top: ",[0,80],"; border-bottom: 2px solid lightgray; }\n.",[1],"pwd { margin-top: ",[0,40],"; padding-bottom: ",[0,20],"; }\n.",[1],"conPwd { position: fixed; top: ",[0,920],"; width: 80%; padding-bottom: ",[0,20],"; border-bottom: 2px solid lightgray; }\n.",[1],"btnReg { width: 70%; position: fixed; top: ",[0,1050],"; left: ",[0,120],"; border-radius: ",[0,30],"; }\n.",[1],"btnReg1 { background: #149EFF; color: #ffffff; }\n",],undefined,{path:"./components/register/register.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./components/register/register.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      