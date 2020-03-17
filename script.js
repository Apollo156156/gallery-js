function first_img(arg){ 


    document.querySelector('div[class="animation"]').style.opacity="0";
    var but = document.querySelectorAll('.black__block_style');       
    for (i = 0, len = but.length; i < len; i++) { 
            document.querySelectorAll('div[class="black__block_style"]')[i].style.cssText="opacity:1; transition: opacity 0s";
    }  


    var but = document.querySelectorAll('.gallery__img');
    for (i = 0, len = but.length; i < len; i++) { 
        var img_mini=document.querySelectorAll('img[class="gallery__img"')[i].src;

        if(img_mini==arg){
           
            var img_date = document.getElementById('big').src;
            document.getElementById('big').src=arg; 
            document.querySelectorAll('img[class="gallery__img"')[i].src=img_date; 
            return 0;
        } 
    };   

}
function animation(){
    
    document.querySelector('div[class="animation"]').style.opacity="1";
    var but = document.querySelectorAll('.black__block_style');    
    for (i = 0, len = but.length; i < len; i++) {  
        (function(i){
            setTimeout(function(){document.querySelectorAll('div[class="black__block_style"]')[i].style.cssText="opacity:0; transition: opacity .40s"
            ;},30*i);
        }(i));
        
    } 
    
}
