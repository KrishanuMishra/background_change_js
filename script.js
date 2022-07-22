let change = document.getElementById('color');
let div = document.getElementById('div');
change.addEventListener('click',function(){
    const randColor =Math.floor(Math.random()*16777215).toString(16);
    div.style.backgroundColor = "#" + randColor;
    change.innerHTML = "#" + randColor; 
})