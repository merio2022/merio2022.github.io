// let iceCream = 'チョコレート';
// if(iceCream === 'チョコレート') {
//   alert('やった、チョコレートアイス大好き！');
// } else {
//   alert('あれれ、でもチョコレートは私のお気に入り......');
// }

function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }

//   multiply(4, 7);
// multiply(20, 20);
// multiply(0.5, 3);

/*document.querySelector('html').onclick = function() {
    alert('痛っ! つつくのはやめて!');
}*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Google_Chrome_23522.png') {
      myImage.setAttribute('src','images/FirefoxIcon.png');
    } else {
      myImage.setAttribute('src','images/IneterNetExploer.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

  
  