import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const galleryList = galleryItems
  .map(
    (el) =>
      ` <li class="gallery__item">
  <a class="gallery__link" href=${el.original}>
    <img
      class="gallery__image"
      src=${el.preview}
      data-source=${el.original}
      alt=${el.description}
    />
  </a>
</li>`
  )
  .join("");
gallery.innerHTML = galleryList;
gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const selectedImage = e.target.getAttribute("data-source");

  const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`);
  instance.show();
  gallery.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
});
