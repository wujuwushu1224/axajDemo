const express = require("express");
const swig = require('swig');
const app = express();
const fs = require('fs');
//当访问loclhost:8080/publick/index的时候，会自动去static文件夹下加载
app.use('/public',express.static('./static'))

app.engine('html',swig.renderFile);
app.set('views', './views');
app.set('view engine', 'html');
swig.setDefaults({cache:false});

var a;

fs.readFile('data.js', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        a = data;
        console.log(data);
    }
});

app.get('/',(req,res)=> {
    res.render("1.html")
})
app.get('/index',(req,res)=> {
    console.log('1:'+a);
    res.send(a);
});
app.post('/index',(req,res)=> {
    res.send(ok);
});






app.listen(8080);