var box = document.getElementById('box');
var clickCount = document.getElementById('click-count');
count = 0;

box.addEventListener('click', function(event){
    console.log(event.type)
    count++;
    console.log(count);
    clickCount.innerText = count + " ";
});

let myVal=document.getElementById("myId");
myVal.innerHTML= "iuhjjuyg"
console.log(myVal.innerText);