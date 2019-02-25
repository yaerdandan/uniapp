<?php

namespace app\admins\controller;
use think\Controller;
use app\admins\model\login;
class Acction extends Controller
{
    public function index()
    {

        return $this->fetch();
    }
//    验证用户登录
    public function dologin(){
          $user=trim(input('post.user'));
          $paw=trim(input('post.paw'));
          $vicod=input('post.vicod');
          if($user==''){
              exit(json_encode(array('con'=>1,'msg'=>'请输入用户名')));
          }
          if($paw==''){
              exit(json_encode(array('con'=>1,'msg'=>'请输入密码')));
          }
          if($vicod==''){
              exit(json_encode(array('con'=>1,'msg'=>'验证码不能为空')));
          }
          if(!captcha_check($vicod)){

              exit(json_encode(array('con'=>1,'msg'=>'验证码错误')));

          }

          $where=function ($query) use ($user){
              $query->field('*')->where(["user"=>$user]);
          };
//          验证用户名
          $rel=login::get($where)->getData();
          if(!$rel){
              exit(json_encode(array('con'=>1,"msg"=>'用户名错误')));
          }
//          验证密码
          if($rel['paw']!=md5($rel['user'].$paw)){
              exit(json_encode(array('con'=>1,'msg'=>'密码错误')));
          }
//          验证是否被禁用
        if($rel['zt']==1){
              exit(json_encode(array("con"=>1,"msg"=>"该用户已经被禁用")));
        }
//        创建session
        session('admins',$rel);
          exit(json_encode(array("con"=>0,"msg"=>"登录成功")));

    }
//    退出登录
    public function  outlogin(){
        session("admins",null);
        exit(json_encode(array("con"=>0,"msg"=>'退出成功')));
    }
}
