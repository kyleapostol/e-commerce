<?php
require_once("./functions.php");

if(!INTERNAL){
exit("Not allowed direct access");    
}

$bodyData = getBodyData(); //associative array;
$id = intval($bodyData["id"]);

if($id === 0){
    throw new Exception("Id must be greater than 0");
} 

if( empty($_SESSION['cartId']) ){
    $cartID = false;
} else {
    $cartID = $_SESSION['cartId']; //pulling session and assigning it to cartID
}


$query = "SELECT `price` FROM `products` where products.id = 2";

$result = mysqli_query($conn, $query);

if(!$result){
    throw new Exception("Invalid query result");
}

if(mysqli_num_rows($result) === 0){ //mysqli_num_rows returns the number of rows
    throw new Exception("Its an invalid product id");
}

$productData = [];
while($row = mysqli_fetch_assoc($result)) {  // mysqli_fetch_assoc loops through array 
    $productData[] = $row;    
    $price = $productData[0]['price'];  // associative array inside associative array 
}  

$transaction = "START TRANSACTION";

$result2 = mysqli_query($conn, $transaction);

if(!$result2){
    throw new Exception("Test for transaction");    
}

var_dump($cartID);
var_dump("Transaction: " . $result2);

if($cartID == false){
    $insertQuery = "INSERT INTO `cart` SET `created` = NOW()";
    $result3 = mysqli_query($conn, $insertQuery);

    if(!$result3){
        throw new Exception("Invalid result");
    }

    $result = mysqli_affected_rows($conn); //recent connection to the database
    if($result !== 1){ //one cart was added
        throw new Exception("It was not inserted");
    }
    
    $recentID = mysqli_insert_id($conn);

    $_SESSION['cartId'] = $recentID;
    $cartID = $recentID; 

}

// INSERT INTO <table> SET <key>=<value>, <key2>=<value2> ON DUPLICATE KEY UPDATE <key>=<value>, <key2>=<value2>

$cartInsertQuery = "INSERT INTO `cartItems` (`productID`, `count`, `price`, `added`, `updated`, `cartID`)
                VALUES ($id, '1', '199', NOW(), NOW(), $cartID)
                ON DUPLICATE KEY UPDATE `count` = `count` + 1";  //updating the ID 

$result4 = mysqli_query($conn, $cartInsertQuery);
if(!$result4){
    throw new Exception("CartInsertQuery is invalid");
}
//transacction is way to make an atomic update across database

if(mysqli_affected_rows($conn) >= 1) { //Abort 
    $rollback = mysqli_rollback($conn);
    var_dump($rollback);
    if(!$rollback){
        throw new Exception("Rollback failed");
    }
}  

var_dump($cartInsertQuery); 
?>