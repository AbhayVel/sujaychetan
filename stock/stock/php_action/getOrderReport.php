<?php 

require_once 'core.php';
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
if($_POST) {

	$startDate = $_POST['startDate'];
	$date = DateTime::createFromFormat('m/d/Y',$startDate);
	$start_date = $date->format("Y-m-d");


	$endDate = $_POST['endDate'];
	$format = DateTime::createFromFormat('m/d/Y',$endDate);
	$end_date = $format->format("Y-m-d");

	$sql = "SELECT * FROM orders WHERE order_date >= '$start_date' AND order_date <= '$end_date' and order_status = 1";
	$query = $connect->query($sql);

	$table = '
	<table border="1" cellspacing="0" cellpadding="0" style="width:100%;">
	<tr>
			<td colspan="8"><center><b>Order Report</b><center></th>
			
		</tr>
		<tr>
			<th><center>Order Number</center></th>
			<th><center>Order Date</center></th>
			<th><center>Client Name</center></th>
			<th><center>Contact</center></th>
			<th><center>Labour Charges</center></th>
			<th><center>Discount</center></th>
			<th><center>Pending Amount</center></th>
			<th><center>Grand Total</center></th>
			
		</tr>

		<tr>';
		$totalAmount = 0;
		$totalDiscount = 0;
		$totalLabourCharge = 0;
		$totalPendingAmt = 0;
		while ($result = $query->fetch_assoc()) {
			$orderDate = date("d-m-Y", strtotime($result['order_date']));
			$table .= '<tr>
				<td><center>ORD-'.$result['order_id'].'</center></td>
				<td><center>'.$orderDate.'</center></td>
				<td><center>'.$result['client_name'].'</center></td>
				<td><center>'.$result['client_contact'].'</center></td>
				<td><center>'.$result['vat'].'</center></td>
				<td><center>'.$result['discount'].'</center></td>
				<td><center>'.$result['due'].'</center></td>
				<td><center>'.$result['grand_total'].'</center></td>
			</tr>';	
			$totalAmount += $result['grand_total'];
			$totalDiscount += $result['discount'];
			$totalLabourCharge += $result['vat'];
			$totalPendingAmt += $result['due'];
		}
		$table .= '
		</tr>

		<tr><td></td>	<td></td>	<td></td>
		<td ><center><b>Total Amount</b></center></td>
		<td><center><b>'.$totalLabourCharge.'</b></center></td>
		<td><center><b>'.$totalDiscount.'</b></center></td>
		<td><center><b>'.$totalPendingAmt.'</b></center></td>
			
			<td><center><b>'.$totalAmount.'</b></center></td>
		</tr>
	</table>
	';	

	echo $table;

}

?>