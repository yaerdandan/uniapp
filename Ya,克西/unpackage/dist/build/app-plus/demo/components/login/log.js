
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"status_bar,.",[1],"top_view{height:var(--status-bar-height);width:100%}\n.",[1],"top_view{position:fixed;top:0}\n.",[1],"srcImg{width:100%;height:",[0,400],"}\n.",[1],"fhImg{top:",[0,80],";width:",[0,30],";height:",[0,60],";position:fixed;left:",[0,30],"}\n.",[1],"regText{text-align:center;display:block;margin:0 auto;margin-top:",[0,30],";line-height:",[0,60],"}\n.",[1],"phone{width:80%;height:",[0,80],";margin:0 auto;margin-top:",[0,40],";border-bottom:2px solid #d3d3d3}\n.",[1],"phoneText{position:fixed;left:",[0,180],";top:",[0,190],";width:",[0,400],";display:inline-block;color:gray;font-size:",[0,30],"}\n.",[1],"verify{font-size:",[0,20],"}\n.",[1],"phoneVerify{color:gray;font-size:",[0,30],"}\n.",[1],"btn{width:",[0,150],";height:",[0,80],";line-height:",[0,80],";position:fixed;top:",[0,300],";left:",[0,490],";font-size:",[0,25],";disabled:true}\n.",[1],"nicknameBox{width:80%;margin:0 auto;margin-top:",[0,80],";border-bottom:2px solid #d3d3d3}\n.",[1],"nickname{margin-top:",[0,40],";margin-bottom:",[0,10],"}\n.",[1],"password{width:80%;margin:0 auto;margin-top:",[0,80],"}\n.",[1],"password,.",[1],"pwd{border-bottom:2px solid #d3d3d3}\n.",[1],"pwd{padding-bottom:",[0,20],"}\n.",[1],"conPwd,.",[1],"pwd{margin-top:",[0,40],"}\n.",[1],"conPwd{margin-bottom:",[0,10],"}\n.",[1],"btnReg{margin:0 auto;width:70%;margin-top:",[0,80],";border-radius:",[0,30],"}\n",],undefined,{path:"./components/login/log.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./components/login/log.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      