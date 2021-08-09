export {loadContact}

function loadContact() {
    var body = document.querySelector('#content');
    var menu = document.createElement('div');
    menu.setAttribute('id', 'contact-div');
    menu.innerHTML = "IM THE CONTACT!!!"
    body.appendChild(menu)
}