<?php
require_once("./functions.php");

if(!INTERNAL){
    exit("Not Allowed Direct Acess");
}

$bodyData = getBodyData(); //associative array;
$id = intval($bodyData["id"]);//Sanitizes data

//checks if a session exists or not
if( empty( $_SESSION['cartId']) ){
    print_r(getBodyData([]));
    exit();
} else {
    $cartID = $_SESSION['cartId'];
}

if(!$id){
    throw new Exception("must have a product id to add to cart: ". $id ); //must be greater than 1
} 