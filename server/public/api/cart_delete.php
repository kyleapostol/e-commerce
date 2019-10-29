<?php
require_once("./functions.php");

if(!INTERNAL){
    exit("Not Allowed Direct Acess");
}

if( empty( $_SESSION['cartId']) ){
    print_r(getBodyData([]));
    exit();
} else {
    $cartID = $_SESSION['cartId'];
    var_dump($cartId);
}

$bodyData = getBodyData(); //associative array;
var_dump($bodyData);
$id = intval($bodyData["id"]);
$count = intval($bodyData["count"]);

//checks if a session exists or not
if($id < 1){
    throw new Exception("must have a product id to delete from cart: ". $id ); //must be greater than 1
};
 
if( $count !== 0 ){
  $query = "DELETE FROM cartItems WHERE productID = {$id}";
  $result = mysqli_query($conn, $query);  
    if(!$result){
        throw new Exception("Query failed: ". $result);
    }
} else {
    $query2 = "UPDATE `cartItems` SET `count` = `count` - 1 WHERE `productID` = {$id}" ;
    $result2 = mysqli_query($conn, $query2);
    if(!$result2){
        throw new Exception("Query failed: ". $result2);
    }
}



