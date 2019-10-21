<?php

function error_handler($error){
        $output= [ 
        "success" => false,
        "error" => $error -> getMessage(),
    ];
    $json_output = json_encode($output);
    print $json_output;
    return null;
}

function startup(){
    header("Content-type:application/json");
}

function getBodyData(){
    $bodyData = file_get_contents('php://input'); 
    $assocData = json_decode($bodyData, true); //Decode it.
    return $assocData;
}

?>