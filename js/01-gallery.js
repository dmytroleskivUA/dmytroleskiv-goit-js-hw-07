import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const galleryList = galleryItems
  .map(
    (item) =>
      ` <li class="gallery__item">
      <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      <a class="gallery__link" href=${item.original}>
      alt=${item.description}
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

  const instance = basicLightbox.create(
    `
    <img src="${selectedImage}" width="800" height="600">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", closeByEsc);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", closeByEsc);
      },
    }
  );

  //   instance.show();
  //   gallery.addEventListener("keydown", (e) => {
  //     if (e.key === "Escape") {
  //       instance.close();
  //     }
  //   });
  // });
});
