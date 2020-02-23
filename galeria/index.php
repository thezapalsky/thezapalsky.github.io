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
if($_POST['podglad']){
	echo "<img src='".$_POST['podglad']."'>";
	//echo "ok";
}
else{
$a=mysqli_connect("mysql.cba.pl","apap549","yoloswag549","zapalski_cba_pl")
or die ('brak polaczenia z serwerem');
$rs = mysqli_query($a,'SELECT * FROM kategorie')
//$rs = mysqli_query($a,'SELECT * FROM zdjecia')
or die ('nie mozna pobrac danych z tabeli zdjecia');
echo "<table style='border: solid black ; border-collapse: collapse' >";
echo "<tr><th>id</th><th>nazwa</th><th>opis</th><th></th></tr>";
while($rec = mysqli_fetch_array($rs)){
//echo $rec['src']."<br>";

//echo "<img  width='500' src='".$rec['src']."'>";
echo "<tr><td>".$rec['id']."</td><td>".$rec['nazwa_kat']."</td><td>".$rec['opis_kat']."</td><td><input type='submit' name='wybierz' value='Wybierz' /></td></tr>";

//echo "<input type='submit' name='delete_".$rec['id']."' value='delete' />";
//echo "<br >";

}
echo "</table>";
echo "<br>Wybierz kategorie po ID:<br> <input type='text' name='id_kat' /><input type='submit' name='pokaz' value='Pokaż' /><br>";

if( isset($_POST['id_kat']) )
{
	$a=mysqli_connect("mysql.cba.pl","apap549","yoloswag549","zapalski_cba_pl")
	or die ('brak polaczenia z serwerem');
	$rs = mysqli_query($a,"SELECT * FROM zdjecia WHERE kategoria='".$_POST['id_kat']."' ")
	or die ('nie mozna pobrac danych z tabeli zdjecia');
	while($rec = mysqli_fetch_array($rs)){
	//echo $rec['src']."<br>";
	//echo "<img  width='500' src='".$rec['src']."'>".$rec['id'];
	//echo "<input type='submit' name='delete_".$rec['id']."' value='delete' />";

	echo "<input type='image' width='500' name='podglad' value='".$rec['src']."' src='".$rec['src']."'>".$rec['id'];
	echo "<br >";
			
}
	//echo $_POST['podglad'];

}


}
?>
</form>
</body>