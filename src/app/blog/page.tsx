const posts = [
  {
    title: "MOR x Tribeca Immersive 2022",
    date: "June 2022",
    snippet: "We're excited to host this year's Tribeca Immersive selections in the museum! Tribeca Immersive showcases cutting-edge virtual, augmented and mixed reality experiences.",
    link: "#"
  },
  {
    title: "Announcing The Canadian Collection",
    date: "December 17, 2021",
    snippet: "The Museum of Other Realities presents its first original collection of narrative experiences curated across the Canadian immersive ecosystem.",
    link: "#"
  },
  {
    title: "Spotlight: Andy Baker on Ascribing Personality to Randomness",
    date: "November 2020",
    snippet: "Andy Baker is an artist-developer who has 'always been drawn towards more creative ends of tech'. We worked with Andy on the mathematical piece Gossamer.",
    link: "#"
  },
  {
    title: "The Museum of Other Realities is Now Free to Visit",
    date: "Late 2020",
    snippet: "We're excited to announce that there's no longer a paywall to get into the MOR! Come explore the collection for free.",
    link: "#"
  },
  {
    title: "Your Guide To XR3 at the MOR",
    date: "June 2021",
    snippet: "XR3 is a joint exhibition project by Cannes XR, NewImages Festival (France), and Tribeca Festival (United States) presenting the best of immersive creation.",
    link: "#"
  }
];

export default function BlogPage() {
  return (
    <div className="w-full bg-zinc-950 min-h-screen text-gray-200">
      <div className="container mx-auto px-6 py-24 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-16 text-white text-center">BLOG</h1>
        
        <div className="space-y-12">
          {posts.map((post, index) => (
            <article key={index} className="border-b border-white/10 pb-12 last:border-0">
              <span className="text-sm font-bold text-purple-500 uppercase tracking-widest block mb-3">{post.date}</span>
              <h2 className="text-3xl font-bold text-white mb-4 hover:text-purple-400 cursor-pointer transition-colors">
                <a href={post.link}>{post.title}</a>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                {post.snippet}
              </p>
              <a href={post.link} className="text-sm font-bold text-white border-b border-white hover:text-purple-400 hover:border-purple-400 transition-colors pb-1">
                Read More
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
