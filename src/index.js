import {loadMenu} from "./menu.js";
import {loadHome} from "./home.js";
import {loadContact} from "./contact.js";

var btnHome = document.getElementById('home')
btnHome.onclick = function() {
    // resetPage()
    loadHome();
};

var btnMenu = document.getElementById('menu')
btnMenu.onclick = function() {
    // resetPage()
    loadMenu();
};

var btnContact = document.getElementById('contact')
btnContact.onclick = function() {
    // resetPage()
    loadContact();
};

function resetPage() {
    var div = document.getElementsByClassName('stuff');
    div.remove();
}