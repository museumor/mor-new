import { exhibits } from "@/data/exhibits";
import SafeImage from "@/components/SafeImage";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/40 rounded-full blur-[120px] animate-pulse"></div>
           <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/30 rounded-full blur-[100px]"></div>
           <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-900/30 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500">MUSEUM OF</span>
            <span className="block text-white">OTHER REALITIES</span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 font-light max-w-3xl mx-auto mb-12 leading-snug">
            An immersive social art showcase in VR. <br className="hidden md:block" />
            Connect, share, and experience virtual reality art with others.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-purple-500 hover:text-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              DOWNLOAD NOW
            </button>
          </div>
        </div>
      </section>

      {/* About / Statement */}
      <section className="py-32 px-6 container mx-auto text-center border-b border-white/5 bg-zinc-950/50">
        <h2 className="text-sm font-bold tracking-[0.3em] text-purple-400 mb-8 uppercase">The Museum</h2>
        <p className="text-2xl md:text-4xl font-light text-gray-200 max-w-5xl mx-auto leading-relaxed">
          "A community of creators, explorers, and artists, the MOR provides a place to connect, share, and experience new media together with others from all over the world in VR."
        </p>
        <p className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto">
          The virtual museum is an ongoing, regularly-updated experience. It contains a cross section of the free-ranging experimentation present in the relatively new medium of VR art.
        </p>
      </section>

      {/* Featured Artists Grid */}
      <section className="py-32 px-6 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white">FEATURED <br/> ARTISTS</h2>
          <button className="hidden md:block text-purple-400 hover:text-white transition-colors font-bold tracking-widest uppercase text-sm border-b border-purple-400 pb-1">View Full Collection</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {exhibits.map((exhibit) => (
            <div key={exhibit.id} className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-gray-900 cursor-pointer">
              {/* Image with Color Fallback */}
              <div className={`absolute inset-0 ${exhibit.color} transition-transform duration-700 group-hover:scale-110`}>
                <SafeImage 
                  src={exhibit.imageUrl} 
                  alt={exhibit.title}
                  className="w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500"
                />
              </div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              
              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-1">{exhibit.artist}</h3>
                <p className="text-sm font-medium text-purple-300 uppercase tracking-wider mb-2">{exhibit.title}</p>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                    <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">{exhibit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <button className="text-purple-400 font-bold tracking-widest uppercase text-sm border-b border-purple-400 pb-1">View Full Collection</button>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full py-40 bg-gradient-to-b from-black to-purple-900/20 text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Step into the Museum</h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Join us in VR to experience these works as they were meant to be seen.
        </p>
        <button className="px-12 py-4 border border-white/30 backdrop-blur-md text-white font-bold text-sm tracking-widest uppercase rounded-full hover:bg-white hover:text-black transition-all">
          Get it on Steam
        </button>
      </section>

    </div>
  );
}
