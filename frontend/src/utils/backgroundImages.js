// Import all background images
const imageModules = import.meta.glob('../assets/img/*.jpg', { eager: true });

// Extract image paths
export const backgroundImages = Object.keys(imageModules).map(path => {
  return imageModules[path].default || path;
});

// Function to get a random image
export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  return backgroundImages[randomIndex];
};

// Function to shuffle array (Fisher-Yates algorithm)
export const shuffleImages = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
