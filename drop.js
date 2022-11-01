let opendrop =  document.querySelector('.carchoose');
let cardropcontent  = document.querySelector('.carselect ul');

opendrop.addEventListener('click', function(){
    cardropcontent.classList.toggle('show');
});


let classopendrop =  document.querySelector('.classchoose');
let classdropcontent  = document.querySelector('.classoption ul');

classopendrop.addEventListener('click', function(){
    classdropcontent.classList.toggle('show');
});

let modelopendrop =  document.querySelector('.modelchoose');
let modeldropcontent  = document.querySelector('.modeloption ul');

modelopendrop.addEventListener('click', function(){
    modeldropcontent.classList.toggle('show');
});

