<!DOCTYPE html>
<head>
<meta charset="UTF-8">
<style type="text/css">
			td + td,
		th + th { border-left: 1px solid; }
		tr + tr { border-top: 1px solid; }
</style>
</head>
<body>
<form enctype="multipart/form-data" action="index.php" 
		 method="post" >
		 
<?php

echo "<a href='./dodaj_plik.html'>panel admina</a><br><br>";

$a=mysqli_connect("mysql.cba.pl","apap549","yoloswag549","zapalski_cba_pl")
or die ('brak polaczenia z serwerem');
$rs = mysqli_query($a,"SELECT * FROM kajteksgallery")
or die ('nie mozna pobrac danych z tabeli zdjecia');
while($rec = mysqli_fetch_array($rs)){

echo "<input type='image' width='500' name='podglad' value='".$rec['src']."' src='".$rec['src']."'>";
echo "<br >";
}
?>
</form>
</body>