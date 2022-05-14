<?php 
require_once 'php_action/core.php';
require_once 'php_action/db_connect.php' 

?>
<html>
<head>

	<title>Stock Management System</title>  

	<!-- bootstrap -->
	<link rel="stylesheet" href="assests/bootstrap/css/bootstrap.min.css">
	<!-- bootstrap theme-->
	<link rel="stylesheet" href="assests/bootstrap/css/bootstrap-theme.min.css">
	<!-- font awesome -->
	<link rel="stylesheet" href="assests/font-awesome/css/font-awesome.min.css">

  <!-- custom css -->
  <link rel="stylesheet" href="custom/css/custom.css">

	<!-- DataTables -->
  <link rel="stylesheet" href="assests/plugins/datatables/jquery.dataTables.min.css">

  <!-- file input -->
  <link rel="stylesheet" href="assests/plugins/fileinput/css/fileinput.min.css">

  <!-- jquery -->
	<script src="assests/jquery/jquery.min.js"></script>
  <!-- jquery ui -->  
  <link rel="stylesheet" href="assests/jquery-ui/jquery-ui.min.css">
  <script src="assests/jquery-ui/jquery-ui.min.js"></script>

  <!-- bootstrap js -->
	<script src="assests/bootstrap/js/bootstrap.min.js"></script>

</head>
<table class="table" id="manageProductTable" border="1">
				<thead>
					<tr>
						<th></th>
						<th>Brand</th>
						<th>Product Name</th>
						<th>Rate</th>							
						<th>Current Stock(Quantity)</th>
						<th>Sold Stock(Quantity)</th>
						<th>Total Stock (Quantity)</th>
						
						<!--<th>Category</th>-->
						
						
					</tr>
				</thead>


<?php
$sql = "SELECT product.product_id, product.product_name, product.product_image, product.brand_id,
 		product.categories_id, product.quantity, product.rate, product.active, product.status, 
 		brands.brand_name, categories.categories_name,product.total_quantity FROM product 
		INNER JOIN brands ON product.brand_id = brands.brand_id 
		INNER JOIN categories ON product.categories_id = categories.categories_id  
		Order by product.product_name
		";

$result = $connect->query($sql);
$totalCurrentQty = 0;
$totalSoldStock = 0;
$totalStock = 0;

$totalSumForCurrentStock = 0;
$totalAmountForSoldStock = 0;
$totalAmountOfStock = 0;
$index = 1;
if($result->num_rows > 0) { 

 // $row = $result->fetch_array();
 $active = ""; 

 while($row = $result->fetch_array()) {
	$quantitySum = 0;
	$prodSQL = "SELECT SUM(quantity) FROM `order_item` WHERE product_id = {$row[0]}";
	$resultProdSQL = $connect->query($prodSQL);
	//echo $resultProdSQL->num_rows;
	if($resultProdSQL->num_rows > 0) {
		while($prodRow = $resultProdSQL->fetch_array()) {
			if (!empty($prodRow[0])) {
				$quantitySum = $prodRow[0];
			}
			
		}
	}

	$totalCurrentQty = $totalCurrentQty + $row[5];
	$totalSoldStock += $quantitySum;
	$totalStock += $row[11];
	
	
	$totalSumForCurrentStock += ($row[6]*$row[5]);
	$totalAmountForSoldStock += ($row[6]*$quantitySum);
	$totalAmountOfStock += ($row[6]*$row[11]);
	
	echo "<tr>";
	echo "<td>{$index}</td>";
	echo "<td>{$row[9]}</td>";
	echo "<td>{$row[1]}</td>";
	echo "<td>{$row[6]}</td>";							
	echo "<td>{$row[5]}</td>";
	echo "<td>{$quantitySum}</td>";
	echo "<td>{$row[11]}</td>";
	
	//echo "<td>{$row[10]}</td>";
	echo "</tr>";
	$index++;
 }
}
echo '</table>'
 ?>
 
<table class="table" id="manageProductTable" border="1">
				<thead>
					<tr>
						
						<td>Total Current Quantity</td> <td><?php echo $totalCurrentQty;?></td> <td>Total Amount of Current Stock</td> <td><?php echo $totalSumForCurrentStock;?><i class="fa fa-inr" style="font-size:20px"></i> </td>
						</tr><tr>
						<td>Total Sold Quantity</td> <td><?php echo $totalSoldStock;?></td>	<td>Total Amount of Sold Stock</td> <td><?php echo $totalAmountForSoldStock;?><i class="fa fa-inr" style="font-size:20px"></i></td>			
						</tr><tr>
						<td>Total Stock Quantity</td> <td><?php echo $totalStock;?></td>	<td>Total Amount of Stock</td> <td><?php echo $totalAmountOfStock;?><i class="fa fa-inr" style="font-size:20px"></i></td>								
						</tr>
			


			
						
					</tr>
				</thead>