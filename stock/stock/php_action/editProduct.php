<?php 	

require_once 'core.php';

$valid['success'] = array('success' => false, 'messages' => array());

if($_POST) {
	$productId = $_POST['productId'];
	$productName 		= $_POST['editProductName']; 
  $quantity 			= $_POST['editQuantity'];
  $rate 					= $_POST['editRate'];
  $brandName 			= $_POST['editBrandName'];
  $categoryName 	= $_POST['editCategoryName'];
  $productStatus 	= $_POST['editProductStatus'];

	$sql = "SELECT quantity FROM product WHERE product_id = $productId ";		

	$result = $connect->query($sql);
	$existingQty = 0;
	if($result->num_rows > 0) { 

		while($row = $result->fetch_array()) {
			$existingQty = $row [0];
		}
	}
	$totalUpdateQuantity =  $quantity -$existingQty;
	$sql = "UPDATE product SET product_name = '$productName', brand_id = '$brandName', categories_id = '$categoryName', quantity = quantity + '$quantity', total_quantity = total_quantity + '$quantity',  rate = '$rate', active = '$productStatus', status = 1 WHERE product_id = $productId ";

	if($connect->query($sql) === TRUE) {
		$valid['success'] = true;
		$valid['messages'] = "Successfully Update";	
	} else {
		$valid['success'] = false;
		$valid['messages'] = "Error while updating product info";
	}

} // /$_POST
	 
$connect->close();

echo json_encode($valid);
 
