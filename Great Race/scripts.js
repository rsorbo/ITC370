
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

while (car1.distance<100 || car2.distance<100)
{
    car1.distance += Math.random(car1.minSpeed, car1.topSpeed);
    car2.distance += Math.random(car2.minSpeed, car2.topSpeed);
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

