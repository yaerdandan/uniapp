<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2019/1/13
 * Time: 1:15
 */
namespace app\home\controller;
use app\home\model\home_qquser;
use app\home\model\home_user;
use think\Controller;
use app\home\model\home_post;
use think\Request;
use think\Validate;

header('Access-Control-Allow-Origin:*');     
header('Access-Control-Allow-Methods:*');  
header('Access-Control-Allow-Headers:*');
header('Access-Control-Allow-Credentials:false');
class Post extends Controller
{
//    查询显示
    public function index()
    {
//        static $data=[];
//        for($i=0 ;$i<2;$i++){
//            $pid = rand(1, 30);
//            $mode = new home_post();
//            $arr = $mode->post_order($pid);
//            $data[]=json_decode(json_encode($arr));
//        }
//            $mode = new home_post();
//            $arr = $mode->post_order(36);
//            $da=json_decode(json_encode($arr),true);
//            dump($da);
//            foreach ($da as $k=>$v){
//              dump($v['title']);
//            }
    }



//       添加
        public function add(){
            $id=0;
            $data['title'] = isset($_POST['title']) ? $_POST ['title'] : '3123';
           if(!$data['title']){
             exit(json_encode(array("con"=>1,"msg"=>'请输入标题')));
           }
           $model=new home_post();
           $data=$model->post_select($id,$data['title']);
           if($data){
               $file = request()->file('file');
               if($file==null) {
                   exit(json_encode(array("con" => 1, "msg" => "未上传图片")));
               }
               $info= $file->move(ROOT_PATH.'public'.DS.'uploads');
               $ext=($info->getExtension());
               if(!in_array($ext,array('jpg','jpeg','gif','png'))){
                   exit(json_encode(array("con"=>1,"msg"=>'文件格式不支持')));
               }
               $pic= 'http://47.100.211.9/social/public/uploads/'.$info->getSaveName();
               $db=mysqli_connect('localhost','root','root');
               mysqli_select_db($db,'social');
               mysqli_set_charset($db,'utf8');
               $sql="update home_post set picture= picture + $pic where user_id=$id";
               mysqli_query($db,$sql);
           }else{
               $data['add_time'] = time();
               $data['content']=isset($_POST['content'])?$_POST['content']:'';
               $data['user_id'] = isset($_POST['user_id']) ? $_POST['user_id'] : '';
               $file = request()->file('file');
               if($file==null) {
                   exit(json_encode(array("con" => 1, "msg" => "未上传图片")));
               }
               $info= $file->move(ROOT_PATH.'public'.DS.'uploads');
               $ext=($info->getExtension());
               if(!in_array($ext,array('jpg','jpeg','gif','png'))){
                   exit(json_encode(array("con"=>1,"msg"=>'文件格式不支持')));
               }
               $data['picture']=json_encode('http://47.100.211.9/social/public/uploads/'.$info->getSaveName());
               $rel = $model->post_insert($data);
               if ($rel) {
                   exit(json_encode(array('con' => 0, 'msg' => '添加成功','data'=>$data)));
               } else {
                   exit(json_encode(array('con' => 1, 'msg' => '添加失败')));
               }
           }
        }


}