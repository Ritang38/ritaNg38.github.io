 
 const closeButton = document.querySelector('.lightbox-close');
 const lightBox = document.querySelector('.lightbox');
 const galleryItems = document.querySelectorAll('.gallery-item');
 const lightboxImage = document.querySelector('.lightbox-image');
 
 function showImage(event){
 	lightBox.classList.remove('hidden');

 	const elementClickedon = event.target;
 	const galleryItemParent = elementClickedon.parentElement;

 	lightboxImage.innerHTML = galleryItemParent.innerHTML
 }




 closeButton.onclick = function(event){
 	event.preventDefault();
 	lightBox.classList.add('hidden');
 }

 

 for(let i = 0; i < galleryItems.length; i++) {
 	let item = galleryItems[i];
 	console.log(item)
 	item.onclick = function(event){
 	 lightBox.classList.remove('hidden');

 	 const elementClickedon = event.target;
 	 const galleryItemParent = elementClickedon.parentElement;

 	 lightboxImage.innerHTML = galleryItemParent.innerHTML;
 	 console.log(lightboxImage)
 }
}

