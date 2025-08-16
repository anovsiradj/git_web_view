<?php

require __DIR__ . '/fn.php';
require __DIR__ . '/curl.php';

$href = $_SERVER['QUERY_STRING'];
$name = md5($href);
$file = __DIR__ . "/tmp/{$name}";

$data = null;
$mime = null;

if (file_exists($file)) {
	$cache = file_get_contents($file);
	$cache = unserialize($cache);
	// d($cache);

	extract($cache);
} else {
	$mime = basename($href);
	$mime = explode('.', $mime);
	$mime = $mime[count($mime) - 1];

	$data = file_get_contents($href);

	$cache = serialize(compact('mime', 'data'));
	file_put_contents($file, $cache);
}

m($mime);
e($data);
