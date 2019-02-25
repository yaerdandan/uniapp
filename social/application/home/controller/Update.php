<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2019/1/13
 * Time: 5:37
 */
namespace app\home\controller;
use app\home\model\home_post;
use app\home\model\home_qquser;
use app\home\model\home_user;
use think\Controller;
use think\Request;
header('Access-Control-Allow-Origin:*');     
header('Access-Control-Allow-Methods:*');  
header('Access-Control-Allow-Headers:*');
header('Access-Control-Allow-Credentials:false');
class Update extends Controller{
//修改背景图片
    public function img_update(){
        $file = request()->file('file');
        if($file==null) {
            exit(json_encode(array("con" => 1, "msg" => "未上传图片")));
        }
        $info= $file->move(ROOT_PATH.'public'.DS.'uploads');
        $ext=($info->getExtension());
        if(!in_array($ext,array('jpg','jpeg','gif','png'))){
            exit(json_encode(array("con"=>1,"msg"=>'文件格式不支持')));
        }
        $qq['back_img']='http://47.100.211.9/social/public/uploads/'.$info->getSaveName();
        $id=isset($_POST['id'])?$_POST['id']:$_POST['qqID'];
        $model=new home_user();
        $user=$model->select_id($id);
        $data=json_decode(json_encode($user),true);
        if(!$data){
            $mol=new home_qquser();
           $rel= $mol->qq_update($qq,$id);
           if($rel){
               $date=$mol->qq_select($id);
               $qq_data=json_decode(json_encode($date));
               exit(json_encode(array("con"=>0,"msg"=>'修改成功',"data"=>$qq_data)));
           }
        }else{
           $rel= $model->user_update($qq,$id);
           if($rel){
               $users=$model->select_id($id);
               $datas=json_decode(json_encode($users));
               exit(json_encode(array("con"=>0,"msg"=>'修改成功','data'=>$datas)));
           }
        }
    }
//    修改头像
public function portrait(){
    $file = request()->file('file');
    if($file==null) {
        exit(json_encode(array("con" => 1, "msg" => "未上传图片")));
    }
    $info= $file->move(ROOT_PATH.'public'.DS.'uploads');
    $ext=($info->getExtension());
    if(!in_array($ext,array('jpg','jpeg','gif','png'))){
        exit(json_encode(array("con"=>1,"msg"=>'文件格式不支持')));
    }
    $id=isset($_POST['id'])?$_POST['id']:$_POST['qqID'];
    $qq['portrait']='http://47.100.211.9/social/public/uploads/'.$info->getSaveName();
    $model=new home_user();
    $user=$model->select_id($id);
    $data=json_decode(json_encode($user));
    if(!$data){
        $mol=new home_qquser();
        $mol->qq_update($qq,$id);
        $date=$mol->qq_select($id);
        $qq_data=json_decode(json_encode($date));
        exit(json_encode(array("con"=>0,"msg"=>'修改成功','data'=>$qq_data,'src'=>$qq['portrait'])));
    }else{
        $model->user_update($qq,$id);
        exit(json_encode(array("con"=>0,"msg"=>'修改成功','data'=>$data,'src'=>$qq['portrait'])));
    }
}
//    贴吧收藏
public function post_collection(){
      $user_id=4;
      $title=12312312;
      $model=new home_post();
      $arr=$model->post_select($user_id,$title);
   $collection=json_decode(json_encode($arr),true);
   dump($collection[0]['collection']);
      foreach ($collection as $k=>$v){
         $data['collection']=$v['collection']+1;
         $model->post_update($data,$v['tid']);
      }
     exit(json_encode(array("con"=>0,'data'=>$collection[0]['collection']+1)));
}
//贴吧点赞
    public function post_praise(){
        $user_id=$_POST['user_id'];
        $title=$_POST['title'];
        $model=new home_post();
        $arr=$model->post_select($user_id,$title);
        $collection=json_decode(json_encode($arr),true);
        foreach ($collection as $k=>$v){
            $data['praise']=$v['praise']+1;
            $model->post_update($data,$v['tid']);
        }
        exit(json_encode(array("con"=>0,'data'=>$collection[0]['praise']+1)));
    }
//    踩一下贴吧
    public function post_step(){
        $user_id=$_POST['user_id'];
        $title=$_POST['title'];
        $model=new home_post();
        $arr=$model->post_select($user_id,$title);
        $collection=json_decode(json_encode($arr),true);
        foreach ($collection as $k=>$v){
            $data['praise']=$v['praise']-1;
            $model->post_update($data,$v['tid']);
        }
        exit(json_encode(array("con"=>0,'data'=>$collection[0]['praise']-1)));
    }
//    刷新
public function user_update(){
        $id=isset($_POST['id'])?$_POST['id']:$_POST['qqID'];
        $model=new home_user();
        $user=$model->select_id($id);
        $date=json_decode(json_encode($user));
        if($date){
            exit(json_encode(array("data"=>$date)));
        }else{
            $model=new home_qquser();
            $data=$model->qq_select($id);
            $data=json_decode(json_encode($data));
            exit(json_encode(array("data"=>$data)));
        }
}
}
