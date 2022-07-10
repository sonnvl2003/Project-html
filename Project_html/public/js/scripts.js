function dropdown() {
    document.querySelector(".dropdown-content").classList.toggle("showdropdown");
}

let i1 = 0;
const timing1 = document.querySelector('#timing1');
var idInterval1 = setInterval(function(){
    i1+=2;
    timing1.textContent = i1;
    if(i1 == 2578){
        clearInterval(idInterval1);
    }
}, 7);

let i2 = 0;
const timing2 = document.querySelector('#timing2');
var idInterval2= setInterval(function(){
    i2+=1;
    timing2.textContent = i2;
    if(i2 == 45){
        clearInterval(idInterval2);
    }
}, 200);

let i3 = 0;
const timing3 = document.querySelector('#timing3');
var idInterval3= setInterval(function(){
    i3+=2;
    timing3.textContent = i3;
    if(i3 == 1578){
        clearInterval(idInterval3);
    }
}, 12);