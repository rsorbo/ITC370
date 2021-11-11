var imgArray = new Array();

imgArray[0]= new Image();
imgArray[0].src = 'pexels-chevanon-photography-302899.jpg';

imgArray[1]= new Image();
imgArray[1].src = 'pexels-chevanon-photography-324028.jpg';

imgArray[2]= new Image();
imgArray[2].src = 'pexels-burst-374885.jpg';

imgArray[3]= new Image();
imgArray[3].src = 'pexels-lood-goosen-1235706.jpg';

imgArray[4]= new Image();
imgArray[4].src = 'pexels-quang-anh-ha-nguyen-885021.jpg';

function nextImage(element)
{
    document.getElementById(imgArray);

    for (var i=0; i<imgArray.length; i++)
{
    if(imgArray[i].src==img.src)
        {
            if(i=== imgArray.length)
            {
            document.getElementById("arrayimages").src = imgArray[0].src;
            break;
            }
        }    
            document.getElementById(imgArray).src = imgArray[i+1].src;
            break;
        }        
}