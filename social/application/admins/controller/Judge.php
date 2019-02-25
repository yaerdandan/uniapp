<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2018/12/27
 * Time: 20:25
 */
namespace app\admins\controller;
use think\Controller;
use think\Request;

class Judge extends Controller
{
    public function __construct(Request $request = null)
    {
        parent::__construct($request);
//        判断用户是否登录
        $this->_admin = session('admins');
        if (!$this->_admin) {
            header('location:/index.php/admins/Acction/index');
            exit;
        }
    }
}