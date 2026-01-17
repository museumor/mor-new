const artists = [
  { name: "Mike Murdock", role: "Director / VR / AR", desc: "Exploring the balance between natural and virtual worlds." },
  { name: "Naam", role: "Artist / Developer", desc: "Committed to VR as a tool for world-building." },
  { name: "Em Halberstadt", role: "Sound Designer", desc: "Focusing on storytelling and creating organic soundscapes." },
  { name: "Marilene Oliver", role: "Digital Artist", desc: "Bridging virtual and real worlds using scanning technologies." },
  { name: "Sean Tann", role: "Developer", desc: "Creator of Chroma Lab, motivated by GPU compute and surreal experiences." },
  { name: "Anna Zhilyaeva", role: "VR Artist", desc: "Known for live performances and mixed reality video." },
  { name: "Jeremy Joe Kirshbaum", role: "Researcher", desc: "Innovating through action research, design, and creative media." },
  { name: "Sabby Lighf", role: "Painter / Performer", desc: "Painting and performing in virtual reality internationally." },
];

export default function ArtistsPage() {
  return (
    <div className="w-full bg-black min-h-screen text-gray-200">
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white text-center">ARTISTS</h1>
        <p className="text-xl text-center max-w-2xl mx-auto mb-20 text-gray-400">
          Meet the illustrators, animators, and engineers pushing the boundaries of interactive art and new media within the MOR.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <div key={artist.name} className="bg-zinc-900/50 p-8 rounded-xl border border-white/5 hover:border-purple-500/50 transition-colors group">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{artist.name}</h3>
              <p className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-4">{artist.role}</p>
              <p className="text-gray-400">{artist.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
