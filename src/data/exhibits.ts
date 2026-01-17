export interface Exhibit {
  id: string;
  title: string;
  artist: string;
  description: string;
  imageUrl: string; // We'll use placeholders for now
  color: string; // Placeholder background color
}

export const exhibits: Exhibit[] = [
  {
    id: "1",
    title: "The Great C",
    artist: "Luke Van Osch",
    description: "A cinematic narrative set in a post-apocalyptic world.",
    imageUrl: "/placeholders/1.jpg", 
    color: "bg-blue-900",
  },
  {
    id: "2",
    title: "Apex",
    artist: "Arjan van Meerten",
    description: "An intense, surreal musical experience.",
    imageUrl: "/placeholders/2.jpg",
    color: "bg-purple-900",
  },
  {
    id: "3",
    title: "Museum of Symmetry",
    artist: "Paloma Dawkins",
    description: "An interactive VR animation.",
    imageUrl: "/placeholders/3.jpg",
    color: "bg-pink-800",
  },
  {
    id: "4",
    title: "Through the Masks",
    artist: "Multiple Artists",
    description: "A collaborative journey through identity.",
    imageUrl: "/placeholders/4.jpg",
    color: "bg-teal-900",
  },
  {
    id: "5",
    title: "Immersive Arcade",
    artist: "Curated Collection",
    description: "The best of British immersive storytelling.",
    imageUrl: "/placeholders/5.jpg",
    color: "bg-indigo-900",
  },
  {
    id: "6",
    title: "Fantastic Fungi",
    artist: "Visual Studio",
    description: "Explore the underground network of mushrooms.",
    imageUrl: "/placeholders/6.jpg",
    color: "bg-emerald-900",
  }
];
