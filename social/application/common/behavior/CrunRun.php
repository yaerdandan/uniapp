<?php

namespace app\common\behavior;


 
class CronRun
{

public function run(&$dispatch){

    header("Access-Control-Allow-Origin:*");

$host_name = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : "*";

    $headers = [

        "Access-Control-Allow-Origin" => $host_name,

        "Access-Control-Allow-Credentials" => 'true',

        "Access-Control-Allow-Headers" => "x-token,x-uid,x-token-check,x-requested-with,content-type,Host"

    ];

    if($dispatch instanceof Response) {

        $dispatch->header($headers);

    } else if($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {

        $dispatch['type'] = 'response';

        $response = new Response('', 200, $headers);

        $dispatch['response'] = $response;

    }

}

}
