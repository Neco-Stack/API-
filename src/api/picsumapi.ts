import { ImageData } from "./Interfaces/IImage";

async function fetchImages() {
    try {
        const response = await fetch('https://picsum.photos/v2/list');
        if (!response.ok) {
            throw new Error(`Fehler beim API Aufruf${response.status}`);
        }
        const data: ImageData[] = await response.json();
        displayImage(data)
    } catch (error) {
        console.error('Fehler', error)
    }
}

function displayImage(images: ImageData[]) {
    const gallery = document.createElement('div');
    gallery.id = 'gallery';
    document.body.appendChild(gallery)
    images.forEach(image => {
        const imageElement = document.createElement('figure');
        const img = document.createElement('img');
        const authorCaption = document.createElement('figcaption');
        img.src = image.download_url;
        img.style.width = '50%';

        authorCaption.textContent = image.author;
        imageElement.appendChild(img);
        imageElement.appendChild(authorCaption)
        gallery.appendChild(imageElement)
    })
}
fetchImages()