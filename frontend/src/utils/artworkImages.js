const artworkModules = import.meta.glob('../assets/artwork/*.jpg', { eager: true });

export const artworkImages = Object.entries(artworkModules).map(([path, module]) => {
  const filename = path.split('/').pop().replace('.jpg', '');
  return {
    id: filename,
    src: module.default,
    title: `Artwork ${filename}`
  };
});

export default artworkImages;
