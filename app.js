let ul = document.getElementById('ul');
let home = document.getElementById('home');
let project = document.getElementById('project');
let contact = document.getElementById('contact');
let check = document.getElementById('check')

function myHome() {
   check.checked = false;
}
home.addEventListener('click', myHome)
project.addEventListener('click', myHome)
contact.addEventListener('click', myHome)

function activeHome() {
   home.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
   home.style.transition = '0.1s';
   project.style.backgroundColor = 'none';
   contact.style.backgroundColor = 'none'

}

window.onload = activeHome()
function activeProject() {
   project.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'
   project.style.transition = '0.1s';
   home.style.backgroundColor = 'transparent';
   contact.style.backgroundColor = 'transparent'

}

project.addEventListener('click', activeProject)

function activeContact() {
   contact.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'
   contact.style.transition = '0.1s';
   home.style.backgroundColor = 'transparent';
   project.style.backgroundColor = 'transparent'

}

contact.addEventListener('click', activeContact)