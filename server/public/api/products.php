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
  // $query = "SELECT * FROM `products`";
  $query = "SELECT products.name, products.id, products.price, products.color, products.shortDescription, 
  (SELECT `image` FROM `images` WHERE product_id = products.id LIMIT 1) 
    as `images` FROM `products`";

} else if (!empty( $_GET['id'] ) && !is_numeric( $_GET['id'] )) { //If not empty, and an invalid number
    throw new Exception("Id needs to be a number");
} else if (!empty( $_GET['id'] ) && is_numeric( $_GET['id'] )) { //if not empty, and valid number
  $id = $_GET['id'];

 $query = "SELECT products.id, products.price, products.color, products.shortdescription, products.name, 
          GROUP_CONCAT(images.image) AS images 
          FROM products 
          JOIN images 
            ON products.id = images.product_id 
          WHERE products.id = $id
          GROUP BY products.id";
};

$result = mysqli_query($conn, $query);

$num_rows_check = mysqli_num_rows($result);

if(!$num_rows_check) { 
  throw new Exception("Invalid ID: ". $_GET['id']);
}

if(!$result) {
  throw new Exception('exception:', $result);
}

$output = [];
while($row = mysqli_fetch_assoc($result)) {
  $row['images'] = explode(",", $row['images']);
  $output[] = $row;
}

print(json_encode($output)); 

?>
