console.log("[script.js]:: Connected and working properly!");

//document.querySelector returns the first element within the document that matches the specified html 'selector' or '#id' or '.class'.
//Here it is stored as an arrow function, meaning it can be called repeatedly.
const selectElement = (element) => document.querySelector(element);

//Here, we simply say 'go and find ('element') and return it into the variable.
const header = selectElement('header');
const mainContent = selectElement('main');

//Find the element with class of '.hamburger', add an onclick event, and toggle active.
//classList is a DOMListObject, where we can add() or remove() classes to.
//toggle: As opposed to manually typing each class every time add/remove('nav-link myStyle active')
selectElement('.hamburger').addEventListener('click', () => {
  header.classList.toggle('active');
});

