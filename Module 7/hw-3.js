const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// ===================================================================

// const makeGalleryFromArray = (arrayOfObjects) => {
//   const oneImage = arrayOfObjects
//     .map(
//       (image) => `<li><img alt=${image.alt} src=${image.url} width=300 ></li>`
//     )
//     .join('');

//   const galleryNodeContainer = document.querySelector('.gallery');
//   galleryNodeContainer.style.display = 'flex';
//   galleryNodeContainer.style.justifyContent = 'space-between';
//   galleryNodeContainer.style.listStyle = 'none';

//   galleryNodeContainer.insertAdjacentHTML('afterbegin', oneImage);
// };

// makeGalleryFromArray(images);

// ===================================================================
// const makeImageNode = (options) => {
//   return options.map((option) => {
//     const galleryNodeContainer = document.querySelector('.gallery');
//     galleryNodeContainer.style.display = 'flex';
//     galleryNodeContainer.style.justifyContent = 'space-between';

//     const makeListEl = document.createElement('li');

//     const imageEl = document.createElement('img');
//     imageEl.src = option.url;
//     imageEl.alt = option.alt;
//     imageEl.style.width = '200px';

//     makeListEl.append(imageEl);

//     return galleryNodeContainer.append(makeListEl);
//   });
// };

// makeImageNode(images);
// ===================================================================

// const galleryNodeContainer = document.querySelector('.gallery');
// galleryNodeContainer.style.display = 'flex';
// galleryNodeContainer.style.justifyContent = 'space-between';
// galleryNodeContainer.style.listStyle = 'none';

// const makeImageNode = images
//   .map(
//     (image) => `<li><img src=${image.url} alt={image.alt} width = 320></li> `
//   )
//   .join('');
// galleryNodeContainer.insertAdjacentHTML('afterbegin', makeImageNode);

// ===================================================================
