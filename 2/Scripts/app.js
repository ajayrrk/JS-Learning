let myHeading = document.querySelector('h1');
let alertHtml = document.querySelector('html');
// myHeading.textContent = 'Hello Myself';

let myButton = document.querySelector('button');

function setUserName(){
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello! ' + myName;
}


let myImg = document.querySelector('.imgClass1');
myImg.onclick = function() {
    let mySrc = myImg.getAttribute('src');
    if(mySrc === 'images/scenic1.jpg'){
        myImg.setAttribute('src', 'images/scenic2.jpg');
        myImg.setAttribute('alt', 'Changed');
    } else {
        myImg.setAttribute('src', 'images/scenic1.jpg');
        myImg.setAttribute('alt', 'Original');
    }
} 


function setUserName() {
    let myName = prompt('Please enter your name.');
    // localStorage.setItem('name', myName);
    // myHeading.textContent = 'All is well, ' + myName;

    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'All is Well, ' + myName;
    }
  }


// This helps to ask for name input when ever page is refreshed
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Well in all, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }




// alertHtml.onclick = function() {
//     alert('Ouch! Stop Poking me!')
// }

// function multiply(num1,num2) {
//     let result = num1 * num2;
//     return result;
//   }


// alert(multiply(4, 7));

// console.log(multiply(4, 7));
// console.log(multiply(5, 5));
// console.log(multiply(0.5, 1.5));
