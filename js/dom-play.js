//alert("hello from dom-play");

const spans = document.querySelectorAll("#play span");

console.log(spans);

for(const mySpan of spans){
    mySpan.addEventListener("click",fuction(ev){

        highLightActor(mySpan.dataset.actor);

    });
    //alert(mySpan.dataset.actor);
}

function highLightActor(actor){
    for(const mySpan of spans){
        if(actor == mySpan.dataset.actor){
            mySpan.style.backgroundColor='white';
        }else{
            mySpan.style.backgroundColor='blue';
        }

    }
    //alert("I'm" + actor);
}

function highlight(el){

    if(el.style.backgroundColor== 'blue'){
        el.style.backgroundColor='white';
    }else{
        el.style.backgroundColor='blue';
    }
}

function myAlert(){
    alert("I'm clicked");
}
    
