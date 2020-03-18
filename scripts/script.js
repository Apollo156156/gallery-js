function add_img(){ 
    var big_img_html=' <img id="big" class="gallery__img-big big_animation" src="img/Paris.jpg" alt="">';
    var mini_img_html=`
    <img class="gallery__img" src="img/orange.jpg" alt="" onclick="add_html(), first_img(arg=this.src), animation(),kill_div()">
    <img class="gallery__img" src="img/peresvet.jpg" alt="" onclick="add_html(), first_img(arg=this.src), animation(),kill_div()">
    <img class="gallery__img" src="img/toskana.jpg" alt="" onclick="add_html(), first_img(arg=this.src), animation(),kill_div()">
    <img class="gallery__img" src="img/trees.jpg" alt="" onclick="add_html(), first_img(arg=this.src), animation(),kill_div()">
    <img class="gallery__img" src="img/van-gog.jpg" alt="" onclick="add_html(), first_img(arg=this.src), animation(),kill_div()">`
    document.querySelector('div[class="big__img"]').innerHTML=big_img_html;
    document.querySelector('div[class="gallery__mini"]').innerHTML=mini_img_html;
   
    
}
function add_html(){
    var text_html=`
<div class="black__block">
    <div class="black__block_style"></div>
    <div class="black__block_style"></div>
    <div class="black__block_style"></div>
    <div class="black__block_style"></div>
    <div class="black__block_style"></div>
    <div class="black__block_style"></div>
    <div class="black__block_style"></div>
</div>
<div class="black__block">
    <div class="black__block_style"></div>
    <div class="black__block_style"></div>
    <div class="black__block_style"></div>
    <div class="black__block_style"></div>
    <div class="black__block_style"></div>
    <div class="black__block_style"></div>
    <div class="black__block_style"></div>
</div>
<div class="black__block">
    <div class="black__block_style"></div>
    <div class="black__block_style"></div>
    <div class="black__block_style"></div>
    <div class="black__block_style"></div>
    <div class="black__block_style"></div>
    <div class="black__block_style"></div>
    <div class="black__block_style"></div>
</div>
<div class="black__block">
    <div class="black__block_style"></div>
    <div class="black__block_style"></div>
    <div class="black__block_style"></div>
    <div class="black__block_style"></div>
    <div class="black__block_style"></div>
    <div class="black__block_style"></div>
    <div class="black__block_style"></div>
</div>`
    document.getElementById('animation_img').innerHTML=text_html;
    document.querySelector('div[class="gallery__mini"]').style.cssText="pointer-events:none;";
}
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
function kill_div(){
        setTimeout(function(){document.getElementById('animation_img').innerHTML='';
        document.querySelector('div[class="gallery__mini"]').style.cssText="pointer-events:auto;";
    },31*i);
}
        