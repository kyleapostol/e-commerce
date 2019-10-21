<?php
require_once("./functions.php");
require_once("./db_connection.php");

// header('Content-Type: application/json');

// $method = $_SERVER['REQUEST_METHOD'];
// $item = file_get_contents('php://input');

// if ($method == 'GET') {
//   readfile('dummy-cart-items.json');
// } else if ($method == 'POST') {
//   http_response_code(201);
//   print($item);
// } else {
//   http_response_code(404);
//   print(json_encode([
//     'error' => 'Not Found',
//     'message' => "Cannot $method /api/cart.php"
//   ]));
// }
session_start();

startup();


set_exception_handler('error_handler');

define("INTERNAL", true);


switch($_SERVER['REQUEST_METHOD']){  //Handles request
  
  case "POST" :
    require_once("./cart_add.php");
    break;
  case "GET" :
    require_once("./cart_get.php");
    break;
  case "DELETE" :
    require_once("./cart_delete.php");
    break; 
}

?>
