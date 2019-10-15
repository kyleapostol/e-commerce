<?php

if(!INTERNAL){
    exit("Not Allowed Direct Acess");
}

if( empty($_SESSION['cartId']) ){
    print_r(getBodyData([]));
    var_dump("Session is empty");
} else {
    $cartId = intval($_SESSION['cartId']);
}





?>