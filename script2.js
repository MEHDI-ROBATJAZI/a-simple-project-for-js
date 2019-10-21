var colors = ['black','blue','green','yellow','red','violet','orange','brown','white','pink'];

var count=0,
  par = document.getElementById('par'),
  stop = document.getElementById('stop'),
  slow = document.getElementById('slowSpeed'),
  normal = document.getElementById('normalSpeed'),
  fast = document.getElementById('fastSpeed'),
  showCount = document.getElementById('count'),
  Speed = 5000;
//not working change speed generate circle functions!!!!

function setSpeed(sp){
    Speed = sp
}

fast.addEventListener("click", () => {
  speedUp()
})
normal.addEventListener("click", () => {
  Speed = 2000
  updateSpeed()
})
slow.addEventListener("click", () => {
  slowDown()
})

const makeCircles = () => {
    var y = Math.floor((Math.random() * (screen.height - 200)) + 40).toString();
    var x = Math.floor((Math.random() * (screen.width - 200)) + 1).toString();
    var radius= Math.floor((Math.random() * 200) + 1).toString();
    var colorNumber=Math.floor((Math.random()*10)+0)
    showCount.textContent = count;
    createCircle(x,y,radius,colorNumber)
    setTimeout(makeCircles, Speed)
    console.log("i did a circle")
}  


var borderRadius="50%";
var squere=document.getElementById('squere');
squere.addEventListener('click',function(){
    borderRadius='0'
})

function createCircle(x,y,radius,colorNumber){
    var circle = document.createElement('div');
    
    circle.style.borderRadius = borderRadius;
    circle.classList.add('myCircle')
    par.appendChild(circle)
    circle.style.position='absolute';
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';    
    circle.style.width = radius + 'px';
    circle.style.height = radius + 'px';
    circle.style.border = '2px solid black';
    circle.style.borderColor = colors[colorNumber];
    count++;
    showCount.textContent = count;
}

// i want click the circle and remove these. but not working!!!

// document.getElementsByClassName('myCircle').addEventListener("click",function(){
//     alert('fjiwe')
    // par.removeChild(myCircle[this])

// })
//#############################################################################################

//clear all circles button
document.getElementById('clearCircles').addEventListener('click',function(){
    
    var myCircles=document.getElementsByClassName('myCircle');
        for(var i=0;i<myCircles.length;i++){
            if(myCircles[i].style.borderRadius=='50%'){
            myCircles[i].style.borderRadius='0'
        }else{
            myCircles[i].style.borderRadius='50%'
        }
    }

})


const createSquares = () => {

}

const removeCircles = () => {

}

const slowDown = () => {
  Speed = Speed * 2
  updateSpeed()
}

const speedUp = () => {
  Speed = Speed / 2
  updateSpeed()
}

const updateSpeed = () => {
  let speedInSeconds = Speed/1000
  let updatedSpeed = 1/speedInSeconds + "circles/second"
  document.getElementById("actualSpeed").textContent = updatedSpeed
  console.log(updatedSpeed)
}

window.onload(makeCircles())

