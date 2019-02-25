<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2019/1/13
 * Time: 3:56
 */
namespace app\home\controller;
use think\Controller;
use app\home\model\home_qquser;
use app\home\model\home_post;
use app\home\model\home_user;
use think\Request;
header('Access-Control-Allow-Origin:*');     
header('Access-Control-Allow-Methods:*');  
header('Access-Control-Allow-Headers:*');
header('Access-Control-Allow-Credentials:false');
class Upload extends Controller{
//  图片上传
    public function upload_img(){
        $file = request()->file('file');
        if($file==null) {
            exit(json_encode(array("con" => 1, "msg" => "未上传图片")));
        }
        $info= $file->move(ROOT_PATH.'public'.DS.'uploads');
        $ext=($info->getExtension());
        if(!in_array($ext,array('jpg','jpeg','gif','png'))){
            exit(json_encode(array("con"=>1,"msg"=>'文件格式不支持')));
        }
        $img='http://47.100.211.9/social/public/uploads/'.$info->getSaveName();
        exit(json_encode(array("con"=>0,"msg"=>$img)));

    }
}