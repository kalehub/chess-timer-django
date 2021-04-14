/**
 * @file             : script.js
 * @author           : Teguh Satya <teguhsatyadhr@gmail.com>
 * Date              : 14.04.2021
 * Last Modified Date: 14.04.2021
 * Last Modified By  : Teguh Satya <teguhsatyadhr@gmail.com>
 */

let hours = "00";
let minutes = "00";
let seconds = "00";



function nextForm(){
    console.log('form button clicked!');
    prevForm = document.querySelector('#firstForm');
    nextForm = document.querySelector('#secondForm');
    prevForm.style.display='none';
    nextForm.classList.remove('d-none');

}

function clockClicked(val){
    gameClock = hours+':'+val+':'+seconds;
    document.querySelector('#gameClock').innerHTML = gameClock;
    
    

}
