import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

galleryItems.forEach(image => {
  const listItemEl = document.createElement('li');
  listItemEl.classList.add('gallery__item');
  listItemEl.innerHTML = `<a class='gallery__link' href='${image.original}'>
        <img class='gallery__image' 
        src='${image.preview}' 
        data-source='${image.original}' 
        alt='${image.description}'/>
    </a>`;
  gallery.append(listItemEl);
});

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  captionsPosition: 'bottom',
});
