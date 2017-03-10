var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + './../public'))
app.use(bodyParser.json())
/*
Define um diretorio padrao
passa as pastas dentros em ordem certa de carregamento
passa a instancia necessaria
*/
consign({cwd: 'app'})
	.include('api')
	.then('routes')
	.into(app);

module.exports = app; 