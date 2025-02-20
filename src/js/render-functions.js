import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

export function renderGallery(images) {
    gallery.innerHTML = "";

    if (images.length === 0) {
        return;
    }

    const markup = images
        .map(
            (image) => `
    <a href="${image.largeImageURL}" class="gallery-item">
      <img src="${image.webformatURL}" alt="${image.tags}" />
      <div class="info">
        <p> ${image.likes}</p>
        <p> ${image.views}</p>
        <p> ${image.comments}</p>
        <p> ${image.downloads}</p>
      </div>
    </a>
  `
        )
        .join("");

    gallery.innerHTML = markup;
}
