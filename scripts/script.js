function add_img(){ 
    
    var big_img_html=document.createElement('img');
    $(big_img_html).attr("id","big");
    $(big_img_html).attr("class","gallery__img-big big_animation");
    $(big_img_html).attr("src","img/Paris.jpg");
    $('.big__img').append(big_img_html);

    let folder="img/";
    let link_img= [folder+"orange.jpg",folder+"peresvet.jpg",folder+"toskana.jpg",folder+"trees.jpg",folder+"van-gog.jpg"];
    var img_block=document.createElement('img');
    $(img_block).attr("class","gallery__img");
    $(img_block).attr("onclick","add_html(), first_img(arg=this.src), animation(),kill_div()")
    for(var i=0;i<link_img.length;i++){
        $('.gallery__mini').append(img_block.cloneNode(true)); 
        $('.gallery__img')[i].setAttribute("src",link_img[i]);
    } 
}

function add_html(){

    var big_height=$('.big__img').outerHeight()/100;
    var div_block=document.createElement('div');
    $(div_block).attr("class","black__block");
    var div_block_mini=document.createElement('div');
    $(div_block_mini).attr("class","black__block_style");
    $('.gallery__mini').css({'pointer-events':'none'});
    for(let i=0;i<big_height;i++){
       $('#animation_img').append(div_block.cloneNode(true)); 
        for(let x=0;x<7;x++){
        $('.black__block')[i].append(div_block_mini.cloneNode(true)); 
    }
    } 
}
function first_img(arg){ 
    
    $('.animation').css({'opacity':'1'});
    var but = $('.black__block_style');       

    var but = $('.gallery__img');
    for (i = 0, len = but.length; i < len; i++) { 
        $('.black__block_style')[i].style.cssText="opacity:1; transition: opacity 0s";
        var img_mini=$('.gallery__img')[i].src;

        if(img_mini==arg){
            var img_date = $('#big')[0].src;
            $('#big')[0].src=arg; 
            $('.gallery__img')[i].src=img_date; 
            return 0;
        } 
    };   
}
function animation(){
    
    $('.animation').css({"opacity":"1"});
    var but = $('.black__block_style');    
    for (i = 0, len = but.length; i < len; i++) {  
        (function(i){
            setTimeout(function(){$('.black__block_style')[i].style.cssText="opacity:0; transition: opacity .40s"
            ;},30*i);
        }(i));
        
    } 
    
}
function kill_div(){
        setTimeout(function(){$('#animation_img').text('');
        $('.gallery__mini').css({"pointer-events":"auto"});
    },31*i);
}
        