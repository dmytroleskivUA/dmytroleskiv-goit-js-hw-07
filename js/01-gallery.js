import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const galleryList = galleryItems
  .map((el) => {
    return ` <li class="gallery__item">
    <a class="gallery__link" href=${el.original}>
      <img
        class="gallery__image"
        src=${el.preview}
        data-source=${el.original}
        alt=${el.description}
      />
    </a>
  </li>`;
  })
  .join("");
gallery.innerHTML = galleryList;

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const selectedImage = e.target.getAttribute("data-source");

  const instance = basicLightbox.create(
    `<img src="${selectedImage}" width="800" height="600">`,
    {
      onShow: () => {
        gallery.removeEventListener("keydown", closeFullImage);
        gallery.addEventListener("keydown", closeFullImage);
      },
      onClose: () => {
        gallery.removeEventListener("keydown", closeFullImage);
      },
    }
  );

  instance.show();

  function closeFullImage(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
});
