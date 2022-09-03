'use strict';

//to select all elements having the same classname 'querySelectorAll' is used
const btnOpen = document.querySelectorAll('.open-modal');
const btnClose = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');


const openModal = function (){
 //'classList' property helps to remove or add classes  below is the syntax 
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0; i<btnOpen.length; i++)

    btnOpen[i].addEventListener('click', openModal);

    btnClose.addEventListener('click', closeModal);    

    overlay.addEventListener('click', closeModal);

//keypress or keyboard events are also callled global events

document.addEventListener('keydown', function(event){
    
    if(event.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        
    }
    // console.log(event.key);
})