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
      username:"17520950",
      password:"1400430133"
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
     ' name': '17520950',
'pass': '1400430133'

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
 
module.exports = router;
