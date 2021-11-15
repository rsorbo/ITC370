


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
 
    var main = document.getElementById("main");
    var mainImage = document.createElement('mainimage')

    mainImage.width = '1200';
    mainImage.src = images[index];
    main.appendChild(mainImage);
   



function changePic()
{
    index ++
    if (index == images.length){index = 0;};

    mainimg.appendChild(images[index]);
    //document.images[0].src = images[index].src;
}

main.addEventListener("dblclick", changePic);
