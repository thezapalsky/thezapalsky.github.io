<form enctype="multipart/form-data" action="index.php" 
		 method="post" >
<?php
//include('funkcje.php');

if(isset($_FILES['plik'])&&isset($_POST['wyslij']))
{
	/* sprawdzenie czy został wybrany plik */
	if ($_FILES['plik']['name'] != '')
		if ($_FILES['plik']['type'] == 'image/jpeg')
		{
			if(is_uploaded_file($_FILES['plik']['tmp_name']))
  			{
				//echo($_FILES['plik']['name']);
 
                $a=mysqli_connect("mysql.cba.pl","apap549","yoloswag549","zapalski_cba_pl")
				or die ('brak polaczenia z serwerem');
				if ($a->connect_error) {
				die("Connection failed: " . $a->connect_error);
						} 

						$sql = "INSERT INTO kajteksgallery (nazwa, src)
						VALUES ('".$_FILES['plik']['name']."', './".$_FILES['plik']['name']."')";

						if ($a->query($sql) === TRUE) {
							echo "New zdjecie created successfully";
						} else {
							echo "Error: " . $sql . "<br>" . $a->error;
						}

						$a->close();
						
				
				if(!move_uploaded_file($_FILES['plik']['tmp_name'], './'.$_FILES['plik']['name']))
			    {
					echo 'problem: Nie udało się skopiować pliku do katalogu.';  
			    }
			}
			else
			{
				echo 'problem: Możliwy atak podczas przesyłania pliku.';
				echo 'Plik nie został zapisany.';
			}
		}
		else
		{
			echo('Nie ma pliku');
			echo($_FILES['plik']['error']);
        }
	else
	{
        /* jeli plik nie został wybrany */
        echo 'Wybierz plik.<br>';
    }
}
if(isset($_POST['usun'])){
	
	
		$a=mysqli_connect("mysql.cba.pl","apap549","yoloswag549","zapalski_cba_pl")
				or die ('brak polaczenia z serwerem');
				if ($a->connect_error) {
				die("Connection failed: " . $a->connect_error);
						} 

						$sql = "DELETE FROM kajteksgallery WHERE id=".$_POST['do_usunieca'];

						if ($a->query($sql) === TRUE) {
							echo "DELETEed";
						} else {
							echo "Error: " . $sql . "<br>" . $a->error;
						}

						$a->close();
		
	
}
?>
</form>			