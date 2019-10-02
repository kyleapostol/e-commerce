<?php
function error_handler($error){
    $output= [
        "success" => false,
        "error" => $error,
    ];
$result = json_encode($output);
echo json_encode($result);
return null;
}
?>