<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2019/1/10
 * Time: 20:58
 */
namespace app\home\controller;
use think\Controller;
use app\home\model\home_user;
//
header('Access-Control-Allow-Origin:*');     
header('Access-Control-Allow-Methods:*');  
header('Access-Control-Allow-Headers:*');
header('Access-Control-Allow-Credentials:false');
class Userlogin extends Controller{
//    用户登录
    public function index(){
        $paw=isset($_POST['paw'])?$_POST['paw']:'cf68200ea7764275eb0f626be232e82f';
        if(!$paw){
            exit(json_encode(array("con"=>1,"msg"=>'请输入密码')));
        }
        $iphone=isset($_POST['iphone'])?$_POST['iphone']:'1362342976';
        $model=new home_user();
           $userlogin = $model->user_select($iphone);

           if (!$userlogin) {
               exit(json_encode(array("con" => 1, "msg" => '手机号错误')));
           }
           $password = $model->selone($iphone);
           if (md5($password['user'].$paw)!= $password['paw']) {
               exit(json_encode(array("con" => 1, "msg" => '密码错误')));
           }
           exit(json_encode(array('con' => 0, "msg" => '登录成功', "data" => $userlogin)));

    }
//    用户注册
    public function add(){
     $data['user']=isset($_POST['user'])?$_POST['user']:'';
     $paw=$_POST['paw'];
     $confirm_paw=$_POST['confirm'];
     $data['paw']=md5($data['user'].$paw);
     $data['confirm_paw']=md5($data['user'].$confirm_paw);
     $data['iphone']=isset($_POST['iphone'])?$_POST['iphone']:'';
     $data['portrait']='http://47.100.211.9/social/public/uploads/pretermit/photo.png';
     $data['back_img']='http://47.100.211.9/social/public/uploads/pretermit/bgImg.png';
      $model=new home_user();
       $rel=$model->sert($data);
      if($rel){
         exit(json_encode(array("con"=>0,"msg"=>'注册成功',"data"=>$data)));
      }else{
          exit(json_encode(array("con"=>1,"msg"=>"注册失败","data"=>$data)));
      }

    }
//    用户删除
    public function delete(){
        $id=$_POST['id'];
        $model=new home_user();
        $del=$model->user_delete($id);
        if($del){
            exit(json_encode(array('con'=>0,'msg'=>"删除成功")));
        }else{
            exit(json_encode(array('con'=>1,"msg"=>'删除失败')));
        }
    }
//    用户修改
public function update(){
    $id=1;
    $data['user']=isset($_POST['user'])?$_POST['user']:'1111';
    $data['iphone']=isset($_POST['iphone'])?$_POST['iphone']:'1111';
    $data['paw']=isset($_POST['paw'])?$_POST['paw']:'11111';
    $data['confirm_paw']=isset($_POST['confirm_paw'])?$_POST['confirm_paw']:'1111';
    $model=new home_user();
    $rel=$model->user_update($data,$id);
    if($rel){
        exit(json_encode(array("con"=>0,"msg"=>'注册成功')));
    }else{
        exit(json_encode(array("con"=>1,"msg"=>"注册失败")));
    }

}
//修改签名
public function title_update(){
    $id=$_POST['id'];
    $data['title']=isset($_POST['title'])?$_POST['title']:'';
    $model=new home_user();
    $rel=$model->user_update($data,$id);
    if($rel){
        exit(json_encode(array("con"=>0,"msg"=>'修改成功')));
    }else{
        exit(json_encode(array("con"=>1,"msg"=>"修改失败")));
    }

}
}