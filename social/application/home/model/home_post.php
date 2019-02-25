<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2019/1/13
 * Time: 1:22
 */
namespace app\home\model;
use think\Model;
class home_post extends Model{
//    添加
    public function post_insert($data){
       return home_post::create($data);
    }
//    根据名字和user_id查询
    public function post_select($id,$title){
     $where=function ($query) use($id,$title){
       $query->where('title','=',$title,'&','user_id','=',$id);
     };
     return home_post::select($where);
    }
//    修改
    public function post_update($data,$id){
        $where=function ($query) use ($id){
            $query->where('tid','=',$id);
        };
        return home_post::update($data,$where);
    }
//    排序查询
public function post_order($id){
        $where=function ($query) use ($id){
           $query->where('collection','=',$id)
               ->order(" add_time desc ");
        } ;
            $list=home_post::select($where);
           $arr=[];
            foreach ($list as $key=>$v){
                $arr[]= $this->post_title($v['title']);
            }
            return $arr;
}
protected function post_title($title){
        $where=function ($query) use($title){
          $query->where('title','=',$title);
        };
        return home_post::select($where);
}
//判断
public function post_sel($id,$user_id){
        $where=function ($query) use($id,$user_id){
           $query->where('id','=',$id,'&','user_id','=',$user_id);
        };
            return home_post::select($where);
}
}