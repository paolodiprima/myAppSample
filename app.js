const express = require('express');
const app = express();
// avaible main methods are:
// app.get(), app.post(), app.put(), app.delete()

app.get('/',function (req,res){
	res.send('ciao a tutti tutti tutti');	
});

app.get('/corsi',function (req,res){
	res.send([1,2,3]);	
});

// all the app.get can be removed in another files
// so that it will be better for code modularity!!

app.listen(8383,function(){
		console.log('listening in port 8383...');
});

