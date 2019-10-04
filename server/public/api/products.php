<?php

// header('Content-Type: application/json');

// if (empty($_GET['id'])) {
//   readfile('dummy-products-list.json');
// } else {
//   readfile('dummy-product-details.json');
// }

require_once('./functions.php');
require_once('./db_connection.php');

set_exception_handler('error_handler');

startup();

if (!$conn) {
  throw new Exception('exception: ' . mysqli_connect_error());
  exit();
};

if ( empty($_GET['id']) ) { //If empty, return all products
  $query = "SELECT * FROM `products`"; 
} else if (!empty( $_GET['id'] ) && !is_numeric( $_GET['id'] )) { //If not empty, and an invalid number
    throw new Exception("Id needs to be a number");
} else if (!empty( $_GET['id'] ) && is_numeric( $_GET['id'] )) { //if not empty, and valid number
  $id = $_GET['id'];
  $query = "SELECT * FROM `products` WHERE `id` = $id"; 
};

if( $row_cnt = mysqli_num_rows( $_GET['id']) ) {
  throw new Exception($row_cnt);
}

$id = $_GET['id'];  

$result = mysqli_query($conn, $query);

if(!$result) {
  throw new Exception('exception:', $result);
}

$output = [];
while($row = mysqli_fetch_assoc($result)) {
  $output[] = $row;
}

print( json_encode($output) ); 

?>
