var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var db = req.db;
  var collection = db.get('autos');
   collection.find({},{},function(e,docs){
 	  res.render("form",{title:"REGISTRO VEHICULAR",data:docs});
 	});

});

router.post('/add', function(req, res, next) {

	var auto = 
	{
		marca:req.body.marca,
		color:req.body.color,
		placa:req.body.placa,
		year:req.body.year,
	}
	
	var db = req.db;
  	var collection = db.get('autos');
   collection.insert(auto,function (err, doc){
   		if(err)
   		{
   			res.send("auto no puedo ser registrado")
   		}else
   		{
   			 res.redirect("/");
   		}
   });

});


module.exports = router;
