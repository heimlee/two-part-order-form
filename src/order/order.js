let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let address = document.getElementById('address');
let city = document.getElementById('city');
let state = document.getElementById('state');
let zip = document.getElementById('zip');

let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let phoneError = document.getElementById('phone-error');
let addressError = document.getElementById('address-error');
let cityError = document.getElementById('city-error');
let stateError = document.getElementById('state-error');
let zipError = document.getElementById('zip-error');

let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
let zipRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

function accountCreate() {
  Object.prototype.validateFields = function (field, fieldError) {
    field.style.border = '1px solid #ff0000';
    fieldError.textContent = 'Required';
    fieldError.style.color = '#ff0000';
    field.focus();
  }

  if (name.value == '') {
    name.validateFields(name, nameError);
    nameError.style.marginLeft = '325px';
    return false;
  }
  
  if (email.value == '') {
    email.validateFields(email, emailError);
    emailError.style.marginLeft = '325px';
    return false;
  }

  if (emailRegex.test(email.value) == false) {
    email.style.border = '1px solid #ff0000';
    emailError.textContent = 'Invalid email format';
    emailError.style.color = '#ff0000';
    email.focus();
    return false;
  }

  if (phone.value == '') {
    phone.validateFields(phone, phoneError);
    phoneError.style.marginLeft = '325px';
    return false;
  }

  if (phoneRegex.test(phone.value) == false) {
    phone.style.border = '1px solid #ff0000';
    phoneError.textContent = 'Invalid phone format';
    phoneError.style.color = '#ff0000';
    phone.focus();
    return false;
  }

  if (address.value == '') {
    address.validateFields(address, addressError);
    addressError.style.marginLeft = '325px';
    return false;
  }

  if (city.value == '') {
    city.validateFields(city, cityError);
    cityError.style.marginLeft = '245px';
    return false;
  }

  if (state.value == '') {
    state.validateFields(state, stateError);
    stateError.style.marginLeft = '195px';
    return false;
  }

  if (zip.value == '') {
    zip.validateFields(zip, zipError);
    zipError.style.marginLeft = '245px';
    return false;
  }

  if (zipRegex.test(zip.value) == false) {
    zip.style.border = '1px solid #ff0000';
    zipError.textContent = 'Invalid zip format';
    zipError.style.color = '#ff0000';
    zip.focus();
    return false;
  }

  let urlParams = new URLSearchParams(window.location.href);
  let nameUrl = urlParams.append('name', 'name.value');
  let emailUrl = urlParams.append('email', 'email.value');
  let phoneUrl = urlParams.append('phone', 'phone.value');
  let addressUrl = urlParams.append('address', 'address.value');
  let cityUrl = urlParams.append('city', 'city.value');
  let stateUrl = urlParams.append('state', 'state.value');
  let zipUrl = urlParams.append('zip', 'zip.value');
}

Object.prototype.verify = function(elem, elemError) {
  if (elem.value != '') {
    elem.style.border = '1px solid #3dc03d';
    elemError.innerHTML = '';
    return true;
  } else {
    elem.style.border = '1px solid #000';
    elemError.innerHTML = '';
  }
}

Object.prototype.verifyRegex = function(elem, elemError, elemRegex) {
  if (elemRegex.test(elem.value) == true) {
    elem.style.border = '1px solid #3dc03d';
    elemError.innerHTML = '';
    return true;
  } else if (elem.value == '') {
    elem.style.border = '1px solid #000';
    elemError.innerHTML = '';
  } else {
    elem.style.border = '1px solid #ff0000';
    elemError.textContent = `Invalid ${elem.name} format`;
    elemError.style.color = '#ff0000';
  }
}

name.addEventListener('blur', () => {
  name.verify(name, nameError);
});
email.addEventListener('blur', () => {
  email.verifyRegex(email, emailError, emailRegex);
});
phone.addEventListener('blur', () => {
  phone.verifyRegex(phone, phoneError, phoneRegex);
});
address.addEventListener('blur', () => {
  address.verify(address, addressError);
});
city.addEventListener('blur', () => {
  city.verify(city, cityError);
});
state.addEventListener('blur', () => {
  state.verify(state, stateError);
});
zip.addEventListener('blur', () => {
  zip.verifyRegex(zip, zipError, zipRegex);
});
