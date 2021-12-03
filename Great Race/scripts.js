
const car1 = new Object();
car1.name = "Red";
car1.distance = 0;

const car2 = new Object();
car2.name = "Green";
car2.distance = 0;

var redCar = document.getElementById("red");
var greenCar = document.getElementById("green");

var move1 = 0;
var move2 = 0;
max = 5;

const distanceToGo = 800;



function LetsGo(){
    document.getElementById('stop').src = "go.png";

    moveRand();

    }

    function getRandomNumber(max){
        return Math.floor((Math.random() * max));
    }
    
    //seeing if I can make it work by simplifying ... only random instead of looking at cars' min/max
    function moveRand (){
        console.log ("starting max speeds ", max)
        move1 = getRandomNumber(max);
        move2 = getRandomNumber (max);
    
        console.log ("Red Car starting distance: ", car1.distance)
        console.log ("Green Car starting distance: ", car2.distance)
    
        while (car1.distance < distanceToGo || car2.distance < distanceToGo)
         {
        car1.distance = car1.distance + move1;
        car2.distance =  car2.distance + move2;
        redCar.style.left = car2.distance + "px";
        greenCar.style.left = car2.distance + "px";
        
        
        max++;
    
        setTimeout(300);
    
            console.log ("random numbers: ", move1, move2);
            console.log ("Red Car ending distance: ", car1.distance)
            console.log ("Green Car ending distance: ", car2.distance)
            console.log ("speeds min,max" ,  max)
        move1 = 0;
        move2 = 0;
            console.log ("these should be 0: ", move1, move2);
        }
    }