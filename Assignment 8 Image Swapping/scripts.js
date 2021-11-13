


//Bonus #1
var imgArray = ["pexels-chevanon-photography-302899.jpg","pexels-chevanon-photography-324028.jpg",
 "pexels-burst-374885.jpg" , "pexels-lood-goosen-1235706.jpg"]
    


//Bonus #2
 var target = document.getElementById("target");
imgArray.forEach(element => {
    var img = document.createElement("img");
    
    img.height = '200';
    img.src = element;
    document.getElementById("target").appendChild(img);
});


function nextImage(element)
{
    document.getElementById("imgArray").src = imgArray[0];
}

