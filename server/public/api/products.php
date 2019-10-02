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

// $output = file_get_contents('dummy-products-list.json');
// print($output); 

$query = "SELECT * FROM `products` WHERE 1"; 
$result = mysqli_query($conn, $query);

if(!$result){
  throw new Exception('exception:', $result);
}

$output = [];

while($row = mysqli_fetch_assoc($result)){
  array_push($output,$row);
  $encode_output = json_encode($output);
  print($encode_output);
}



?>
