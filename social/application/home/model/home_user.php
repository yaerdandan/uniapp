<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2019/1/10
 * Time: 21:49
 */
namespace app\home\model;
use think\Model;
class home_user extends Model{
//   查询全部
public function user_select($iphone){
    $where=function ( $query) use($iphone){
        $query->field('*')->where(array("iphone"=>$iphone));
    };
    return home_user::select($where);
}
//查询单条数据
public function selone($iphone){
    $where=function ( $query) use($iphone){
        $query->field('paw,user')->where(array("iphone"=>$iphone));
    };
    return home_user::get($where);
}

//    增加
   public function sert($data){
       return home_user::create($data);
   }
//删除
public function user_delete($id){
 $where=function ($query) use($id){
   $query->where('id','=',$id);
 };
  return home_user::destroy($where);
}
//修改
public function user_update($data,$id){
    $where=function ($query) use ($id){
        $query->where('id','=',$id);
    };
    return home_user::update($data,$where);
}
//通过id查询
public function select_id($id){
    $where=function ( $query) use($id){
        $query->field('*')->where(array("id"=>$id));
    };
    return home_user::select($where);
}
}