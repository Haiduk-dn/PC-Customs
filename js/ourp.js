let btn_prev = document.querySelector('#our-partners .buttons .prev');
let btn_next = document.querySelector('#our-partners .buttons .next');
let images = document.querySelectorAll('#our-partners .ourp img');
let i = 0;
i++ ;
if(i >= images.length){
    i = 0;
}
btn_prev.onclick = function(){
    images[i].style.display = 'none';
    i = i - 1;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].style.display = 'block';
}
btn_next.onclick = function(){
    images[i].style.display = 'none';
    i = i - 1;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].style.display = 'block';
}
