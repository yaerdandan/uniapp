<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2019/1/12
 * Time: 10:46
 */
namespace app\home\controller;
use think\Controller;
header('Access-Control-Allow-Origin:*');     
header('Access-Control-Allow-Methods:*');  
header('Access-Control-Allow-Headers:*');
header('Access-Control-Allow-Credentials:false');
class Uploadimg extends Controller{
    public function upload(){
        $file = request()->file('file');
        if($file==null) {
            exit(json_encode(array("con" => 1, "msg" => "未上传图片")));
        }
        $info= $file->move(ROOT_PATH.'public'.DS.'uploads'.DS.'head_img');
        $ext=($info->getExtension());
        if(!in_array($ext,array('jpg','jpeg','gif','png'))){
            exit(json_encode(array("con"=>1,"msg"=>'文件格式不支持')));
        }
        $img='uploads/head_img/'.$info->getSaveName();
        exit(json_encode(array("con"=>0,"msg"=>$img)));
    }
}