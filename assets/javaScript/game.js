//declaring variables 
var wins = 0;
var losses = 0;
var totalOfNumber = 0;
//appending these variables
$('#wins').text(wins);
$('#losses').text(losses);
//$('#totalNumbers').text(totalOfNumber);

//random number for user
var randomNumber = Math.floor(Math.random()*101)+19;
 console.log(randomNumber);
$('#randomNumberP').text(randomNumber);

//random number for gem buttons
var button1 = Math.floor(Math.random()*11+1);
var button2 = Math.floor(Math.random()*11+1);
var button3 = Math.floor(Math.random()*11+1);
var button4 = Math.floor(Math.random()*11+1);

/*console.log(button1);
console.log(button2);
console.log(button3);
console.log(button4);*/

// making sure every gem has a unique number

if (button1 === button2 || button1 === button3 || button1 == button4) {
  var newbutton1 = Math.floor(Math.random()*11)+1;
   console.log(button1 + " " + "This is old random number");
   console.log(newbutton1 + " " + "This is new random number");
    
} else {
    console.log(button1 + " " + "BTn1");
}

if (button2 === button1 || button2 === button3 || button2 == button4) {
   var newbutton2 = Math.floor(Math.random()*11+1);
    console.log(button2  + " " + "This is old random number");
    console.log(newbutton2 + " " + "This is new random number");
 } else {
     console.log(button2 +  " " +"btn2");
 }

 if (button3 === button1 || button3 === button2 || button3 == button4) {
   var newbutton3 = Math.floor(Math.random()*11+1);
    console.log(button3  + " " + "This is old random number");
    console.log(newbutton3 + " " + "This is new random number");
 } else {
     console.log(button3 +  " " +"btn3");
 }

 if (button4 === button1 || button4 === button2 || button4 == button3) {
    var newbutton4 = Math.floor(Math.random()*11+1);
    console.log(button4  + " " + "This is old random number");
    console.log(newbutton4 + " " + "This is new random number");
     
 } else {
     console.log(button4 + " " + "btn4");
 }

// unique number checker ends here.

//adding user random number and gem random number and appending it to the DOM

$('#btn1').on("click", function(){
    if(button1 === button2 || button1 === button3 || button1 == button4){
        
        totalOfNumber = totalOfNumber + newbutton1;
        $('#randomNumberT').text(totalOfNumber);  
        console.log(totalOfNumber);
    }
    else{
        totalOfNumber = totalOfNumber + button1;
        $('#randomNumberT').text(totalOfNumber);  
        console.log(totalOfNumber);
        
    }

    if (totalOfNumber === randomNumber) {
        wins++;
        $('#Wins').text(wins);
        reset();
     }
    else if (totalOfNumber > randomNumber) {
        losses++;
        $('#losses').text(losses);
        reset();
    }
    
   
});

$('#btn2').on("click", function(){
    if(button2 === button1 || button2 === button3 || button2 == button4){
        totalOfNumber = totalOfNumber + newbutton2;
        $('#randomNumberT').text(totalOfNumber);
        console.log(totalOfNumber);
    }
  else{
    totalOfNumber = totalOfNumber + button2;
    $('#randomNumberT').text(totalOfNumber);  
    console.log(totalOfNumber);
  }

  if (totalOfNumber === randomNumber) {
    wins++;
    $('#Wins').text(wins);
    reset();
 }
else if (totalOfNumber > randomNumber) {
    losses++;
    $('#losses').text(losses);
    reset();
}

});

$('#btn3').on("click", function(){
    if(button3 === button1 || button3 === button2 || button3 == button4){
        totalOfNumber = totalOfNumber + newbutton3;
        $('#randomNumberT').text(totalOfNumber);
        console.log(totalOfNumber);
    }
   
    else{
        totalOfNumber = totalOfNumber + button3;
        $('#randomNumberT').text(totalOfNumber);  
        console.log(totalOfNumber);
    }

    if (totalOfNumber === randomNumber) {
        wins++;
        $('#Wins').text(wins);
        reset();
     }
    else if (totalOfNumber > randomNumber) {
        losses++;
        $('#losses').text(losses);
        reset();
    }

    
});

$('#btn4').on("click", function(){
    if(button4 === button1 || button4 === button2 || button4 == button3){
        totalOfNumber = totalOfNumber + newbutton4;
        $('#randomNumberT').text(totalOfNumber);
        console.log(totalOfNumber);
    }
    else{
        totalOfNumber = totalOfNumber + button4;
        $('#randomNumberT').text(totalOfNumber);  
        console.log(totalOfNumber);
    }

    if (totalOfNumber === randomNumber) {
        wins++;
        $('#Wins').text(wins);
        reset();
     }
    else if (totalOfNumber > randomNumber) {
        losses++;
        $('#losses').text(losses);
        reset();
    }


});

function reset(){
    randomNumber =Math.floor(Math.random()*101+19);
    console.log(randomNumber);
    $('#randomNumberP').text(randomNumber);
    button1= Math.floor(Math.random()*11+1);
    button2= Math.floor(Math.random()*11+1);
    button3= Math.floor(Math.random()*11+1);
    button4= Math.floor(Math.random()*11+1);
    totalOfNumber= 0;
    $('#randomNumberT').text(totalOfNumber);
    
    } 
