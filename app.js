var express=require("express");
var app=express();
var request=require("request");

app.set("view engine","ejs");

//HARD CODED NOT DYNAMIC

// app.get("/result",function(req,res){
// //request("http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb",function(error,response,body){
 
//  //request("http://www.omdbapi.com/?t=the+dark+knight&apikey=thewdb",function(error,response,body){

// request("http://www.omdbapi.com/?s=suits&plot=full&apikey=thewdb",function(error,response,body){ 
//  if(!error && response.statusCode==200){
//      //console.log(body);
//      var data=JSON.parse(body);
//      //res.render,ARGUMENTS--result is our html/ejs file
// //data is app.js variable
// //the next data can be any name,as it is referred in html file
//     res.render("result",{data:data});
     
//  }
//  });
// })

app.get("/",function(req,res){
    res.render("home");
});

app.get("/result",function(req,res){
    var inputval=req.query.search;
request("http://www.omdbapi.com/?s="+inputval+"&plot=full&apikey=thewdb",function(error,response,body){ 
if(!error && response.statusCode==200){
    var data=JSON.parse(body);
    res.render("result",{data:data});
  }
  });
 })    

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Movie App has started!!!");
})
