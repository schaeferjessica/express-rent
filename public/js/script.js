const gallery = document.querySelector('.gallery');

if (gallery){
  const galleryBigImage = document.querySelector('.gallery__image-big');
  const gallerySmallImages = document.querySelectorAll('.gallery__image-small');

  gallerySmallImages.forEach( image => {
    image.addEventListener('click', (event) => {
      galleryBigImage.src = event.target.src;
    });
  });
}