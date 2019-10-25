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
}

$bodyData = getBodyData(); //associative array;
$id = intval($bodyData["id"]);//Sanitizes data

//checks if a session exists or not

if($id < 1){
    throw new Exception("must have a product id to delete from cart: ". $id ); //must be greater than 1
};
 

$query = "DELETE FROM cartItems WHERE productID = {$id}";
$result = mysqli_query($conn, $query);

if(!$result){
    throw new Exception("Query failed: ". $result);
}
