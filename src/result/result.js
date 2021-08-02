let hrefOrderWithParams = new URLSearchParams(window.location.href);

let nameValue = hrefOrderWithParams.get(`http://${window.location.host}/result.html?name`);
let emailValue = hrefOrderWithParams.get('email');
let phoneValue = hrefOrderWithParams.get('phone');
let addressValue = hrefOrderWithParams.get('address');
let cityValue = hrefOrderWithParams.get('city');
let stateValue = hrefOrderWithParams.get('state');
let zipValue = hrefOrderWithParams.get('zip');
let allergiesValue = hrefOrderWithParams.get('allergies');
let frequencyValue = hrefOrderWithParams.get('frequency');
let packageSizeValue = hrefOrderWithParams.get('size');

let result = document.getElementById('result');

hrefOrderWithParams.forEach(function(value, key) {
  let dataElem = document.createElement('div');
  dataElem.textContent = `${key}=${value}`;
  result.appendChild(dataElem);
});

let nameCorrectKey = document.getElementsByTagName('div');
nameCorrectKey[0].textContent = `name=${nameValue}`;
