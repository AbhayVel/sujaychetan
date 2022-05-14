
<?php 
echo '<head>

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

</head>';
require_once 'core.php';
/*$_POST['startDate'] = '05/04/2020';
$_POST['endDate'] = '06/04/2020';*/
if($_POST) {

	$startDate = $_POST['startDate'];
	$date = DateTime::createFromFormat('m/d/Y',$startDate);
	$start_date = $date->format("Y-m-d");


	$endDate = $_POST['endDate'];
	$format = DateTime::createFromFormat('m/d/Y',$endDate);
	$end_date = $format->format("Y-m-d");

	$sql = "SELECT order_item.order_id, orders.client_name,orders.client_contact, product.product_name, order_item.quantity,order_item.rate, order_item.total,orders.order_date FROM order_item , product,orders where order_item.product_id=product.product_id AND order_item.order_id = orders.order_id AND orders.order_date >= '$start_date' AND orders.order_date <= '$end_date'";
	$query = $connect->query($sql);

	$table = '
	<table border="1" cellspacing="0" cellpadding="0" style="width:100%;">
	<td colspan="8"><center><b>Order Item Report</b><center></th>
		<tr>
			<th><center>Order Number</center></th>
			<th><center>Order Date</center></th>
			<th><center>Client Name</center></th>
			<th><center>Contact</center></th>
			<th><center>Product Name</center></th>
			<th><center>Quantity</center></th>
			<th><center>Rate</center></th>
			<th><center>Total</center></th>
		</tr>

		<tr>';
		$totalAmount = 0;
		$qty = 0;
		while ($result = $query->fetch_assoc()) {
			
			$orderDate = date("d-m-Y", strtotime($result['order_date']));
			
			$table .= '<tr>
				<td><center>ORD-'.$result['order_id'].'</center></td>
				<td><center>'.$orderDate.'</center></td>
				<td><center>'.$result['client_name'].'</center></td>
				<td><center>'.$result['client_contact'].'</center></td>
				<td><center>'.$result['product_name'].'</center></td>
				<td><center>'.$result['quantity'].'</center></td>
				<td><center>'.$result['rate'].'</center></td>
				<td><center>'.$result['total'].'</center></td>
			</tr>';	
			$totalAmount += $result['total'];
			$qty += $result['quantity'];
		}
		$table .= '
		</tr>

		<tr><td></td><td></td><td></td><td></td>	
			<td ><center><b>Total Quantity</b></center></td>
			<td ><center><b>'.$qty.'</b></center></td>
			<td ><center><b>Total Amount</b></center></td>
			<td><center><b>'.$totalAmount.'</b></center></td>
		</tr>
	</table>
	';	

	echo $table;

}

?>