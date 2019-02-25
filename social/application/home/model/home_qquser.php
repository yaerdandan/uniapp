<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2019/1/12
 * Time: 22:40
 */
namespace app\home\model;
use think\Model;
class home_qquser extends Model{
//    保存数据
    public function qq_insert($data){
        return home_qquser::create($data);
    }
//    查询全部数据
public function qq_select($qq_id){
        $where=function ($query) use($qq_id){
          $query->where('qq_id','=',$qq_id);
        };
       return home_qquser::select($where);
}
//删除
public function qq_delete($qq_id){
        $where=function ($query) use($qq_id){
            $query->where('qq_id','=',$qq_id);
        };
        return home_qquser::destroy($where);
}
//修改
public function qq_update($data,$qq_id){
        $where=function ($query) use($qq_id){
            $query->where('qq_id','=',$qq_id);
        };
        return home_qquser::update($data,$where);
}


}