<?php

$servername = "mysql.cba.pl";
$db_user='apap549';
$db_pass='yoloswag549';
$db_db='zapalski_cba_pl';

mysql_connect($db_host,$db_user,$db_pass);
mysql_select_db($db_db);
        $id=mysql_query("select json from kik");
        $w=mysql_fetch_assoc($id);
        echo $w['json'];
?>