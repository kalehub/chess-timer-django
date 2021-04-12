function nextForm(){
    console.log('form button clicked!');
    prevForm = document.querySelector('#firstForm');
    nextForm = document.querySelector('#secondForm');
    prevForm.style.display='none';
    nextForm.classList.remove('d-none');

}
