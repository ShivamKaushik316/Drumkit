// alert("This is me working");
var length=document.getElementsByClassName("drum").length;
// for (let index = 0; index < length; index++) {
//     document.getElementsByClassName("drum")[index].addEventListener("click",function(){
//         alert("OK This should work");
//     });
    
// }
for (let index = 0; index < length; index++) {
    document.getElementsByClassName("drum")[index].addEventListener("click",function(event){

        // console.log(this.innerHTML);
        var buttonInner=event.innerHTML;
        makesound(buttonInner)
        butonanimation(buttonInner);
        
    });
    
}
document.addEventListener("keydown",function(event){
    console.log(event.key)
    makesound(event.key);
    butonanimation(event.key);
})

function makesound(key){
    switch (key) {
        case "w":
            var audio=new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
                var audio=new Audio("./sounds/kick-bass.mp3");
                audio.play();
                break;    
        case "k":
            var audio=new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("./sounds/snare.mp3");
            audio.play();
            break;    
        default:
            break;
    }   

}
function butonanimation(currentkey){
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
}