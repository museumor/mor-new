import { exhibits } from "@/data/exhibits";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-900/20 to-black">
        <div className="absolute inset-0 z-0">
           {/* Abstract Background Animation Placeholder */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[100px] animate-pulse"></div>
           <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[80px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
            MUSEUM OF <br/> OTHER REALITIES
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto mb-10">
            An immersive multiplayer art showcase in Virtual Reality. Connect, share, and experience a growing collection of VR art.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-all transform hover:scale-105">
              Available on Steam
            </button>
            <button className="px-8 py-4 border border-white/30 backdrop-blur-sm text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all">
              View Calendar
            </button>
          </div>
        </div>
      </section>

      {/* About / Statement */}
      <section className="py-24 px-4 container mx-auto text-center border-b border-white/5">
        <h2 className="text-3xl font-bold mb-8">What is the MOR?</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          The Museum of Other Realities (MOR) is an immersive multiplayer art showcase in VR. It is a space to connect, share, and experience a growing collection of virtual reality art with others. As a venue, it hosts events, openings, and festivals, providing a social platform for artists and enthusiasts.
        </p>
      </section>

      {/* Gallery / Exhibits */}
      <section className="py-24 px-4 container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Featured Exhibits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibits.map((exhibit) => (
            <div key={exhibit.id} className="group relative aspect-square overflow-hidden rounded-xl bg-gray-900 border border-white/5 hover:border-white/20 transition-colors">
              {/* Image Placeholder */}
              <div className={`absolute inset-0 ${exhibit.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl opacity-20 font-black tracking-widest uppercase">{exhibit.title.substring(0, 3)}</span>
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/50 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold mb-1">{exhibit.title}</h3>
                <p className="text-sm font-medium text-accent mb-2">{exhibit.artist}</p>
                <p className="text-sm text-gray-300 line-clamp-3">{exhibit.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
           <button className="px-8 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-sm uppercase tracking-widest">View All Artists</button>
        </div>
      </section>

      {/* Quote / Social Proof */}
      <section className="py-24 bg-zinc-900 w-full">
        <div className="container mx-auto px-4 text-center max-w-4xl">
           <blockquote className="text-2xl md:text-4xl font-serif italic text-gray-300 mb-8">
             "The MOR is one of the most visually stunning things I have ever seen in VR."
           </blockquote>
           <cite className="not-italic font-bold text-accent">— UploadVR</cite>
        </div>
      </section>

    </div>
  );
}