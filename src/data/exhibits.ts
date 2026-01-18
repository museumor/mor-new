export interface Exhibit {
  id: string;
  title: string;
  artist: string;
  description: string;
  imageUrl: string; 
  color: string;
}

export const exhibits: Exhibit[] = [
  {
    id: "1",
    title: "Immersive Sculpture",
    artist: "Dani Bittman",
    description: "VR artist and filmmaker creating immersive designs for Marvel, Google, Hyundai, and more.",
    imageUrl: "/images/artists/dani-bittman.jpg",
    color: "bg-fuchsia-900",
  },
  {
    id: "2",
    title: "Animated Worlds",
    artist: "Nick Ladd",
    description: "Canadian VR artist creating illustrated 3D worlds and animations using Quill.",
    imageUrl: "/images/artists/nick-ladd.jpg",
    color: "bg-blue-900",
  },
  {
    id: "3",
    title: "Playful Designs",
    artist: "Ana Duncan",
    description: "Designer for animation in TV, film, and VR with a love of retro sci-fi and renaissance gowns.",
    imageUrl: "/images/artists/ana-duncan.jpg",
    color: "bg-purple-900",
  },
  {
    id: "4",
    title: "Interactive Stories",
    artist: "Sutu",
    description: "Uses art and technology to tell stories through interactive comics and VR documentaries.",
    imageUrl: "/images/artists/sutu.jpg",
    color: "bg-indigo-900",
  },
  {
    id: "5",
    title: "A Piece Of The Universe",
    artist: "Naam",
    description: "Self-taught VR artist and developer building personal dioramas made in VR, for VR.",
    imageUrl: "/images/artists/naam.jpg",
    color: "bg-violet-900",
  },
  {
    id: "6",
    title: "Character Art",
    artist: "Liz Edwards",
    description: "3D character artist known for work in Tilt Brush, Medium and Quill.",
    imageUrl: "/images/artists/liz-edwards.jpg",
    color: "bg-pink-900",
  },
  {
    id: "7",
    title: "Blortasia",
    artist: "Kevin Mack",
    description: "Academy Award winning visual effects pioneer creating abstract VR artworks.",
    imageUrl: "/images/artists/kevin-mack.jpg",
    color: "bg-cyan-900",
  },
  {
    id: "8",
    title: "Cosmic Experiences",
    artist: "Isaac Cohen",
    description: "VR artist exploring new paradigms of user experience for headset displays.",
    imageUrl: "/images/artists/isaac-cohen.jpg",
    color: "bg-teal-900",
  }
];
