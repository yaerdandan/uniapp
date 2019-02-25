<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2018/12/26
 * Time: 9:54
 */
namespace app\admins\controller;
use think\Controller;
use app\admins\model\login;
use app\admins\model\login_gid;
class Party extends Controller {
    public function index(){
       $where=function ($query){
         $query->field('*')->where(array());
       };
        $data['list']=login::select($where);
        $where=function ($query){
            $query->field('*')->where(array());
        };
        $data['gid']=login_gid::select($where);
        $this->assign("data",$data);
        return $this->fetch();
    }
    public function add(){
        //        查询用户
        $id=input('get.id');
        $where=function ($query) use($id){
          $query->field('*')->where(array("id"=>$id));
        };
        $data['list']=login::get($where);
//        查询角色
        $where=function ($query){
            $query->field('*')->where(array());
        };
        $data['gid']=login_gid::select($where);
         $this->assign("data",$data);
        return $this->fetch();
    }
    public function save(){
        $id=input('post.id');
        $user=input('post.user');
        $data['gid']=input('post.gid');
        $paw=input('post.paw');
        $zt=input('post.zt');
        $data['zt']=isset($zt)?1:0;
        $data['user']=$user;
        if(!$user){
            exit(json_encode(array("con"=>1,"msg"=>'用户名不能为空')));
        }
        if($id==0&&!$paw){
            exit(json_encode(array("con"=>1,"msg"=>'密码不能为空')));
        }
        if($data['gid']==0){
            exit(json_encode(array('con'=>1,"msg"=>'请选择角色')));
        }
//        添加数据
        if($id==0){
            $where=function ($query) use($user){
                $query->field('*')->where(["user"=>$user]);
            };
            $rel=login::get($where);
            if($rel){
                exit(json_encode(array("con"=>1,"msg"=>"此用户已被注册")));
            }
            $data['paw']=md5($user.$paw);
            $data['add_time']=time();
            $rol=login::create($data);
            if($rol){
                 exit(json_encode(array("con"=>0,"msg"=>"保存成功")));
            }else{
                exit(json_encode(array("con"=>1,"msg"=>"呀！出错了")));
            }
//            修改数据
        }else{
             if($paw){
                 $data['paw']=md5($user.$paw);
             }
             $where=function ($query) use ($id){
                 $query->where(array("id"=>$id));
             };
           $rel=login::update($data,$where);
           if($rel){
               exit(json_encode(array("con"=>0,"msg"=>'修改成功')));
           }else{
               exit(json_encode(array("con"=>1,"msg"=>'呀!出错了')));
           }
        }

    }
//    删除数据
function delete(){
        $id=$_POST['id'];
        $where=function ($query) use($id){
          $query->where('id','=',$id);
        };
       $rel= login::destroy($where);
       if($rel>0){
           exit(json_encode(array("con"=>0,'msg'=>"删除成功")));
       }else{
           exit(json_encode(array('con'=>1,'msg'=>'删除失败')));
       }
}
}