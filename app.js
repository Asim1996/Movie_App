var express=require("express");
var app=express();
var request=require("request");
app.set("view engine","ejs");

app.use(express.static(__dirname + "/public"));
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization, x-auth');
    res.setHeader('Access-Control-Expose-Headers', 'x-auth');
    next();
});
app.get("/",function(req,res){
    res.render("home");
});
app.get("/movie/:id",function(req,res){
    var imdbid=req.params.id;
    console.log(imdbid);
request("https://www.omdbapi.com/?i="+imdbid+"&plot=full&apikey=thewdb",function(error,response,body){ 
if(!error && response.statusCode==200){
    var data=JSON.parse(body);
    console.log(data);
    res.render("result",{data:data});
  }
  else{
      alert("Unable to fetch information")
  }
  });
 })    

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Movie App has started!!!");
})
