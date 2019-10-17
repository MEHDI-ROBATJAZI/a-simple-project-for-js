
var colors=['black','blue','green','yellow','red','violet','orange','brown','white','pink'];
var par=document.getElementById('par');
var btn=document.getElementById('btn');
var speed=50;

//not working change speed functions!!!!

// function slowSpeed(){
//     speed=50;
// }
// function normalSpeed(){
//     speed=500;
// }
// function fastSpeed(){ 
//     speed=1000  ;
// }   


var timer=setInterval(generator,speed)

function generator(){
    
    btn.addEventListener("click",function(){
        clearInterval(timer);
    })
    
    var y = Math.floor((Math.random() * 450) + 40).toString();
    var x = Math.floor((Math.random() * 1500) + 1).toString();
    var radius= Math.floor((Math.random() * 200) + 1).toString();
    var colorNumber=Math.floor((Math.random()*10)+0)
    createCircle(x,y,radius,colorNumber)    
}
    

    function createCircle(x,y,radius,colorNumber){
    var circle=document.createElement('div');
    circle.classList.add('myCircle')
    circle.style.borderRadius='50%'
    par.appendChild(circle)
    circle.style.position='absolute';
    circle.style.left=x+'px';
    circle.style.top=y+'px';    
    circle.style.width=radius+'px';
    circle.style.height=radius+'px';
    circle.style.border='1px solid black';
    circle.style.backgroundColor=colors[colorNumber];
    console.log(speed);
}

// i want click the circle and remove these. but not working!!!

// document.getElementsByClassName('myCircle').addEventListener("click",function(){
//     alert('fjiwe')
    // par.removeChild(myCircle[this])

// })
