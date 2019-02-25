<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2019/1/13
 * Time: 23:31
 */
namespace app\home\controller;
use think\Controller;
header('Access-Control-Allow-Origin:*');     
header('Access-Control-Allow-Methods:*');  
header('Access-Control-Allow-Headers:*');
header('Access-Control-Allow-Credentials:false');

class Commentcontroller extends Controller{
//    添加评论
public function  add(){
$data['title']=isset($_POST['title'])?$_POST['title']:'';
$data['add_time']=time();
   
}
}