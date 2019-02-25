<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2018/12/27
 * Time: 21:37
 */
namespace app\admins\controller;
use app\admins\model\social_menus;
use think\Controller;
use app\admins\controller\Judge;
use app\admins\model\login_gid;
class Role extends Judge {
 public function index(){
//管理首页
     $where=function ($query){
         $query->field('*')->where(array());
     };
     $data['list']=login_gid::select($where);
     $this->assign("data",$data);
     return $this->fetch();
 }
 public function add(){
//     添加修改
     $id=$_GET['id'];
     if($id>0){
         $where=function ($query) use($id){
           $query->field('*')->where(array("gid"=>$id));
         };
        $gid=login_gid::select($where);
        $this->assign("gid",$gid);
     }
//     权限菜单
     $where=function ($query){
         $query->where('zt','=',0);
     };
     $menus=social_menus::select($where);
     $list=json_decode(json_encode($menus),true);
     $result=[];
     foreach ($list as $key=>$value){
       $result[$value['id']]=$value;
    }
     echo '<pre>';
     print_r($result);
     echo '</pre>';
     $gid_menu=$this->menu($result);
     echo '<pre>';
     print_r($gid_menu);
     echo '</pre>';
    return $this->fetch();
 }
 protected function menu($item){
     $list=[];
     foreach ($item as $items){
         if(isset($item[$items['pid']])){
             $item[$items['pid']]['menus'][]=&$item[$items['id']];
         }else{
             $list[]=&$item[$items['id']];
         }
     }
     return $list;
 }
// 删除数据
 public function delete(){
     $id=$_POST['id'];
     $where=function ($query) use($id){
         $query->where("gid",'=',$id);
     };
     $rel=login_gid::destroy($where);
     if($rel>0){
         exit(json_encode(array("con"=>0,"msg"=>'删除成功')));
     }else{
         exit(json_encode(array("con"=>1,"msg"=>"呀！出错了")));
     }
 }
// 保存修改数据
public function save(){
     $id=input('post.id');
     $data['title']=input('post.title');
     $rights=input('post.rights/a');
     $rights && $data['rights']=json_encode(array_keys($rights));
    if ($data['title'=='']){
        exit(json_encode(array('con'=>1,'msg'=>'请输入名称')));
    }
     if($id==0){
       $rel= login_gid::create($data);
        if($rel>0){
            exit(json_encode(array('con'=>0,'msg'=>'保存成功')));
        }else{
            exit(json_encode(array('con'=>1,'msg'=>'呀！出错了')));
        }
     }else{
        $where=function ($query) use ($id){
            $query->where('gid','=',$id);
        };
        $rel=login_gid::update($data,$where);
        if($rel>0){
            exit(json_encode(array('con'=>0,'msg'=>'修改成功')));
        }else{
            exit(json_encode(array('con'=>1,'msg'=>'修改失败')));
        }
     }
}
}