<?php
require_once("./functions.php");
require_once("./db_connection.php");

session_start();

startup();


set_exception_handler('error_handler');

define("INTERNAL", true);


switch($_SERVER['REQUEST_METHOD']){  //Handles request
  
  case "DELETE" :
    require_once("./cart_delete.php");
    break; 
  case "POST" :
    require_once("./cart_add.php");
    break;
  case "GET" :
    require_once("./cart_get.php");
    break;

}

?>
