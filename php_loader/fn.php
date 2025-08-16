<?php

/**
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types/Common_types
 */
function m($t)
{
	$m = match ($t) {
		'js', 'javascript' => 'text/javascript',
		'htm', 'html' => 'text/html',
		'css', 'otf', 'ttf', 'woff', 'woff2' => "text/{$t}",
		'bmp', 'gif', 'png', 'webp', 'avif' => "image/{$t}",
		'svg' => 'image/svg+xml',
		'jpg', 'jpeg' => 'image/jpeg',
		'txt', 'text' => 'text/plain',
		default => 'application/octet-stream',
	};
	header("Content-Type: {$m}");
}

function e(...$vars)
{
	foreach ($vars as $var) {
		if (is_array($var) || is_object($var)) {
			var_dump($var);
		} else {
			echo $var;
		}
		echo PHP_EOL;
	}
}

function d(...$vars)
{
	m('txt');
	e(...$vars);
	die;
}
