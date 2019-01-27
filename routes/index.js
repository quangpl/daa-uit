var express = require('express');
var router = express.Router();
var request = require("request");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/noti',(req,res)=>{
  request.post({
     
    "url": "https://courses.uit.edu.vn/login/index.php",
    "form":{
      username:"",//env variables update sau
      password:""//env variables update sau
    }
    })
 
}, (error, response, body) => {
    if(error) {
       console.log('loi');
       res.end('loi');
    }
   res.write(body);
});
router.get('/p',(req,res)=>{
  
  request({
    uri: "https://daa.uit.edu.vn/user/login%26homepage",
 
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Accept-Charset': 'utf-8',
      'Content-Type':' application/x-www-form-urlencoded'
      
  },
    form: {
     ' name': 'xxx',
'pass': 'xxx'

    }
  }, function(error, response, body) {
    if(error)
    {
      console.log('ERROR:'+error);
      return false;
    }
    console.log(body);
    console.log(res.statusCode);
    res.write(body);
    console.log(JSON.stringify(body));
  });
});
router.get('/asus',(req,res)=>{
  
  request({
    uri: "https://www.asus.com/vn/Phone/ZenFone-Max-Pro-ZB602KL/HelpDesk_BIOS/",
 
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Accept-Charset': 'utf-8',
      'Content-Type':' application/x-www-form-urlencoded'
      
  },
    
  }, function(error, response, body) {
    if(error)
    {
      console.log('ERROR:'+error);
      return false;
    }
    console.log(body);
    console.log(res.statusCode);
    res.write(body);
    console.log(JSON.stringify(body));
  });
});
 
module.exports = router;
