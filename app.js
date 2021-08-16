

var button_color = document.getElementById("button_color");
var text_block = document.getElementById("text_block");
var remov_btn  = document.getElementById("remov_btn");

button_color.addEventListener('click' , ()=>{
    text_block.classList.add('text_block');
})

remov_btn.addEventListener('click', ()=>{
    text_block.classList.remove('text_block');
})