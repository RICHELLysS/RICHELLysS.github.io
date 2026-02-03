const artworkModules = import.meta.glob('../assets/artwork/*.jpg', { eager: true });

export const artworkImages = Object.entries(artworkModules).map(([path, module]) => {
  const filename = path.split('/').pop().replace('.jpg', '');
  
  // Generate creation time based on filename (you can customize this logic)
  const creationTime = new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
  
  return {
    id: filename,
    src: module.default,
    title: filename.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    createdAt: creationTime.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  };
});

export default artworkImages;
