


//Bonus #1
var images = ["pexels-chevanon-photography-302899.jpg","pexels-chevanon-photography-324028.jpg",
 "pexels-burst-374885.jpg" , "pexels-burst-374147.jpg"]
var index = 0;    


//Bonus #2
 var target = document.getElementById("target");
    
 images.forEach(element => {
 var img = document.createElement("img");
  
    img.width = '250';
    img.src = element;
    target.appendChild(img);
});
 

function changePic()
{
    index ++
    if (index == images.length){index = 0;};

    document.getElementById("mainimg").src = images[index];
    //document.images[0].src = images[index].src;
}

var mainimg = document.getElementById("mainimg");
mainimg.addEventListener("dblclick", changePic(mainimg));
mainimg.width='1200';

