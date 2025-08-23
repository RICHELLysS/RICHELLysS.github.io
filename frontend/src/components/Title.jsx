const Title = () => (
  <section 
    className="w-full min-h-[60vh] flex items-center justify-center relative"
    style={{
      backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600"><defs><linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23f3e7e9"/><stop offset="30%" stop-color="%23e3d5f7"/><stop offset="60%" stop-color="%23d0a9b5"/><stop offset="100%" stop-color="%23b8a9cc"/></linearGradient></defs><rect width="100%" height="100%" fill="url(%23a)"/></svg>')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
    {/* Overlay for better text readability */}
    <div className="absolute inset-0 bg-black/20"></div>
    
    {/* Content - Always centered */}
    <div className="relative z-10 text-center px-4">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
        MeniscusLyS's Blog
      </h1>
      <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
        What you are you do not see, what you see is your shadow.
      </p>
    </div>
  </section>
);

export default Title;