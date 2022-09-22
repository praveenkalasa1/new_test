const express= require('express');
const app=express();
app.get('/',(req,res) => {
	res.send('Hi krishi');

});

app.listen(8080,() => {
	console.log('listenening 8080');
});
