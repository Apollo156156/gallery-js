function add_img(){ 
    //var big_img_html=' <img id="big" class="gallery__img-big big_animation" src="img/Paris.jpg" alt="">';
    var big_img_html=document.createElement('img');
    big_img_html.setAttribute("id","big");
    big_img_html.setAttribute("class","gallery__img-big big_animation");
    big_img_html.setAttribute("src","img/Paris.jpg");
    document.querySelector('div[class="big__img"]').appendChild(big_img_html);

    let folder="img/";
    let link_img= [folder+"orange.jpg",folder+"peresvet.jpg",folder+"toskana.jpg",folder+"trees.jpg",folder+"van-gog.jpg"];
    var img_block=document.createElement('img');
    img_block.classList.add("gallery__img");
    img_block.setAttribute("onclick","add_html(), first_img(arg=this.src), animation(),kill_div()")
    for(var i=0;i<5;i++){
        document.querySelector('div[class="gallery__mini"]').appendChild(img_block.cloneNode(true)); 
        document.querySelectorAll('img[class="gallery__img"]')[i].setAttribute("src",link_img[i]);
    }  
}

function add_html(){
    var big_height=document.querySelector('div[class="big__img"]').offsetHeight/100;
    var div_block=document.createElement('div');
    div_block.classList.add("black__block");
    var div_block_mini=document.createElement('div');
    div_block_mini.classList.add("black__block_style");
    document.querySelector('div[class="gallery__mini"]').style.cssText="pointer-events:none;";
    for(let i=0;i<big_height;i++){
        document.getElementById('animation_img').appendChild(div_block.cloneNode(true)); 
        for(let x=0;x<7;x++){
        document.querySelectorAll('div[class="black__block"]')[i].appendChild(div_block_mini.cloneNode(true)); 
    }
    } 
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
        