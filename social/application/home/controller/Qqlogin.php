<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2019/1/12
 * Time: 22:32
 */
namespace app\home\controller;
use app\home\model\home_user;
use think\Controller;
use app\home\model\home_qquser;
header('Access-Control-Allow-Origin:*');     
header('Access-Control-Allow-Methods:*');  
header('Access-Control-Allow-Headers:*');
header('Access-Control-Allow-Credentials:false');
class Qqlogin extends Controller{
    public function index(){
        return $this->fetch();
    }
//    注册登录
    public function add(){
        $data['user']=isset($_POST['user'])?$_POST['user']:'';
        $data['qq_id']=isset($_POST['qq_id'])?$_POST['qq_id']:'ED50A2913F13A9997184C3A233F39C32';
        $data['picture']=isset($_POST['picture'])?$_POST['picture']:'';
        $model=new home_qquser();
        $rol=$model->qq_select($data['qq_id']);
         $rol=json_decode(json_encode($rol));
        if($rol){
            exit(json_encode(array("con"=>0,"msg"=>'登录成功','data'=>$rol)));
        }else{
            $rel=$model->qq_insert($data);
      if($rel){
       $data=$model->qq_select($data['qq_id']);
          exit(json_encode(array("con"=>0,"msg"=>'注册成功','data'=>$data)));
        }

        }
    }
//    注销
 public function delete(){
        $qq_id=$_POST['qq_id'];
     $model=new home_qquser();
     $rel=$model->qq_delete($qq_id);
     if($rel){
         exit(json_encode(array("con"=>0,"msg"=>'注销成功')));
     }else{
         exit(json_encode(array('con'=>1,"msg"=>'注销失败')));
     }
 }


}