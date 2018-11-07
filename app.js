const express = require('express');
const app = express();
// avaible main methods are:
// app.get(), app.post(), app.put(), app.delete()
var port = process.env.PORT || 8383;
app.get('/', function (req,res){
	res.send('ciao a tutti tutti tutti con app azure');	
});

app.get('/corsi', function (req,res){
	res.send([1,2,3]);	
});

// all the app.get can be removed in another files
// so that it will be better for code modularity!!

app.listen(port,function(){
		console.log('listening in port 8383...');
});

