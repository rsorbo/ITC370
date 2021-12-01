
const car1 = new Object();
car1.name = Red;
car1.topSpeed = 10;
car1.minSpeed = 1;
car1.distance = 0;

const car2 = new Object();
car2.name = Green;
car2.topSpeed = 8;
car2.minSpeed = 2;
car2.distance =0;

var redCar = document.getElementById("red");
var greenCar = document.getElementById("green");

while (car1.distance<100 || car2.distance<100)
{
    var move1 = Math.random(car1.minSpeed, car1.topSpeed)
    var move2 = Math.random(car2.minSpeed, car2.topSpeed)

    redCar.style.left = (move1) + 'px';
    greenCar.style.left = (move2) + 'px';
    car1.distance += move1;
    car2.distance += move2;
    setTimeout(500);
}

if (car1.distance >= 100)
{
    document.write(car1.name + ' Wins!');
}
if (car2.distance >= 100)
{
    document.write(car2.name + ' Wins!');
}

