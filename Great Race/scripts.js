
const car1 = new Object();
car1.name = "Red";
car1.topSpeed = 100;
car1.minSpeed = 10;


const car2 = new Object();
car2.name = "Green";
car2.topSpeed = 80;
car2.minSpeed = 30;


var redCar = document.getElementById("red");
var greenCar = document.getElementById("green");

var move1 = 0;
var move2 =0;

//seeing if I can make it work by simplifying ... only random instead of looking at cars' min/max
function moveRand (){
    move1 = Math.random(25, 90) + 'px';
    move2 = Math.random(25.90) + 'px';

    redCar.style.left += move1;
    greenCar.style.left += move2;
}

function redMove(redCar){
    
    redCar.style.left += (move1 + 'px');
    
}
function greenMove(greenCar){
    greenCar.style.left +=  (move2 + 'px');
    
}


function LetsGo(){
    document.getElementById('stop').src = "go.png";

    while (redCar.style.left <600 || greenCar.style.left <600)
    {
        // move1 = Math.random(car1.minSpeed, car1.topSpeed);
        // move2 = Math.random(car2.minSpeed, car2.topSpeed);
    
        // redMove();
        // greenMove();
        moveRand(); 

        setTimeout(500);
    }
    
    // if (car1.distance >= 100)
    // {
    //     document.write(car1.name + ' Wins!');
    // }
    // if (car2.distance >= 100)
    // {
    //     document.write(car2.name + ' Wins!');
    // }



}