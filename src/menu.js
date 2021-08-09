export {loadMenu}

function loadMenu() {
    var body = document.querySelector('#content');
    var menu = document.createElement('div');
    menu.setAttribute('id', 'menu-div');
    menu.setAttribute('class', 'stuff')
    menu.innerHTML = "IM THE MENU!!!"
    body.appendChild(menu)
}