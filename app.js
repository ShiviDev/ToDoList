//jshint esversion:6
const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.set('view-engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    var today= new Date();
    var option = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    var day=today.toLocaleDateString("en-US",options);
    // var currentDay = today.getDay();
    // var day="";
    // switch (currentDay){
    //     case 0:
    //         day="Sunday";
    //         break;
    //     case 1:
    //         day="Monday";
    //         break;
    //     case 2:
    //         day="Tuesday";
    //         break;
    //     case 3:
    //         day="Wednesday";
    //         break;
    //     case 4:
    //         day="Thursday";
    //         break;
    //     case 5:
    //         day="Friday";
    //         break;
    //     case 6:
    //         day="Saturday";
    //         break;
    //     default:
    //         console.log("error in day "+currentDay);
    // }
    res.render("todo.ejs",{typeOfDay:day});
    
});

app.post("/",function(req,res){
    var item=req.body.nextItem;
    console.log(item);
})

app.listen(3000,function(){
    console.log("Server up and running on port 3k");
});