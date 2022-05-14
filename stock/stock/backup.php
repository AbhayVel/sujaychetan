<?php
//Enter your database information here and the name of the backup file
$mysqlDatabaseName ='stock';
$mysqlUserName ='root';
$mysqlPassword ='';
$mysqlHostName ='localhost';
$mysqlExportPath ='dbBackUP/stock-'.date('d-m-y').'.sql';

//Please do not change the following points
//Export of the database and output of the status
$command='D:\wamp64\bin\mariadb\mariadb10.4.10\bin\mysqldump --opt -hlocalhost -uroot  stock > ' .$mysqlExportPath;
echo "<br/>";
exec($command,$output=array(),$worked);

$mysqlExportPath ='C:\dbBackUP\stock-'.date('d-m-y').'.sql';

//Please do not change the following points
//Export of the database and output of the status
$command='D:\wamp64\bin\mariadb\mariadb10.4.10\bin\mysqldump --opt -hlocalhost -uroot  stock > ' .$mysqlExportPath;
echo "<br/>";
exec($command,$output=array(),$worked);


switch($worked){
case 0:
echo 'The database <b>' .$mysqlDatabaseName .'</b> was successfully stored in the following path '.getcwd().'/' .$mysqlExportPath .'</b>';
break;
case 1:
echo 'An error occurred when exporting <b>' .$mysqlDatabaseName .'</b> zu '.getcwd().'/' .$mysqlExportPath .'</b>';
break;
case 2:
echo 'An export error has occurred, please check the following information: <br/><br/><table><tr><td>MySQL Database Name:</td><td><b>' .$mysqlDatabaseName .'</b></td></tr><tr><td>MySQL User Name:</td><td><b>' .$mysqlUserName .'</b></td></tr><tr><td>MySQL Password:</td><td><b>NOTSHOWN</b></td></tr><tr><td>MySQL Host Name:</td><td><b>' .$mysqlHostName .'</b></td></tr></table>';
break;
}
?>

<script> 
         
		window.parent.focus();

    </script>