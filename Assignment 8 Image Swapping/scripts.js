


 
var mainimg = document.getElementById("mainimg");

mainimg.addEventListener("dblclick", function() 
{
    var currentSet = document.getElementById('img1').src;

    if (currentSet.includes("coffee"))
        {
        document.getElementById('mainimg').src = 'pexels-freestocksorg-405238tea.jpg';
        document.getElementById('img1').src = 'pexels-freestocksorg-405238tea.jpg';
        document.getElementById('img2').src = 'pexels-mareefe-1417945tea.jpg';
        document.getElementById('img3').src = 'pexels-nikolay-osmachko-230477tea.jpg';
        document.getElementById('img4').src = 'pexels-skitterphoto-32266tea.jpg';
        }

    if (currentSet.includes("tea"))
        {
        document.getElementById('mainimg').src = 'pexels-chevanon-photography-302899coffee.jpg';
        document.getElementById('img1').src = 'pexels-chevanon-photography-302899coffee.jpg';
        document.getElementById('img2').src = 'pexels-chevanon-photography-324028coffee.jpg';
        document.getElementById('img3').src = 'pexels-burst-374885coffee.jpg';
        document.getElementById('img4').src = 'pexels-burst-374147coffee.jpg';

        }
})

function swapImage(image){
    document.getElementById('mainimg').src = image;
}
