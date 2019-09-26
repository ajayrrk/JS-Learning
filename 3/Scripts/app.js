const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter a new name');
  if(!name || name == null){
      updateName();
  } else{
    para.textContent = 'Player 1: ' + name;
  }
  
}

document.addEventListener("DOMContentLoaded", function() {
    function createParagraph() {
      let para = document.createElement('p');
      let brea = document.createElement('br');
      para.textContent = 'You clicked the button!';
      document.body.appendChild(brea);
      document.body.appendChild(para);
    }
  
    const buttons = document.querySelectorAll('button');
  
    for(let i = 0; i < buttons.length ; i++) {
      buttons[i].addEventListener('click', createParagraph);
    }
  });