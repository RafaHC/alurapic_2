

module.exports = function(app){
	//gracas ao consign
	var api = app.api.foto;
	app.get('/v1/fotos',api.lista)
	app.post('/v1/fotos',api.adiciona)

	app.route('/v1/fotos/:id')
		.get(api.buscaPorId)
		.delete(api.removePorId);

}