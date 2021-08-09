export {loadHome}

function loadHome() {
    var body = document.querySelector('#content');
    var menu = document.createElement('div');
    menu.setAttribute('id', 'home-div');
    menu.setAttribute('class', 'stuff');
    menu.innerHTML = "Im the home!"
    body.appendChild(menu)
}