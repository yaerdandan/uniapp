<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2018/12/25
 * Time: 20:12
 */
namespace app\admins\controller;
use think\Controller;
use app\admins\controller\Judge;
class Menus extends Judge {
    public function index(){
        return $this->fetch();
    }
    public function welcome(){
        return $this->fetch();
    }
}