<?php
require_once("./functions.php");

if(!INTERNAL){
exit("Not allowed direct access");    
}

$bodyData = getBodyData(); //associative array;
$id = intval($bodyData["id"]);//Sanitizes data??

if(!$id){
    throw new Exception("must have a product id to add to cart: ". $id );
} 


//checks if a session exists or not
if( empty($_SESSION['cartId']) ){
    $cartID = false;
} else {
    $cartID = $_SESSION['cartId'];
}

$query = "SELECT `price` FROM `products` where products.id = {$id}";
$result = mysqli_query($conn, $query);
if(!$result){
    throw new Exception("Invalid query result");
}

if(mysqli_num_rows($result) === 0){ 
    throw new Exception("Its an invalid product id");
}

$productData = [];
while($row = mysqli_fetch_assoc($result)) {  // mysqli_fetch_assoc loops through array 
    $productData[] = $row;    
    $price = $productData[0]['price'];  // retrieves price from the data
}  

$transaction = "START TRANSACTION";

$result2 = mysqli_query($conn, $transaction);

if(!$result2){
    throw new Exception("transaction failed");    
}
print($cartID);
if($cartID == false){ //if Session doesnt exist, create one
    $insertQuery = "INSERT INTO `cart` SET `created` = NOW()";
    $result3 = mysqli_query($conn, $insertQuery);

    if(!$result3){
        throw new Exception("Invalid result");
    }
    
    $recentID = mysqli_insert_id($conn);

    $_SESSION['cartId'] = $recentID;
    $cartID = $recentID; 
}

//Query for inserting a product(ROWS) into cart
$cartInsertQuery = "INSERT INTO `cartItems` (`productID`, `count`, `price`, `added`, `updated`, `cartID`)
                VALUES ($id, '1', $price, NOW(), NOW(), $cartID)
                ON DUPLICATE KEY UPDATE `count` = `count` + 1";  //updating the ID 

$result4 = mysqli_query($conn, $cartInsertQuery);
if(!$result4){
    throw new Exception("CartInsertQuery is invalid");
}
//transaction is a way to make an atomic update across database

if(mysqli_affected_rows($conn) < 1) { //Abort if no data was sent or if there was a problem
    $rollback = mysqli_rollback($conn);
    if(!$rollback){
        throw new Exception("Transaction is cleared");
    }
}  

$result5 = mysqli_query($conn, 'COMMIT');

if(!$result5){
    throw new Exception("result failed");
}

print("done");
?>