
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"bg_img { -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; }\n.",[1],"user_img { width: ",[0,180],"; height: ",[0,180],"; border-radius: 50%; background: #8F8F94; position: fixed; top: ",[0,245],"; left: 0; right: 0; margin-left: auto; margin-right: auto; }\n.",[1],"reg-info { position: fixed; top: ",[0,440],"; width: 100%; }\n.",[1],"_input { border-bottom: 1px solid gray; width: 75%; margin: 0 auto; margin-top: ",[0,50],"; font-size: ",[0,40],"; }\n.",[1],"btn_login { position: fixed; top: ",[0,840],"; width: 100%; margin: 0 auto; }\n.",[1],"user_login { border: none; color: black; font-size: ",[0,30],"; background-size: cover; display: block; text-align: center; margin-top: -34px; font-size: ",[0,35],"; color: white; }\n.",[1],"verify { width: ",[0,220],"; height: ",[0,80],"; line-height: ",[0,80],"; position: fixed; top: ",[0,660],"; left: ",[0,440],"; font-size: ",[0,25],"; disabled: true; }\n",],undefined,{path:"./components/login/login.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./components/login/login.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      