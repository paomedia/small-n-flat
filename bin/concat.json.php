#!/usr/bin/php
<?php
start();
function start()
{
  $data = array();
  foreach(glob("../svg/*.svg") as $file)
    {
      $data[] = array('name' => substr(basename($file), 0, -4),
		      'blob' => base64_encode(file_get_contents($file)));
    }
  file_put_contents('../concat.js', 'printIcons(' . json_encode($data) . ');' . "\n");
}
