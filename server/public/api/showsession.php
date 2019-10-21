<?php
if( empty($_SESSION['cartId']) ){
    throw new Exception("must have a product id to add to cart");
    exit();
} else {
    print_r($_SESSION['cartId']);
}

?>