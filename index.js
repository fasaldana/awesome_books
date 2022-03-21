import { BookList } from './modules/BookList.js';
import { DateTime } from './luxon.min.js';

const book = new BookList();
document.getElementById('form').addEventListener('submit', book.add);
book.loadScreen();

const now = DateTime.now();
document.getElementById('date-time').innerHTML = now.toLocaleString(
  DateTime.DATETIME_MED,
);

const list = document.getElementById('book-section');
const addNew = document.getElementById('add-book');
const contact = document.getElementById('contact-section');

document.getElementById('list').addEventListener('click', () => {
  if (!list.classList.contains('show')) {
    list.classList.replace('hide', 'show');
    addNew.classList.replace('show', 'hide');
    contact.classList.replace('show', 'hide');
  }
});
document.getElementById('add-b').addEventListener('click', () => {
  if (!addNew.classList.contains('show')) {
    list.classList.replace('show', 'hide');
    addNew.classList.replace('hide', 'show');
    contact.classList.replace('show', 'hide');
  }
});
document.getElementById('contact-a').addEventListener('click', () => {
  if (!contact.classList.contains('show')) {
    list.classList.replace('show', 'hide');
    addNew.classList.replace('show', 'hide');
    contact.classList.replace('hide', 'show');
  }
});
