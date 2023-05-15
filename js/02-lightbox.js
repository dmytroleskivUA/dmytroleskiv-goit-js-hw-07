import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

// Cтворення розмітки

const li = galleryItems
  .map((item) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}" >
    <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
    />
    </a>
    </li>`;
  })
  .join("");

galleryList.insertAdjacentHTML("afterbegin", li);

//   Ініціалізація бібліотеки

const gallery = new SimpleLightbox(".gallery li a", {
  captionsData: "alt",
  captionDelay: 250,
});
