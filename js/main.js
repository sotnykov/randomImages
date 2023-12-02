const imageNames = [
  '../images/caribbean.jpg', '../images/islands.jpg', '../images/lake.jpg', '../images/mountains.jpg', '../images/nature.jpg', '../images/northern-lights.jpg', '../images/sea.jpg', '../images/sunset.jpg', '../images/vulkan.jpg'
];

const randomIndex = Math.floor(Math.random() * imageNames.length);

const randomImage = imageNames[randomIndex];

const imgElement = document.createElement('img');
imgElement.src = `images/${randomImage}`;

document.body.appendChild(imgElement);