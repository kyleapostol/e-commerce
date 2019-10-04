<?php

function error_handler($error){
    print( $error );
    $output= [ 
        "success" => false,
        "error" => $error -> getMessage(),
    ];
    $json_output = json_encode($output);
    print ($json_output);
    return null;
}

function startup(){
    header("Content-type:application/json");
}

?>