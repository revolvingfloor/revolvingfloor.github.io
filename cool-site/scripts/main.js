document.querySelector('Img').onclick = function() {
    alert("Buuurrr!!! I'm sooo cold!");
}

document.querySelector('h1').onclick = function(){
    alert('These languages power this entire site')
}
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/coolimagefront.png') {
      myImage.setAttribute ('src','images/icebergfrontpage.png');
    } else {
      myImage.setAttribute ('src','images/coolimagefront.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'I am cold ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'I am cold ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'I am cold, ' + myName;
  }
}