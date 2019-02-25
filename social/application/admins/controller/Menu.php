<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2019/1/8
 * Time: 15:43
 */
namespace app\admins\controller;
use app\admins\model\social_menus;
use think\Controller;
use app\admins\controller\Judge;
use app\admins\model\login_gid;
class Menu extends Judge {
    public function index(){
//        获取首页表和子级表
        $id=isset($_GET['id'])?$_GET['id']:'0';
        $where=function ($query) use($id){
            $query->field('*')->where('pid','=',$id);
        };
        $data['list']= social_menus::select($where);
//        获取上级表
        $data_id=0;
        if($id>0){
            $where=function ($query) use($id){
                $query->field('*')->where('id','=',$id);
            };
            $parent=social_menus::select($where);
            $data_id=$parent[0]['pid'];
        }
        $this->assign("pid",$id);
        $this->assign("id",$data_id);
       $this->assign("data",$data);
     return $this->fetch();
    }
    public function save(){
        $pid=input('post.id');
        $title=input('post.title/a');
        $controller=input('post.controller/a');
        $method=input('post.method/a');
        $zt=input('post.zt/a');
        $del=input('post.del');
       foreach ($title as $key=>$value){
          $data['pid']=$pid;
          $data['title']=$value;
          $data['controller']=$controller[$key];
          $data['method']=$method[$key];
          $data['zt']=isset($zt[$key])?1:0;
          $data['del']=isset($del[$key])?1:0;
 //             添加数据
          if($key==0 && $data['title']){
             social_menus::create($data);
          };
          if ($key>0){
//              删除数据
              if($data['title']==''&& $data['controller']==''&& $data['method']==''){
                  $where=function ($query) use ($key){
                      $query->where('id','=',$key);
                  };
                     social_menus::destroy($where);

              }else{
                  $where=function ($query)use($key){
                      $query->where('id','=',$key);
                  };
                     social_menus::update($data,$where);
              }
          }
       }
       exit(json_encode(array("con"=>0,"msg"=>'操作成功')));

    }
}