import "./styles.css";
import createHome from "./home.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";

const content = document.getElementById('content');

const homeBtn = document.getElementById('nav-btn-home');
const menuBtn = document.getElementById('nav-btn-menu');
const contactBtn = document.getElementById('nav-btn-contact');

homeBtn.addEventListener('click', () => changePage(createHome));
menuBtn.addEventListener('click', () => changePage(createMenu));
contactBtn.addEventListener('click', () => changePage(createContact));

function changePage(pageFunction) {
  content.innerHTML = ''; // Clear existing content
  content.appendChild(pageFunction());
}

content.appendChild(createContact());