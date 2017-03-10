var contator = 2;

var fotos = [
			{_id: 1,url:'http://baixarimagens.com/wp-content/uploads/2016/08/baixar-imagem-de-le%C3%A3o.jpg',titulo:'Leao'},
			{_id: 2,url:'http://baixarimagens.com/wp-content/uploads/2016/08/baixar-imagem-de-le%C3%A3o.jpg',titulo:'Leao 2'}
		]

var api = {


	lista: function(req,res){
		
		res.json(fotos)
	},
	buscaPorId: function(req,res){
		var id = req.params.id;
		var foto = fotos.find(function(foto){
			return foto._id == req.params.id;
		})

		res.json(foto);
	},
	removePorId: function(req,res){
		fotos.filter(function(foto){
			return foto._id != req.params.id;
		})
		res.sendStatus(204);
	},
	adiciona: function(req,res){
		var foto = req.body;
		foto._id = contator++;

		fotos.push(foto);
		res.json(foto);
	},
	atualiza: function(req,res){
		var foto = req.body;
	}

}
		
module.exports = api;