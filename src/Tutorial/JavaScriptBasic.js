
// JavaScript var, let and const

// var - (old)scope wil be global, this is attached with window Global_Objects
// let - (v6)this allow variable and scope is limmited to block, statementm or expression
// cont - (v6)scope can be global or local, but do not attached to windows object, 100% need to initialixe the value and this value can't be changed later.

//Function with returnvalue
var x = toCelsius(77);
var text = "The temperature is " + x + " Celsius";


var x = 10; //(gloabl, look into windon, F12)
let x = 10; //(local to scope)
// cost x = 10; //(can be local/glabal can change the value)


function myVar(){
        var a = 10
        if (true){
                var a = 20;
                document.write(a + "<br>"); //20
        }
        document.write(a+ "<br>"); //20
}

function mylet(){
        let a = 70
        if (true){
                let = 90;
                document.write(a+ "<br>"); //90
        }
        document.write(a+ "<br>"); //10
}

//Arror function

// () = {statements};
//you can also pass the Arrow funation in some other funcation
// old way
function show(a,b) {
    return a+b;
}
(a,b) => a+b; //arrow funcation fro above

var myFun = function show() {
    document.write ("geekyShow");
}

var myFun = () => { document.write("geekyshows")};
var myFun = name => { document.write(name + {name}, age + {age})}; //one parament no need ()
var myFun = name =>  document.write(name); //one parament no need ()
var myFun = (name, age) => { document.write(name + {name}, age + {age})}; 
var myFun = c => { return "test" }
var myFun = c=> c;   //work 
var myFun = c=> {c}; ///won't work 
var myFun = c=> {return c}; //work 

var myFun = (name, age = 25) => { document.write(name + {name}, age + {age})};   //with default myFun("devesh"); //devesh, 25

myFun("devesh", 30);

//CALL BACK FUNCTION :passing the funcation into another funation as an argument


//TYPE 1
geeky(show); //1

function geeky(callback){ //2
    callback();
}

function show(){ //3
    console.write("I am show Funcation");
}

//TYPE 2 //Syncronous call back funcation
geeky(show); //1
console.log("end")

function geeky(callback){ //2 callback = show
    var a = 100;
    callback(a);
}

function show(a){ //3
    console.write("I am show Funcation" + a);  ///result 100
}

//or 
geeky(function show(a){ //3
    console.write("I am show Funcation" + a);  ///result 100
}); // passing full funatino in the geeky funation

//or
geeky(a => console.write("i am show fuantion " + a )); 

//aynconous and wait for 5 min 
setTimeout(function show(){
    console.log("I am a funaion")
},5000);

//Map method //always call the calback funation(do manipulation) and then this wil come back to map
var arr = [10,20,30,40,50];
var neeArry = arr.map(function(value, i , arr){
    console.log (arr)
});

var arr = [
    {price: "100", product: "mobile"},
    {price: "200", product: "Laptop"},
    {price: "300", product: "Mic"},
];
var newArry = arr.map(function(value){
    console.log (value.price) //100,200,300
});

var newArry = arr.map(value => value.price); //short cut
//value - this hold the current value like 10,20,30,40,50
//i hold the current index 0,1,2,3,4



//forEach Look
arr.forEach(function(value, index, arr){
    //value - currnet value 
    //index- array indx number
    //array object
});

geeky.forEach(function(name){
    document.write(name);
})

geeky.forEach(function(price, index){
    document.write( "price" + price +"index" + index +"<br/>");
})

//FOR LOOP

var i =0;
for (i; arr.length; i++)
{
    if (i==10)
    {
        break;
    }
    document.write(i) 
}

for (i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
  }
//~~~~~~~~~~~~~~~~~~~~~~~~~~
var person = {fname:"John", lname:"Doe", age:25};
var text = "";
var x;
for (x in person) {
  text += person[x]; //John Doe 25
}

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
         day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
      default:
          text = "No value found";
    }
