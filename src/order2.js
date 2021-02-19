// Hidden values from file order.html
let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let address = document.getElementById('address');
let city = document.getElementById('city');
let state = document.getElementById('state');
let zip = document.getElementById('zip');

let hrefOrderWithParams = new URLSearchParams(window.location.href);
let nameHiddenValue = hrefOrderWithParams.get(`http://${window.location.host}/order2.html?name`);
let emailHiddenValue = hrefOrderWithParams.get('email');
let phoneHiddenValue = hrefOrderWithParams.get('phone');
let addressHiddenValue = hrefOrderWithParams.get('address');
let cityHiddenValue = hrefOrderWithParams.get('city');
let stateHiddenValue = hrefOrderWithParams.get('state');
let zipHiddenValue = hrefOrderWithParams.get('zip');

name.value = nameHiddenValue;
email.value = emailHiddenValue;
phone.value = phoneHiddenValue;
address.value = addressHiddenValue;
city.value = cityHiddenValue;
state.value = stateHiddenValue;
zip.value = zipHiddenValue;

let allergies = document.getElementById('allergies');
let frequency = document.getElementsByName('frequency');
let packageSize = document.getElementsByName('size');

function newUrl() {
  let newUrlParams = new URLSearchParams(window.location.href);
  let nameNewUrl = newUrlParams.append('name', 'name.value');
  let emailNewUrl = newUrlParams.append('email', 'email.value');
  let phoneNewUrl = newUrlParams.append('phone', 'phone.value');
  let addressNewUrl = newUrlParams.append('address', 'address.value');
  let cityNewUrl = newUrlParams.append('city', 'city.value');
  let stateNewUrl = newUrlParams.append('state', 'state.value');
  let zipNewUrl = newUrlParams.append('zip', 'zip.value');

  let allergiesUrl = newUrlParams.append('allergies', 'allergies.value');
  let frequencyUrl = newUrlParams.append('frequency', 'frequency.value');
  let packageSizeUrl = newUrlParams.append('size', 'packageSize.value');
}
