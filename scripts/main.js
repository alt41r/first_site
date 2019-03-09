var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
//alert('Hello');
function Multiply(num1, num2) {
    var result = num1 * num2;
    return result;
}
/*document.querySelector('html').onclick = function () {
    alert('Ouch! Stop poking me!');
}*/
/*var myImage = document.querySelector('img');
myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc == 'tovari/xs 512 grey.jpg') {
        myImage.setAttribute('src', 'tovari/6S+128g gold.jpg');
        
    }
    else {
        myImage.setAttribute('src', 'tovari/xs 512 grey.jpg');
        
    }
}*/
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function SetUserName() {
    var myName = prompt('Please,enter your name');
    localStorage.setItem = ('name', myName);
    myHeading.innerHTML = 'You so cool, ' + myName;
}
if (!localStorage.getItem('name')) {
    SetUserName
}
else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'You so cool, ' + storedName;   
}
myButton.onclick = function () {
    SetUserName();
}