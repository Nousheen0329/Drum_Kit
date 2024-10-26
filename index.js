//mouse controll
var len= document.querySelectorAll('.drum').length;
for(let i=0;i<len;i++)
{
    let n= document.querySelectorAll('.drum')[i].addEventListener('click',function(){ 
        let key= document.querySelectorAll('.drum')[i].innerText;
        doit(key);
        });
}
//keyboard controll
document.addEventListener('keypress',function(event){
    doit(event.key)
});
function doit(key)
{
    switch(key)
        {
            case 'w': let audio1= new Audio('crash.mp3');
            audio1.play();
            break;
            case 'a': let audio2= new Audio('kick-bass.mp3');
            audio2.play();
            break;
            case 's': let audio3= new Audio('snare.mp3');
            audio3.play();
            break;
            case 'd': let audio4= new Audio('tom-1.mp3');
            audio4.play();
            break;
            case 'j': let audio5= new Audio('tom-2.mp3');
            audio5.play();
            break;
            case 'k': let audio6= new Audio('tom-3.mp3');
            audio6.play();
            break;
            case 'l': let audio7= new Audio('tom-4.mp3');
            audio7.play();
            break;
        }

}