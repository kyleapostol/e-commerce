<?php

if(!INTERNAL){
    exit("Not Allowed Direct Acess");
}
//checks if thers already a SESSION in progress
if( empty($_SESSION['cartId']) ){
    print(json_encode([]));
    exit();
} else {
    $cartId = intval($_SESSION['cartId']);
}


$query = "SELECT * FROM products 
INNER JOIN cartItems ON products.id = cartItems.productID
INNER JOIN cart ON cart.id = cartItems.cartID
WHERE  cart.id = {$cartId}";

$result = mysqli_query($conn, $query);

$productData = [];
while($row = mysqli_fetch_assoc($result)) {  // mysqli_fetch_assoc loops through array 
    $productData[] = $row;    
}

if($productData === []){
    print("[]");
    exit();
} else {
    print(json_encode($productData));
}

?>