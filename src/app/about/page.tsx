export default function AboutPage() {
  const team = [
    { name: "Colin Northway", role: "Founder" },
    { name: "Robin Stethem", role: "Founder/CEO" },
    { name: "Stephen Gray", role: "Software Engineer" },
    { name: "Lindsay Jorgensen", role: "Technical Artist" },
    { name: "Adam Madojemu", role: "Brand Manager" },
    { name: "Adiba Muzaffar", role: "Content Strategist" },
    { name: "Em Halberstadt", role: "Sound Designer" },
    { name: "Nicholas Zhang", role: "Audio Programmer" },
    { name: "Maris Tammik", role: "Audio Programmer" },
  ];

  return (
    <div className="w-full bg-zinc-950 min-h-screen text-gray-200">
      <div className="container mx-auto px-6 py-24 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-12 text-white">ABOUT US</h1>
        
        <section className="mb-20">
          <p className="text-xl leading-relaxed mb-6">
            The Museum of Other Realities (MOR) is an immersive multiplayer art showcase in VR. It is a space to connect, share, and experience virtual reality art with others. 
          </p>
          <p className="text-xl leading-relaxed mb-6">
             The virtual museum is an ongoing, regularly-updated experience. It contains a cross section of the free-ranging experimentation present in the relatively new medium of VR art, supporting artists who are challenging and redefining what is possible.
          </p>
          <p className="text-xl leading-relaxed">
            Together we can discover what this new space means to all of us.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-white border-b border-white/10 pb-4">The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {team.map((member) => (
              <div key={member.name} className="flex justify-between items-baseline border-b border-white/5 pb-2">
                <span className="text-lg font-bold text-white">{member.name}</span>
                <span className="text-purple-400 text-sm uppercase tracking-wider">{member.role}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
