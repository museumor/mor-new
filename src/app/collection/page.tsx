import { collection } from "@/data/collection";

export default function CollectionPage() {
  return (
    <div className="w-full bg-black min-h-screen text-gray-200">
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white text-center">THE COLLECTION</h1>
        <p className="text-xl text-center max-w-3xl mx-auto mb-16 text-gray-400">
          Featuring artwork created with virtual reality tools or intended for VR viewing. 
          <br/>
          <span className="text-sm mt-4 block opacity-60">
            Tools: Compute Shaders, Substance Painter, Houdini, Oculus Medium, MasterpieceVR, Gravity Sketch, Tilt Brush, and more.
          </span>
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {collection.map((work, index) => (
            <div key={index} className="bg-zinc-900 border border-white/5 p-6 rounded-lg hover:bg-zinc-800 hover:border-purple-500/30 transition-all group">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-black mb-4 rounded overflow-hidden relative">
                 {/* Placeholder for Art Thumbnail */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-20 text-9xl font-black text-white group-hover:scale-110 transition-transform">
                   {work.title.charAt(0)}
                 </div>
              </div>
              <h3 className="text-lg font-bold text-white truncate group-hover:text-purple-400 transition-colors">{work.title}</h3>
              <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                <span>{work.artist}</span>
                <span>{work.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
