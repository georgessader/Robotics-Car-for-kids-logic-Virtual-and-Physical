var mysql = require('mysql');
var arrayy=[];



var five = require("johnny-five"),
board = new five.Board();
board.on("ready", function() {



var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"id7639694_dbofphysiq"
});


var pin2 = new five.Pin(2);//right
var pin8 = new five.Pin(8);//right
var pin4 = new five.Pin(4);//left
var pin7 = new five.Pin(7);//left

con.connect(function(err) {




function forward()
{
  pin8.high();
  pin4.low();

  pin2.low();
  pin7.high();
}


function backward()
{
  pin8.low();
  pin4.high();

  pin2.high();
  pin7.low();
}


function rotateright()
{
  pin8.high();
  pin4.low();

  pin2.high();
  pin7.low();
}



function rotateleft()
{
  pin8.low();
  pin4.high();

  pin2.low();
  pin7.high();
}



function stop()
{
  pin8.low();
  pin4.low();

  pin2.low();
  pin7.low();
}



if (err)
  console.dir(err);
else
  console.log("Connected!");




var sql="SELECT valuee FROM `btt` WHERE name='s1'";
var sql2="SELECT valuee FROM `btt` WHERE name='s2'";
var sql3="SELECT valuee FROM `btt` WHERE name='s3'";
var sql4="SELECT valuee FROM `btt` WHERE name='s4'";
var sql5="SELECT valuee FROM `btt` WHERE name='s5'";
var sql6="SELECT valuee FROM `btt` WHERE name='s6'";


con.query(sql, function (err, result) {
  arrayy[0]=result[0].valuee;
  console.log(arrayy[0]);
});

con.query(sql2, function (err, result) {
  arrayy[1]=result[0].valuee;
  console.log(arrayy[1]);
});

con.query(sql3, function (err, result) {
  arrayy[2]=result[0].valuee;
  console.log(arrayy[2]);
});

con.query(sql4, function (err, result) {
  arrayy[3]=result[0].valuee;
  console.log(arrayy[3]);
});

con.query(sql5, function (err, result) {
  arrayy[4]=result[0].valuee;
  console.log(arrayy[4]);
});

con.query(sql6, function (err, result) {
  arrayy[5]=result[0].valuee;
  console.log(arrayy[5]);


var x=0;

for(var i=0;i<6;i++)
{
  switch(arrayy[i]) {
    case 1:
    setTimeout(function(){
          console.log("forward");
          forward();
      },x+=1000);
        break;
    case 2:
    setTimeout(function(){
        console.log("backward");
        backward();
      },x+=1000);
        break;
    case 3:
    setTimeout(function(){
        console.log("rotateleft");
        rotateleft();
      },x+=1000);
        break;
    case 4:
    setTimeout(function(){
        console.log("rotateright");
        rotateright();
        },x+=1000);
        break;
    default:
    setTimeout(function(){
        console.log("nothing");
        stop();
        },x+=1000);
        break;
}
}


});

});
  
});
