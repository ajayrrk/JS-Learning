const button1 = document.querySelector('.btn1');

button1.onclick = function() {
    let name = prompt('What is your name');
    alert('Hello ' + name + ' , nice to see you!!!!');
}

myName = 'Chris';

function logName() {
  console.log(myName);
}

logName();


const btn2 = document.querySelector('.btn2');
const txt2 = document.querySelector('.para2');

btn2.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn2.textContent === 'Start machine') {
    btn2.textContent = 'Stop machine';
    txt2.textContent = 'The machine has started!';
  } else {
    btn2.textContent = 'Start machine';
    txt2.textContent = 'The machine is stopped.';
  }
}


// let myString = '123';
// let myNum = Number(myString);
// typeof myNum;

// let myNum = 123;
// let myString = myNum.toString();
// typeof myString;

// This works because of hoisting
var myName;

// This fails as let doesn't support hoisting
// let myName;

//This works
// var myName = 'Chris';
// var myName = 'Bob';

//This is not possible
// let myName = 'Chris';
// let myName = 'Bob';

//This is Possible
// let myName = 'Chris';
// myName = 'Bob';