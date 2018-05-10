var express = require('express'),
	bodyParser = require('body-parser'),
	app = express();

var mysql = require('mysql');
var fs = require('fs');
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	database:'jewelerybd',
	port:3306,
	 });
connection.connect();